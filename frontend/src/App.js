import React from 'react';
import client from './client';
import VenuesList from './components/VenuesList';

import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello🚀</h2>
      </div>
      <VenuesList />
    </ApolloProvider>
  );
}

export default App;
