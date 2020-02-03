import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const query = gql`
  query Chats {
    chats {
      id
      message
      author
    }
  }
`;

export default () => useQuery(query);
