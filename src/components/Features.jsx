import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => (
  <Container className="my-5">
    <Row>
      <Col md={4} className="text-center">
        <h3>Feature 1</h3>
        <p>Details about feature 1</p>
      </Col>
      <Col md={4} className="text-center">
        <h3>Feature 2</h3>
        <p>Details about feature 2</p>
      </Col>
      <Col md={4} className="text-center">
        <h3>Feature 3</h3>
        <p>Details about feature 3</p>
      </Col>
    </Row>
  </Container>
);

export default Features;
