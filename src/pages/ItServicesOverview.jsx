import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const ItServicesOverview = ({ backgroundImage = '' }) => {
  const itCards = [
    {
      title: 'AI & AI Regulatory Governance',
      description: 'Navigate AI regulations and implement robust AI governance frameworks for responsible AI adoption.',
      path: '/ai-governance',
    },
    {
      title: 'Data Governance',
      description: 'Establish data quality standards, ownership policies, and governance frameworks across your organization.',
      path: '/data-governance',
    },
    {
      title: 'Digital Enablement & IT Governance',
      description: 'Drive digital transformation with effective IT governance that aligns technology with business objectives.',
      path: '/digital-enablement',
    },
    {
      title: 'IT Service Delivery Framework',
      description: 'Implement structured delivery frameworks for IT service management and operational excellence.',
      path: '/delivery-framework',
    },
    {
      title: 'IT Strategy & Enterprise Risk Management',
      description: 'Align IT strategy with business objectives while managing enterprise-wide technology risks.',
      path: '/enterprise-it-governance',
    },
    {
      title: 'System Implementation Assurance',
      description: 'Expert guidance through your system implementation journey with hands-on support and oversight.',
      path: '/system-implementation',
    },
    {
      title: 'Third Party & Vendor Risk Management',
      description: 'Assess and manage risks from third-party vendors with comprehensive due diligence and monitoring.',
      path: '/vendor-risk-management',
    },
    {
      title: 'Cloud Governance',
      description: 'Establish governance for cloud infrastructure, ensuring security, compliance, and cost optimization.',
      path: '/cloud-governance',
    },
    {
      title: 'IT General Controls & Cybersecurity',
      description: 'Strengthen IT controls and cybersecurity posture with comprehensive assessments and remediation.',
      path: '/it-controls-cybersecurity',
    },
    {
      title: 'Privacy & Data Protection',
      description: 'Ensure compliance with privacy regulations like GDPR, CCPA, and industry-specific data protection standards.',
      path: '/privacy-data-protection',
    },
    {
      title: 'Software Asset Management (SAM)',
      description: 'Optimize software licensing, reduce costs, and ensure compliance with vendor agreements.',
      path: '/software-asset-management',
    },
    {
      title: 'System Implementation - QA Testing',
      description: 'Quality assurance and testing services to ensure successful system implementations.',
      path: '/qa-testing',
    },
  ];

  return (
    <>
      <PageBanner
        title="IT & Governance Services"
        subtitle="Strategic IT governance, risk management, and technology advisory services for modern enterprises."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Technology Governance & Risk Management</h2>
            <p>
              From AI governance to cybersecurity, we help you navigate the complex landscape of technology risk and compliance.
              Our services ensure your IT investments align with business objectives while maintaining security and regulatory compliance.
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
              Ready to strengthen your IT governance? <Link to="/contact">Contact us</Link> or{' '}
              <Link to="/book-meeting">schedule a discovery call</Link> with our advisory team.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'AI Governance', path: '/ai-governance' },
              { label: 'Data Governance', path: '/data-governance' },
              { label: 'Cybersecurity', path: '/it-controls-cybersecurity' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default ItServicesOverview;
