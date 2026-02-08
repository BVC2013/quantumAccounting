import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TaxServices from './pages/TaxServices';
import ServicesIndividuals from './pages/ServicesIndividuals';
import ServicesBusiness from './pages/ServicesBusiness';
import TaxReliefOverview from './pages/TaxReliefOverview';
import ItServicesOverview from './pages/ItServicesOverview';
import IndustriesOverview from './pages/IndustriesOverview';
import ResourcesOverview from './pages/ResourcesOverview';
import Contact from './pages/Contact';
import BookMeeting from './pages/BookMeeting';
import GenericPage from './pages/GenericPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FinancialCalculators from './pages/FinancialCalculators';
import IrsForms from './pages/IrsForms';
import './index.css';

// Import content data from DOCX extractions
import { businessServicesContent, individualServicesContent } from './data/serviceContent';
import industriesContent from './data/industriesContent';
import itServicesContent from './data/itServicesContent';

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
      { title: 'Integrity', content: 'We operate with complete honesty and transparency in all our dealings. Your trust is the foundation of our relationship, and we work every day to earn and maintain it through ethical practices, clear communication, and always putting your interests first.' },
      { title: 'Excellence', content: 'We strive for the highest standards in every service we provide. Our team continuously updates their knowledge of tax laws, accounting standards, and industry best practices to deliver exceptional results for every client.' },
      { title: 'Client Focus', content: 'Your success is our priority. We listen carefully to understand your unique situation, goals, and challenges. Then we deliver customized solutions tailored specifically to your needs—not one-size-fits-all advice.' },
      { title: 'Innovation', content: 'We embrace modern technology and methods to serve you better. From secure client portals to cloud-based accounting solutions, we leverage the latest tools to provide efficient, accurate, and convenient service.' },
      { title: 'Accessibility', content: "We're here when you need us, providing year-round support and guidance. Tax and financial questions don't only arise during tax season, and neither should your access to professional advice." },
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
      { title: 'Tax Preparation', content: 'Our experienced tax professionals prepare accurate federal and state returns, identifying every deduction and credit you deserve. We handle all types of individual returns, from simple W-2 filings to complex situations involving investments, rental properties, and self-employment income.' },
      { title: 'Tax Planning', content: "Don't wait until April to think about taxes. Our year-round tax planning strategies help you make smart financial decisions throughout the year, minimizing your tax liability and maximizing your take-home income. We analyze your situation and recommend specific actions to reduce what you owe." },
      { title: 'Estate Planning', content: 'Protect your legacy and provide for your loved ones. We work with you and your legal advisors to develop tax-efficient strategies for wealth transfer, including gift planning, trust strategies, and estate tax minimization.' },
      { title: 'Financial Guidance', content: 'Make informed decisions about your financial future. Whether you\'re planning for retirement, saving for education, or navigating a major life change, we provide clear, actionable advice to help you achieve your goals.' },
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
      { title: 'Bookkeeping', content: 'Accurate, timely bookkeeping is the foundation of sound business decisions. Our team maintains your financial records, reconciles accounts, and provides monthly reports so you always know where your business stands. We work with QuickBooks, Xero, and other leading platforms.' },
      { title: 'Payroll Services', content: 'Payroll is complex and the penalties for mistakes are severe. We handle everything—calculating wages, withholding taxes, issuing payments, filing quarterly returns, and preparing year-end W-2s and 1099s. You focus on your business while we ensure your employees are paid correctly and on time.' },
      { title: 'Financial Statements', content: 'Banks, investors, and partners need reliable financial information. We prepare professional income statements, balance sheets, and cash flow statements that present your business clearly and accurately. Our statements help you secure financing and make strategic decisions.' },
      { title: 'Business Advisory', content: 'Beyond the numbers, we help you build a stronger business. Our advisory services include budgeting and forecasting, profitability analysis, cash flow optimization, and strategic planning. We become your trusted partner in navigating challenges and seizing opportunities.' },
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
      { title: 'IRS Audit Support', content: 'An IRS audit notice can be stressful, but you don\'t have to face it alone. We represent you before the IRS, handle all communications, prepare documentation, and work to achieve the best possible outcome. Our experience with IRS procedures protects your rights and minimizes additional liability.' },
      { title: 'Back Taxes', content: 'If you have unfiled returns or unpaid taxes, the situation won\'t improve on its own—but it can get better. We help you get back into compliance by preparing past-due returns and negotiating with the IRS to resolve your balance. The sooner you act, the more options you have.' },
      { title: 'Payment Plans', content: 'Can\'t pay your full tax bill? The IRS offers installment agreements that let you pay over time. We negotiate terms you can afford, help you gather required documentation, and set up arrangements that protect you from further collection action.' },
      { title: 'Offer in Compromise', content: 'In some cases, the IRS will accept less than the full amount owed. An Offer in Compromise requires proving you can\'t pay the full balance. We evaluate your eligibility, prepare your application, and negotiate with the IRS to settle your debt for the lowest amount possible.' },
      { title: 'Liens & Levies', content: 'IRS liens damage your credit and levies can seize your wages and bank accounts. We work quickly to release or prevent these actions, negotiating with the IRS to find alternatives that resolve your debt without devastating your finances.' },
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
      { title: 'Why QuickBooks?', content: 'QuickBooks is the #1 accounting software for small businesses, used by over 7 million companies. It streamlines invoicing, expense tracking, payroll, and financial reporting. As certified QuickBooks ProAdvisors, we help you leverage its full potential to save time, reduce errors, and gain better visibility into your business finances.' },
      { title: 'Setup & Configuration', content: 'A properly configured QuickBooks file is essential for accurate reporting. We set up your chart of accounts, connect bank feeds, configure sales tax, establish customer and vendor lists, and customize settings for your industry. Start right from day one and avoid costly cleanup later.' },
      { title: 'Training', content: 'Learn to use QuickBooks with confidence. Our hands-on training covers daily transactions, bank reconciliation, invoicing, reporting, and more. We customize training to your role—whether you\'re a business owner who needs the big picture or a bookkeeper handling daily entries.' },
      { title: 'Tune-Up Services', content: 'If your QuickBooks file has errors, duplicate entries, or hasn\'t been reconciled in months, we can help. Our tune-up service cleans up your data, corrects mistakes, reconciles accounts, and gets your books back to a reliable state. We also identify process improvements to prevent future issues.' },
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
      { title: 'Construction', content: 'Construction accounting requires specialized knowledge of job costing, progress billing, retention, and contractor compliance. We help contractors track profitability by project, manage cash flow through long project cycles, and stay compliant with prevailing wage requirements and bonding needs.' },
      { title: 'Healthcare', content: 'Medical practices face unique challenges including insurance reimbursements, HIPAA compliance, and complex compensation structures. We provide accounting and tax services designed for physicians, dentists, therapists, and healthcare organizations of all sizes.' },
      { title: 'Legal', content: 'Law firms must maintain strict trust accounting standards and manage complex partner compensation. We understand IOLTA requirements, contingency fee accounting, and the unique financial management needs of legal practices from solo practitioners to multi-partner firms.' },
      { title: 'Real Estate', content: 'Real estate professionals and investors need specialized tax strategies including 1031 exchanges, depreciation optimization, and entity structuring. We help you maximize returns while minimizing tax liability on property transactions and rental income.' },
      { title: 'Hospitality', content: 'Restaurants, hotels, and hospitality businesses deal with high transaction volumes, tip reporting, inventory management, and thin margins. Our expertise helps you manage cash flow, control costs, and maintain compliance with employment and tax regulations.' },
      { title: 'Manufacturing', content: 'Manufacturers need accurate cost accounting to understand true product profitability. We help with inventory valuation, job costing, overhead allocation, and financial reporting that supports operational decisions and pricing strategies.' },
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
      { title: 'Track Your Refund', content: "Wondering where your refund is? Use our links to check the status of your federal and state tax refunds. The IRS typically issues refunds within 21 days of accepting an e-filed return, though some returns require additional review." },
      { title: 'Tax Due Dates', content: 'Missing a tax deadline can result in penalties and interest. Our tax calendar includes all important dates for individual and business filers—estimated tax payments, filing deadlines, and extension due dates throughout the year.' },
      { title: 'Tax Rates', content: 'Understanding current tax rates helps with planning. We provide up-to-date federal income tax brackets, capital gains rates, self-employment tax rates, and state tax information to help you estimate your liability.' },
      { title: 'IRS Forms', content: 'Need a specific IRS form or publication? Our resource center provides quick access to commonly needed documents including W-4s, W-9s, 1099 forms, and informational publications on various tax topics.' },
      { title: 'Record Retention', content: 'How long should you keep tax documents? Generally, you should retain tax returns and supporting documents for at least three years—longer in some situations. Our guide explains what to keep and for how long.' },
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
      { title: 'Financial Guides', content: 'Our library of guides covers important financial and tax topics in plain language. From retirement planning basics to understanding business deductions, these resources help you make informed decisions.' },
      { title: 'Newsletter', content: 'Stay informed with our regular updates on tax law changes, financial planning strategies, and important deadlines. Subscribe to receive timely information that affects your finances delivered directly to your inbox.' },
      { title: 'Calculators', content: 'Use our interactive calculators to estimate taxes, project retirement savings, analyze business scenarios, and more. These tools help you understand the numbers behind important financial decisions.' },
      { title: 'FAQs', content: 'Find answers to commonly asked questions about our services, tax preparation, and general financial topics. If you don\'t find what you\'re looking for, our team is always available to help.' },
    ],
    relatedPages: [
      { label: 'Newsletter', path: '/newsletter' },
      { label: 'Financial Guides', path: '/financial-guides' },
      { label: 'FAQs', path: '/faq' },
    ],
  },
};

