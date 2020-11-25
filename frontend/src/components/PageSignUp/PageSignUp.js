import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { signup } from '../../client/api/queries/signup';
import { login } from '../../client/api/queries/login';
import {Link, useHistory} from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
const SignUp = () => {
    const dispatch = useDispatch();

    const emailEl = React.createRef();
    const passwordEl = React.createRef();
    const firstNameEl= React.createRef();
    const lastNameEl = React.createRef();
    const  [userTypeEl, setUserTypeEl] = useState("user");
    const confirmPasswordEl = React.createRef();
    const [ newError, setNewError] = useState('');
    const history = useHistory();
    
    const [signingUp, { loading, error}] = useMutation(signup)
    const [loggingIn] = useMutation(login);

    const dropDownHandler = e => {
        setUserTypeEl(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setShow(true);
        if( passwordEl.current.value !== confirmPasswordEl.current.value) {
            return setNewError('Passwords do not match')
        }
        let temp = {
            email: emailEl.current.value,
            password:passwordEl.current.value
        }
        signingUp({ variables: { 
            email: emailEl.current.value,
            password: passwordEl.current.value,
            firstName: firstNameEl.current.value,
            lastName: lastNameEl.current.value,
            userType: userTypeEl.toLowerCase()
        }})
        .then(()=> { 
            loggingIn({ variables: { email: temp.email, password: temp.password}})
            .then(data => {
                const userData = data;
                localStorage.setItem('user', userData.data.login.user)
                localStorage.setItem('token', userData.data.login.token);
                localStorage.setItem('tokenExpiration', userData.data.login.tokenExpiration)
            })
            .then(()=> temp= {})
            .then(()=> {history.push("/home")})
            .then(()=> {dispatch({type:"LOGIN_SUCCESS", payload: localStorage.getItem('user')})})
            .catch(err => console.log(err));

        }).catch(err => console.log('top error', err));
    };
    const [show, setShow] = useState(true);
    return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px"}}>
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error ? 
                    <Alert variant="danger" show={show}>{error.message}
                    <Button onClick={() => setShow(false)} variant="outline-danger">
                        x
                        </Button>
                    </Alert>: ''}
                    {newError && <Alert variant="danger" dismissible>{newError}</Alert>}
                    <Form onSubmit={submitHandler}>
                        <Form.Group id="first-name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" ref={firstNameEl} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="last-name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" ref={lastNameEl} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailEl} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordEl} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="passwordConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordEl} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control variant= "success" as="select" id="dropdown-basic" onChange={dropDownHandler}>
                                <option eventKey="User" value="User">User</option>
                                <option eventKey="Business" value="Business">Business</option>
                                <option eventKey="Admin" value="Admin">Admin</option>
                        </Form.Control>
                        </Form.Group>
                        <Button className="w-100 mt-2" type="submit">{loading ? 'Loading…' : 'Sign Up'}</Button>
                    </Form>
                </Card.Body>
            </Card>
        <div className="w-100 text-center mt-2">
            Already registered? <Link to="/login">Sign in</Link>
        </div>
        </>
    </div>
  </Container>
    )
}

export default SignUp
