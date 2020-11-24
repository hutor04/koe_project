import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../client';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import VenueCardDeck from '../VenueCardDeck/VenueCardDeck';
import './app.scss';
import Footer from '../Footer/Footer';

function App() {
  return (
    <ApolloProvider client={client}>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <NavBar />
        <VenueCardDeck />
        <Footer />
      </Container>
    </ApolloProvider>
  );
}

export default App;
