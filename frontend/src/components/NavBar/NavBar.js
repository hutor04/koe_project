import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import mainLogo from "../../imgs/logo_koe.png";
import { useSelector, useDispatch } from 'react-redux';

function NavBar() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const history = useHistory();
  const navHandler = e => {
    e.preventDefault();
    localStorage.clear();
    dispatch({type:"LOGOUT", payload: localStorage.getItem('user')});
    history.push("/login")
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={mainLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Kø
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      
      {!user ? <Nav.Link href="/login">Log In</Nav.Link>  : ""}
      {!user ? <Nav.Link href="/signup">Sign Up</Nav.Link> : ""}
      <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Edit Input</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Create New Input</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">View Your Inputs</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
      <Nav>
      {user ? <Nav.Link onClick={navHandler} >Logout</Nav.Link>: ""}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
