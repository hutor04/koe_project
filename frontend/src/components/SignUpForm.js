import React from 'react'
import { useMutation } from '@apollo/client';
import { signup } from '../client/queries/signup';
import {Link} from 'react-router-dom';
import { Card, Form, Dropdown, Button } from 'react-bootstrap';
const SignUp = () => {
const emailEl = React.createRef();
const passwordEl = React.createRef();
const firstNameEl= React.createRef();
const lastNameEl = React.createRef();
const userTypeEl = React.createRef();
const confirmPasswordEl = React.createRef();

const [signingUp, { loading, error, data }] = useMutation(signup)
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
if (data) {
    console.log(data);
    // localStorage.setItem('tokenToLocalStorage', {
    //     token: data.login.token,
    //     tokenExpiration: data.login.tokenExpiration
    //     });

}

    const submitHandler = e => {
        e.preventDefault();
        console.log('userTypeEl', userTypeEl.current.value)
        const dets = {
            firstName: firstNameEl.current.value,
            lastName: lastNameEl.current.value,
            email: emailEl.current.value,
            password: passwordEl.current.value,
            userType: userTypeEl.current.value.toLowerCase()
        }
        signingUp({ variables: { 
            email: dets.email,
            password:dets.password,
            firstName:dets.firstName,
            lastName: dets.lastName,
            userType: dets.userType
        }}).catch(err => console.log(err));;
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
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
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Account Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item key="User" Value="User">User</Dropdown.Item>
                            <Dropdown.Item key="Business" Value="Business">Business</Dropdown.Item>
                            <Dropdown.Item key="Admin" Value="Admin">Admin</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        <div className="w-100 text-center mt-2">
            Already registered? <Link to="/login"><a>Sign in</a></Link>
        </div>
        </>
    )
}

export default SignUp
