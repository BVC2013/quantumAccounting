import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';

const TaxServices = ({ backgroundImage = '' }) => {
  return (
    <>
      <PageBanner 
        title="Tax Services" 
        subtitle="Expert tax preparation and strategic planning for individuals and businesses."
        backgroundImage={backgroundImage}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Comprehensive Tax Services for Individuals and Businesses</h2>
            <p>
              Tax preparation and planning require expertise, attention to
              detail, and staying current with constantly changing tax laws. Our
              comprehensive tax services ensure you maximize deductions,
              minimize liability, and maintain full compliance with all tax
              requirements.
            </p>

            <h2>Our Tax Services</h2>
            <ul>
              <li>Individual tax preparation and filing</li>
              <li>Business tax preparation (all entity types)</li>
              <li>Year-round tax planning and strategy</li>
              <li>Estate and trust tax services</li>
              <li>Cryptocurrency tax guidance</li>
              <li>Tax problem resolution</li>
              <li>IRS representation and audit support</li>
            </ul>

            <h2>Why Professional Tax Services Matter</h2>
            <p>Working with tax professionals provides:</p>
            <ul>
              <li>
                <strong>Maximized Savings:</strong> Identify all eligible
                deductions and credits
              </li>
              <li>
                <strong>Compliance Confidence:</strong> Ensure accurate filing
                and avoid penalties
              </li>
              <li>
                <strong>Strategic Planning:</strong> Year-round strategies to
                minimize tax liability
              </li>
              <li>
                <strong>Problem Resolution:</strong> Expert help with IRS issues
                and tax problems
              </li>
              <li>
                <strong>Peace of Mind:</strong> Know your taxes are handled
                correctly
              </li>
            </ul>

            <p>
              Ready to optimize your tax situation?{' '}
              <Link to="/contact">Contact us</Link> to learn more.
            </p>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'Individual Tax Prep', path: '/tax-preparation-individual' },
              { label: 'Business Tax Prep', path: '/tax-preparation-business' },
              { label: 'Tax Planning', path: '/tax-planning' },
              { label: 'Estate & Trust Tax', path: '/estate-trust-tax' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default TaxServices;
