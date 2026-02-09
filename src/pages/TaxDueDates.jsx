import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import bannerDesk from '../assets/designers-desk-with-coffee-wireframes.jpg';

const TaxDueDates = () => {
  const tableStyle = { 
    width: '100%', 
    borderCollapse: 'collapse', 
    marginBottom: '2rem', 
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
  };
  
  const headerStyle = { 
    backgroundColor: 'var(--primary-navy)', 
    color: 'white' 
  };
  
  const cellStyle = { 
    padding: '0.75rem', 
    textAlign: 'left',
    borderBottom: '1px solid var(--neutral-grey)'
  };

  return (
    <>
      <PageBanner
        title="Tax Due Dates"
        subtitle="Important tax filing and payment deadlines for 2026."
        backgroundImage={bannerDesk}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>2026 Tax Calendar</h2>
            <p>
              Missing a tax deadline can result in penalties and interest charges. Use this calendar to stay on top of 
              important filing and payment dates for both individual and business taxes. Need help meeting a deadline? 
              <Link to="/contact"> Contact our team</Link> for assistance.
            </p>

            {/* January 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', marginTop: '2rem', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              January 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>January 15</strong></td>
                  <td style={cellStyle}>Fourth quarter 2025 estimated tax payment due for individuals</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>January 31</strong></td>
                  <td style={cellStyle}>Employers must furnish W-2 forms to employees</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>January 31</strong></td>
                  <td style={cellStyle}>Form 1099-NEC due to recipients and the IRS</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>January 31</strong></td>
                  <td style={cellStyle}>Fourth quarter 2025 payroll tax deposits due (Form 941)</td>
                </tr>
              </tbody>
            </table>

            {/* February 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              February 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>February 28</strong></td>
                  <td style={cellStyle}>Paper filing deadline for most Forms 1099 (except 1099-NEC) to IRS</td>
                </tr>
              </tbody>
            </table>

            {/* March 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              March 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>March 16</strong></td>
                  <td style={cellStyle}>S-Corporation tax returns due (Form 1120-S) or extension (Form 7004)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>March 16</strong></td>
                  <td style={cellStyle}>Partnership tax returns due (Form 1065) or extension (Form 7004)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>March 31</strong></td>
                  <td style={cellStyle}>Electronic filing deadline for most Forms 1099 to IRS</td>
                </tr>
              </tbody>
            </table>

            {/* April 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              April 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>April 15</strong></td>
                  <td style={cellStyle}>Individual income tax returns due (Form 1040) or extension (Form 4868)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>April 15</strong></td>
                  <td style={cellStyle}>First quarter 2026 estimated tax payment due for individuals</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>April 15</strong></td>
                  <td style={cellStyle}>C-Corporation tax returns due (Form 1120) or extension (Form 7004)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>April 15</strong></td>
                  <td style={cellStyle}>Last day to make 2025 IRA and HSA contributions</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>April 15</strong></td>
                  <td style={cellStyle}>Trust and estate income tax returns due (Form 1041) or extension</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>April 30</strong></td>
                  <td style={cellStyle}>First quarter 2026 payroll tax deposits due (Form 941)</td>
                </tr>
              </tbody>
            </table>

            {/* June 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              June 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>June 15</strong></td>
                  <td style={cellStyle}>Second quarter 2026 estimated tax payment due for individuals</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>June 15</strong></td>
                  <td style={cellStyle}>U.S. citizens living abroad: Individual tax returns due (or extension)</td>
                </tr>
              </tbody>
            </table>

            {/* July 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              July 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>July 31</strong></td>
                  <td style={cellStyle}>Second quarter 2026 payroll tax deposits due (Form 941)</td>
                </tr>
              </tbody>
            </table>

            {/* September 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              September 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>September 15</strong></td>
                  <td style={cellStyle}>Third quarter 2026 estimated tax payment due for individuals</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>September 15</strong></td>
                  <td style={cellStyle}>Extended S-Corporation tax returns due (Form 1120-S)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>September 15</strong></td>
                  <td style={cellStyle}>Extended Partnership tax returns due (Form 1065)</td>
                </tr>
              </tbody>
            </table>

            {/* October 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              October 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>October 15</strong></td>
                  <td style={cellStyle}>Extended individual income tax returns due (Form 1040)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>October 15</strong></td>
                  <td style={cellStyle}>Extended C-Corporation tax returns due (Form 1120)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>October 15</strong></td>
                  <td style={cellStyle}>Extended Trust and estate income tax returns due (Form 1041)</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>October 31</strong></td>
                  <td style={cellStyle}>Third quarter 2026 payroll tax deposits due (Form 941)</td>
                </tr>
              </tbody>
            </table>

            {/* December 2026 */}
            <h3 style={{ color: 'var(--primary-blue)', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '0.5rem' }}>
              December 2026
            </h3>
            <table style={tableStyle}>
              <thead>
                <tr style={headerStyle}>
                  <th style={cellStyle}>Date</th>
                  <th style={cellStyle}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>December 31</strong></td>
                  <td style={cellStyle}>Last day to make charitable contributions deductible for 2026</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}>
                  <td style={cellStyle}><strong>December 31</strong></td>
                  <td style={cellStyle}>Required Minimum Distributions (RMDs) must be taken by year-end</td>
                </tr>
                <tr style={{ backgroundColor: 'var(--white)' }}>
                  <td style={cellStyle}><strong>December 31</strong></td>
                  <td style={cellStyle}>Solo 401(k) and SEP-IRA must be established by year-end for 2026 contributions</td>
                </tr>
              </tbody>
            </table>

            {/* Important Notes */}
            <div style={{ 
              backgroundColor: 'var(--neutral-offwhite)', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              marginTop: '2rem',
              border: '1px solid var(--neutral-grey)'
            }}>
              <h3 style={{ color: 'var(--primary-navy)', marginTop: 0 }}>Important Notes</h3>
              <ul style={{ marginBottom: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong>Weekend & Holiday Adjustments:</strong> When a due date falls on a Saturday, Sunday, or legal holiday, 
                  the deadline is extended to the next business day.
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong>Extensions:</strong> Filing an extension gives you more time to file, but not more time to pay. 
                  Estimated tax payments are still due by the original deadline to avoid penalties.
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <strong>State Deadlines:</strong> State tax deadlines may differ from federal deadlines. 
                  Check with your state tax agency for specific due dates.
                </li>
                <li style={{ marginBottom: 0 }}>
                  <strong>Estimated Tax Payments:</strong> Self-employed individuals and those with significant non-wage income 
                  should make quarterly estimated payments to avoid underpayment penalties.
                </li>
              </ul>
            </div>

            {/* Related Resources */}
            <h3 style={{ color: 'var(--primary-blue)', marginTop: '2rem' }}>Related Resources</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <Link to="/tax-rates" className="btn btn-secondary" style={{ textAlign: 'center' }}>
                Tax Rates
              </Link>
              <Link to="/irs-forms" className="btn btn-secondary" style={{ textAlign: 'center' }}>
                IRS Forms & Publications
              </Link>
              <Link to="/refund-tracking" className="btn btn-secondary" style={{ textAlign: 'center' }}>
                Track Your Refund
              </Link>
              <Link to="/state-tax-forms" className="btn btn-secondary" style={{ textAlign: 'center' }}>
                State Tax Forms
              </Link>
            </div>

            {/* CTA */}
            <div style={{ 
              backgroundColor: 'var(--primary-navy)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '8px', 
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', marginTop: 0 }}>Need Help Meeting a Deadline?</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Don't wait until the last minute. Our team can help you prepare your returns, 
                file extensions, and ensure you meet all important tax deadlines.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>
                Contact Us
              </Link>
              <Link to="/book-meeting" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-navy)' }}>
                Schedule a Consultation
              </Link>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default TaxDueDates;
