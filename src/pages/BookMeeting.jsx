import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const BookMeeting = ({ backgroundImage = '' }) => {
  return (
    <>
      <PageBanner 
        title="Book a Meeting" 
        subtitle="Schedule a complimentary consultation to discuss your accounting, tax, or financial advisory needs."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Schedule a Consultation</h2>
            <p>
              We offer complimentary initial consultations to discuss your
              accounting, tax, or financial advisory needs. During this meeting,
              we'll learn about your situation, answer your questions, and
              explain how we can help.
            </p>

            <h3>What to Expect</h3>
            <ul>
              <li>A 30-minute initial consultation at no charge</li>
              <li>Discussion of your specific needs and goals</li>
              <li>Overview of relevant services and solutions</li>
              <li>Transparent pricing information</li>
              <li>No pressure, no obligation</li>
            </ul>

            <h3>Online Scheduling</h3>
            <p>
              Use our online scheduling tool below to select a convenient time
              for your consultation. You can choose between phone, video, or
              in-person meetings.
            </p>

            <div
              style={{
                background: 'var(--bg-light)',
                padding: '1.5rem',
                borderRadius: '8px',
                margin: '2rem 0',
                minHeight: '650px',
              }}
            >
              <iframe
                src="https://meetings-na3.hubspot.com/quantum?embed=true"
                title="Schedule a Meeting"
                style={{
                  width: '100%',
                  height: '630px',
                  border: 'none',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Our Services', path: '/services' },
              { label: 'About Us', path: '/about' },
              { label: 'Contact Us', path: '/contact' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default BookMeeting;
