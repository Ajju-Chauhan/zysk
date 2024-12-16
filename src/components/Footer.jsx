import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Container fluid className="bg-dark text-white p-5">
    <Row>
      <Col>© 2024 Limitless UI</Col>
      <Col className="text-end">
        <a href="#privacy" className="text-white">Privacy</a> | 
        <a href="#terms" className="text-white">Terms</a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
