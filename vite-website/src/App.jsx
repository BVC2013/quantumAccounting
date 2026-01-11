import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TaxServices from './pages/TaxServices';
import Contact from './pages/Contact';
import BookMeeting from './pages/BookMeeting';
import GenericPage from './pages/GenericPage';
import './index.css';

// Import banner images from assets
import bannerTeamMeeting from './assets/business-team-meeting-boardroom.jpg';
import bannerTeamwork from './assets/teamwork-makes-the-dream-work.jpg';
import bannerTechMeeting from './assets/tech-meeting-flatlay.jpg';
import bannerLaptopNotes from './assets/taking-notes-and-working-on-laptop.jpg';
import bannerMacbook from './assets/macbook-air-on-desk.jpg';
import bannerTablet from './assets/tablet-coffee.jpg';
import bannerPlanning from './assets/designer-drawing-website-mockup.jpg';
import bannerDesk from './assets/designers-desk-with-coffee-wireframes.jpg';
import bannerReviewing from './assets/female-designer-reviewing-wireframes.jpg';
import bannerFeedback from './assets/feedback-for-web-design-mockups.jpg';
import bannerSecurity from './assets/username-and-password-prompt.jpg';

// Page data for generic pages
const pageData = {
  ourValues: {
    title: 'Our Values',
    description: 'At Quantum Accounting Advisory, our values guide everything we do.',
    backgroundImage: bannerTeamwork,
    sections: [
      { title: 'Integrity', content: 'We operate with complete honesty and transparency in all our dealings.' },
      { title: 'Excellence', content: 'We strive for the highest standards in every service we provide.' },
      { title: 'Client Focus', content: 'Your success is our priority. We listen, understand, and deliver solutions tailored to your needs.' },
      { title: 'Innovation', content: 'We embrace modern technology and methods to serve you better.' },
      { title: 'Accessibility', content: "We're here when you need us, providing year-round support and guidance." },
    ],
    relatedPages: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Services', path: '/services' },
    ],
  },
  servicesIndividuals: {
    title: 'Services for Individuals',
    description: 'Personalized accounting, tax, and financial services tailored to your unique needs and goals.',
    backgroundImage: bannerReviewing,
    sections: [
      { title: 'Tax Preparation', content: 'Professional preparation of your federal and state tax returns, ensuring accuracy and maximizing your refund.' },
      { title: 'Tax Planning', content: 'Year-round strategies to minimize your tax liability and keep more of what you earn.' },
      { title: 'Estate Planning', content: 'Guidance on preserving wealth and planning for the future of your family.' },
      { title: 'Financial Guidance', content: 'Personal financial advice to help you achieve your short and long-term goals.' },
    ],
    relatedPages: [
      { label: 'Tax Preparation', path: '/tax-preparation-individual' },
      { label: 'Estate Planning', path: '/estate-planning' },
      { label: 'Tax Planning', path: '/tax-planning' },
    ],
  },
  servicesBusiness: {
    title: 'Business Services',
    description: 'Complete accounting and financial services to help your business thrive.',
    backgroundImage: bannerTeamMeeting,
    sections: [
      { title: 'Bookkeeping', content: 'Accurate, timely bookkeeping to keep your finances organized and your business running smoothly.' },
      { title: 'Payroll Services', content: 'Comprehensive payroll processing, tax filings, and compliance management.' },
      { title: 'Financial Statements', content: 'Professional preparation of income statements, balance sheets, and cash flow statements.' },
      { title: 'Business Advisory', content: 'Strategic guidance to help you grow your business and achieve your goals.' },
    ],
    relatedPages: [
      { label: 'Small Business Accounting', path: '/small-business-accounting' },
      { label: 'Bookkeeping', path: '/bookkeeping' },
      { label: 'Payroll', path: '/payroll' },
    ],
  },
  taxRelief: {
    title: 'Tax Relief Services',
    description: "Facing IRS issues? We're here to help you resolve tax problems and get back on track.",
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'IRS Audit Support', content: 'Professional representation during IRS audits to protect your interests.' },
      { title: 'Back Taxes', content: 'Resolution strategies for unfiled returns and unpaid tax balances.' },
      { title: 'Payment Plans', content: 'Negotiate affordable installment agreements with the IRS.' },
      { title: 'Offer in Compromise', content: 'Settle your tax debt for less than you owe when you qualify.' },
      { title: 'Liens & Levies', content: 'Remove or reduce IRS liens and levies on your property and wages.' },
    ],
    relatedPages: [
      { label: 'IRS Audit Support', path: '/irs-audit-support' },
      { label: 'Back Taxes', path: '/back-taxes' },
      { label: 'Payment Plans', path: '/payment-plans' },
    ],
  },
  quickbooksServices: {
    title: 'QuickBooks Services',
    description: 'Expert QuickBooks setup, training, and support to streamline your accounting.',
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'Why QuickBooks?', content: 'QuickBooks is the leading small business accounting software, and we help you get the most from it.' },
      { title: 'Setup & Configuration', content: 'Professional setup tailored to your business needs and industry.' },
      { title: 'Training', content: 'Comprehensive training so you and your team can use QuickBooks confidently.' },
      { title: 'Tune-Up Services', content: 'Clean up your existing QuickBooks file and optimize it for accuracy.' },
    ],
    relatedPages: [
      { label: 'QuickBooks Setup', path: '/quickbooks-setup' },
      { label: 'QuickBooks Training', path: '/quickbooks-training' },
      { label: 'QuickBooks Tune-Up', path: '/quickbooks-tuneup' },
    ],
  },
  industries: {
    title: 'Industry Specialties',
    description: 'We provide specialized accounting and tax services tailored to your industry.',
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Construction', content: 'Job costing, progress billing, and compliance for contractors and builders.' },
      { title: 'Healthcare', content: 'Specialized accounting for medical practices and healthcare providers.' },
      { title: 'Legal', content: 'Trust accounting, billing, and financial management for law firms.' },
      { title: 'Real Estate', content: 'Property accounting, 1031 exchanges, and investment analysis.' },
      { title: 'Hospitality', content: 'Restaurant and hotel accounting, inventory, and financial analysis.' },
      { title: 'Manufacturing', content: 'Cost accounting, inventory management, and financial reporting.' },
    ],
    relatedPages: [
      { label: 'Construction', path: '/construction' },
      { label: 'Healthcare', path: '/healthcare' },
      { label: 'Real Estate', path: '/real-estate' },
    ],
  },
  taxCenter: {
    title: 'Tax Center',
    description: 'Your one-stop resource for tax information, forms, and tools.',
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Track Your Refund', content: "Check the status of your federal and state tax refunds." },
      { title: 'Tax Due Dates', content: 'Important deadlines for filing and payment throughout the year.' },
      { title: 'Tax Rates', content: 'Current federal and state tax rates and brackets.' },
      { title: 'IRS Forms', content: 'Access commonly needed IRS forms and publications.' },
      { title: 'Record Retention', content: 'Guidelines on how long to keep your tax documents.' },
    ],
    relatedPages: [
      { label: 'Refund Tracking', path: '/refund-tracking' },
      { label: 'Tax Due Dates', path: '/tax-due-dates' },
      { label: 'Tax Rates', path: '/tax-rates' },
    ],
  },
  resources: {
    title: 'Resources',
    description: 'Helpful guides, tools, and information to support your financial success.',
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Financial Guides', content: 'In-depth guides on various financial and tax topics.' },
      { title: 'Newsletter', content: 'Stay informed with our regular updates on tax and financial news.' },
      { title: 'Calculators', content: 'Interactive tools to help with financial planning.' },
      { title: 'FAQs', content: 'Answers to commonly asked questions about our services.' },
    ],
    relatedPages: [
      { label: 'Newsletter', path: '/newsletter' },
      { label: 'Financial Guides', path: '/financial-guides' },
      { label: 'FAQs', path: '/faq' },
    ],
  },
};

