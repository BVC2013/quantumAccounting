import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const ItServicesOverview = ({ backgroundImage = '' }) => {
  const itCards = [
    {
      title: 'IT Services Overview',
      description: 'Discover how our blended accounting and technology team keeps your financial systems secure and efficient.',
      path: '/it-services',
    },
    {
      title: 'QuickBooks Services',
      description: 'Leverage expert QuickBooks support for day-to-day bookkeeping, troubleshooting, and long-term optimization.',
      path: '/quickbooks-services',
    },
    {
      title: 'Why QuickBooks',
      description: 'Understand the platform benefits and how we configure QuickBooks to fit your workflow and reporting needs.',
      path: '/why-quickbooks',
    },
    {
      title: 'QuickBooks Setup',
      description: 'Launch with confidence by letting our team structure your chart of accounts, automations, and integrations.',
      path: '/quickbooks-setup',
    },
    {
      title: 'QuickBooks Training',
      description: 'Empower your staff with role-based training, best practices, and ongoing coaching from certified experts.',
      path: '/quickbooks-training',
    },
    {
      title: 'QuickBooks Tune-Up',
      description: 'Fix lingering issues, clean historical data, and streamline performance with a guided tune-up engagement.',
      path: '/quickbooks-tuneup',
    },
  ];

  return (
    <>
      <PageBanner
        title="IT & QuickBooks Services"
        subtitle="Deploy the right technology, keep data secure, and get more from QuickBooks with hands-on specialists."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Turn Software Into An Advantage</h2>
            <p>
              From initial setup to advanced automation, we help you choose and optimize cloud accounting tools so your team can
              focus on results, not reconciliations.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {itCards.map((card) => (
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
              Ready to modernize your accounting stack? <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">schedule a discovery call</Link> with our implementation team.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'QuickBooks Setup', path: '/quickbooks-setup' },
              { label: 'QuickBooks Training', path: '/quickbooks-training' },
              { label: 'QuickBooks Tune-Up', path: '/quickbooks-tuneup' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ItServicesOverview;
