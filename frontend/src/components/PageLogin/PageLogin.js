import React, {useContext} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useMutation } from '@apollo/client';
import { login } from '../../client/api/queries/login';
import {Link, useHistory } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import {UserContext} from '../../context/UserContext'

const PageLogin = () => {
    const { user, setUser } = useContext(UserContext);

    if (user) {
        localStorage.clear();
        setUser(localStorage.getItem('token'));
    }

    const history = useHistory();
    const emailEl = React.createRef();
    const passwordEl = React.createRef();
    const [loggingIn, { loading, error, data }] = useMutation(login);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {console.log(error)}</p>;

    const SubmitHandler = e => {
        e.preventDefault();
        const email = emailEl.current.value;
        const password = passwordEl.current.value;
        if (email.trim().length === 0 ||password.trim().length === 0 ) {
            return;
        }
    loggingIn({ variables: { email: email, password: password}})
    .then(data => {
        const userData = data;
        localStorage.setItem('user', userData.data.login.user)
        localStorage.setItem('token', userData.data.login.token);
        localStorage.setItem('tokenExpiration', userData.data.login.tokenExpiration)
    })
    .then(setUser(localStorage.getItem('token')))
    .then(history.push("/home"))
    .catch(err => console.log(err));
    
    }
    return (
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh"}}>
          <div className="w-100" style={{ maxWidth: "400px"}}>
        <>
            <Card>
                <Card.Body>
                {user ? <Alert variant="primary">You have been logged out.</Alert>: ''}
                <h2 className="text-center mb-4">Log In</h2>
                    <Form onSubmit={SubmitHandler}>
                        <Form.Group id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" ref={emailEl} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordEl} required></Form.Control>
                        </Form.Group>
                <Button type="submit" className="w-100 mt-2">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>                
            <div className="w-100 text-center mt-2">
                    <Link to="#">Forgot password?</Link>
            </div>
            <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up Here</Link>
            </div>
        </>
        </div>
  </Container>
    )
}

export default PageLogin;
