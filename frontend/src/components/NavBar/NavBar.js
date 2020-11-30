import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import mainLogo from '../../imgs/logo_koe.png';
import { selectLoggedIn, logOutUser } from '../pages/Login/userStatusSlice';

function NavBar(){
  const userLoggedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  let userLinks;

  if (userLoggedIn) {
    userLinks = (
      <>
      <Nav.Link as={Link} to='/profile'><i className="far fa-user-circle"></i></Nav.Link>
      <Nav.Link href={'#'} onClick={() => {
        dispatch(logOutUser());
        history.push('/')
      }}>Logout</Nav.Link>
      </>
    );
  } else {
    userLinks = <Nav.Link as={Link} to='/login'>Login</Nav.Link>;
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to='/'>
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
        { userLinks }
      </Nav>
    </Navbar>
  );
}

export default NavBar;
