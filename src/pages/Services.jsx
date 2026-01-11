import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import ServiceCard from '../components/ServiceCard';

const Services = ({ backgroundImage = '' }) => {
  const serviceCategories = [
    {
      title: 'Individual Services',
      description: 'Personal tax and financial services tailored to your needs.',
      items: ['Tax preparation', 'Tax planning', 'Estate planning', 'Financial guidance'],
      link: '/services-individuals',
    },
    {
      title: 'Business Services',
      description: 'Complete accounting solutions for businesses of all sizes.',
      items: ['Bookkeeping', 'Payroll', 'Financial statements', 'Business advisory'],
      link: '/services-business',
    },
    {
      title: 'Tax Services',
      description: 'Expert tax preparation and strategic planning.',
      items: ['Individual taxes', 'Business taxes', 'Tax planning', 'IRS representation'],
      link: '/tax-services',
    },
    {
      title: 'Tax Relief',
      description: 'Resolution services for IRS issues and tax problems.',
      items: ['Audit support', 'Back taxes', 'Payment plans', 'Offer in compromise'],
      link: '/tax-relief',
    },
    {
      title: 'QuickBooks Services',
      description: 'Professional QuickBooks setup, training, and support.',
      items: ['Setup', 'Training', 'Tune-ups', 'Ongoing support'],
      link: '/quickbooks-services',
    },
    {
      title: 'Industry Specialties',
      description: 'Specialized expertise for specific industries.',
      items: ['Construction', 'Healthcare', 'Law firms', 'Real estate'],
      link: '/industries',
    },
  ];

  return (
    <>
      <PageBanner 
        title="Our Services" 
        subtitle="Comprehensive accounting, tax, and financial advisory services for individuals and businesses."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Comprehensive Financial Solutions</h2>
            <p>
              At Quantum Accounting Advisory, we offer a full range of
              accounting, tax, and financial advisory services. Whether you're
              an individual seeking tax preparation, a small business needing
              bookkeeping support, or a company requiring strategic financial
              guidance, we have the expertise to help.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {serviceCategories.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            <h2>Why Choose Our Services?</h2>
            <ul>
              <li>
                <strong>Experienced Team:</strong> Decades of combined expertise
                in accounting and tax
              </li>
              <li>
                <strong>Personalized Approach:</strong> Solutions tailored to
                your unique situation
              </li>
              <li>
                <strong>Year-Round Support:</strong> We're here for you beyond
                tax season
              </li>
              <li>
                <strong>Modern Technology:</strong> Secure, convenient digital
                tools
              </li>
              <li>
                <strong>Transparent Pricing:</strong> Clear, upfront costs with
                no surprises
              </li>
            </ul>

            <p>
              Ready to get started? <Link to="/contact">Contact us</Link> to
              discuss your needs, or{' '}
              <Link to="/book-meeting">schedule a consultation</Link>.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'For Individuals', path: '/services-individuals' },
              { label: 'For Businesses', path: '/services-business' },
              { label: 'Tax Services', path: '/tax-services' },
              { label: 'Tax Relief', path: '/tax-relief' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
