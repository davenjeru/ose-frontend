import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import fullNameSchema from './schema';
import FullNameInput from '@/app/LandingPage/ContactUsSection/ContactForm/FullNameInput/index.tsx';
import ContactFormTestHarness from '@/app/LandingPage/ContactUsSection/ContactForm/testHarness';

const onSubmitMock = vi.fn();

const renderInTestHarness = () => {
  render(
    <ContactFormTestHarness
      formSchema={
        z.object({
          fullName: fullNameSchema,
        }) as never
      }
      onSubmit={onSubmitMock}
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        (form) => <FullNameInput form={form} />
      }
    </ContactFormTestHarness>
  );
};

describe('FullNameInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', async () => {
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');

    expect(screen.getByText('Your Full Name*')).toBeInTheDocument();
    expect(textbox).toHaveProperty('placeholder', 'Your Full Name');
  });

  it('should submit on a valid fullName', async () => {
    const fullName = 'Jane Doe';
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, fullName));
    await act(() => userEvent.click(button));

    expect(onSubmitMock).toHaveBeenCalledWith({ fullName }, expect.any(Object));
  });

  it('should not accept an invalid fullName', async () => {
    const fullName = Array.from({ length: 102 }).join('.');
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, fullName));
    await act(() => userEvent.click(button));

    expect(
      screen.getByText('Full Name should be fewer than 100 characters')
    ).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should not submit when fullName is not filled', async () => {
    renderInTestHarness();
    const button = screen.getByRole('button');
    await act(() => userEvent.click(button));
    expect(screen.getByText('Full Name is required')).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();

    const textbox = screen.getByRole('textbox');
    await act(() => userEvent.type(textbox, 'Jane Doe'));
    await act(() => userEvent.clear(textbox));
    await act(() => userEvent.click(button));
    expect(screen.getByText('Full Name is required')).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
