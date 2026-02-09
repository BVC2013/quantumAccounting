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
      ],
    },
    {
      label: 'Business Services',
      path: '/services-business',
      dropdown: [
        { label: 'Business Services Overview', path: '/services-business' },
        { label: 'Bookkeeping Services', path: '/bookkeeping' },
        { label: 'Fractional CFO Services', path: '/fractional-cfo' },
        { label: 'Audit, Review & Compilation', path: '/audits-reviews' },
        { label: 'Cash Flow Management', path: '/cash-flow-management' },
        { label: 'Centralized Invoice Processing', path: '/invoice-processing' },
        { label: 'IPO Readiness Services', path: '/ipo-readiness' },
        { label: 'Business Tax Preparation', path: '/tax-preparation-business' },
        { label: 'Tax Strategies', path: '/tax-strategies-business' },
        { label: 'Internal Control Services', path: '/internal-controls' },
        { label: 'QuickBooks Services', path: '/quickbooks-services' },
      ],
    },
    {
      label: 'Individual Services',
      path: '/services-individuals',
      dropdown: [
        { label: 'Individual Services Overview', path: '/services-individuals' },
        { label: 'Tax Planning & Strategy', path: '/tax-planning' },
        { label: 'Tax Preparation', path: '/tax-preparation-individual' },
        { label: 'Family Wealth & Estate Planning', path: '/estate-planning' },
      ],
    },
    {
      label: 'Tax Services',
      path: '/tax-services',
      dropdown: [
        { label: 'Tax Services Overview', path: '/tax-services' },
        { label: 'Business Tax Services', path: '#', isHeader: true },
        { label: 'Business Tax Strategies', path: '/tax-strategies-business' },
        { label: 'Individual Tax Services', path: '#', isHeader: true },
        { label: 'Tax Preparation', path: '/tax-preparation-individual' },
        { label: 'Tax Planning & Strategy', path: '/tax-planning' },
        { label: 'Tax Relief & Audit Support', path: '#', isHeader: true },
        { label: 'Tax Relief Overview', path: '/tax-relief' },
        { label: 'IRS Representation & Audit Support', path: '/irs-audit-support' },
        { label: 'Tax Debt Resolution', path: '/tax-debt-resolution' },
        { label: 'IRS Representation & Audit Defense', path: '/audit-defense' },
      ],
    },
    {
      label: 'Industries',
      path: '/industries',
      dropdown: [
        { label: 'Industries Overview', path: '/industries' },
        { label: 'Healthcare', path: '/healthcare-accounting' },
        { label: 'Restaurants', path: '/restaurants' },
        { label: 'Dental Practices', path: '/dentists' },
        { label: 'Retail', path: '/retail' },
        { label: 'Construction', path: '/construction' },
        { label: 'Law Firms', path: '/law-firms' },
      ],
    },
    {
      label: 'IT & Governance',
      path: '/it-services',
      dropdown: [
        { label: 'IT Services Overview', path: '/it-services' },
        { label: 'AI & AI Regulatory Governance', path: '/ai-governance' },
        { label: 'Data Governance', path: '/data-governance' },
        { label: 'Digital Enablement & IT Governance', path: '/digital-enablement' },
        { label: 'IT Service Delivery Framework', path: '/delivery-framework' },
        { label: 'IT Strategy & Enterprise Risk Management', path: '/enterprise-it-governance' },
        { label: 'System Implementation Assurance', path: '/system-implementation' },
        { label: 'Third Party & Vendor Risk Management', path: '/vendor-risk-management' },
        { label: 'Cloud Governance', path: '/cloud-governance' },
        { label: 'IT General Controls & Cybersecurity', path: '/it-controls-cybersecurity' },
        { label: 'Privacy & Data Protection', path: '/privacy-data-protection' },
        { label: 'Software Asset Management (SAM)', path: '/software-asset-management' },
        { label: 'System Implementation - QA Testing', path: '/qa-testing' },
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
