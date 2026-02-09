import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import bannerDesk from '../assets/designers-desk-with-coffee-wireframes.jpg';

const StateTaxForms = () => {
  const states = [
    { name: 'Alabama', link: 'https://revenue.alabama.gov/' },
    { name: 'Alaska', link: 'https://tax.alaska.gov/programs/forms.aspx' },
    { name: 'Arizona', link: 'https://azdor.gov/forms' },
    { name: 'Arkansas', link: 'https://www.dfa.arkansas.gov/services/category/taxes/' },
    { name: 'California', link: 'https://www.ftb.ca.gov/' },
    { name: 'Colorado', link: 'https://tax.colorado.gov/' },
    { name: 'Connecticut', link: 'https://drs.ct.gov/eservices/_/' },
    { name: 'Delaware', link: 'http://revenue.delaware.gov/' },
    { name: 'Florida', link: 'http://floridarevenue.com/Pages/forms_index.aspx' },
    { name: 'Georgia', link: 'http://dor.georgia.gov/' },
    { name: 'Hawaii', link: 'http://tax.hawaii.gov/' },
    { name: 'Idaho', link: 'https://tax.idaho.gov/forms-guides/' },
    { name: 'Illinois', link: 'https://www2.illinois.gov/rev/Pages/default.aspx' },
    { name: 'Indiana', link: 'http://www.in.gov/dor/3489.htm' },
    { name: 'Iowa', link: 'https://tax.iowa.gov/' },
    { name: 'Kansas', link: 'http://www.ksrevenue.org/forms.html' },
    { name: 'Kentucky', link: 'https://revenue.ky.gov/Pages/index.aspx' },
    { name: 'Louisiana', link: 'https://revenue.louisiana.gov/tax-forms/' },
    { name: 'Maine', link: 'https://www.maine.gov/revenue/' },
    { name: 'Maryland', link: 'https://interactive.marylandtaxes.gov/Individuals/iFile_ChooseForm/default.asp' },
    { name: 'Massachusetts', link: 'http://www.mass.gov/dor/forms/' },
    { name: 'Michigan', link: 'http://www.michigan.gov/treasury' },
    { name: 'Minnesota', link: 'https://www.revenue.state.mn.us/minnesota-department-revenue' },
    { name: 'Mississippi', link: 'http://www.dor.ms.gov/Pages/default.aspx' },
    { name: 'Missouri', link: 'http://dor.mo.gov/' },
    { name: 'Montana', link: 'https://revenue.mt.gov/forms/' },
    { name: 'Nebraska', link: 'http://www.revenue.state.ne.us/tax/current/current.html' },
    { name: 'Nevada', link: 'http://tax.nv.gov/Forms/' },
    { name: 'New Hampshire', link: 'https://www.revenue.nh.gov/forms/index.htm' },
    { name: 'New Jersey', link: 'https://www.nj.gov/treasury/taxation/' },
    { name: 'New Mexico', link: 'http://www.tax.newmexico.gov/forms-publications.aspx' },
    { name: 'New York', link: 'http://www.tax.ny.gov/forms/' },
    { name: 'North Carolina', link: 'http://www.dor.state.nc.us/forms/' },
    { name: 'North Dakota', link: 'http://www.nd.gov/tax/' },
    { name: 'Ohio', link: 'http://www.tax.ohio.gov/Forms.aspx' },
    { name: 'Oklahoma', link: 'http://www.ok.gov/tax' },
    { name: 'Oregon', link: 'https://www.oregon.gov/dor/forms/pages/default.aspx' },
    { name: 'Pennsylvania', link: 'https://www.revenue.pa.gov/LookingFor/TaxForms-Info/Pages/default.aspx' },
    { name: 'Rhode Island', link: 'https://tax.ri.gov/' },
    { name: 'South Carolina', link: 'http://www.sctax.org/tax/index' },
    { name: 'South Dakota', link: 'https://dor.sd.gov/' },
    { name: 'Tennessee', link: 'http://www.tn.gov/revenue/' },
    { name: 'Texas', link: 'http://comptroller.texas.gov/taxes/' },
    { name: 'Utah', link: 'http://tax.utah.gov/forms/' },
    { name: 'Vermont', link: 'http://tax.vermont.gov/' },
    { name: 'Virginia', link: 'http://www.tax.virginia.gov/content/forms' },
    { name: 'Washington', link: 'https://dor.wa.gov/' },
    { name: 'Washington DC', link: 'http://otr.cfo.dc.gov/page/tax-forms-and-publications' },
    { name: 'West Virginia', link: 'http://tax.wv.gov/Pages/default.aspx' },
    { name: 'Wisconsin', link: 'https://www.revenue.wi.gov/Pages/Home.aspx' },
    { name: 'Wyoming', link: 'https://revenue.wyo.gov/home' },
  ];

  return (
    <>
      <PageBanner
        title="State Tax Forms"
        subtitle="Quick access to tax forms and resources for all 50 states."
        backgroundImage={bannerDesk}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>Access Your State Tax Forms</h2>
            <p>
              Click on your state below to access official tax forms, instructions, and filing information 
              directly from your state's Department of Revenue or Tax Agency.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
              gap: '0.75rem',
              marginTop: '2rem'
            }}>
              {states.map((state, index) => (
                <a
                  key={index}
                  href={state.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-navy)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--white)';
                    e.currentTarget.style.color = 'var(--primary-blue)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {state.name} Tax Forms
                </a>
              ))}
            </div>

            <div style={{ 
              backgroundColor: 'var(--neutral-offwhite)', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              marginTop: '3rem',
              borderLeft: '4px solid var(--accent-gold)'
            }}>
              <h3 style={{ marginTop: 0, color: '#000' }}>Need Help With State Taxes?</h3>
              <p style={{ marginBottom: 0, color: '#000' }}>
                State tax laws vary significantly. Our team can help ensure you're compliant with your 
                state's requirements and taking advantage of all available deductions. 
                <Link to="/contact"> Contact us</Link> for assistance.
              </p>
            </div>
          </div>

          <Sidebar showCalendar={false} />
        </div>
      </div>
    </>
  );
};

export default StateTaxForms;
