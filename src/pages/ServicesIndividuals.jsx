import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const ServicesIndividuals = ({ backgroundImage = '' }) => {
  const individualServiceCards = [
    {
      title: 'Services Overview',
      description: 'See how our individual-focused accounting, tax, and advisory services work together to simplify your finances.',
      path: '/services-individuals',
    },
    {
      title: 'Tax Preparation',
      description: 'File accurately and on time with professionals who uncover every deduction and credit you deserve.',
      path: '/tax-preparation-individual',
    },
    {
      title: 'Tax Planning',
      description: 'Plan year-round to control tax liability, manage life events, and align your decisions with financial goals.',
      path: '/tax-planning',
    },
    {
      title: 'Tax Strategies',
      description: 'Implement proactive strategies tailored to investments, self-employment, and wealth-building objectives.',
      path: '/tax-strategies-individual',
    },
    {
      title: 'Estate Planning',
      description: 'Protect your legacy with coordinated estate, trust, and wealth transfer guidance that complements your tax plan.',
      path: '/estate-planning',
    },
    {
      title: 'Financial Calculators',
      description: 'Use interactive tools to model cash flow, savings, retirement, and tax scenarios before you make big decisions.',
      path: '/financial-calculators',
    },
  ];

  return (
    <>
      <PageBanner
        title="Services for Individuals"
        subtitle="Personalized accounting, tax, and advisory support designed for clarity, compliance, and confidence."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Build A Financial Plan Around You</h2>
            <p>
              Your financial life deserves more than one-off tax filings. Our individual services combine precise preparation,
              thoughtful planning, and proactive strategy so you can make confident decisions at every stage.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {individualServiceCards.map((card) => (
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
              Not sure where to begin? <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">schedule a meeting</Link> so we can build a road map tailored to you.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Tax Preparation', path: '/tax-preparation-individual' },
              { label: 'Tax Planning', path: '/tax-planning' },
              { label: 'Estate Planning', path: '/estate-planning' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ServicesIndividuals;
