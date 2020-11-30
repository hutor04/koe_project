import React, {useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { client } from '../../client';
import { Container, Spinner } from 'react-bootstrap';
import { restoreSession } from '../pages/Login/userStatusSlice';
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
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(restoreSession());
  }, [])
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <NavBar />
          <Suspense fallback={<Spinner animation="border" />}>
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
