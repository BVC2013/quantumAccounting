import { Link, useLocation } from 'react-router-dom';

// Map of paths to their parent categories and display names
const pathConfig = {
  // Individual Services
  '/services-individuals': { parent: null, label: 'Individual Services' },
  '/tax-preparation-individual': { parent: '/services-individuals', label: 'Tax Preparation' },
  '/tax-planning': { parent: '/services-individuals', label: 'Tax Planning' },
  '/tax-strategies-individual': { parent: '/services-individuals', label: 'Tax Strategies' },
  '/estate-planning': { parent: '/services-individuals', label: 'Estate Planning' },
  '/estate-trust-tax': { parent: '/services-individuals', label: 'Estate & Trust Tax' },
  '/life-events': { parent: '/services-individuals', label: 'Life Events' },
  '/investment-strategies': { parent: '/services-individuals', label: 'Investment Strategies' },
  '/financial-guides': { parent: '/services-individuals', label: 'Financial Guides' },
  '/financial-calculators': { parent: '/services-individuals', label: 'Financial Calculators' },
  '/cryptocurrency-accounting': { parent: '/services-individuals', label: 'Cryptocurrency Accounting' },
  
  // Tax Relief (under Individual Services)
  '/tax-relief': { parent: '/services-individuals', label: 'Tax Relief' },
  '/irs-audit-support': { parent: '/tax-relief', label: 'IRS Audit Support' },
  '/unfiled-returns': { parent: '/tax-relief', label: 'Unfiled Returns' },
  '/back-taxes': { parent: '/tax-relief', label: 'Back Taxes' },
  '/liens-levies': { parent: '/tax-relief', label: 'Liens & Levies' },
  '/wage-garnishment': { parent: '/tax-relief', label: 'Wage Garnishment' },
  '/irs-seizures': { parent: '/tax-relief', label: 'IRS Seizures' },
  '/payment-plans': { parent: '/tax-relief', label: 'Payment Plans' },
  '/offer-in-compromise': { parent: '/tax-relief', label: 'Offer in Compromise' },
  '/bankruptcy-options': { parent: '/tax-relief', label: 'Bankruptcy Options' },
  '/innocent-spouse-relief': { parent: '/tax-relief', label: 'Innocent Spouse Relief' },
  '/payroll-tax-issues': { parent: '/tax-relief', label: 'Payroll Tax Issues' },
  
  // Business Services
  '/services-business': { parent: null, label: 'Business Services' },
  '/small-business-accounting': { parent: '/services-business', label: 'Small Business Accounting' },
  '/bookkeeping': { parent: '/services-business', label: 'Bookkeeping' },
  '/payroll': { parent: '/services-business', label: 'Payroll Services' },
  '/audits-reviews': { parent: '/services-business', label: 'Audits & Reviews' },
  '/cash-flow-management': { parent: '/services-business', label: 'Cash Flow Management' },
  '/business-advisory': { parent: '/services-business', label: 'Business Advisory' },
  '/financial-planning-business': { parent: '/services-business', label: 'Financial Planning' },
  '/new-business-formation': { parent: '/services-business', label: 'New Business Formation' },
  '/nonprofit': { parent: '/services-business', label: 'Non-Profit Organizations' },
  '/internal-controls': { parent: '/services-business', label: 'Internal Controls' },
  '/tax-preparation-business': { parent: '/services-business', label: 'Business Tax Preparation' },
  '/tax-strategies-business': { parent: '/services-business', label: 'Tax Strategies' },
  
  // QuickBooks
  '/quickbooks-services': { parent: '/services-business', label: 'QuickBooks Services' },
  '/why-quickbooks': { parent: '/quickbooks-services', label: 'Why QuickBooks' },
  '/quickbooks-setup': { parent: '/quickbooks-services', label: 'QuickBooks Setup' },
  '/quickbooks-training': { parent: '/quickbooks-services', label: 'QuickBooks Training' },
  '/quickbooks-tuneup': { parent: '/quickbooks-services', label: 'QuickBooks Tune-Up' },
  
  // Industries
  '/industries': { parent: '/services-business', label: 'Industries' },
  '/construction': { parent: '/industries', label: 'Construction' },
  '/healthcare': { parent: '/industries', label: 'Healthcare' },
  '/dentists': { parent: '/industries', label: 'Dental Practices' },
  '/hospitality': { parent: '/industries', label: 'Hospitality' },
  '/law-firms': { parent: '/industries', label: 'Law Firms' },
  '/manufacturing': { parent: '/industries', label: 'Manufacturing' },
  '/real-estate': { parent: '/industries', label: 'Real Estate' },
  
  // Tax Center
  '/tax-center': { parent: null, label: 'Tax Center' },
  '/refund-tracking': { parent: '/tax-center', label: 'Track Your Refund' },
  '/tax-due-dates': { parent: '/tax-center', label: 'Tax Due Dates' },
  '/tax-rates': { parent: '/tax-center', label: 'Tax Rates' },
  '/irs-forms': { parent: '/tax-center', label: 'IRS Forms' },
  '/state-tax-forms': { parent: '/tax-center', label: 'State Tax Forms' },
  '/record-retention': { parent: '/tax-center', label: 'Record Retention' },
  '/irs-record-retrieval': { parent: '/tax-center', label: 'IRS Record Retrieval' },
  
  // About / Company
  '/about': { parent: null, label: 'About Us' },
  '/our-values': { parent: '/about', label: 'Our Values' },
  '/contact': { parent: '/about', label: 'Contact Us' },
  '/book-meeting': { parent: '/about', label: 'Book a Meeting' },
  '/faq': { parent: '/about', label: 'FAQ' },
  '/blog': { parent: '/about', label: 'Blog' },
  '/newsletter': { parent: '/about', label: 'Newsletter' },
  
  // Resources
  '/resources': { parent: null, label: 'Resources' },
  '/business-strategies': { parent: '/resources', label: 'Business Strategies' },
  
  // Legal
  '/privacy-policy': { parent: null, label: 'Privacy Policy' },
  '/disclaimer': { parent: null, label: 'Disclaimer' },
  '/security-measures': { parent: null, label: 'Security Measures' },
  '/sitemap': { parent: null, label: 'Sitemap' },
  
  // Services overview
  '/services': { parent: null, label: 'Our Services' },
  '/tax-services': { parent: '/services', label: 'Tax Services' },
};

