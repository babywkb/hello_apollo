import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

export const subscription = gql`
  subscription MessageSent {
    messageSent {
      id
      message
      author
    }
  }
`;

export default () => useSubscription(subscription);
