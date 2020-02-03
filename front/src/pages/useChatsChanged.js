import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

export const subscription = gql`
  subscription ChatsChanged {
    chatsChanged {
      channel
    }
  }
`;

export default () => useSubscription(subscription);
