import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import mainLogo from "../../imgs/logo_koe.png";

function Footer(){
  return (
    <Navbar bg="dark" variant="dark" className={'justify-content-center mt-2'}>
      <Nav>
        <Nav.Link href="#repo">CyberDucks</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer;
