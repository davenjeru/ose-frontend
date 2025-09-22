import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation CreateReceivedMessage(
    $email: String!
    $fullName: String!
    $linkedInProfile: String
    $message: String!
  ) {
    createReceivedMessage(
      input: {
        email: $email
        fullName: $fullName
        linkedInProfile: $linkedInProfile
        message: $message
      }
    ) {
      success
    }
  }
`;
