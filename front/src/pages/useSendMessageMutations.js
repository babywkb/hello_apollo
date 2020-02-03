import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const mutation = gql`
  mutation SendMessage($input: SendMessageInput) {
    sendMessage(input: $input) {
      message
      author
    }
  }
`;

export default () => {
  let [sendMessage] = useMutation(mutation);
  return ({ message, author }) => {
    sendMessage({
      variables: { input: { message, author } },
      optimisticResponse: {
        sendMessage: {
          __typename: 'Chat',
          message,
          author,
        },
      },
    });
  };
};
