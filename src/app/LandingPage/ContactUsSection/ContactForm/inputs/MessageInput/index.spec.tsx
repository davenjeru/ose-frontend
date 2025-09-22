import { act, render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import messageSchema from './schema';
import MessageInput from '@/app/LandingPage/ContactUsSection/ContactForm/inputs/MessageInput';
import ContactFormTestHarness from '@/app/LandingPage/ContactUsSection/ContactForm/inputs/testHarness';

const onSubmitMock = vi.fn();

const renderInTestHarness = () => {
  render(
    <ContactFormTestHarness
      formSchema={
        z.object({
          message: messageSchema,
        }) as never
      }
      onSubmit={onSubmitMock}
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-expect-error
        (form) => <MessageInput form={form} />
      }
    </ContactFormTestHarness>
  );
};

describe('MessageInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', async () => {
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');

    expect(screen.getByText('Your Message*')).toBeInTheDocument();
    expect(textbox).toHaveProperty('placeholder', 'Enter your message...');
  });

  it('should submit on a valid message', async () => {
    const message = 'https://www.linkedin.com/in/jane-doe';
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, message));
    await act(() => userEvent.click(button));

    expect(onSubmitMock).toHaveBeenCalledWith({ message }, expect.any(Object));
  });

  it('should not accept an invalid message', async () => {
    const message = Array.from({ length: 1002 }).join('.');
    renderInTestHarness();

    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    await act(() => userEvent.type(textbox, message));
    await act(() => userEvent.click(button));

    expect(
      screen.getByText('Message should contain fewer than 1000 characters')
    ).toBeInTheDocument();
    expect(onSubmitMock).not.toHaveBeenCalled();
  });

  it('should not submit when message is not filled', async () => {
    renderInTestHarness();
    const button = screen.getByRole('button');
    await act(() => userEvent.click(button));
    expect(onSubmitMock).not.toHaveBeenCalled();

    const textbox = screen.getByRole('textbox');
    await act(() => userEvent.type(textbox, 'My message'));
    await act(() => userEvent.clear(textbox));
    await act(() => userEvent.click(button));
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
