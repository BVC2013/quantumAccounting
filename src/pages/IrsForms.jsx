import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import bannerDesk from '../assets/designers-desk-with-coffee-wireframes.jpg';

const IrsForms = () => {
  const formCategories = [
    {
      category: 'Individual Tax Forms',
      forms: [
        { number: 'Form 1040', title: 'U.S. Individual Income Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-1040' },
        { number: 'Schedule A', title: 'Itemized Deductions', link: 'https://www.irs.gov/forms-pubs/about-schedule-a-form-1040' },
        { number: 'Schedule B', title: 'Interest and Ordinary Dividends', link: 'https://www.irs.gov/forms-pubs/about-schedule-b-form-1040' },
        { number: 'Schedule C', title: 'Profit or Loss from Business', link: 'https://www.irs.gov/forms-pubs/about-schedule-c-form-1040' },
        { number: 'Schedule D', title: 'Capital Gains and Losses', link: 'https://www.irs.gov/forms-pubs/about-schedule-d-form-1040' },
        { number: 'Schedule E', title: 'Supplemental Income and Loss', link: 'https://www.irs.gov/forms-pubs/about-schedule-e-form-1040' },
        { number: 'Schedule SE', title: 'Self-Employment Tax', link: 'https://www.irs.gov/forms-pubs/about-schedule-se-form-1040' },
        { number: 'Form 1040-ES', title: 'Estimated Tax for Individuals', link: 'https://www.irs.gov/forms-pubs/about-form-1040-es' },
        { number: 'Form 1040-X', title: 'Amended U.S. Individual Income Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-1040x' },
      ]
    },
    {
      category: 'Business Tax Forms',
      forms: [
        { number: 'Form 1065', title: 'U.S. Return of Partnership Income', link: 'https://www.irs.gov/forms-pubs/about-form-1065' },
        { number: 'Form 1120', title: 'U.S. Corporation Income Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-1120' },
        { number: 'Form 1120-S', title: 'U.S. Income Tax Return for an S Corporation', link: 'https://www.irs.gov/forms-pubs/about-form-1120s' },
        { number: 'Schedule K-1 (1065)', title: 'Partner\'s Share of Income, Deductions, Credits', link: 'https://www.irs.gov/forms-pubs/about-schedule-k-1-form-1065' },
        { number: 'Schedule K-1 (1120-S)', title: 'Shareholder\'s Share of Income, Deductions, Credits', link: 'https://www.irs.gov/forms-pubs/about-schedule-k-1-form-1120s' },
        { number: 'Form 940', title: 'Employer\'s Annual Federal Unemployment (FUTA) Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-940' },
        { number: 'Form 941', title: 'Employer\'s Quarterly Federal Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-941' },
        { number: 'Form 944', title: 'Employer\'s Annual Federal Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-944' },
      ]
    },
    {
      category: 'Information Returns',
      forms: [
        { number: 'Form W-2', title: 'Wage and Tax Statement', link: 'https://www.irs.gov/forms-pubs/about-form-w-2' },
        { number: 'Form W-4', title: 'Employee\'s Withholding Certificate', link: 'https://www.irs.gov/forms-pubs/about-form-w-4' },
        { number: 'Form W-9', title: 'Request for Taxpayer Identification Number', link: 'https://www.irs.gov/forms-pubs/about-form-w-9' },
        { number: 'Form 1099-MISC', title: 'Miscellaneous Information', link: 'https://www.irs.gov/forms-pubs/about-form-1099-misc' },
        { number: 'Form 1099-NEC', title: 'Nonemployee Compensation', link: 'https://www.irs.gov/forms-pubs/about-form-1099-nec' },
        { number: 'Form 1099-INT', title: 'Interest Income', link: 'https://www.irs.gov/forms-pubs/about-form-1099-int' },
        { number: 'Form 1099-DIV', title: 'Dividends and Distributions', link: 'https://www.irs.gov/forms-pubs/about-form-1099-div' },
        { number: 'Form 1099-R', title: 'Distributions From Pensions, Annuities, Retirement Plans', link: 'https://www.irs.gov/forms-pubs/about-form-1099-r' },
      ]
    },
    {
      category: 'Estate & Trust Forms',
      forms: [
        { number: 'Form 1041', title: 'U.S. Income Tax Return for Estates and Trusts', link: 'https://www.irs.gov/forms-pubs/about-form-1041' },
        { number: 'Schedule K-1 (1041)', title: 'Beneficiary\'s Share of Income, Deductions, Credits', link: 'https://www.irs.gov/forms-pubs/about-schedule-k-1-form-1041' },
        { number: 'Form 706', title: 'United States Estate Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-706' },
        { number: 'Form 709', title: 'United States Gift Tax Return', link: 'https://www.irs.gov/forms-pubs/about-form-709' },
      ]
    },
  ];

  const publications = [
    {
      category: 'General Tax Guides',
      items: [
        { number: 'Publication 1', title: 'Your Rights As a Taxpayer', link: 'https://www.irs.gov/forms-pubs/about-publication-1' },
        { number: 'Publication 17', title: 'Your Federal Income Tax (For Individuals)', link: 'https://www.irs.gov/forms-pubs/about-publication-17' },
        { number: 'Publication 334', title: 'Tax Guide for Small Business', link: 'https://www.irs.gov/forms-pubs/about-publication-334' },
        { number: 'Publication 509', title: 'Tax Calendars', link: 'https://www.irs.gov/forms-pubs/about-publication-509' },
        { number: 'Publication 554', title: 'Tax Guide for Seniors', link: 'https://www.irs.gov/forms-pubs/about-publication-554' },
      ]
    },
    {
      category: 'Deductions & Credits',
      items: [
        { number: 'Publication 502', title: 'Medical and Dental Expenses', link: 'https://www.irs.gov/forms-pubs/about-publication-502' },
        { number: 'Publication 503', title: 'Child and Dependent Care Expenses', link: 'https://www.irs.gov/forms-pubs/about-publication-503' },
        { number: 'Publication 526', title: 'Charitable Contributions', link: 'https://www.irs.gov/forms-pubs/about-publication-526' },
        { number: 'Publication 529', title: 'Miscellaneous Deductions', link: 'https://www.irs.gov/forms-pubs/about-publication-529' },
        { number: 'Publication 596', title: 'Earned Income Credit', link: 'https://www.irs.gov/forms-pubs/about-publication-596' },
        { number: 'Publication 970', title: 'Tax Benefits for Education', link: 'https://www.irs.gov/forms-pubs/about-publication-970' },
      ]
    },
    {
      category: 'Business & Self-Employment',
      items: [
        { number: 'Publication 15', title: 'Circular E, Employer\'s Tax Guide', link: 'https://www.irs.gov/forms-pubs/about-publication-15' },
        { number: 'Publication 463', title: 'Travel, Entertainment, Gift, and Car Expenses', link: 'https://www.irs.gov/forms-pubs/about-publication-463' },
        { number: 'Publication 535', title: 'Business Expenses', link: 'https://www.irs.gov/forms-pubs/about-publication-535' },
        { number: 'Publication 583', title: 'Starting a Business and Keeping Records', link: 'https://www.irs.gov/forms-pubs/about-publication-583' },
        { number: 'Publication 587', title: 'Business Use of Your Home', link: 'https://www.irs.gov/forms-pubs/about-publication-587' },
        { number: 'Publication 946', title: 'How to Depreciate Property', link: 'https://www.irs.gov/forms-pubs/about-publication-946' },
      ]
    },
    {
      category: 'Investments & Retirement',
      items: [
        { number: 'Publication 550', title: 'Investment Income and Expenses', link: 'https://www.irs.gov/forms-pubs/about-publication-550' },
        { number: 'Publication 551', title: 'Basis of Assets', link: 'https://www.irs.gov/forms-pubs/about-publication-551' },
        { number: 'Publication 560', title: 'Retirement Plans for Small Business', link: 'https://www.irs.gov/forms-pubs/about-publication-560' },
        { number: 'Publication 575', title: 'Pension and Annuity Income', link: 'https://www.irs.gov/forms-pubs/about-publication-575' },
        { number: 'Publication 590-A', title: 'Contributions to IRAs', link: 'https://www.irs.gov/forms-pubs/about-publication-590-a' },
        { number: 'Publication 590-B', title: 'Distributions from IRAs', link: 'https://www.irs.gov/forms-pubs/about-publication-590-b' },
      ]
    },
    {
      category: 'Real Estate',
      items: [
        { number: 'Publication 523', title: 'Selling Your Home', link: 'https://www.irs.gov/forms-pubs/about-publication-523' },
        { number: 'Publication 527', title: 'Residential Rental Property', link: 'https://www.irs.gov/forms-pubs/about-publication-527' },
        { number: 'Publication 530', title: 'Tax Information for Homeowners', link: 'https://www.irs.gov/forms-pubs/about-publication-530' },
        { number: 'Publication 936', title: 'Home Mortgage Interest Deduction', link: 'https://www.irs.gov/forms-pubs/about-publication-936' },
      ]
    },
    {
      category: 'Special Situations',
      items: [
        { number: 'Publication 504', title: 'Divorced or Separated Individuals', link: 'https://www.irs.gov/forms-pubs/about-publication-504' },
        { number: 'Publication 559', title: 'Survivors, Executors and Administrators', link: 'https://www.irs.gov/forms-pubs/about-publication-559' },
        { number: 'Publication 969', title: 'Health Savings Accounts (HSAs)', link: 'https://www.irs.gov/forms-pubs/about-publication-969' },
        { number: 'Publication 3402', title: 'Taxation of Limited Liability Companies', link: 'https://www.irs.gov/forms-pubs/about-publication-3402' },
        { number: 'Publication 4557', title: 'Safeguarding Taxpayer Data', link: 'https://www.irs.gov/forms-pubs/about-publication-4557' },
      ]
    },
  ];

  return (
    <>
      <PageBanner
        title="IRS Forms & Publications"
        backgroundImage={bannerDesk}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Essential Tax Forms & Publications</h2>
            <p>
              Access the IRS forms and publications you need for tax preparation and planning. 
              We've organized the most commonly used resources by category to help you find 
              what you need quickly. All forms link directly to the official IRS website.
            </p>

            <div style={{ 
              backgroundColor: 'var(--neutral-offwhite)', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              marginBottom: '2rem',
              borderLeft: '4px solid var(--accent-gold)'
            }}>
              <h3 style={{ marginTop: 0, color: '#000', fontSize: '1.5rem' }}>📋 Need Help With Your Tax Forms?</h3>
              <p style={{ marginBottom: 0, color: '#000', fontSize: '1.05rem' }}>
                Our experienced team can help you determine which forms you need, ensure accurate 
                completion, and maximize your deductions and credits. <Link to="/contact">Contact us</Link> for 
                professional assistance.
              </p>
            </div>

            <h2 style={{ 
              color: 'var(--primary-navy)', 
              borderBottom: '3px solid var(--accent-gold)', 
              paddingBottom: '0.5rem',
              marginTop: '2rem'
            }}>
              Common IRS Forms
            </h2>

            {formCategories.map((category, index) => (
              <div key={index} style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--primary-blue)' }}>{category.category}</h3>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--primary-navy)', color: 'white' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', width: '25%' }}>Form</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.forms.map((form, i) => (
                      <tr key={i} style={{ 
                        backgroundColor: i % 2 === 0 ? 'var(--white)' : 'var(--neutral-offwhite)',
                        borderBottom: '1px solid #e0e0e0'
                      }}>
                        <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>
                          <a 
                            href={form.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}
                          >
                            {form.number}
                          </a>
                        </td>
                        <td style={{ padding: '0.75rem' }}>{form.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}

            <h2 style={{ 
              color: 'var(--primary-navy)', 
              borderBottom: '3px solid var(--accent-gold)', 
              paddingBottom: '0.5rem',
              marginTop: '3rem'
            }}>
              IRS Publications
            </h2>
            <p>
              IRS publications provide detailed guidance on specific tax topics. These resources 
              can help you understand complex tax rules and ensure you're taking advantage of 
              all available deductions and credits.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              {publications.map((category, index) => (
                <div key={index} style={{
                  backgroundColor: 'var(--white)',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0'
                }}>
                  <h4 style={{ 
                    margin: '0 0 1rem 0', 
                    color: 'var(--primary-navy)',
                    borderBottom: '2px solid var(--accent-gold)',
                    paddingBottom: '0.5rem'
                  }}>
                    {category.category}
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {category.items.map((pub, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}
                        >
                          <strong>{pub.number}:</strong> {pub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ 
              backgroundColor: 'var(--neutral-offwhite)', 
              color: '#000', 
              padding: '2rem', 
              borderRadius: '8px', 
              marginTop: '3rem',
              textAlign: 'center',
              border: '1px solid var(--accent-gold)'
            }}>
              <h3 style={{ marginTop: 0, color: '#000', fontSize: '1.6rem' }}>Need Professional Tax Assistance?</h3>
              <p style={{ color: '#000', fontSize: '1.05rem' }}>
                Don't navigate complex tax forms alone. Our experienced CPAs can ensure 
                accurate filing and help you maximize your tax savings.
              </p>
              <Link to="/contact" className="btn btn-gold" style={{ marginRight: '1rem' }}>
                Contact Us
              </Link>
              <Link to="/book-meeting" className="btn btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </div>

          <Sidebar
            relatedPages={[
              { label: 'State Tax Forms', path: '/state-tax-forms' },
              { label: 'Tax Due Dates', path: '/tax-due-dates' },
              { label: 'Tax Rates', path: '/tax-rates' },
              { label: 'Record Retention Guide', path: '/record-retention' },
              { label: 'Tax Preparation', path: '/tax-preparation-individual' },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default IrsForms;
