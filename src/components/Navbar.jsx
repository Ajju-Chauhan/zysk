import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Limitless UI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#faq">FAQs</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
