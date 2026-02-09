import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TrustItem from '../components/TrustItem';
import ContactForm from '../components/ContactForm';
import PageBanner from '../components/PageBanner';

const Home = ({ backgroundImage = '/images/banners/home.jpg' }) => {
  const services = [
    {
      title: 'Business Services',
      description: 'Complete accounting, bookkeeping, and advisory services designed to help your business thrive.',
      items: [
        'Small business accounting',
        'Bookkeeping and payroll',
        'Financial statement preparation',
        'Business advisory and planning',
      ],
      link: '/services-business',
    },
    {
      title: 'Services for Individuals',
      description: 'Personalized tax preparation, planning, and financial guidance tailored to your unique situation.',
      items: [
        'Individual tax preparation',
        'Year-round tax planning',
        'Estate planning services',
        'Financial planning guidance',
      ],
      link: '/services-individuals',
    },
    {
      title: 'Tax Services',
      description: 'Expert tax preparation and planning to minimize your liability while ensuring full compliance.',
      items: [
        'Individual and business tax prep',
        'Strategic tax planning',
        'Tax relief and IRS representation',
        'Business tax strategies',
      ],
      link: '/tax-services',
    },
    {
      title: 'IT & Governance',
      description: 'Strategic IT governance, cybersecurity, and digital enablement services to protect and transform your organization.',
      items: [
        'AI & data governance',
        'IT controls & cybersecurity',
        'Cloud governance',
        'Privacy & data protection',
      ],
      link: '/it-services',
    },
  ];

  const trustItems = [
    {
      title: 'Experienced Professionals',
      description: 'Our team brings decades of combined experience in accounting, tax, and financial advisory services.',
    },
    {
      title: 'Year-Round Support',
      description: "We're here for you beyond tax season, providing ongoing guidance and proactive planning.",
    },
    {
      title: 'Client-Focused Approach',
      description: 'Every solution is tailored to your unique situation, goals, and financial needs.',
    },
    {
      title: 'Modern & Secure',
      description: 'State-of-the-art technology ensures your data is protected while making collaboration easy.',
    },
    {
      title: 'Comprehensive Solutions',
      description: 'One trusted partner for all your accounting, tax, and financial planning needs.',
    },
    {
      title: 'Proactive Guidance',
      description: 'We help you stay ahead of obligations, avoid penalties, and maximize opportunities.',
    },
  ];

  return (
    <>
      <PageBanner
        title="You Grow and Scale. We Handle the Details."
        subtitle="Trusted accounting and tax advisors providing year-round support, strategic guidance, and peace of mind for individuals and businesses."
        backgroundImage={backgroundImage}
      />

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Comprehensive Accounting and Business Advisory</h2>
          <p className="section-subtitle">
            We handle the complexity so you can focus on what matters most. From
            tax preparation to strategic business planning, we're your trusted
            partner every step of the way.
          </p>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <h2 className="section-title">Why Choose Quantum Accounting Advisory</h2>
          <div className="trust-grid">
            {trustItems.map((item) => (
              <TrustItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="container">
          <div className="two-column">
            <div>
              <h2>Navigating Financial Complexity Doesn't Have to Be Overwhelming</h2>
              <p>
                Tax laws change constantly. Compliance requirements evolve.
                Financial planning can feel complex. But you don't have to figure
                it all out on your own.
              </p>
              <p>
                At Quantum Accounting Advisory, we understand the stress that comes
                with managing finances, preparing taxes, and planning for the
                future. That's why we've built our practice around making these
                processes as smooth and stress-free as possible.
              </p>
              <p>
                Whether you're an individual looking for tax preparation, a small
                business owner needing bookkeeping support, or someone facing IRS
                challenges, we're here to help. We combine deep expertise with a
                genuine commitment to your success.
              </p>
              <p>
                <strong>Our promise:</strong> We handle the complexity so you can
                focus on what matters most to you.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Learn More About Us
              </Link>
            </div>
            <div className="sidebar">
              <h3>Get Started Today</h3>
              <p>
                Ready to experience the peace of mind that comes with professional
                financial guidance?
              </p>
              <ContactForm buttonText="Send Message" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
