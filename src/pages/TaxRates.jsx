import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import bannerDesk from '../assets/designers-desk-with-coffee-wireframes.jpg';

const TaxRates = () => {
  return (
    <>
      <PageBanner
        title="Tax Rates"
        subtitle="Current federal tax rates, brackets, and important tax figures for 2026."
        backgroundImage={bannerDesk}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>2026 Federal Income Tax Rates</h2>
            <p>
              Tax rates change every year. Review the current rates below to help with your tax planning.
              For personalized guidance on minimizing your tax liability, <Link to="/contact">contact our team</Link>.
            </p>

            {/* Single Taxpayers */}
            <h3 style={{ color: 'var(--primary-blue)', marginTop: '2rem' }}>
              Single Taxpayers (Standard Deduction: $16,100)
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Tax Rate</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Income Range</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>10%</td><td style={{ padding: '0.75rem' }}>$0 to $12,400</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>12%</td><td style={{ padding: '0.75rem' }}>$12,400 to $50,400</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>22%</td><td style={{ padding: '0.75rem' }}>$50,400 to $105,700</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>24%</td><td style={{ padding: '0.75rem' }}>$105,700 to $201,775</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>32%</td><td style={{ padding: '0.75rem' }}>$201,775 to $256,225</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>35%</td><td style={{ padding: '0.75rem' }}>$256,225 to $640,600</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>37%</td><td style={{ padding: '0.75rem' }}>Over $640,600</td></tr>
              </tbody>
            </table>

            {/* Married Filing Jointly */}
            <h3 style={{ color: 'var(--primary-blue)' }}>
              Married Filing Jointly & Surviving Spouses (Standard Deduction: $32,200)
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Tax Rate</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Income Range</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>10%</td><td style={{ padding: '0.75rem' }}>$0 to $24,800</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>12%</td><td style={{ padding: '0.75rem' }}>$24,800 to $100,800</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>22%</td><td style={{ padding: '0.75rem' }}>$100,800 to $211,400</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>24%</td><td style={{ padding: '0.75rem' }}>$211,400 to $403,550</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>32%</td><td style={{ padding: '0.75rem' }}>$403,550 to $512,450</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>35%</td><td style={{ padding: '0.75rem' }}>$512,450 to $768,700</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>37%</td><td style={{ padding: '0.75rem' }}>Over $768,700</td></tr>
              </tbody>
            </table>

            {/* Married Filing Separately */}
            <h3 style={{ color: 'var(--primary-blue)' }}>
              Married Filing Separately (Standard Deduction: $16,100)
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Tax Rate</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Income Range</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>10%</td><td style={{ padding: '0.75rem' }}>$0 to $12,400</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>12%</td><td style={{ padding: '0.75rem' }}>$12,400 to $50,400</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>22%</td><td style={{ padding: '0.75rem' }}>$50,400 to $105,700</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>24%</td><td style={{ padding: '0.75rem' }}>$105,700 to $201,775</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>32%</td><td style={{ padding: '0.75rem' }}>$201,775 to $256,225</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>35%</td><td style={{ padding: '0.75rem' }}>$256,225 to $384,350</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>37%</td><td style={{ padding: '0.75rem' }}>Over $384,350</td></tr>
              </tbody>
            </table>

            {/* Head of Household */}
            <h3 style={{ color: 'var(--primary-blue)' }}>
              Head of Household (Standard Deduction: $24,150)
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Tax Rate</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Income Range</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>10%</td><td style={{ padding: '0.75rem' }}>$0 to $17,700</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>12%</td><td style={{ padding: '0.75rem' }}>$17,700 to $67,450</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>22%</td><td style={{ padding: '0.75rem' }}>$67,450 to $105,700</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>24%</td><td style={{ padding: '0.75rem' }}>$105,700 to $201,750</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>32%</td><td style={{ padding: '0.75rem' }}>$201,750 to $256,200</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>35%</td><td style={{ padding: '0.75rem' }}>$256,200 to $640,600</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>37%</td><td style={{ padding: '0.75rem' }}>Over $640,600</td></tr>
              </tbody>
            </table>

            {/* Estates & Trusts */}
            <h3 style={{ color: 'var(--primary-blue)' }}>Estates & Trusts</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Tax Rate</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Income Range</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>10%</td><td style={{ padding: '0.75rem' }}>$0 to $3,300</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>24%</td><td style={{ padding: '0.75rem' }}>$3,300 to $11,700</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>35%</td><td style={{ padding: '0.75rem' }}>$11,700 to $16,000</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>37%</td><td style={{ padding: '0.75rem' }}>Over $16,000</td></tr>
              </tbody>
            </table>

            {/* Social Security & Medicare */}
            <h3 style={{ color: 'var(--primary-blue)' }}>2026 Social Security & Medicare</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Description</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Rate/Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Social Security Tax Rate: Employers</td><td style={{ padding: '0.75rem' }}>6.2%</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Social Security Tax Rate: Employees</td><td style={{ padding: '0.75rem' }}>6.2%</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Social Security Tax Rate: Self-Employed</td><td style={{ padding: '0.75rem' }}>12.4%</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Maximum earnings subject to Social Security tax</td><td style={{ padding: '0.75rem' }}>$184,500</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Maximum earnings subject to Medicare tax</td><td style={{ padding: '0.75rem' }}>Unlimited</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Medicare Tax Rate: Employers</td><td style={{ padding: '0.75rem' }}>1.45%</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Medicare Tax Rate: Employees</td><td style={{ padding: '0.75rem' }}>1.45%</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Medicare Tax Rate: Self-Employed</td><td style={{ padding: '0.75rem' }}>2.9%</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Additional Medicare tax (above $200K single / $250K joint)</td><td style={{ padding: '0.75rem' }}>0.9%</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Net investment income tax (above $200K single / $250K joint)</td><td style={{ padding: '0.75rem' }}>3.8%</td></tr>
              </tbody>
            </table>

            {/* Capital Gains */}
            <h3 style={{ color: 'var(--primary-blue)' }}>Capital Gains Tax Rates</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Rate</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Income Threshold</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>0%</td><td style={{ padding: '0.75rem' }}>Up to $49,450 (single) / $98,900 (married jointly)</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>15%</td><td style={{ padding: '0.75rem' }}>$49,450 - $545,500 (single) / $98,900 - $613,700 (married jointly)</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>20%</td><td style={{ padding: '0.75rem' }}>Above $545,500 (single) / $613,700 (married jointly)</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>25%</td><td style={{ padding: '0.75rem' }}>Unrecaptured Sec. 1250 gains</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>28%</td><td style={{ padding: '0.75rem' }}>Collectibles</td></tr>
              </tbody>
            </table>

            {/* Miscellaneous */}
            <h3 style={{ color: 'var(--primary-blue)' }}>2026 Miscellaneous Tax Figures</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Description</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Business Section 179 expensing limit</td><td style={{ padding: '0.75rem' }}>$2,560,000</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Business Section 179 phaseout threshold</td><td style={{ padding: '0.75rem' }}>$4,090,000</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>First-year bonus depreciation rate</td><td style={{ padding: '0.75rem' }}>100%</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Standard mileage rate for business driving</td><td style={{ padding: '0.75rem' }}>72.5 cents</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Standard mileage rate for medical driving</td><td style={{ padding: '0.75rem' }}>20.5 cents</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Standard mileage rate for charitable driving</td><td style={{ padding: '0.75rem' }}>14 cents</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Child Tax Credit (per child under 17)</td><td style={{ padding: '0.75rem' }}>$2,200</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Maximum Traditional/Roth IRA contribution</td><td style={{ padding: '0.75rem' }}>$7,500 (under 50) / $8,600 (50+)</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Maximum SEP IRA contribution</td><td style={{ padding: '0.75rem' }}>25% of compensation up to $72,000</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Maximum SIMPLE IRA contribution</td><td style={{ padding: '0.75rem' }}>$17,000 (under 50) / $21,000 (50+)</td></tr>
              </tbody>
            </table>

            {/* Education */}
            <h3 style={{ color: 'var(--primary-blue)' }}>2026 Education Tax Benefits</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Credit/Deduction</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>American Opportunity Credit (per student)</td><td style={{ padding: '0.75rem' }}>$2,500</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Lifetime Learning Credit (per return)</td><td style={{ padding: '0.75rem' }}>$2,000</td></tr>
                <tr style={{ backgroundColor: 'var(--white)' }}><td style={{ padding: '0.75rem' }}>Student Loan Interest Deduction (per return)</td><td style={{ padding: '0.75rem' }}>$2,500</td></tr>
                <tr style={{ backgroundColor: 'var(--neutral-offwhite)' }}><td style={{ padding: '0.75rem' }}>Coverdell ESA Contribution (per student)</td><td style={{ padding: '0.75rem' }}>$2,000</td></tr>
              </tbody>
            </table>

            <div style={{ 
              backgroundColor: 'var(--neutral-offwhite)', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              marginTop: '2rem',
              borderLeft: '4px solid var(--accent-gold)'
            }}>
              <h3 style={{ marginTop: 0, color: '#000' }}>Need Tax Planning Help?</h3>
              <p style={{ marginBottom: 0, color: '#000' }}>
                Understanding tax rates is just the first step. Our team can help you develop strategies 
                to minimize your tax liability. <Link to="/book-meeting">Schedule a consultation</Link> today.
              </p>
            </div>
          </div>

          <Sidebar showCalendar={false} />
        </div>
      </div>
    </>
  );
};

export default TaxRates;