// Simple pages that use GenericPage with minimal content
// Simple pages that use GenericPage with minimal content
const simplePages = {
  estatePlanning: { title: 'Estate Planning', description: 'Protect your legacy and provide for your loved ones with comprehensive estate planning services.', backgroundImage: bannerPlanning },
  smallBusinessAccounting: { title: 'Small Business Accounting', description: 'Complete accounting solutions designed specifically for small businesses.', backgroundImage: bannerTeamMeeting },
  bookkeeping: { title: 'Bookkeeping Services', description: 'Accurate, timely bookkeeping to keep your business finances organized.', backgroundImage: bannerLaptopNotes },
  payroll: { title: 'Payroll Services', description: 'Comprehensive payroll processing, tax filings, and compliance management.', backgroundImage: bannerTeamMeeting },
  auditsReviews: { title: 'Audits, Reviews & Compilations', description: 'Professional assurance services for your financial statements.', backgroundImage: bannerFeedback },
  cashFlowManagement: { title: 'Cash Flow Management', description: 'Strategies to optimize your cash flow and improve business health.', backgroundImage: bannerPlanning },
  businessAdvisory: { title: 'Business Advisory', description: 'Strategic guidance to help your business grow and succeed.', backgroundImage: bannerTeamMeeting },
  financialPlanningBusiness: { title: 'Financial Planning for Business', description: 'Long-term financial strategies for business success.', backgroundImage: bannerPlanning },
  newBusinessFormation: { title: 'New Business Formation', description: 'Guidance on entity selection, formation, and startup accounting.', backgroundImage: bannerTeamwork },
  nonprofit: { title: 'Non-Profit Organizations', description: 'Specialized accounting and compliance services for non-profits.', backgroundImage: bannerTeamwork },
  internalControls: { title: 'Internal Controls', description: 'Protect your business with effective internal control systems.', backgroundImage: bannerSecurity },
  taxPreparationIndividual: { title: 'Individual Tax Preparation', description: 'Professional preparation of your personal tax returns.', backgroundImage: bannerLaptopNotes },
  taxPreparationBusiness: { title: 'Business Tax Preparation', description: 'Expert preparation of business tax returns for all entity types.', backgroundImage: bannerLaptopNotes },
  taxPlanning: { title: 'Tax Planning', description: 'Year-round strategies to minimize your tax liability.', backgroundImage: bannerPlanning },
  estateTrustTax: { title: 'Estate & Trust Tax Services', description: 'Specialized tax services for estates and trusts.', backgroundImage: bannerPlanning },
  cryptocurrencyAccounting: { title: 'Cryptocurrency Accounting', description: 'Tax guidance for cryptocurrency transactions and investments.', backgroundImage: bannerMacbook },
  irsAuditSupport: { title: 'IRS Audit Support', description: 'Professional representation during IRS examinations.', backgroundImage: bannerLaptopNotes },
  unfiledReturns: { title: 'Unfiled Tax Returns', description: 'Help filing past-due tax returns and getting back into compliance.', backgroundImage: bannerLaptopNotes },
  backTaxes: { title: 'Back Taxes', description: 'Resolution strategies for unpaid tax balances.', backgroundImage: bannerLaptopNotes },
  payrollTaxIssues: { title: 'Payroll Tax Issues', description: 'Resolution of payroll tax problems and penalties.', backgroundImage: bannerLaptopNotes },
  liensLevies: { title: 'Liens & Levies', description: 'Help removing or reducing IRS liens and levies.', backgroundImage: bannerLaptopNotes },
  wageGarnishment: { title: 'Wage Garnishment', description: 'Stop or reduce IRS wage garnishments.', backgroundImage: bannerLaptopNotes },
  irsSeizures: { title: 'IRS Seizures', description: 'Protect your property from IRS seizure actions.', backgroundImage: bannerLaptopNotes },
  paymentPlans: { title: 'Payment Plans', description: 'Negotiate affordable installment agreements with the IRS.', backgroundImage: bannerLaptopNotes },
  offerInCompromise: { title: 'Offer in Compromise', description: 'Settle your tax debt for less than you owe.', backgroundImage: bannerLaptopNotes },
  bankruptcyOptions: { title: 'Bankruptcy Options', description: 'Understanding how bankruptcy affects tax debt.', backgroundImage: bannerLaptopNotes },
  innocentSpouseRelief: { title: 'Innocent Spouse Relief', description: "Relief from your spouse's tax liability.", backgroundImage: bannerReviewing },
  whyQuickbooks: { title: 'Why QuickBooks', description: 'Discover why QuickBooks is the right choice for your business.', backgroundImage: bannerMacbook },
  quickbooksSetup: { title: 'QuickBooks Setup', description: 'Professional QuickBooks configuration for your business.', backgroundImage: bannerMacbook },
  quickbooksTraining: { title: 'QuickBooks Training', description: 'Learn to use QuickBooks effectively with our training.', backgroundImage: bannerMacbook },
  quickbooksTuneup: { title: 'QuickBooks Tune-Up', description: 'Clean up and optimize your QuickBooks file.', backgroundImage: bannerMacbook },
  construction: { title: 'Construction Industry', description: 'Specialized accounting for contractors and builders.', backgroundImage: bannerTechMeeting },
  healthcare: { title: 'Healthcare Industry', description: 'Accounting services for medical practices.', backgroundImage: bannerTechMeeting },
  dentists: { title: 'Dental Practices', description: 'Specialized accounting for dental offices.', backgroundImage: bannerTechMeeting },
  hospitality: { title: 'Hospitality Industry', description: 'Accounting for restaurants and hotels.', backgroundImage: bannerTechMeeting },
  lawFirms: { title: 'Law Firms', description: 'Trust accounting and financial services for attorneys.', backgroundImage: bannerTechMeeting },
  manufacturing: { title: 'Manufacturing', description: 'Cost accounting and financial management for manufacturers.', backgroundImage: bannerTechMeeting },
  realEstate: { title: 'Real Estate', description: 'Property accounting and real estate tax services.', backgroundImage: bannerTechMeeting },
  refundTracking: { title: 'Track Your Refund', description: 'Check the status of your tax refund.', backgroundImage: bannerTablet },
  taxDueDates: { title: 'Tax Due Dates', description: 'Important tax filing and payment deadlines.', backgroundImage: bannerDesk },
  taxRates: { title: 'Tax Rates', description: 'Current federal and state tax rates.', backgroundImage: bannerDesk },
  irsForms: { title: 'IRS Forms & Publications', description: 'Access commonly needed tax forms.', backgroundImage: bannerDesk },
  recordRetention: { title: 'Record Retention Guide', description: 'How long to keep your financial records.', backgroundImage: bannerDesk },
  stateTaxForms: { title: 'State Tax Forms', description: 'Links to state tax agency forms.', backgroundImage: bannerDesk },
  newsletter: { title: 'Newsletter', description: 'Subscribe to our financial newsletter.', backgroundImage: bannerDesk },
  financialGuides: { title: 'Financial Guides', description: 'Helpful guides on financial topics.', backgroundImage: bannerDesk },
  lifeEvents: { title: 'Life Events', description: 'Financial guidance for major life changes.', backgroundImage: bannerReviewing },
  businessStrategies: { title: 'Business Strategies', description: 'Strategies for business success.', backgroundImage: bannerPlanning },
  investmentStrategies: { title: 'Investment Strategies', description: 'Guidance on investment planning.', backgroundImage: bannerPlanning },
  faq: { title: 'Frequently Asked Questions', description: 'Answers to common questions.', backgroundImage: bannerFeedback },
  financialCalculators: { title: 'Financial Calculators', description: 'Interactive financial planning tools.', backgroundImage: bannerMacbook },
  clientPortal: { title: 'Client Portal', description: 'Secure access for existing clients.', backgroundImage: bannerSecurity },
  secureUpload: { title: 'Secure File Upload', description: 'Securely send documents to our team.', backgroundImage: bannerSecurity },
  blog: { title: 'Blog', description: 'Latest news and insights on accounting and tax.', backgroundImage: bannerDesk },
  privacyPolicy: { title: 'Privacy Policy', description: 'How we protect your information.', backgroundImage: bannerSecurity },
  disclaimer: { title: 'Disclaimer', description: 'Important legal information.', backgroundImage: bannerDesk },
  securityMeasures: { title: 'Security Measures', description: 'How we keep your data secure.', backgroundImage: bannerSecurity },
  sitemap: { title: 'Sitemap', description: 'Complete list of pages on our website.', backgroundImage: bannerDesk },
  taxStrategiesIndividual: { title: 'Tax Strategies for Individuals', description: 'Smart tax strategies to minimize your personal tax burden.', backgroundImage: bannerReviewing },
  taxStrategiesBusiness: { title: 'Tax Strategies for Business', description: 'Business tax strategies to maximize savings and efficiency.', backgroundImage: bannerPlanning },
  irsRecordRetrieval: { title: 'IRS Record Retrieval', description: 'Get copies of your past tax records from the IRS.', backgroundImage: bannerDesk },
};

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home backgroundImage={bannerDesk} />} />
          <Route path="/about" element={<About backgroundImage={bannerTeamwork} />} />
          <Route path="/services" element={<Services backgroundImage={bannerTeamMeeting} />} />
          <Route path="/tax-services" element={<TaxServices backgroundImage={bannerLaptopNotes} />} />
          <Route path="/contact" element={<Contact backgroundImage={bannerTablet} />} />
          <Route path="/book-meeting" element={<BookMeeting backgroundImage={bannerTablet} />} />
          
          {/* Pages with detailed content */}
          <Route path="/our-values" element={<GenericPage {...pageData.ourValues} />} />
          <Route path="/services-individuals" element={<GenericPage {...pageData.servicesIndividuals} />} />
          <Route path="/services-business" element={<GenericPage {...pageData.servicesBusiness} />} />
          <Route path="/tax-relief" element={<GenericPage {...pageData.taxRelief} />} />
          <Route path="/quickbooks-services" element={<GenericPage {...pageData.quickbooksServices} />} />
          <Route path="/industries" element={<GenericPage {...pageData.industries} />} />
          <Route path="/tax-center" element={<GenericPage {...pageData.taxCenter} />} />
          <Route path="/resources" element={<GenericPage {...pageData.resources} />} />

          {/* Simple pages */}
          <Route path="/estate-planning" element={<GenericPage {...simplePages.estatePlanning} />} />
          <Route path="/small-business-accounting" element={<GenericPage {...simplePages.smallBusinessAccounting} />} />
          <Route path="/bookkeeping" element={<GenericPage {...simplePages.bookkeeping} />} />
          <Route path="/payroll" element={<GenericPage {...simplePages.payroll} />} />
          <Route path="/audits-reviews" element={<GenericPage {...simplePages.auditsReviews} />} />
          <Route path="/cash-flow-management" element={<GenericPage {...simplePages.cashFlowManagement} />} />
          <Route path="/business-advisory" element={<GenericPage {...simplePages.businessAdvisory} />} />
          <Route path="/financial-planning-business" element={<GenericPage {...simplePages.financialPlanningBusiness} />} />
          <Route path="/new-business-formation" element={<GenericPage {...simplePages.newBusinessFormation} />} />
          <Route path="/nonprofit" element={<GenericPage {...simplePages.nonprofit} />} />
          <Route path="/internal-controls" element={<GenericPage {...simplePages.internalControls} />} />
          <Route path="/tax-preparation-individual" element={<GenericPage {...simplePages.taxPreparationIndividual} />} />
          <Route path="/tax-preparation-business" element={<GenericPage {...simplePages.taxPreparationBusiness} />} />
          <Route path="/tax-planning" element={<GenericPage {...simplePages.taxPlanning} />} />
          <Route path="/estate-trust-tax" element={<GenericPage {...simplePages.estateTrustTax} />} />
          <Route path="/cryptocurrency-accounting" element={<GenericPage {...simplePages.cryptocurrencyAccounting} />} />
          <Route path="/irs-audit-support" element={<GenericPage {...simplePages.irsAuditSupport} />} />
          <Route path="/unfiled-returns" element={<GenericPage {...simplePages.unfiledReturns} />} />
          <Route path="/back-taxes" element={<GenericPage {...simplePages.backTaxes} />} />
          <Route path="/payroll-tax-issues" element={<GenericPage {...simplePages.payrollTaxIssues} />} />
          <Route path="/liens-levies" element={<GenericPage {...simplePages.liensLevies} />} />
          <Route path="/wage-garnishment" element={<GenericPage {...simplePages.wageGarnishment} />} />
          <Route path="/irs-seizures" element={<GenericPage {...simplePages.irsSeizures} />} />
          <Route path="/payment-plans" element={<GenericPage {...simplePages.paymentPlans} />} />
          <Route path="/offer-in-compromise" element={<GenericPage {...simplePages.offerInCompromise} />} />
          <Route path="/bankruptcy-options" element={<GenericPage {...simplePages.bankruptcyOptions} />} />
          <Route path="/innocent-spouse-relief" element={<GenericPage {...simplePages.innocentSpouseRelief} />} />
          <Route path="/why-quickbooks" element={<GenericPage {...simplePages.whyQuickbooks} />} />
          <Route path="/quickbooks-setup" element={<GenericPage {...simplePages.quickbooksSetup} />} />
          <Route path="/quickbooks-training" element={<GenericPage {...simplePages.quickbooksTraining} />} />
          <Route path="/quickbooks-tuneup" element={<GenericPage {...simplePages.quickbooksTuneup} />} />
          <Route path="/construction" element={<GenericPage {...simplePages.construction} />} />
          <Route path="/healthcare" element={<GenericPage {...simplePages.healthcare} />} />
          <Route path="/dentists" element={<GenericPage {...simplePages.dentists} />} />
          <Route path="/hospitality" element={<GenericPage {...simplePages.hospitality} />} />
          <Route path="/law-firms" element={<GenericPage {...simplePages.lawFirms} />} />
          <Route path="/manufacturing" element={<GenericPage {...simplePages.manufacturing} />} />
          <Route path="/real-estate" element={<GenericPage {...simplePages.realEstate} />} />
          <Route path="/refund-tracking" element={<GenericPage {...simplePages.refundTracking} />} />
          <Route path="/tax-due-dates" element={<GenericPage {...simplePages.taxDueDates} />} />
          <Route path="/tax-rates" element={<GenericPage {...simplePages.taxRates} />} />
          <Route path="/irs-forms" element={<GenericPage {...simplePages.irsForms} />} />
          <Route path="/record-retention" element={<GenericPage {...simplePages.recordRetention} />} />
          <Route path="/state-tax-forms" element={<GenericPage {...simplePages.stateTaxForms} />} />
          <Route path="/newsletter" element={<GenericPage {...simplePages.newsletter} />} />
          <Route path="/financial-guides" element={<GenericPage {...simplePages.financialGuides} />} />
          <Route path="/life-events" element={<GenericPage {...simplePages.lifeEvents} />} />
          <Route path="/business-strategies" element={<GenericPage {...simplePages.businessStrategies} />} />
          <Route path="/investment-strategies" element={<GenericPage {...simplePages.investmentStrategies} />} />
          <Route path="/faq" element={<GenericPage {...simplePages.faq} />} />
          <Route path="/financial-calculators" element={<GenericPage {...simplePages.financialCalculators} />} />
          <Route path="/client-portal" element={<GenericPage {...simplePages.clientPortal} />} />
          <Route path="/secure-upload" element={<GenericPage {...simplePages.secureUpload} />} />
          <Route path="/blog" element={<GenericPage {...simplePages.blog} />} />
          <Route path="/privacy-policy" element={<GenericPage {...simplePages.privacyPolicy} />} />
          <Route path="/disclaimer" element={<GenericPage {...simplePages.disclaimer} />} />
          <Route path="/security-measures" element={<GenericPage {...simplePages.securityMeasures} />} />
          <Route path="/sitemap" element={<GenericPage {...simplePages.sitemap} />} />
          <Route path="/tax-strategies-individual" element={<GenericPage {...simplePages.taxStrategiesIndividual} />} />
          <Route path="/tax-strategies-business" element={<GenericPage {...simplePages.taxStrategiesBusiness} />} />
          <Route path="/irs-record-retrieval" element={<GenericPage {...simplePages.irsRecordRetrieval} />} />
          
          {/* 404 fallback */}
          <Route path="*" element={
            <GenericPage 
              title="Page Not Found" 
              description="The page you're looking for doesn't exist. Please check the URL or navigate using the menu above."
              showSidebar={false}
            />
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
