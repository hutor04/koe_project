import React from 'react';
import { client } from './client';
import VenuesList from './components/VenuesList';
import Counter from './components/Counter';
import FileUplod from './components/FileUpload/FileUpload';

import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Hello🚀</h2>
      </div>
      <VenuesList />
      <Counter id={'5fb9620f10e1073aa7bee8c5'}/>
      <FileUplod />
    </ApolloProvider>
  );
}

export default App;
