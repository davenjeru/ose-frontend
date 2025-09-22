import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import emailSchema from './schema';
import EmailInput from '@/lib/components/Footer/NewsletterForm/inputs/EmailInput';
import NewsletterFormTestHarness from '@/lib/components/Footer/NewsletterForm/inputs/testHarness.tsx';

const onSubmitMock = vi.fn();

const renderInTestHarness = () =>
  render(
    <NewsletterFormTestHarness
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
    </NewsletterFormTestHarness>
  );

describe('EmailInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', async () => {
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');

    expect(screen.getByText('Newsletter')).toBeInTheDocument();
    expect(textbox).toHaveProperty('placeholder', 'Enter Your Email');
  });

  it('should submit on a valid email', async () => {
    renderInTestHarness();
    const email = 'newsletter@company.com';

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, email));
    await act(() => userEvent.click(button));

    expect(onSubmitMock).toHaveBeenCalledWith({ email }, expect.any(Object));
  });

  it('should not accept an invalid newsletter email', async () => {
    renderInTestHarness();
    const email = 'newsletter invalid';

    const button = screen.getByRole('button');
    const textbox = screen.getByRole('textbox');

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
    await act(() => userEvent.type(textbox, 'newsletter invalid'));
    await act(() => userEvent.clear(textbox));
    await act(() => userEvent.click(button));
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
