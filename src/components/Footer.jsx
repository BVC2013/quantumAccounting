import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/book-meeting">Schedule Consultation</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/tax-services">Tax Services</Link></li>
              <li><Link to="/services-business">Business Services</Link></li>
              <li><Link to="/tax-relief">Tax Relief</Link></li>
              <li><Link to="/quickbooks-services">QuickBooks Services</Link></li>
              <li><Link to="/industries">Industry Specialties</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/tax-center">Tax Center</Link></li>
              <li><Link to="/resources">Financial Resources</Link></li>
              <li><Link to="/newsletter">Newsletter</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/financial-calculators">Calculators</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Client Tools</h3>
            <ul>
              <li><Link to="/client-portal">Client Portal</Link></li>
              <li><Link to="/secure-upload">Secure File Upload</Link></li>
              <li><Link to="/refund-tracking">Track Your Refund</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/security-measures">Security Measures</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="tel:+15551234567">(555) 123-4567</a></li>
              <li><a href="mailto:info@quantumadvisory.com">info@quantumadvisory.com</a></li>
              <li>Mon-Fri 9AM-6PM</li>
              <li><Link to="/contact">Send a Message</Link></li>
              <li><Link to="/book-meeting">Book a Consultation</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Quantum Accounting Advisory LLC.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
