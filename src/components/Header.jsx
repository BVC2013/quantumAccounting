import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      path: '/about',
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Values', path: '/our-values' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Book a Meeting', path: '/book-meeting' },
        { label: 'Secure Upload', path: '/secure-upload' },
        { label: 'Newsletter', path: '/newsletter' },
        { label: 'Security Measures', path: '/security-measures' },
        { label: 'Sitemap', path: '/sitemap' },
      ],
    },
    {
      label: 'Individual Services',
      path: '/services-individuals',
      dropdown: [
        { label: 'Services Overview', path: '/services-individuals' },
        { label: 'Tax Preparation', path: '/tax-preparation-individual' },
        { label: 'Tax Planning', path: '/tax-planning' },
        { label: 'Tax Strategies', path: '/tax-strategies-individual' },
        { label: 'Estate Planning', path: '/estate-planning' },
        { label: 'Estate & Trust Tax', path: '/estate-trust-tax' },
        { label: 'Life Events Planning', path: '/life-events' },
        { label: 'Investment Strategies', path: '/investment-strategies' },
        { label: 'Financial Guides', path: '/financial-guides' },
        { label: 'Financial Calculators', path: '/financial-calculators' },
        { label: 'Cryptocurrency Accounting', path: '/cryptocurrency-accounting' },
        { label: '── Tax Relief ──', path: '/tax-relief', isHeader: true },
        { label: 'Tax Relief Overview', path: '/tax-relief' },
        { label: 'IRS Audit Support', path: '/irs-audit-support' },
        { label: 'Unfiled Returns', path: '/unfiled-returns' },
        { label: 'Back Taxes', path: '/back-taxes' },
        { label: 'Liens & Levies', path: '/liens-levies' },
        { label: 'Wage Garnishment', path: '/wage-garnishment' },
        { label: 'IRS Seizures', path: '/irs-seizures' },
        { label: 'Payment Plans', path: '/payment-plans' },
        { label: 'Offer in Compromise', path: '/offer-in-compromise' },
        { label: 'Innocent Spouse Relief', path: '/innocent-spouse-relief' },
        { label: 'Bankruptcy Options', path: '/bankruptcy-options' },
      ],
    },
    {
      label: 'Business Services',
      path: '/services-business',
      dropdown: [
        { label: 'Services Overview', path: '/services-business' },
        { label: 'Business Tax Preparation', path: '/tax-preparation-business' },
        { label: 'Tax Strategies', path: '/tax-strategies-business' },
        { label: 'Bookkeeping', path: '/bookkeeping' },
        { label: 'CFO Services', path: '/cfo-services' },
        { label: 'Payroll Services', path: '/payroll' },
        { label: 'Cash Flow Management', path: '/cash-flow-management' },
        { label: 'Business Advisory', path: '/business-advisory' },
        { label: 'New Business Formation', path: '/new-business-formation' },
        { label: 'Audits & Reviews', path: '/audits-reviews' },
        { label: 'Internal Controls', path: '/internal-controls' },
        { label: 'Non-Profit Organizations', path: '/nonprofit' },
        { label: '── QuickBooks ──', path: '/quickbooks-services', isHeader: true },
        { label: 'QuickBooks Services', path: '/quickbooks-services' },
        { label: 'Why QuickBooks', path: '/why-quickbooks' },
        { label: 'QuickBooks Setup', path: '/quickbooks-setup' },
        { label: 'QuickBooks Training', path: '/quickbooks-training' },
        { label: 'QuickBooks Tune-Up', path: '/quickbooks-tuneup' },
      ],
    },
    {
      label: 'Industries',
      path: '/industries',
      dropdown: [
        { label: 'Industries Overview', path: '/industries' },
        { label: 'Construction', path: '/construction' },
        { label: 'Restaurants', path: '/restaurants' },
        { label: 'Retail', path: '/retail' },
        { label: 'Manufacturing', path: '/manufacturing' },
        { label: 'Dentists', path: '/dentists' },
        { label: 'Healthcare', path: '/healthcare' },
        { label: 'Real Estate', path: '/real-estate' },
        { label: 'Law Firms', path: '/law-firms' },
      ],
    },
    {
      label: 'Tax Center',
      path: '/tax-center',
      dropdown: [
        { label: 'Tax Center Overview', path: '/tax-center' },
        { label: 'Tax Services', path: '/tax-services' },
        { label: 'Record Retention Guide', path: '/record-retention' },
        { label: 'IRS Record Retrieval', path: '/irs-record-retrieval' },
      ],
    },
    {
      label: 'Resources',
      path: '/resources',
      dropdown: [
        { label: 'Resources Overview', path: '/resources' },
        { label: 'Financial Calculator', path: '/financial-calculators' },
        { label: 'IRS Forms & Publications', path: '/irs-forms' },
        { label: 'Tax Rates', path: '/tax-rates' },
        { label: 'State Tax Forms', path: '/state-tax-forms' },
        { label: 'Track Your Refund', path: '/refund-tracking' },
        { label: 'Tax Due Dates', path: '/tax-due-dates' },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    if (window.innerWidth <= 768) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          <span className="logo-icon">
            <img src="/logo.png" alt="Quantum Accounting Advisory" className="logo-img" />
          </span>
          <span className="logo-text">
            <span>Quantum</span>
            <span>Accounting</span>
            <span>Advisory</span>
          </span>
        </Link>
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li
              key={item.path}
              className={openDropdown === index ? 'dropdown-open' : ''}
            >
              {item.dropdown ? (
                <>
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault();
                        handleDropdownToggle(index);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  <ul className={`dropdown ${item.dropdown.length > 10 ? 'scrollable' : ''}`}>
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.path + subItem.label}>
                        {subItem.isHeader ? (
                          <span className="dropdown-header">{subItem.label}</span>
                        ) : subItem.external ? (
                          <a href={subItem.path} target="_blank" rel="noopener noreferrer">{subItem.label}</a>
                        ) : (
                          <Link to={subItem.path}>{subItem.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
