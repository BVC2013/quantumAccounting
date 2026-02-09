import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const ResourcesOverview = ({ backgroundImage = '' }) => {
  const resourceCards = [
    {
      title: 'Financial Calculators',
      description: 'Model cash flow, retirement, loan payoff, and more with interactive tools built for planning.',
      path: '/financial-calculators',
    },
    {
      title: 'IRS Forms & Publications',
      description: 'Quickly find commonly requested IRS forms and reference materials in one organized hub.',
      path: '/irs-forms',
    },
    {
      title: 'Tax Rates',
      description: 'Stay current on federal and state tax brackets, capital gains rates, and payroll thresholds.',
      path: '/tax-rates',
    },
    {
      title: 'State Tax Forms',
      description: 'Locate the tax agency links and filing resources for every state where you do business.',
      path: '/state-tax-forms',
    },
    {
      title: 'Track Your Refund',
      description: 'Use official IRS and state portals to check the real-time status of your tax refunds.',
      path: '/refund-tracking',
    },
    {
      title: 'Tax Due Dates',
      description: 'Never miss a deadline with our calendar of federal and state filing and payment dates.',
      path: '/tax-due-dates',
    },
  ];

  return (
    <>
      <PageBanner
        title="Resource Center"
        subtitle="Stay informed with calculators, forms, tax data, and guides curated by our advisory team."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Explore Our Resource Library</h2>
            <p>
              We built this center to keep key tools at your fingertips. Browse the collections below to find what you need—and
              reach out if you would like personalized guidance.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {resourceCards.map((card) => (
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
              Looking for something specific? <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">schedule time with our team</Link> and we&apos;ll point you in the right direction.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Financial Calculators', path: '/financial-calculators' },
              { label: 'IRS Forms & Publications', path: '/irs-forms' },
              { label: 'Tax Rates', path: '/tax-rates' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ResourcesOverview;
