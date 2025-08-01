import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTasks, FaUsers, FaChartLine, FaRocket, FaShieldAlt, FaClock } from 'react-icons/fa';

const FeaturesSection = () => (
  <section className="features-section py-5">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Why Choose TaskFlow?</h2>
          <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">Powerful features to boost your productivity</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6} className="mb-4">
          <Card className="feature-card h-100 border-0" data-aos="fade-up" data-aos-delay="100">
            <Card.Body className="text-center p-4">
              <div className="feature-icon">
                <FaTasks size={40} />
              </div>
              <Card.Title className="fw-bold mb-3">Smart Task Management</Card.Title>
              <Card.Text className="text-muted">
                Create, organize, and prioritize tasks with our intelligent system. Never miss a deadline again.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="feature-card h-100 border-0" data-aos="fade-up" data-aos-delay="200">
            <Card.Body className="text-center p-4">
              <div className="feature-icon">
                <FaUsers size={40} />
              </div>
              <Card.Title className="fw-bold mb-3">Team Collaboration</Card.Title>
              <Card.Text className="text-muted">
                Work together seamlessly with your team. Share tasks, track progress, and stay connected.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="feature-card h-100 border-0" data-aos="fade-up" data-aos-delay="300">
            <Card.Body className="text-center p-4">
              <div className="feature-icon">
                <FaChartLine size={40} />
              </div>
              <Card.Title className="fw-bold mb-3">Progress Analytics</Card.Title>
              <Card.Text className="text-muted">
                Track your productivity with detailed analytics and insights. See your improvement over time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="feature-card h-100 border-0" data-aos="fade-up" data-aos-delay="400">
            <Card.Body className="text-center p-4">
              <div className="feature-icon">
                <FaRocket size={40} />
              </div>
              <Card.Title className="fw-bold mb-3">Lightning Fast</Card.Title>
              <Card.Text className="text-muted">
                Built for speed and efficiency. Get things done faster with our optimized interface.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="feature-card h-100 border-0" data-aos="fade-up" data-aos-delay="500">
            <Card.Body className="text-center p-4">
              <div className="feature-icon">
                <FaShieldAlt size={40} />
              </div>
              <Card.Title className="fw-bold mb-3">Secure & Private</Card.Title>
              <Card.Text className="text-muted">
                Your data is protected with enterprise-grade security. Your privacy is our priority.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="feature-card h-100 border-0" data-aos="fade-up" data-aos-delay="600">
            <Card.Body className="text-center p-4">
              <div className="feature-icon">
                <FaClock size={40} />
              </div>
              <Card.Title className="fw-bold mb-3">Time Tracking</Card.Title>
              <Card.Text className="text-muted">
                Monitor how you spend your time and optimize your workflow for maximum efficiency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FeaturesSection; 