import { Link } from 'react-router-dom';

const Sidebar = ({ showBooking = true, showContact = true, relatedPages = [] }) => {
  return (
    <div className="sidebar">
      {showBooking && (
        <>
          <h3>Get Started Today</h3>
          <p style={{ color: 'var(--text-dark)' }}>Schedule a consultation to discuss your needs.</p>
          <Link
            to="/book-meeting"
            className="btn btn-primary"
            style={{ width: '100%', marginBottom: '1rem', display: 'block', textAlign: 'center', color: '#ffffff' }}
          >
            Book a Consultation
          </Link>
        </>
      )}

      {showContact && (
        <>
          <h3>Contact Us</h3>
          <p style={{ color: 'var(--text-dark)' }}><a href="tel:+15551234567" style={{ color: 'var(--primary-blue)' }}><strong>Phone:</strong> (555) 123-4567</a></p>
          <p style={{ color: 'var(--text-dark)' }}><a href="mailto:hello@quantum-accountant.com" style={{ color: 'var(--primary-blue)' }}><strong>Email:</strong> hello@quantum-accountant.com</a></p>
          <p style={{ color: 'var(--text-dark)' }}>
            <strong>Office Hours:</strong><br />
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: By Appointment
          </p>
        </>
      )}

      {relatedPages.length > 0 && (
        <>
          <h3>Related Pages</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {relatedPages.map((page) => (
              <li key={page.path} style={{ margin: '0.5rem 0' }}>
                <Link to={page.path} style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
