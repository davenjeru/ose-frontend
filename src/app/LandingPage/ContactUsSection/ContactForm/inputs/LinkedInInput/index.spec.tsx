import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import linkedInSchema from './schema';
import LinkedInInput from '@/app/LandingPage/ContactUsSection/ContactForm/inputs/LinkedInInput';
import ContactFormTestHarness from '@/app/LandingPage/ContactUsSection/ContactForm/inputs/testHarness';

const onSubmitMock = vi.fn();

const renderInTestHarness = () => {
  render(
    <ContactFormTestHarness
      formSchema={
        z.object({
          linkedInProfile: linkedInSchema,
        }) as never
      }
      onSubmit={onSubmitMock}
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        (form) => <LinkedInInput form={form} />
      }
    </ContactFormTestHarness>
  );
};

describe('LinkedInInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', async () => {
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');

    expect(screen.getByText('Your LinkedIn')).toBeInTheDocument();
    expect(textbox).toHaveProperty('placeholder', 'Your LinkedIn');
  });

  it('should submit on a valid linkedIn', async () => {
    const linkedInProfile = 'https://www.linkedin.com/in/jane-doe';
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, linkedInProfile));
    await act(() => userEvent.click(button));

    expect(onSubmitMock).toHaveBeenCalledWith(
      { linkedInProfile },
      expect.any(Object)
    );
  });

  it('should not accept an invalid linkedInProfile', async () => {
    const linkedInProfile = 'invalid';
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, linkedInProfile));
    await act(() => userEvent.click(button));

    expect(
      screen.getByText('Enter a valid LinkedIn profile url')
    ).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should submit when linkedInProfile is not filled', async () => {
    renderInTestHarness();
    const button = screen.getByRole('button');
    await act(() => userEvent.click(button));
    expect(onSubmitMock).toHaveBeenCalledWith({}, expect.any(Object));

    const textbox = screen.getByRole('textbox');
    await act(() => userEvent.type(textbox, 'Jane Doe'));
    await act(() => userEvent.clear(textbox));
    await act(() => userEvent.click(button));
    expect(onSubmitMock).toHaveBeenCalledWith({}, expect.any(Object));
  });
});
