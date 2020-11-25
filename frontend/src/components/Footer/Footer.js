import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Footer(){
  return (
    <Navbar bg="dark" variant="dark" className={'justify-content-center mt-2'}>
      <Nav>
        <Nav.Link href="https://github.com/hutor04/koe_project">
          CyberDucks <i className="fab fa-github-square"></i>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer;
