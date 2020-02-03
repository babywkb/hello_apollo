import React from 'react';
import apolloClient from './apolloSetup';
import { ApolloProvider } from '@apollo/react-hooks';

import Chats from './pages/Chats';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <React.Fragment>
      <Chats />
    </React.Fragment>
  </ApolloProvider>
);

export default App;
