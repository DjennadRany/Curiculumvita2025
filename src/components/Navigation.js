import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="/cv-manager">Chef de Projet</Nav.Link>
          <Nav.Link href="/cv-developer">Développeur Fullstack</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;