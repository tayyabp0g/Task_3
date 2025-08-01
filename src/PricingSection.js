import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const PricingSection = () => (
  <section className="pricing-section py-5">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="display-5 fw-bold mb-3 text-white" data-aos="fade-up">Choose Your Plan</h2>
          <p className="lead text-white-50" data-aos="fade-up" data-aos-delay="200">Start free, upgrade when you need more</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={4} md={6} className="mb-4">
          <Card className="pricing-card h-100 border-0" data-aos="fade-up" data-aos-delay="100">
            <Card.Body className="text-center p-4">
              <h5 className="fw-bold mb-3">Free</h5>
              <div className="mb-4">
                <span className="display-4 fw-bold text-primary">$0</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Up to 50 tasks
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Basic analytics
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Email support
                </li>
                <li className="mb-3 d-flex align-items-center text-muted">
                  <span className="me-2">✗</span>
                  Team collaboration
                </li>
                <li className="mb-3 d-flex align-items-center text-muted">
                  <span className="me-2">✗</span>
                  Advanced features
                </li>
              </ul>
              <Button variant="outline-primary" className="btn-outline-modern w-100">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="pricing-card featured h-100 border-0" data-aos="fade-up" data-aos-delay="200">
            <Card.Body className="text-center p-4">
              <Badge bg="primary" className="mb-3 px-3 py-2">Most Popular</Badge>
              <h5 className="fw-bold mb-3">Pro</h5>
              <div className="mb-4">
                <span className="display-4 fw-bold text-primary">$9</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Unlimited tasks
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Advanced analytics
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Priority support
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Team collaboration
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Custom integrations
                </li>
              </ul>
              <Button variant="primary" className="btn-modern w-100">Start Free Trial</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="pricing-card h-100 border-0" data-aos="fade-up" data-aos-delay="300">
            <Card.Body className="text-center p-4">
              <h5 className="fw-bold mb-3">Team</h5>
              <div className="mb-4">
                <span className="display-4 fw-bold text-primary">$29</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Everything in Pro
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Up to 10 team members
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Admin dashboard
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  Advanced reporting
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="text-success me-2">✓</span>
                  API access
                </li>
              </ul>
              <Button variant="outline-primary" className="btn-outline-modern w-100">Contact Sales</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default PricingSection; 