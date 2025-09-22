import {
  MockedProvider,
  type MockedProviderProps,
} from '@apollo/client/testing/react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import ContactForm from '@/app/LandingPage/ContactUsSection/ContactForm/index.tsx';
import { SEND_MESSAGE } from '@/app/LandingPage/ContactUsSection/ContactForm/mutation.ts';

const request = {
  query: SEND_MESSAGE,
  variables: {
    fullName: 'Jane Doe',
    email: 'email@example.com',
    message: 'Hello World!',
  },
};

const populateForm = async () => {
  await act(async () => {
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Your Full Name*' }),
      'Jane Doe'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Your Email*' }),
      'email@example.com'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Your Message*' }),
      'Hello World!'
    );
  });
};

const successMock: MockedProviderProps['mocks'] = [
  {
    request,
    result: {
      data: {
        createReceivedMessage: {
          __typename: 'createReceivedMessage',
          success: true,
        },
      },
    },
  },
];

const failureMock: MockedProviderProps['mocks'] = [
  {
    request,
    result: {
      data: {
        createReceivedMessage: {
          __typename: 'createReceivedMessage',
          success: false,
        },
      },
    },
  },
];

const renderInMockedProvider: (mocks: MockedProviderProps['mocks']) => void = (
  mocks
) => {
  render(
    <MockedProvider mocks={mocks}>
      <ContactForm />
    </MockedProvider>
  );
};

describe('ContactForm', () => {
  it('renders without crashing', () => {
    renderInMockedProvider(successMock);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(
      screen.getByText(
        'This is so that we can get in contact with you in case any opportunity comes up'
      )
    );
    expect(screen.getByText('Send')).toBeInTheDocument();
    expect(screen.queryAllByText('We have received your message')).toHaveLength(
      0
    );
    expect(screen.queryAllByText('Oops! Something went wrong')).toHaveLength(0);
  });

  it('should show success message when message is sent', async () => {
    renderInMockedProvider(successMock);
    await populateForm();

    await act(() => userEvent.click(screen.getByRole('button')));

    await waitFor(() => {
      expect(
        screen.getByText('We have received your message')
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "Thank you for reaching out. We'll look at your message and get back to you."
        )
      ).toBeInTheDocument();
    });

    expect(screen.queryAllByText('Oops! Something went wrong')).toHaveLength(0);
  });

  it('should show error message when an error occurs', async () => {
    renderInMockedProvider(failureMock);

    await populateForm();

    await act(() => userEvent.click(screen.getByRole('button')));

    await waitFor(() => {
      expect(
        screen.getByText('Oops! Something went wrong')
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          "We couldn't process your request at the moment. Please check your connection and try again later."
        )
      ).toBeInTheDocument();
    });

    expect(screen.queryAllByText('We have received your message')).toHaveLength(
      0
    );
  });
});
