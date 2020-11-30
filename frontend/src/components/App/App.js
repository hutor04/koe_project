import React, {Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from '../../client';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './app.scss';

const PageAbout = lazy(() => import('../pages/About/PageAbout'));
const PageSignup = lazy(() => import('../pages/PageSignup/PageSignup'));
const PageProfile = lazy(() => import('../pages/Profile/PageProfile'));
const PageLogin = lazy(() => import('../pages/Login/PageLogin'));
const PageAddVenue = lazy(() => import('../pages/CreateVenue/PageAddVenue'));
const PageHome = lazy(() => import('../pages/Home/PageHome'));

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
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
              <Route path="/">
                <PageHome />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
