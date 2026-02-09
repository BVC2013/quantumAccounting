import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const TaxServices = ({ backgroundImage = '' }) => {
  const taxServiceCards = [
    {
      title: 'Business Tax Strategies',
      description: 'Implement profit-smart tax strategies tailored to your industry, structure, and long-term business goals.',
      path: '/tax-strategies-business',
      category: 'Business',
    },
    {
      title: 'Tax Preparation',
      description: 'File accurately and on time with professionals who uncover every deduction and credit you deserve.',
      path: '/tax-preparation-individual',
      category: 'Individual',
    },
    {
      title: 'Tax Planning & Strategy',
      description: 'Plan year-round to control tax liability, manage life events, and align your decisions with financial goals.',
      path: '/tax-planning',
      category: 'Individual',
    },
    {
      title: 'Tax Relief Overview',
      description: 'Explore options for resolving tax debts, responding to IRS notices, and getting back on track.',
      path: '/tax-relief',
      category: 'Relief',
    },
    {
      title: 'IRS Representation & Audit Support',
      description: 'Professional representation during IRS examinations with experienced advocates on your side.',
      path: '/irs-audit-support',
      category: 'Relief',
    },
    {
      title: 'Tax Debt Resolution',
      description: 'Expert assistance resolving outstanding tax debts with the IRS through payment plans, offers, and more.',
      path: '/tax-debt-resolution',
      category: 'Relief',
    },
    {
      title: 'IRS Representation & Audit Defense',
      description: 'Comprehensive audit defense services to protect your rights and minimize additional liability.',
      path: '/audit-defense',
      category: 'Relief',
    },
  ];

  return (
    <>
      <PageBanner 
        title="Tax Services" 
        subtitle="Expert tax preparation, planning, and resolution for individuals and businesses."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Comprehensive Tax Services</h2>
            <p>
              Tax preparation and planning require expertise, attention to detail, and staying current with constantly 
              changing tax laws. Our comprehensive tax services ensure you maximize deductions, minimize liability, 
              and maintain full compliance with all tax requirements.
            </p>

            <div className="service-grid" style={{ marginTop: '2rem' }}>
              {taxServiceCards.map((card) => (
                <div key={card.path} className="service-card">
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--primary-blue)', 
                    textTransform: 'uppercase', 
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    {card.category}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <Link to={card.path} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                    Learn More
                  </Link>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '2rem' }}>
              Ready to optimize your tax situation? <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">schedule a consultation</Link> to get started.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Tax Planning', path: '/tax-planning' },
              { label: 'Tax Preparation', path: '/tax-preparation-individual' },
              { label: 'Tax Relief', path: '/tax-relief' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default TaxServices;
