import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const FooterSection = () => (
  <footer className="footer-section py-5">
    <Container>
      <Row>
        <Col lg={4} md={6} className="mb-4">
          <h5 className="fw-bold mb-3">TaskFlow</h5>
          <p className="text-muted mb-4">
            The ultimate productivity tool that helps you organize tasks, collaborate with teams, and achieve your goals.
          </p>
          <div className="social-icons">
            <a href="#" className="text-white me-2">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-white me-2">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="text-white me-2">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-white me-2">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="text-white me-2">
              <FaGithub size={18} />
            </a>
            <a href="#" className="text-white">
              <FaYoutube size={18} />
            </a>
          </div>
        </Col>
        <Col lg={2} md={6} className="mb-4">
          <h6 className="fw-bold mb-3">Product</h6>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Features</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">API</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Integrations</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Mobile App</a></li>
          </ul>
        </Col>
        <Col lg={2} md={6} className="mb-4">
          <h6 className="fw-bold mb-3">Company</h6>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Blog</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Press</a></li>
          </ul>
        </Col>
        <Col lg={2} md={6} className="mb-4">
          <h6 className="fw-bold mb-3">Support</h6>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Help Center</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Documentation</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Community</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Status</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact Support</a></li>
          </ul>
        </Col>
        <Col lg={2} md={6} className="mb-4">
          <h6 className="fw-bold mb-3">Legal</h6>
          <ul className="list-unstyled">
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Privacy</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Terms</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Security</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">GDPR</a></li>
            <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Cookie Policy</a></li>
          </ul>
        </Col>
      </Row>
      <hr className="my-4 border-secondary" />
      <Row>
        <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
          <p className="text-muted mb-0">&copy; 2025 TaskFlow. All rights reserved.</p>
        </Col>
        <Col md={6} className="text-center text-md-end">
          <p className="text-muted mb-0">Made with Tayyab for productivity</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterSection; 