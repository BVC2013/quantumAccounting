import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const About = ({ backgroundImage = '' }) => {
  return (
    <>
      <PageBanner 
        title="About Quantum Accounting & Advisory" 
        subtitle="Helping individuals and businesses gain clarity, stay compliant, and scale with confidence."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Who We Are</h2>
            <p>
              At Quantum Accounting & Advisory LLC, we are a team of seasoned 
              accounting and advisory professionals committed to serving individuals, 
              families, and businesses with integrity, precision, and insight. Our 
              expertise spans accounting, compliance, and strategic advisory—grounded 
              in deep technical knowledge and delivered with a client-first mindset.
            </p>
            <p>
              What truly sets us apart is our philosophy. We don't simply process 
              transactions or prepare reports. We take the time to understand your 
              goals, business model, customers, and challenges, so our guidance goes 
              beyond completing tasks—it helps you make better decisions.
            </p>
            <p>
              By combining disciplined financial rigor with strategic thinking, we 
              act as a trusted partner, helping you navigate complexity, manage risk, 
              and build a stronger foundation for sustainable growth.
            </p>

            <h2>Our Mission</h2>
            <p>
              To simplify financial operations for clients through structured processes, 
              transparent responsibilities, and reliable deliverables—so they can focus 
              on growth while we manage accuracy, compliance, and reporting.
            </p>

            <h2>Our Vision</h2>
            <p>
              To become the most trusted digital back-office for growing businesses by 
              delivering clarity, control, and confidence in their financial decisions.
            </p>

            <h2>The Quantum Commitment</h2>
            <p>
              What truly sets us apart is how we work. We don't just record 
              transactions or deliver reports. We take the time to understand what 
              you're trying to achieve, how your business operates, who your customers 
              are, and the challenges you face.
            </p>
            <p>
              This allows us to provide guidance that goes beyond day-to-day tasks. 
              We help you see the full financial picture, make smarter decisions, 
              avoid surprises, and plan with confidence. By combining strong financial 
              discipline with practical business insight, we become a trusted partner—helping 
              you manage risk, navigate complexity, and build a solid foundation for 
              long-term, sustainable growth.
            </p>

            <h2>Why Quantum</h2>
            <p>
              At Quantum Accounting & Advisory, we help individuals and small to 
              mid-sized businesses gain clarity, stay compliant, and scale with confidence.
            </p>
            <p>
              We go beyond transactions. By understanding your goals, operations, and 
              challenges, we deliver guidance that supports smart decision-making, 
              disciplined growth, and long-term stability.
            </p>

            <h2>What Makes Quantum Different</h2>
            <ul>
              <li>
                <strong>Clear, Actionable Insight:</strong> We turn financial data 
                into guidance you can use to grow—without losing control.
              </li>
              <li>
                <strong>Proactive Risk & Opportunity Management:</strong> We help 
                you seize opportunities while managing risk at every stage of growth.
              </li>
              <li>
                <strong>Personalized Partnership:</strong> One-on-one support 
                tailored to your business—not generic advice.
              </li>
              <li>
                <strong>Year-Round Access & Accountability:</strong> Responsive 
                support beyond deadlines, with ownership and follow-through.
              </li>
              <li>
                <strong>Integrated, End-to-End Solutions:</strong> Accounting, tax, 
                payroll, and advisory working together—so growth doesn't create complexity.
              </li>
              <li>
                <strong>Disciplined, Technology-Enabled Execution:</strong> Clear 
                processes, strong controls, and AI-enabled tools ensure efficiency, 
                accuracy, and scalability.
              </li>
            </ul>

            <h2>Our Core Pillars</h2>
            <div className="pillars-grid">
              <div className="pillar-card">
                <h3>Clarity</h3>
                <p className="pillar-what">Define responsibilities & workflows</p>
                <p className="pillar-why">Removes confusion and scope creep</p>
              </div>
              <div className="pillar-card">
                <h3>Consistency</h3>
                <p className="pillar-what">Standard operating processes & checklists</p>
                <p className="pillar-why">Predictable quality and reliable reporting</p>
              </div>
              <div className="pillar-card">
                <h3>Compliance</h3>
                <p className="pillar-what">Keep filings, payroll, tax, and books current</p>
                <p className="pillar-why">Reduces risk, penalties, and audit exposure</p>
              </div>
              <div className="pillar-card">
                <h3>Communication</h3>
                <p className="pillar-what">Status visibility & approvals inside portal</p>
                <p className="pillar-why">No email chasing, no missing documents</p>
              </div>
              <div className="pillar-card">
                <h3>Control</h3>
                <p className="pillar-what">Real-time dashboards and deadlines</p>
                <p className="pillar-why">Client stays informed and in command</p>
              </div>
              <div className="pillar-card">
                <h3>Comprehensive</h3>
                <p className="pillar-what">End-to-end approach — never viewing business challenges in isolation</p>
                <p className="pillar-why">Holistic solutions that address root causes, not just symptoms</p>
              </div>
            </div>

            <p>
              Ready to experience the difference that professional,
              client-focused accounting services can make?{' '}
              <Link to="/contact">Contact us today</Link> to schedule a
              consultation and discover how we can help you achieve your
              financial goals.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Our Values', path: '/our-values' },
              { label: 'Our Services', path: '/services' },
              { label: 'Contact Us', path: '/contact' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default About;
