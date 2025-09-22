import { gql } from '@apollo/client';

export const SUBSCRIBE_TO_NEWSLETTER = gql`
  mutation CreateNewsletterSubscription($email: String!) {
    createNewsletterSubscription(input: { email: $email }) {
      success
    }
  }
`;
