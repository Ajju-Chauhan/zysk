import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => (
  <Container className="text-center my-5">
    <h1>Beautiful Analytics to Grow Smarter</h1>
    <p>Get insights that drive your business forward.</p>
    <Button variant="primary" size="lg">Start Trial</Button>
    <Button variant="link" className="ms-3">Learn More</Button>
  </Container>
);

export default HeroSection;
