import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import ContactForm from '../components/ContactForm';

const Contact = ({ backgroundImage = '' }) => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Based in Morris Plains, NJ — serving clients throughout New Jersey and nationwide."
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
              <strong>Location:</strong> Morris Plains, NJ
              <br />
              <strong>Phone:</strong> <a href="tel:+19085663799">(908) 566-3799</a>
              <br />
              <strong>Email:</strong> <a href="mailto:hello@quantum-accountant.com">hello@quantum-accountant.com</a>
            </p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#666' }}>
              Proudly serving clients throughout Morris County, Northern New Jersey, and nationwide.
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
              style={{ width: '100%', marginBottom: '1rem', display: 'block', textAlign: 'center', color: '#ffffff' }}
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
