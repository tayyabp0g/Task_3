import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const PricingSection = () => (
  <section className="pricing-section py-5 bg-light">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Choose Your Plan</h2>
          <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">Start free, upgrade when you need more</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <Card.Body className="text-center p-4">
              <h5 className="fw-bold mb-3">Free</h5>
              <div className="mb-4">
                <span className="display-4 fw-bold text-primary">$0</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Up to 50 tasks</li>
                <li className="mb-2">✓ Basic analytics</li>
                <li className="mb-2">✓ Email support</li>
                <li className="mb-2 text-muted">✗ Team collaboration</li>
                <li className="mb-2 text-muted">✗ Advanced features</li>
              </ul>
              <Button variant="outline-primary" className="w-100">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card className="h-100 border-0 shadow border-primary" data-aos="fade-up" data-aos-delay="200">
            <Card.Body className="text-center p-4">
              <Badge bg="primary" className="mb-3">Most Popular</Badge>
              <h5 className="fw-bold mb-3">Pro</h5>
              <div className="mb-4">
                <span className="display-4 fw-bold text-primary">$9</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Unlimited tasks</li>
                <li className="mb-2">✓ Advanced analytics</li>
                <li className="mb-2">✓ Priority support</li>
                <li className="mb-2">✓ Team collaboration</li>
                <li className="mb-2">✓ Custom integrations</li>
              </ul>
              <Button variant="primary" className="w-100">Start Free Trial</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="300">
            <Card.Body className="text-center p-4">
              <h5 className="fw-bold mb-3">Team</h5>
              <div className="mb-4">
                <span className="display-4 fw-bold text-primary">$29</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Everything in Pro</li>
                <li className="mb-2">✓ Up to 10 team members</li>
                <li className="mb-2">✓ Admin dashboard</li>
                <li className="mb-2">✓ Advanced reporting</li>
                <li className="mb-2">✓ API access</li>
              </ul>
              <Button variant="outline-primary" className="w-100">Contact Sales</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default PricingSection; 