import React, {useState, useMemo} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from '../../client';
import { Container } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import PageHome from '../PageHome/PageHome';
import PageAbout from '../PageAbout/PageAbout';
import PageLogin from '../PageLogin/PageLogin';
import PageSignUp from '../PageSignUp/PageSignUp';
import PageProfile from '../PageProfile/PageProfile';
import './app.scss';
import Footer from '../Footer/Footer';
import { UserContext } from '../../context/UserContext';

function App() {
  const [user, setUser] = useState(localStorage.getItem('token') || null);
const value = useMemo(()=>({user, setUser}), [user, setUser]);
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={value}>
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
              <PageSignUp />
            </Route>
            <Route path="/">
              <PageHome />
            </Route>
            <Route path="/profile">
              <PageProfile />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Router>
      </UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
