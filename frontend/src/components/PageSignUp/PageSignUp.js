import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { signup } from '../../client/api/queries/signup';
import {Link} from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const SignUp = () => {
    const emailEl = React.createRef();
    const passwordEl = React.createRef();
    const firstNameEl= React.createRef();
    const lastNameEl = React.createRef();
    const  [userTypeEl, setUserTypeEl] = useState("user");
    const confirmPasswordEl = React.createRef();
    const [ newError, setNewError] = useState('');
    
    const [signingUp, { loading, error, data}] = useMutation(signup)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) {
      console.log(data);
    };

    const dropDownHandler = e => {
        setUserTypeEl(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        if( passwordEl.current.value !== confirmPasswordEl.current.value) {
            return setNewError('Passwords do not match')
        }
        signingUp({ variables: { 
            email: emailEl.current.value,
            password: passwordEl.current.value,
            firstName: firstNameEl.current.value,
            lastName: lastNameEl.current.value,
            userType: userTypeEl.toLowerCase()
        }}).catch(err => console.log('top error', err));
    };
    return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px"}}>
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {newError && <Alert variant="danger">{newError}</Alert>}
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
                        <Button className="w-100 mt-2" type="submit">Sign Up</Button>
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
