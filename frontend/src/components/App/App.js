import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from '../../client';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import PageHome from '../pages/Home/PageHome';
import PageAbout from '../pages/About/PageAbout';
import PageLogin from '../pages/Login/PageLogin';
import './app.scss';
import Footer from '../Footer/Footer';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <NavBar />
          <Switch>
            <Route path="/about">
              <PageAbout />
            </Route>
            <Route path="/login">
              <PageLogin />
            </Route>
            <Route path="/">
              <PageHome />
            </Route>
          </Switch>

          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
