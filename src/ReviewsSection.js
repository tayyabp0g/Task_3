import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const ReviewsSection = () => (
  <section className="reviews-section py-5">
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">What Our Users Say</h2>
          <p className="lead text-muted" data-aos="fade-up" data-aos-delay="200">Join thousands of satisfied users</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6} className="mb-4">
          <Card className="review-card h-100 border-0" data-aos="fade-up" data-aos-delay="100">
            <Card.Body className="p-4">
              <div className="d-flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning me-1" />
                ))}
              </div>
              <Card.Text className="mb-4">
                "TaskFlow has completely transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed."
              </Card.Text>
              <div className="d-flex align-items-center">
                <div className="reviewer-avatar bg-primary me-3">
                  <span className="fw-bold">S</span>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Sarah Johnson</h6>
                  <small className="text-muted">Product Manager</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="review-card h-100 border-0" data-aos="fade-up" data-aos-delay="200">
            <Card.Body className="p-4">
              <div className="d-flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning me-1" />
                ))}
              </div>
              <Card.Text className="mb-4">
                "The team collaboration features are amazing. We've increased our productivity by 40% since switching to TaskFlow."
              </Card.Text>
              <div className="d-flex align-items-center">
                <div className="reviewer-avatar bg-success me-3">
                  <span className="fw-bold">M</span>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Mike Chen</h6>
                  <small className="text-muted">Team Lead</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="review-card h-100 border-0" data-aos="fade-up" data-aos-delay="300">
            <Card.Body className="p-4">
              <div className="d-flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning me-1" />
                ))}
              </div>
              <Card.Text className="mb-4">
                "The analytics feature helps me understand my work patterns better. Highly recommended for anyone serious about productivity."
              </Card.Text>
              <div className="d-flex align-items-center">
                <div className="reviewer-avatar bg-info me-3">
                  <span className="fw-bold">A</span>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Alex Rodriguez</h6>
                  <small className="text-muted">Freelancer</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="review-card h-100 border-0" data-aos="fade-up" data-aos-delay="400">
            <Card.Body className="p-4">
              <div className="d-flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning me-1" />
                ))}
              </div>
              <Card.Text className="mb-4">
                "Finally, a task management tool that actually works! The mobile app is fantastic and syncs perfectly with the desktop version."
              </Card.Text>
              <div className="d-flex align-items-center">
                <div className="reviewer-avatar bg-warning me-3">
                  <span className="fw-bold">E</span>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Emma Davis</h6>
                  <small className="text-muted">Marketing Director</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="review-card h-100 border-0" data-aos="fade-up" data-aos-delay="500">
            <Card.Body className="p-4">
              <div className="d-flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning me-1" />
                ))}
              </div>
              <Card.Text className="mb-4">
                "The time tracking feature is a game-changer. I can now see exactly where my time goes and optimize accordingly."
              </Card.Text>
              <div className="d-flex align-items-center">
                <div className="reviewer-avatar bg-danger me-3">
                  <span className="fw-bold">D</span>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">David Kim</h6>
                  <small className="text-muted">Software Engineer</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card className="review-card h-100 border-0" data-aos="fade-up" data-aos-delay="600">
            <Card.Body className="p-4">
              <div className="d-flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-warning me-1" />
                ))}
              </div>
              <Card.Text className="mb-4">
                "Customer support is outstanding. They helped us migrate from our old system seamlessly. Highly recommend!"
              </Card.Text>
              <div className="d-flex align-items-center">
                <div className="reviewer-avatar bg-secondary me-3">
                  <span className="fw-bold">L</span>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Lisa Wang</h6>
                  <small className="text-muted">Operations Manager</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default ReviewsSection; 