import {
  MockedProvider,
  type MockedProviderProps,
} from '@apollo/client/testing/react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import NewsletterForm from '@/lib/components/Footer/NewsletterForm/index.tsx';
import { SUBSCRIBE_TO_NEWSLETTER } from '@/lib/components/Footer/NewsletterForm/mutation.ts';

const request = {
  query: SUBSCRIBE_TO_NEWSLETTER,
  variables: {
    email: 'email@example.com',
  },
};

const successMock: MockedProviderProps['mocks'] = [
  {
    request,
    result: {
      data: {
        createNewsletterSubscription: {
          __typename: 'createNewsletterSubscription',
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
        createNewsletterSubscription: {
          __typename: 'createNewsletterSubscription',
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
      <NewsletterForm />
    </MockedProvider>
  );
};

describe('NewsletterForm', () => {
  it('renders without crashing', () => {
    renderInMockedProvider(successMock);
    expect(screen.getByText('Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
    expect(
      screen.queryAllByText('Successfully subscribed to newsletter!')
    ).toHaveLength(0);
    expect(
      screen.queryAllByText('An error occurred, please try again.')
    ).toHaveLength(0);
  });

  it('should show success message when subscribed', async () => {
    renderInMockedProvider(successMock);
    await act(() =>
      userEvent.type(screen.getByRole('textbox'), 'email@example.com')
    );
    await act(() => userEvent.click(screen.getByRole('button')));

    await waitFor(() =>
      expect(
        screen.getByText('Successfully subscribed to newsletter!')
      ).toBeInTheDocument()
    );

    expect(
      screen.queryAllByText('An error occurred, please try again.')
    ).toHaveLength(0);
  });

  it('should show error message when an error occurs', async () => {
    renderInMockedProvider(failureMock);
    await act(() =>
      userEvent.type(screen.getByRole('textbox'), 'email@example.com')
    );
    await act(() => userEvent.click(screen.getByRole('button')));

    await waitFor(() =>
      expect(
        screen.getByText('An error occurred, please try again.')
      ).toBeInTheDocument()
    );

    expect(
      screen.queryAllByText('Successfully subscribed to newsletter!')
    ).toHaveLength(0);
  });
});
