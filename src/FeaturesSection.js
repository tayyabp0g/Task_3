import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTasks, FaUsers, FaChartLine } from 'react-icons/fa';

const FeaturesSection = () => (
  <section className="features-section py-5 bg-light">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Why Choose TaskFlow?</h2>
          <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">Powerful features to boost your productivity</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <Card.Body className="text-center p-4">
              <div className="feature-icon mb-3">
                <FaTasks size={50} className="text-primary" />
              </div>
              <Card.Title className="fw-bold mb-3">Smart Task Management</Card.Title>
              <Card.Text className="text-muted">
                Create, organize, and prioritize tasks with our intelligent system. Never miss a deadline again.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="200">
            <Card.Body className="text-center p-4">
              <div className="feature-icon mb-3">
                <FaUsers size={50} className="text-primary" />
              </div>
              <Card.Title className="fw-bold mb-3">Team Collaboration</Card.Title>
              <Card.Text className="text-muted">
                Work together seamlessly with your team. Share tasks, track progress, and stay connected.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm" data-aos="fade-up" data-aos-delay="300">
            <Card.Body className="text-center p-4">
              <div className="feature-icon mb-3">
                <FaChartLine size={50} className="text-primary" />
              </div>
              <Card.Title className="fw-bold mb-3">Progress Analytics</Card.Title>
              <Card.Text className="text-muted">
                Track your productivity with detailed analytics and insights. See your improvement over time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FeaturesSection; 