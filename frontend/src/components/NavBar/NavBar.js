import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import mainLogo from "../../imgs/logo_koe.png";

function NavBar(){
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={mainLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Kø
      </Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