// Simple pages that use GenericPage with minimal content
const simplePages = {
  // Individual Services
  estatePlanning: { title: 'Family Wealth & Estate Planning', description: 'Protect your legacy and provide for your loved ones with comprehensive estate and wealth planning services.', backgroundImage: bannerPlanning },
  taxPreparationIndividual: { title: 'Individual Tax Preparation', description: 'Professional preparation of your personal tax returns.', backgroundImage: bannerLaptopNotes },
  taxPlanning: { title: 'Tax Planning & Strategy', description: 'Year-round strategies to minimize your tax liability.', backgroundImage: bannerPlanning },
  taxDebtResolution: { title: 'Tax Debt Resolution', description: 'Expert assistance resolving outstanding tax debts with the IRS.', backgroundImage: bannerLaptopNotes },
  auditDefense: { title: 'IRS Representation & Audit Defense', description: 'Professional representation and defense during IRS audits.', backgroundImage: bannerLaptopNotes },
  
  // Business Services
  bookkeeping: { title: 'Bookkeeping Services', description: 'Accurate, timely bookkeeping with a structured, control-driven approach.', backgroundImage: bannerLaptopNotes },
  fractionalCfo: { title: 'Fractional CFO Services', description: 'Strategic financial leadership and CFO-level guidance on a part-time basis.', backgroundImage: bannerTeamMeeting },
  auditsReviews: { title: 'Audit, Review & Compilation Services', description: 'Professional assurance services for your financial statements.', backgroundImage: bannerFeedback },
  cashFlowManagement: { title: 'Cash Flow Management Services', description: 'Strategies to optimize your cash flow and improve business health.', backgroundImage: bannerPlanning },
  invoiceProcessing: { title: 'Centralized Invoice Processing Services', description: 'Streamlined invoice processing to improve efficiency and accuracy.', backgroundImage: bannerDesk },
  healthcareAccounting: { title: 'Healthcare Accounting Services', description: 'Specialized accounting solutions for healthcare organizations.', backgroundImage: bannerTechMeeting },
  ipoReadiness: { title: 'IPO Readiness Services', description: 'Prepare your company for a successful initial public offering.', backgroundImage: bannerTeamMeeting },
  taxStrategiesBusiness: { title: 'Tax Strategies for Business', description: 'Business tax strategies to maximize savings and efficiency.', backgroundImage: bannerPlanning },
  internalControls: { title: 'Internal Control Services', description: 'Protect your business with effective internal control systems.', backgroundImage: bannerSecurity },
  
  // Industries
  restaurants: { title: 'Restaurant Services', description: 'Specialized accounting for restaurants and food service businesses.', backgroundImage: bannerTechMeeting },
  dentists: { title: 'Dental Practice Services', description: 'Specialized accounting for dental practices and offices.', backgroundImage: bannerTechMeeting },
  retail: { title: 'Retail Accounting Services', description: 'Comprehensive accounting solutions for retail businesses.', backgroundImage: bannerTechMeeting },
  construction: { title: 'Construction', description: 'Specialized accounting for contractors and builders.', backgroundImage: bannerTechMeeting },
  lawFirms: { title: 'Law Firms', description: 'Trust accounting and financial services for attorneys.', backgroundImage: bannerTechMeeting },
  
  // IT & Governance Services
  aiGovernance: { title: 'AI & AI Regulatory Governance', description: 'Navigate AI regulations and implement robust AI governance frameworks.', backgroundImage: bannerMacbook },
  dataGovernance: { title: 'Data Governance', description: 'Establish data quality standards and governance policies.', backgroundImage: bannerMacbook },
  digitalEnablement: { title: 'Digital Enablement & IT Governance', description: 'Drive digital transformation with effective IT governance.', backgroundImage: bannerMacbook },
  deliveryFramework: { title: 'IT Service Delivery Framework', description: 'Implement structured delivery frameworks for IT service management.', backgroundImage: bannerMacbook },
  enterpriseItGovernance: { title: 'Strategy & Enterprise IT Governance', description: 'Align IT strategy with business objectives.', backgroundImage: bannerMacbook },
  systemImplementation: { title: 'System Implementation Ride Along', description: 'Expert guidance through your system implementation journey.', backgroundImage: bannerMacbook },
  vendorRiskManagement: { title: 'Third Party & Vendor Risk Management', description: 'Assess and manage risks from third-party vendors.', backgroundImage: bannerSecurity },
  cloudGovernance: { title: 'Cloud Governance', description: 'Establish governance for cloud infrastructure and services.', backgroundImage: bannerMacbook },
  itControlsCybersecurity: { title: 'IT General Controls & Cybersecurity Governance', description: 'Strengthen IT controls and cybersecurity posture.', backgroundImage: bannerSecurity },
  privacyDataProtection: { title: 'Privacy & Data Protection Compliance', description: 'Ensure compliance with privacy regulations and data protection standards.', backgroundImage: bannerSecurity },
  softwareAssetManagement: { title: 'Software Asset Management (SAM)', description: 'Optimize software licensing and asset management.', backgroundImage: bannerMacbook },
  qaTesting: { title: 'System Implementation - Quality Testing Assurance', description: 'Quality assurance and testing for system implementations.', backgroundImage: bannerMacbook },
  
  // Tax Relief & Other
  irsAuditSupport: { title: 'IRS Representation & Audit Support', description: 'Professional representation during IRS examinations.', backgroundImage: bannerLaptopNotes },
  
  // Resources
  refundTracking: { title: 'Track Your Refund', description: 'Check the status of your tax refund.', backgroundImage: bannerTablet },
  taxDueDates: { title: 'Tax Due Dates', description: 'Important tax filing and payment deadlines.', backgroundImage: bannerDesk },
  taxRates: { title: 'Tax Rates', description: 'Current federal and state tax rates.', backgroundImage: bannerDesk },
  stateTaxForms: { title: 'State Tax Forms', description: 'Links to state tax agency forms.', backgroundImage: bannerDesk },
  newsletter: { title: 'Newsletter', description: 'Subscribe to our financial newsletter.', backgroundImage: bannerDesk },
  secureUpload: { title: 'Secure File Upload', description: 'Securely send documents to our team.', backgroundImage: bannerSecurity },
  privacyPolicy: { title: 'Privacy Policy', description: 'How we protect your information.', backgroundImage: bannerSecurity },
  disclaimer: { title: 'Disclaimer', description: 'Important legal information.', backgroundImage: bannerDesk },
  securityMeasures: { title: 'Security Measures', description: 'How we keep your data secure.', backgroundImage: bannerSecurity },
  sitemap: { title: 'Sitemap', description: 'Complete list of pages on our website.', backgroundImage: bannerDesk },
};

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/services-individuals" element={<ServicesIndividuals backgroundImage={bannerReviewing} />} />
          <Route path="/services-business" element={<ServicesBusiness backgroundImage={bannerTeamMeeting} />} />
          <Route path="/tax-relief" element={<TaxReliefOverview backgroundImage={bannerLaptopNotes} />} />
          <Route path="/it-services" element={<ItServicesOverview backgroundImage={bannerMacbook} />} />
          <Route path="/quickbooks-services" element={<GenericPage {...pageData.quickbooksServices} />} />
          <Route path="/industries" element={<IndustriesOverview backgroundImage={bannerTechMeeting} />} />
          <Route path="/tax-center" element={<GenericPage {...pageData.taxCenter} />} />
          <Route path="/resources" element={<ResourcesOverview backgroundImage={bannerDesk} />} />

          {/* Individual Services - Using DOCX content */}
          <Route path="/estate-planning" element={
            <ServiceDetailPage 
              {...individualServicesContent.familyWealthEstatePlanning}
              backgroundImage={bannerPlanning}
              relatedPages={[
                { label: 'Tax Planning', path: '/tax-planning' },
                { label: 'Tax Preparation', path: '/tax-preparation-individual' },
              ]}
            />
          } />
          <Route path="/tax-preparation-individual" element={
            <ServiceDetailPage 
              {...individualServicesContent.individualTaxPreparation}
              backgroundImage={bannerLaptopNotes}
              relatedPages={[
                { label: 'Tax Planning', path: '/tax-planning' },
                { label: 'Estate Planning', path: '/estate-planning' },
              ]}
            />
          } />
          <Route path="/tax-planning" element={
            <ServiceDetailPage 
              {...individualServicesContent.taxPlanningStrategy}
              backgroundImage={bannerPlanning}
              relatedPages={[
                { label: 'Tax Preparation', path: '/tax-preparation-individual' },
                { label: 'Estate Planning', path: '/estate-planning' },
              ]}
            />
          } />
          <Route path="/irs-audit-support" element={
            <ServiceDetailPage 
              {...individualServicesContent.irsRepresentation}
              backgroundImage={bannerLaptopNotes}
              relatedPages={[
                { label: 'Tax Debt Resolution', path: '/tax-debt-resolution' },
                { label: 'Tax Planning', path: '/tax-planning' },
              ]}
            />
          } />
          <Route path="/tax-debt-resolution" element={
            <ServiceDetailPage 
              {...individualServicesContent.taxDebtResolution}
              backgroundImage={bannerLaptopNotes}
              relatedPages={[
                { label: 'IRS Audit Support', path: '/irs-audit-support' },
                { label: 'Tax Planning', path: '/tax-planning' },
              ]}
            />
          } />
          <Route path="/audit-defense" element={
            <ServiceDetailPage 
              {...individualServicesContent.irsRepresentation}
              backgroundImage={bannerLaptopNotes}
              relatedPages={[
                { label: 'Tax Debt Resolution', path: '/tax-debt-resolution' },
                { label: 'Tax Preparation', path: '/tax-preparation-individual' },
              ]}
            />
          } />

          {/* Business Services - Using DOCX content */}
          <Route path="/bookkeeping" element={
            <ServiceDetailPage 
              {...businessServicesContent.bookkeeping}
              backgroundImage={bannerLaptopNotes}
              relatedPages={[
                { label: 'CFO Services', path: '/fractional-cfo' },
                { label: 'Cash Flow Management', path: '/cash-flow-management' },
              ]}
            />
          } />
          <Route path="/fractional-cfo" element={
            <ServiceDetailPage 
              {...businessServicesContent.fractionalCFO}
              backgroundImage={bannerTeamMeeting}
              relatedPages={[
                { label: 'Bookkeeping', path: '/bookkeeping' },
                { label: 'Business Tax Strategies', path: '/tax-strategies-business' },
              ]}
            />
          } />
          <Route path="/audits-reviews" element={
            <ServiceDetailPage 
              {...businessServicesContent.auditReviewCompilation}
              backgroundImage={bannerFeedback}
              relatedPages={[
                { label: 'Internal Controls', path: '/internal-controls' },
                { label: 'IPO Readiness', path: '/ipo-readiness' },
              ]}
            />
          } />
          <Route path="/cash-flow-management" element={
            <ServiceDetailPage 
              {...businessServicesContent.cashFlowManagement}
              backgroundImage={bannerPlanning}
              relatedPages={[
                { label: 'CFO Services', path: '/fractional-cfo' },
                { label: 'Bookkeeping', path: '/bookkeeping' },
              ]}
            />
          } />
          <Route path="/invoice-processing" element={
            <ServiceDetailPage 
              {...businessServicesContent.centralizedInvoiceProcessing}
              backgroundImage={bannerDesk}
              relatedPages={[
                { label: 'Bookkeeping', path: '/bookkeeping' },
                { label: 'Internal Controls', path: '/internal-controls' },
              ]}
            />
          } />
          <Route path="/healthcare-accounting" element={
            <ServiceDetailPage 
              {...industriesContent.healthcare}
              backgroundImage={bannerTechMeeting}
              relatedPages={[
                { label: 'Dental Practices', path: '/dentists' },
                { label: 'Industries Overview', path: '/industries' },
              ]}
            />
          } />
          <Route path="/ipo-readiness" element={
            <ServiceDetailPage 
              {...businessServicesContent.ipoReadiness}
              backgroundImage={bannerTeamMeeting}
              relatedPages={[
                { label: 'Internal Controls', path: '/internal-controls' },
                { label: 'Audits & Reviews', path: '/audits-reviews' },
              ]}
            />
          } />
          <Route path="/tax-strategies-business" element={
            <ServiceDetailPage 
              {...businessServicesContent.businessTaxStrategies}
              backgroundImage={bannerPlanning}
              relatedPages={[
                { label: 'CFO Services', path: '/fractional-cfo' },
                { label: 'Bookkeeping', path: '/bookkeeping' },
              ]}
            />
          } />
          <Route path="/internal-controls" element={
            <ServiceDetailPage 
              {...businessServicesContent.internalControls}
              backgroundImage={bannerSecurity}
              relatedPages={[
                { label: 'Audits & Reviews', path: '/audits-reviews' },
                { label: 'IPO Readiness', path: '/ipo-readiness' },
              ]}
            />
          } />

          {/* Industries - Using DOCX content */}
          <Route path="/restaurants" element={
            <ServiceDetailPage 
              {...industriesContent.restaurant}
              backgroundImage={bannerTechMeeting}
              relatedPages={[
                { label: 'Retail', path: '/retail' },
                { label: 'Industries Overview', path: '/industries' },
              ]}
            />
          } />
          <Route path="/dentists" element={
            <ServiceDetailPage 
              {...industriesContent.dental}
              backgroundImage={bannerTechMeeting}
              relatedPages={[
                { label: 'Healthcare', path: '/healthcare-accounting' },
                { label: 'Industries Overview', path: '/industries' },
              ]}
            />
          } />
          <Route path="/retail" element={
            <ServiceDetailPage 
              {...industriesContent.retail}
              backgroundImage={bannerTechMeeting}
              relatedPages={[
                { label: 'Restaurants', path: '/restaurants' },
                { label: 'Industries Overview', path: '/industries' },
              ]}
            />
          } />
          <Route path="/construction" element={
            <ServiceDetailPage 
              {...industriesContent.construction}
              backgroundImage={bannerTechMeeting}
              relatedPages={[
                { label: 'Manufacturing', path: '/manufacturing' },
                { label: 'Industries Overview', path: '/industries' },
              ]}
            />
          } />
          <Route path="/law-firms" element={
            <ServiceDetailPage 
              {...industriesContent.lawFirms}
              backgroundImage={bannerTechMeeting}
              relatedPages={[
                { label: 'Healthcare', path: '/healthcare-accounting' },
                { label: 'Industries Overview', path: '/industries' },
              ]}
            />
          } />

          {/* IT & Governance Services - Using DOCX content */}
          <Route path="/ai-governance" element={
            <ServiceDetailPage 
              {...itServicesContent.aiGovernance}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'Data Governance', path: '/data-governance' },
                { label: 'IT Services Overview', path: '/it-services' },
              ]}
            />
          } />
          <Route path="/data-governance" element={
            <ServiceDetailPage 
              {...itServicesContent.dataGovernance}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'AI Governance', path: '/ai-governance' },
                { label: 'Privacy & Data Protection', path: '/privacy-data-protection' },
              ]}
            />
          } />
          <Route path="/digital-enablement" element={
            <ServiceDetailPage 
              {...itServicesContent.digitalEnablement}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'Enterprise IT Governance', path: '/enterprise-it-governance' },
                { label: 'IT Services Overview', path: '/it-services' },
              ]}
            />
          } />
          <Route path="/delivery-framework" element={
            <ServiceDetailPage 
              {...itServicesContent.deliveryFramework}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'System Implementation', path: '/system-implementation' },
                { label: 'QA Testing', path: '/qa-testing' },
              ]}
            />
          } />
          <Route path="/enterprise-it-governance" element={
            <ServiceDetailPage 
              {...itServicesContent.enterpriseItGovernance}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'Digital Enablement', path: '/digital-enablement' },
                { label: 'Cloud Governance', path: '/cloud-governance' },
              ]}
            />
          } />
          <Route path="/system-implementation" element={
            <ServiceDetailPage 
              {...itServicesContent.systemImplementation}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'QA Testing', path: '/qa-testing' },
                { label: 'Delivery Framework', path: '/delivery-framework' },
              ]}
            />
          } />
          <Route path="/vendor-risk-management" element={
            <ServiceDetailPage 
              {...itServicesContent.vendorRiskManagement}
              backgroundImage={bannerSecurity}
              relatedPages={[
                { label: 'IT Controls & Cybersecurity', path: '/it-controls-cybersecurity' },
                { label: 'Internal Controls', path: '/internal-controls' },
              ]}
            />
          } />
          <Route path="/cloud-governance" element={
            <ServiceDetailPage 
              {...itServicesContent.cloudGovernance}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'IT Controls & Cybersecurity', path: '/it-controls-cybersecurity' },
                { label: 'Data Governance', path: '/data-governance' },
              ]}
            />
          } />
          <Route path="/it-controls-cybersecurity" element={
            <ServiceDetailPage 
              {...itServicesContent.itControlsCybersecurity}
              backgroundImage={bannerSecurity}
              relatedPages={[
                { label: 'Cloud Governance', path: '/cloud-governance' },
                { label: 'Vendor Risk Management', path: '/vendor-risk-management' },
              ]}
            />
          } />
          <Route path="/privacy-data-protection" element={
            <ServiceDetailPage 
              {...itServicesContent.privacyDataProtection}
              backgroundImage={bannerSecurity}
              relatedPages={[
                { label: 'Data Governance', path: '/data-governance' },
                { label: 'IT Controls & Cybersecurity', path: '/it-controls-cybersecurity' },
              ]}
            />
          } />
          <Route path="/software-asset-management" element={
            <ServiceDetailPage 
              {...itServicesContent.softwareAssetManagement}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'Vendor Risk Management', path: '/vendor-risk-management' },
                { label: 'IT Services Overview', path: '/it-services' },
              ]}
            />
          } />
          <Route path="/qa-testing" element={
            <ServiceDetailPage 
              {...itServicesContent.qaTesting}
              backgroundImage={bannerMacbook}
              relatedPages={[
                { label: 'System Implementation', path: '/system-implementation' },
                { label: 'Delivery Framework', path: '/delivery-framework' },
              ]}
            />
          } />

          {/* Resources */}
          <Route path="/refund-tracking" element={<GenericPage {...simplePages.refundTracking} />} />
          <Route path="/tax-due-dates" element={<GenericPage {...simplePages.taxDueDates} />} />
          <Route path="/tax-rates" element={<GenericPage {...simplePages.taxRates} />} />
          <Route path="/irs-forms" element={<IrsForms />} />
          <Route path="/state-tax-forms" element={<GenericPage {...simplePages.stateTaxForms} />} />
          <Route path="/newsletter" element={<GenericPage {...simplePages.newsletter} />} />
          <Route path="/financial-calculators" element={<FinancialCalculators />} />
          <Route path="/secure-upload" element={<GenericPage {...simplePages.secureUpload} />} />
          <Route path="/privacy-policy" element={<GenericPage {...simplePages.privacyPolicy} />} />
          <Route path="/disclaimer" element={<GenericPage {...simplePages.disclaimer} />} />
          <Route path="/security-measures" element={<GenericPage {...simplePages.securityMeasures} />} />
          <Route path="/sitemap" element={<GenericPage {...simplePages.sitemap} />} />
          
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
