import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import emailSchema from './schema';
import EmailInput from '@/app/LandingPage/ContactUsSection/ContactForm/EmailInput';
import ContactFormTestHarness from '@/app/LandingPage/ContactUsSection/ContactForm/testHarness';

const onSubmitMock = vi.fn();

const renderInTestHarness = () =>
  render(
    <ContactFormTestHarness
      formSchema={
        z.object({
          email: emailSchema,
        }) as never
      }
      onSubmit={onSubmitMock}
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        (form) => <EmailInput form={form} />
      }
    </ContactFormTestHarness>
  );

describe('EmailInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', async () => {
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');

    expect(screen.getByText('Your Email*')).toBeInTheDocument();
    expect(textbox).toHaveProperty('placeholder', 'Your Email');
  });

  it('should submit on a valid email', async () => {
    const email = 'example@company.com';
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, email));
    await act(() => userEvent.click(button));

    expect(onSubmitMock).toHaveBeenCalledWith({ email }, expect.any(Object));
  });

  it('should not accept an invalid email', async () => {
    const email = 'invalid';
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, email));
    await act(() => userEvent.click(button));

    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should not submit when email is not filled', async () => {
    renderInTestHarness();
    const button = screen.getByRole('button');
    await act(() => userEvent.click(button));
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();

    const textbox = screen.getByRole('textbox');
    await act(() => userEvent.type(textbox, 'invalid'));
    await act(() => userEvent.clear(textbox));
    await act(() => userEvent.click(button));
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
