import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Page categories - all pages within each category
const pageCategories = {
  about: {
    name: 'About',
    pages: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Values', path: '/our-values' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Book a Meeting', path: '/book-meeting' },
      { label: 'Secure Upload', path: '/secure-upload' },
      { label: 'Newsletter', path: '/newsletter' },
      { label: 'Security Measures', path: '/security-measures' },
    ],
  },
  businessServices: {
    name: 'Business Services',
    pages: [
      { label: 'Services Overview', path: '/services-business' },
      { label: 'Bookkeeping Services', path: '/bookkeeping' },
      { label: 'Fractional CFO Services', path: '/fractional-cfo' },
      { label: 'Audit, Review & Compilation', path: '/audits-reviews' },
      { label: 'Cash Flow Management', path: '/cash-flow-management' },
      { label: 'Centralized Invoice Processing', path: '/invoice-processing' },
      { label: 'IPO Readiness Services', path: '/ipo-readiness' },
      { label: 'Tax Strategies for Business', path: '/tax-strategies-business' },
      { label: 'Internal Control Services', path: '/internal-controls' },
    ],
  },
  individualServices: {
    name: 'Individual Services',
    pages: [
      { label: 'Services Overview', path: '/services-individuals' },
      { label: 'Family Wealth & Estate Planning', path: '/estate-planning' },
      { label: 'Tax Preparation', path: '/tax-preparation-individual' },
      { label: 'Tax Planning & Strategy', path: '/tax-planning' },
    ],
  },
  taxServices: {
    name: 'Tax Services',
    pages: [
      { label: 'Tax Services Overview', path: '/tax-services' },
      { label: 'Tax Relief Overview', path: '/tax-relief' },
      { label: 'Tax Preparation', path: '/tax-preparation-individual' },
      { label: 'Tax Planning & Strategy', path: '/tax-planning' },
      { label: 'IRS Representation & Audit Support', path: '/irs-audit-support' },
      { label: 'Tax Debt Resolution', path: '/tax-debt-resolution' },
      { label: 'IRS Audit Defense', path: '/audit-defense' },
      { label: 'Business Tax Strategies', path: '/tax-strategies-business' },
    ],
  },
  industries: {
    name: 'Industries',
    pages: [
      { label: 'Industries Overview', path: '/industries' },
      { label: 'Healthcare Accounting', path: '/healthcare-accounting' },
      { label: 'Restaurant Services', path: '/restaurants' },
      { label: 'Dental Practice Services', path: '/dentists' },
      { label: 'Retail Accounting', path: '/retail' },
      { label: 'Construction', path: '/construction' },
      { label: 'Law Firms', path: '/law-firms' },
    ],
  },
  itGovernance: {
    name: 'IT & Governance',
    pages: [
      { label: 'IT Services Overview', path: '/it-services' },
      { label: 'AI & AI Regulatory Governance', path: '/ai-governance' },
      { label: 'Data Governance', path: '/data-governance' },
      { label: 'Digital Enablement & IT Governance', path: '/digital-enablement' },
      { label: 'IT Service Delivery Framework', path: '/delivery-framework' },
      { label: 'Strategy & Enterprise IT Governance', path: '/enterprise-it-governance' },
      { label: 'System Implementation Ride Along', path: '/system-implementation' },
      { label: 'Third Party & Vendor Risk Management', path: '/vendor-risk-management' },
      { label: 'Cloud Governance', path: '/cloud-governance' },
      { label: 'IT General Controls & Cybersecurity', path: '/it-controls-cybersecurity' },
      { label: 'Privacy & Data Protection', path: '/privacy-data-protection' },
      { label: 'Software Asset Management (SAM)', path: '/software-asset-management' },
      { label: 'System Implementation - QA Testing', path: '/qa-testing' },
    ],
  },
  resources: {
    name: 'Resources',
    pages: [
      { label: 'Resources Overview', path: '/resources' },
      { label: 'Financial Calculator', path: '/financial-calculators' },
      { label: 'IRS Forms & Publications', path: '/irs-forms' },
      { label: 'Tax Rates', path: '/tax-rates' },
      { label: 'State Tax Forms', path: '/state-tax-forms' },
      { label: 'Track Your Refund', path: '/refund-tracking' },
      { label: 'Tax Due Dates', path: '/tax-due-dates' },
    ],
  },
};

