import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import ContactForm from '../components/ContactForm';

const Contact = ({ backgroundImage = '' }) => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="We're here to help with all your accounting, tax, and financial advisory needs."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Get in Touch</h2>
            <p>
              We're here to help with all your accounting, tax, and financial
              advisory needs. Reach out to us using any of the methods below,
              and we'll respond promptly.
            </p>

            <h3>Contact Information</h3>
            <p>
              <strong>Phone:</strong> (555) 123-4567
              <br />
              <strong>Email:</strong> info@quantumaccounting.com
              <br />
              <strong>Address:</strong> [Your Business Address]
              <br />
              [City, State ZIP]
            </p>

            <h3>Office Hours</h3>
            <p>
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: By Appointment
              <br />
              Sunday: Closed
            </p>

            <h3>Send Us a Message</h3>
            <ContactForm />
          </div>

          <div className="sidebar">
            <h3>Schedule a Consultation</h3>
            <p>Prefer to schedule a meeting? Use our online scheduling tool.</p>
            <Link
              to="/book-meeting"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '1rem', display: 'block', textAlign: 'center' }}
            >
              Book a Meeting
            </Link>

            <h3>Client Portal</h3>
            <p>
              Existing clients can access their portal to view documents and
              communicate securely.
            </p>
            <Link
              to="/client-portal"
              className="btn btn-secondary"
              style={{ width: '100%', display: 'block', textAlign: 'center', color: 'var(--primary-color)', border: '2px solid var(--primary-color)' }}
            >
              Client Portal Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
