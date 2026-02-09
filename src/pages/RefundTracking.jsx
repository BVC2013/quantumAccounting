import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Sidebar from '../components/Sidebar';
import bannerDesk from '../assets/designers-desk-with-coffee-wireframes.jpg';

const RefundTracking = () => {
  const stateRefundLinks = [
    { name: 'Alabama', link: 'https://myalabamataxes.alabama.gov/_/' },
    { name: 'Arizona', link: 'https://azdor.gov/refund-status' },
    { name: 'Arkansas', link: 'https://www.dfa.arkansas.gov/services/individual-income-tax/wheres-my-refund/' },
    { name: 'California', link: 'https://webapp.ftb.ca.gov/refund/login' },
    { name: 'Colorado', link: 'https://tax.colorado.gov/refund' },
    { name: 'Connecticut', link: 'https://portal.ct.gov/DRS/Individuals/Individual-Tax-Page/Where-Is-My-Refund' },
    { name: 'Delaware', link: 'https://revenue.delaware.gov/refund-status/' },
    { name: 'Georgia', link: 'https://dor.georgia.gov/check-my-refund-status' },
    { name: 'Hawaii', link: 'https://tax.hawaii.gov/eservices/' },
    { name: 'Idaho', link: 'https://tax.idaho.gov/i-1023.cfm' },
    { name: 'Illinois', link: 'https://mytax.illinois.gov/_/' },
    { name: 'Indiana', link: 'https://www.in.gov/dor/individual-income-taxes/check-the-status-of-your-refund/' },
    { name: 'Iowa', link: 'https://tax.iowa.gov/wheres-my-refund' },
    { name: 'Kansas', link: 'https://www.kdor.ks.gov/Apps/kcsc/increfundstatus.aspx' },
    { name: 'Kentucky', link: 'https://revenue.ky.gov/Individual/Pages/Refund-Status.aspx' },
    { name: 'Louisiana', link: 'https://www.revenue.louisiana.gov/RefundStatus' },
    { name: 'Maine', link: 'https://portal.maine.gov/refundstatus/refund' },
    { name: 'Maryland', link: 'https://interactive.marylandtaxes.gov/INDIV/refundstatus/home.aspx' },
    { name: 'Massachusetts', link: 'https://mtc.dor.state.ma.us/mtc/_/' },
    { name: 'Michigan', link: 'https://www.michigan.gov/taxes/iit/refund' },
    { name: 'Minnesota', link: 'https://www.revenue.state.mn.us/wheres-my-refund' },
    { name: 'Mississippi', link: 'https://tap.dor.ms.gov/' },
    { name: 'Missouri', link: 'https://mytax.mo.gov/rptp/portal/home/return-tracker/' },
    { name: 'Montana', link: 'https://tap.dor.mt.gov/' },
    { name: 'Nebraska', link: 'https://revenue.nebraska.gov/individuals/your-income-tax-refund' },
    { name: 'New Jersey', link: 'https://www.state.nj.us/treasury/taxation/refinfo.shtml' },
    { name: 'New Mexico', link: 'https://tap.state.nm.us/tap/_/' },
    { name: 'New York', link: 'https://www.tax.ny.gov/pit/file/refund.htm' },
    { name: 'North Carolina', link: 'https://www.ncdor.gov/taxes-forms/wheres-my-refund' },
    { name: 'North Dakota', link: 'https://www.tax.nd.gov/refund-status' },
    { name: 'Ohio', link: 'https://tax.ohio.gov/refund-status' },
    { name: 'Oklahoma', link: 'https://www.oktap.tax.ok.gov/OkTAP/Web/_/' },
    { name: 'Oregon', link: 'https://www.oregon.gov/dor/programs/individuals/pages/where-is-my-refund.aspx' },
    { name: 'Pennsylvania', link: 'https://www.revenue.pa.gov/OnlineServices/PersonalIncomeTaxe-Services/WhereIsMyRefund/Pages/default.aspx' },
    { name: 'Rhode Island', link: 'https://www.ri.gov/taxation/refund/' },
    { name: 'South Carolina', link: 'https://dor.sc.gov/refund-status' },
    { name: 'Utah', link: 'https://tax.utah.gov/refund' },
    { name: 'Vermont', link: 'https://tax.vermont.gov/individuals/file-and-pay/check-refund-status' },
    { name: 'Virginia', link: 'https://www.tax.virginia.gov/wheres-my-refund' },
    { name: 'West Virginia', link: 'https://mytaxes.wvtax.gov/_/' },
    { name: 'Wisconsin', link: 'https://www.revenue.wi.gov/Pages/Refunds/home.aspx' },
  ];

  return (
    <>
      <PageBanner
        title="Track Your Refund"
        subtitle="Check the status of your federal and state tax refunds."
        backgroundImage={bannerDesk}
      />
      <div className="page-content container">
        <div className="two-column">
          <div>
            <h2>When Will You Receive Your Refund?</h2>
            <p>
              The answer depends on how you filed your return. The IRS should issue your refund check 
              within six to eight weeks of filing a paper return. If you chose to receive your refund 
              through direct deposit, you should receive it within a week. If you use e-file, your 
              refund should be issued between two and three weeks.
            </p>
            <p>
              You can check on the status of your refund by clicking on the links below.
            </p>

            {/* Federal Refund */}
            <div style={{ 
              backgroundColor: 'var(--primary-navy)', 
              color: 'white',
              padding: '2rem', 
              borderRadius: '8px', 
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ marginTop: 0, color: 'white', fontSize: '1.5rem' }}>Check Your Federal Refund</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Use the IRS "Where's My Refund?" tool to check the status of your federal tax refund.
              </p>
              <a 
                href="https://www.irs.gov/refunds" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  backgroundColor: 'var(--accent-gold)', 
                  color: 'var(--primary-navy)',
                  fontWeight: 'bold',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem'
                }}
              >
                Check Federal Refund Status →
              </a>
            </div>

            {/* State Refunds */}
            <h3 style={{ color: 'var(--primary-blue)', marginTop: '3rem' }}>Check Your State Refund</h3>
            <p>Select your state below to check your state tax refund status:</p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
              gap: '0.5rem',
              marginTop: '1.5rem'
            }}>
              {stateRefundLinks.map((state, index) => (
                <a
                  key={index}
                  href={state.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.75rem',
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--white)';
                    e.currentTarget.style.color = 'var(--primary-blue)';
                  }}
                >
                  {state.name}
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
              <h3 style={{ marginTop: 0, color: '#000' }}>Refund Taking Longer Than Expected?</h3>
              <p style={{ marginBottom: 0, color: '#000' }}>
                Some returns require additional review, which can delay refunds. If you have questions 
                about your refund status or need assistance, <Link to="/contact">contact our team</Link> for help.
              </p>
            </div>
          </div>

          <Sidebar showCalendar={false} />
        </div>
      </div>
    </>
  );
};

export default RefundTracking;
