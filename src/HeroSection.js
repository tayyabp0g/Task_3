import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => (
  <section className="hero-section text-center py-5">
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="hero-content" data-aos="fade-up">
            <h1 className="display-1 fw-bolder mb-4">
              TaskFlow
            </h1>
            <p className="lead mb-4">
              Organize your life, one task at a time. The ultimate productivity tool that helps you stay focused and achieve more.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Button variant="primary" size="lg" className="btn-modern px-4 py-3">
                Get Started Free
              </Button>
              <Button variant="outline-light" size="lg" className="btn-outline-modern px-4 py-3">
                Watch Demo
              </Button>
            </div>
            <div className="mt-5 animate-float">
              <div className="glass-card d-inline-block p-3">
                <small className="text-white-50">Trusted by 10,000+ users worldwide</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection; 