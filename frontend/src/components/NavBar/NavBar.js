import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import mainLogo from '../../imgs/logo_koe.png';
import { selectLoggedIn, logOutUser } from '../pages/Login/useStatusSlice';

function NavBar(){
  const userLoggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch()
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
      <Nav className="mr-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/about'>About</Nav.Link>
      </Nav>
      <Nav>
        { userLoggedIn
          ? <Nav.Link href={'#'} onClick={() => {dispatch(logOutUser())}}>Logout</Nav.Link>
          : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        }
      </Nav>
    </Navbar>
  );
}

export default NavBar;
