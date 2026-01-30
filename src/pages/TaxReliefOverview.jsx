import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const TaxReliefOverview = ({ backgroundImage = '' }) => {
  const reliefCards = [
    {
      title: 'Tax Relief Overview',
      description: 'Understand our end-to-end approach to resolving IRS issues, from assessments to complete resolution.',
      path: '/tax-relief',
    },
    {
      title: 'IRS Audit Representation',
      description: 'Let experienced professionals handle every interaction with the IRS so you stay protected and informed.',
      path: '/irs-audit-representation',
    },
    {
      title: 'Tax Debt Resolution',
      description: 'Explore payment options, offers in compromise, and strategies tailored to your financial reality.',
      path: '/tax-debt-resolution',
    },
    {
      title: 'Penalty Abatement',
      description: 'Reduce or eliminate penalties by documenting reasonable cause, first-time relief, and other defenses.',
      path: '/penalty-abatement',
    },
    {
      title: 'Audit Defense',
      description: 'Prepare documentation, respond to notices, and defend filings with an advocate who knows IRS procedures.',
      path: '/audit-defense',
    },
    {
      title: 'IRS Appeals',
      description: 'Challenge unfavorable decisions and negotiate settlements through the formal appeals process.',
      path: '/irs-appeals',
    },
  ];

  return (
    <>
      <PageBanner
        title="Tax Relief & Audit Support"
        subtitle="Take control of IRS problems with seasoned representation, clear strategies, and year-round guidance."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Resolve IRS Issues With Confidence</h2>
            <p>
              Whether you received a notice, face an audit, or carry unresolved balances, you deserve a plan and a partner. Explore
              each service below to see how we help you regain control and move forward.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {reliefCards.map((card) => (
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
              Facing an urgent matter? <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">schedule a confidential consultation</Link> today.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'IRS Audit Representation', path: '/irs-audit-representation' },
              { label: 'Tax Debt Resolution', path: '/tax-debt-resolution' },
              { label: 'Penalty Abatement', path: '/penalty-abatement' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default TaxReliefOverview;
