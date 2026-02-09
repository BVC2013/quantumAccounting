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
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/book-meeting">Schedule Consultation</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Business Services</h3>
            <ul>
              <li><Link to="/services-business">Services Overview</Link></li>
              <li><Link to="/bookkeeping">Bookkeeping</Link></li>
              <li><Link to="/fractional-cfo">Fractional CFO</Link></li>
              <li><Link to="/audits-reviews">Audit & Review</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Tax Services</h3>
            <ul>
              <li><Link to="/tax-planning">Tax Planning</Link></li>
              <li><Link to="/tax-services">Tax Services Overview</Link></li>
              <li><Link to="/tax-preparation-individual">Individual Tax Prep</Link></li>
              <li><Link to="/tax-preparation-business">Business Tax Prep</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Industries</h3>
            <ul>
              <li><Link to="/industries">Industries Overview</Link></li>
              <li><Link to="/retail">Retail</Link></li>
              <li><Link to="/construction">Construction</Link></li>
              <li><Link to="/restaurants">Restaurants</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>IT & Governance</h3>
            <ul>
              <li><Link to="/it-services">IT Services Overview</Link></li>
              <li><Link to="/ai-governance">AI Governance</Link></li>
              <li><Link to="/cloud-governance">Cloud Governance</Link></li>
              <li><Link to="/it-controls-cybersecurity">Cybersecurity</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><strong>Morris Plains, NJ</strong></li>
              <li><a href="tel:+19085663799">(908) 566-3799</a></li>
              <li><a href="mailto:hello@quantum-accountant.com">hello@quantum-accountant.com</a></li>
              <li>Mon-Fri 9AM-6PM</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Quantum Accounting Advisory LLC | Morris Plains, NJ.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
