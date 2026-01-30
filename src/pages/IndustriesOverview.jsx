import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const IndustriesOverview = ({ backgroundImage = '' }) => {
  const industryCards = [
    {
      title: 'Industries Overview',
      description: 'See how we tailor accounting, tax, and advisory support to the unique demands of each industry we serve.',
      path: '/industries',
    },
    {
      title: 'Construction',
      description: 'Job-costing, WIP reporting, compliance, and bonding support for contractors and builders.',
      path: '/construction',
    },
    {
      title: 'Restaurants',
      description: 'Prime cost tracking, tip reporting, payroll, and inventory controls for hospitality teams.',
      path: '/restaurants',
    },
    {
      title: 'Retail',
      description: 'Multi-location reporting, POS integrations, and margin analysis to keep shelves profitable.',
      path: '/retail',
    },
    {
      title: 'Manufacturing',
      description: 'Cost accounting, inventory valuation, and production analytics for make-to-order and make-to-stock shops.',
      path: '/manufacturing',
    },
    {
      title: 'Dentists',
      description: 'Chair-time productivity, insurance collections, and cash flow planning designed for dental practices.',
      path: '/dentists',
    },
    {
      title: 'Healthcare',
      description: 'HIPAA-aware accounting, compensation planning, and revenue cycle support for medical groups.',
      path: '/healthcare',
    },
    {
      title: 'Real Estate',
      description: 'Entity structuring, 1031 coordination, and cash flow insights for investors and property managers.',
      path: '/real-estate',
    },
    {
      title: 'Law Firms',
      description: 'Trust accounting, compensation support, and compliance workflows for firms of every size.',
      path: '/law-firms',
    },
  ];

  return (
    <>
      <PageBanner
        title="Industry Specialties"
        subtitle="Specialized accounting and advisory services built around the realities of your industry."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Specialized Solutions For Your Field</h2>
            <p>
              Every industry faces unique financial, regulatory, and operational pressures. Explore the specialties below to see how
              we help you stay compliant, profitable, and prepared for what is next.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {industryCards.map((card) => (
                <div key={card.path} className="service-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link to={card.path} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                    Explore
                  </Link>
                </div>
              ))}
            </div>

            <p>
              Need support in another industry? <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">book a consultation</Link> to discuss a tailored engagement.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Construction', path: '/construction' },
              { label: 'Healthcare', path: '/healthcare' },
              { label: 'Real Estate', path: '/real-estate' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default IndustriesOverview;