const Breadcrumb = ({ currentTitle }) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Don't show breadcrumb on home page
  if (path === '/') return null;
  
  // Build breadcrumb trail
  const buildTrail = () => {
    const trail = [];
    let currentPath = path;
    
    // Add current page
    const currentConfig = pathConfig[currentPath];
    if (currentConfig) {
      trail.unshift({ path: currentPath, label: currentConfig.label });
      
      // Walk up the parent chain
      let parentPath = currentConfig.parent;
      while (parentPath && pathConfig[parentPath]) {
        trail.unshift({ path: parentPath, label: pathConfig[parentPath].label });
        parentPath = pathConfig[parentPath].parent;
      }
    } else {
      // Fallback for unmapped pages
      trail.unshift({ path: currentPath, label: currentTitle || 'Current Page' });
    }
    
    // Always start with Home
    trail.unshift({ path: '/', label: 'Home' });
    
    return trail;
  };
  
  const trail = buildTrail();
  
  return (
    <nav className="breadcrumb-bar">
      <div className="container">
        <ol className="breadcrumb-list">
          {trail.map((item, index) => (
            <li key={item.path} className="breadcrumb-item">
              {index < trail.length - 1 ? (
                <>
                  <Link to={item.path}>{item.label}</Link>
                  <span className="breadcrumb-separator">›</span>
                </>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
