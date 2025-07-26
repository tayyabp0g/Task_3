import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => (
  <footer className="footer-section py-5 bg-dark text-white">
    <Container>
      <Row>
        <Col lg={4} className="mb-4">
          <h5 className="fw-bold mb-3">TaskFlow</h5>
          <p className="text-muted">
            The ultimate productivity tool that helps you organize tasks, collaborate with teams, and achieve your goals.
          </p>
          <div className="d-flex">
            <a href="#" className="text-white me-3"><FaTwitter size={20} /></a>
            <a href="#" className="text-white me-3"><FaFacebook size={20} /></a>
            <a href="#" className="text-white me-3"><FaInstagram size={20} /></a>
            <a href="#" className="text-white"><FaLinkedin size={20} /></a>
          </div>
        </Col>
        <Col lg={2} className="mb-4">
          <h6 className="fw-bold mb-3">Product</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-muted text-decoration-none">Features</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
            <li><a href="#" className="text-muted text-decoration-none">API</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Integrations</a></li>
          </ul>
        </Col>
        <Col lg={2} className="mb-4">
          <h6 className="fw-bold mb-3">Company</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-muted text-decoration-none">About</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Blog</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
          </ul>
        </Col>
        <Col lg={2} className="mb-4">
          <h6 className="fw-bold mb-3">Support</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Documentation</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Community</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Status</a></li>
          </ul>
        </Col>
        <Col lg={2} className="mb-4">
          <h6 className="fw-bold mb-3">Legal</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-muted text-decoration-none">Privacy</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Terms</a></li>
            <li><a href="#" className="text-muted text-decoration-none">Security</a></li>
            <li><a href="#" className="text-muted text-decoration-none">GDPR</a></li>
          </ul>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <Col className="text-center">
          <p className="text-muted mb-0">&copy; 2024 TaskFlow. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterSection; 