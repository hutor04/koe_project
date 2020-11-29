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
import PageSignup from '../pages/PageSignup/PageSignup';
import PageLogin from '../pages/Login/PageLogin';
import PageProfile from '../pages/Profile/PageProfile';
import PageAddVenue from '../pages/CreateVenue/PageAddVenue';

import './app.scss';
import Footer from '../Footer/Footer';
import OpeningHours from '../VenueUpdates/OpeningHours';
import EditVenue from '../VenueUpdates/EditVenue';

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
            <Route path="/signup">
              <PageSignup />
            </Route>
            <Route path="/profile">
              <PageProfile />
            </Route>
            <Route path="/add-venue">
              <PageAddVenue />
            </Route>
            <Route path="/openingHours">
              <OpeningHours />
            </Route>
            <Route path="/editVenue">
              <EditVenue />
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
