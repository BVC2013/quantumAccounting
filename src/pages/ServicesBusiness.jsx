import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const ServicesBusiness = ({ backgroundImage = '' }) => {
  const businessServiceCards = [
    {
      title: 'Services Overview',
      description: 'See how our outsourced accounting, advisory, and controller services help you steer the entire business with clarity.',
      path: '/services-business',
    },
    {
      title: 'Business Tax Preparation',
      description: 'Accurate federal, state, and local filings for every entity type, with proactive guidance to minimize taxes.',
      path: '/tax-preparation-business',
    },
    {
      title: 'Tax Strategies',
      description: 'Implement profit-smart tax strategies tailored to your industry, structure, and long-term goals.',
      path: '/tax-strategies-business',
    },
    {
      title: 'Bookkeeping',
      description: 'Stay audit-ready with reconciled books, reliable financial statements, and responsive support each month.',
      path: '/bookkeeping',
    },
    {
      title: 'CFO Services',
      description: 'Gain fractional CFO insight for forecasting, budgeting, KPIs, and strategic planning without the full-time cost.',
      path: '/cfo-services',
    },
    {
      title: 'Payroll Services',
      description: 'Ensure compliant, on-time payroll processing, tax deposits, and year-end reporting for your entire team.',
      path: '/payroll',
    },
    {
      title: 'Cash Flow Management',
      description: 'Track inflows and outflows, model what-if scenarios, and protect the lifeblood of your business.',
      path: '/cash-flow-management',
    },
    {
      title: 'Business Advisory',
      description: 'Solve operational challenges, improve margins, and make confident decisions with an experienced advisor.',
      path: '/business-advisory',
    },
    {
      title: 'New Business Formation',
      description: 'Choose the right entity, register properly, and set up accounting systems that scale from day one.',
      path: '/new-business-formation',
    },
    {
      title: 'Audits & Reviews',
      description: 'Prepare audit-ready financials, reviews, and compilations that meet stakeholder and lender expectations.',
      path: '/audits-reviews',
    },
    {
      title: 'Internal Controls',
      description: 'Design processes that safeguard assets, prevent fraud, and give owners confidence in reported results.',
      path: '/internal-controls',
    },
    {
      title: 'Non-Profit Organizations',
      description: 'Receive dedicated nonprofit accounting support, grant tracking, and compliance for mission-driven work.',
      path: '/nonprofit',
    },
  ];

  return (
    <>
      <PageBanner
        title="Business Services"
        subtitle="Outsourced accounting, tax, and advisory solutions that keep leadership focused on growth."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Build Stronger Operations</h2>
            <p>
              From daily bookkeeping to strategic financial leadership, our business services deliver disciplined processes and
              actionable insight. Explore each service below to see how we support your team throughout every growth stage.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {businessServiceCards.map((card) => (
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
              Let&apos;s customize a package for your organization. <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">schedule a consultation</Link> to get started.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Bookkeeping', path: '/bookkeeping' },
              { label: 'CFO Services', path: '/cfo-services' },
              { label: 'Payroll Services', path: '/payroll' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ServicesBusiness;