// Function to find category and related pages for current path
const getRelatedPagesForPath = (currentPath) => {
  for (const category of Object.values(pageCategories)) {
    const isInCategory = category.pages.some(page => page.path === currentPath);
    if (isInCategory) {
      // Return all pages in this category except the current page
      return {
        categoryName: category.name,
        pages: category.pages.filter(page => page.path !== currentPath),
      };
    }
  }
  return { categoryName: null, pages: [] };
};

const Sidebar = ({ showBooking = true, showContact = true, showCalendar = true, relatedPages: customRelatedPages = [] }) => {
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const location = useLocation();
  
  // Get related pages based on current path (auto-detected category)
  const { categoryName, pages: autoRelatedPages } = getRelatedPagesForPath(location.pathname);
  
  // Use custom related pages if provided, otherwise use auto-detected ones
  const relatedPages = customRelatedPages.length > 0 ? customRelatedPages : autoRelatedPages;

  return (
    <>
      <div className="sidebar">
        {showBooking && (
          <>
            <h3>Get Started Today</h3>
            <p style={{ color: 'var(--text-dark)' }}>Schedule a consultation to discuss your needs.</p>
            <button
              onClick={() => setShowCalendarModal(true)}
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '1rem', display: 'block', textAlign: 'center', color: '#ffffff', border: 'none', cursor: 'pointer' }}
            >
              Book a Consultation
            </button>
          </>
        )}

        {showContact && (
          <>
            <h3>Contact Us</h3>
            <p style={{ color: 'var(--text-dark)' }}><a href="tel:+15551234567" style={{ color: 'var(--primary-blue)' }}><strong>Phone:</strong> (555) 123-4567</a></p>
            <p style={{ color: 'var(--text-dark)' }}><a href="mailto:hello@quantum-accountant.com" style={{ color: 'var(--primary-blue)' }}><strong>Email:</strong> hello@quantum-accountant.com</a></p>
            <p style={{ color: 'var(--text-dark)' }}>
              <strong>Office Hours:</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: By Appointment
            </p>
          </>
        )}

        {relatedPages.length > 0 && (
          <>
            <h3>{categoryName ? `More in ${categoryName}` : 'Related Pages'}</h3>
            <ul style={{ listStyle: 'none', padding: 0, maxHeight: '300px', overflowY: 'auto' }}>
              {relatedPages.map((page) => (
                <li key={page.path} style={{ margin: '0.5rem 0' }}>
                  <Link to={page.path} style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Calendar embed in sidebar */}
        {showCalendar && (
          <>
            <h3 style={{ marginTop: '1.5rem' }}>Book a Meeting</h3>
            <div
              style={{
                background: 'var(--bg-light)',
                padding: '0.5rem',
                borderRadius: '8px',
                marginTop: '0.5rem',
              }}
            >
              <iframe
                src="https://meetings-na3.hubspot.com/nischal?embed=true"
                title="Schedule a Meeting"
                style={{
                  width: '100%',
                  height: '500px',
                  border: 'none',
                  borderRadius: '8px',
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* Calendar Modal */}
      {showCalendarModal && (
        <div 
          className="calendar-modal-overlay"
          onClick={() => setShowCalendarModal(false)}
        >
          <div 
            className="calendar-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="calendar-modal-header">
              <h2>Book a Consultation</h2>
              <button 
                className="calendar-modal-close"
                onClick={() => setShowCalendarModal(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="calendar-modal-content">
              <iframe
                src="https://meetings-na3.hubspot.com/nischal?embed=true"
                title="Schedule a Meeting"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
