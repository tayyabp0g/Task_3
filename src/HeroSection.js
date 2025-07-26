import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => (
  <section className="hero-section text-center py-5">
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div data-aos="fade-up">
            <h1
              className="display-1 fw-bolder mb-4 text-primary"
              style={{ fontWeight: 900, fontSize: '5rem', letterSpacing: '1px' }}
            >
              TaskFlow
            </h1>
            <p className="lead mb-4">
              Organize your life, one task at a time. The ultimate productivity tool that helps you stay focused and achieve more.
            </p>
            <Button variant="primary" size="lg" className="px-4 py-2">
              Get Started Free
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection; 