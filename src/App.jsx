import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TaxServices from './pages/TaxServices';
import Contact from './pages/Contact';
import BookMeeting from './pages/BookMeeting';
import GenericPage from './pages/GenericPage';
import FinancialCalculators from './pages/FinancialCalculators';
import IrsForms from './pages/IrsForms';
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
      { title: 'Tax Preparation', content: 'Our experienced tax professionals prepare accurate federal and state returns, identifying every deduction and credit you deserve. We handle all types of individual returns, from simple W-2 filings to complex situations involving investments, rental properties, and self-employment income.', link: '/tax-preparation-individual' },
      { title: 'Tax Planning', content: "Don't wait until April to think about taxes. Our year-round tax planning strategies help you make smart financial decisions throughout the year, minimizing your tax liability and maximizing your take-home income. We analyze your situation and recommend specific actions to reduce what you owe.", link: '/tax-planning' },
      { title: 'Tax Strategies', content: 'Strategic tax planning goes beyond preparation. We develop comprehensive strategies to minimize your lifetime tax burden, including income timing, investment positioning, retirement account optimization, and charitable giving techniques.', link: '/tax-strategies-individual' },
      { title: 'Estate Planning', content: 'Protect your legacy and provide for your loved ones. We work with you and your legal advisors to develop tax-efficient strategies for wealth transfer, including gift planning, trust strategies, and estate tax minimization.', link: '/estate-planning' },
      { title: 'Financial Calculators', content: 'Make informed decisions about your financial future. Use our interactive calculators to estimate taxes, project retirement savings, and analyze financial scenarios.', link: '/financial-calculators' },
    ],
    relatedPages: [
      { label: 'Tax Preparation', path: '/tax-preparation-individual' },
      { label: 'Tax Planning', path: '/tax-planning' },
      { label: 'Tax Strategies', path: '/tax-strategies-individual' },
      { label: 'Estate Planning', path: '/estate-planning' },
      { label: 'Financial Calculators', path: '/financial-calculators' },
    ],
  },
  servicesBusiness: {
    title: 'Business Services',
    description: 'Complete accounting and financial services to help your business thrive.',
    backgroundImage: bannerTeamMeeting,
    sections: [
      { title: 'Business Tax Preparation', content: 'Expert preparation of partnership, S-corporation, C-corporation, and LLC tax returns. We ensure compliance while identifying every deduction and credit your business deserves, minimizing your tax liability.', link: '/tax-preparation-business' },
      { title: 'Tax Strategies', content: 'Proactive tax planning strategies designed for businesses. We analyze your structure, operations, and goals to develop comprehensive strategies that minimize taxes and support growth.', link: '/tax-strategies-business' },
      { title: 'Bookkeeping', content: 'Accurate, timely bookkeeping is the foundation of sound business decisions. Our team maintains your financial records, reconciles accounts, and provides monthly reports so you always know where your business stands.', link: '/bookkeeping' },
      { title: 'CFO Services', content: 'Get executive-level financial guidance without the full-time cost. Our virtual CFO services provide strategic planning, financial forecasting, KPI development, and board-ready reporting.', link: '/cfo-services' },
      { title: 'Payroll Services', content: 'Payroll is complex and the penalties for mistakes are severe. We handle everything—calculating wages, withholding taxes, issuing payments, and preparing year-end forms.', link: '/payroll' },
      { title: 'Cash Flow Management', content: 'Optimize your cash flow with expert analysis, forecasting, and working capital strategies. Never be caught off guard by cash shortages again.', link: '/cash-flow-management' },
      { title: 'Business Advisory', content: 'Beyond the numbers, we help you build a stronger business. Our advisory services include strategic planning, profitability analysis, and growth planning.', link: '/business-advisory' },
      { title: 'New Business Formation', content: 'Starting a business? We guide you through entity selection, registration, accounting setup, and startup tax planning to get you started right.', link: '/new-business-formation' },
      { title: 'Audits & Reviews', content: 'Professional assurance services including audits, reviews, and compilations. We provide the level of assurance your stakeholders require.', link: '/audits-reviews' },
      { title: 'Internal Controls', content: 'Protect your business with effective internal controls. We assess risks, design controls, and help prevent fraud and errors.', link: '/internal-controls' },
      { title: 'Non-Profit Organizations', content: 'Specialized accounting, Form 990 preparation, and compliance services designed specifically for tax-exempt organizations.', link: '/nonprofit' },
    ],
    relatedPages: [
      { label: 'Business Tax Preparation', path: '/tax-preparation-business' },
      { label: 'Bookkeeping', path: '/bookkeeping' },
      { label: 'Payroll', path: '/payroll' },
      { label: 'CFO Services', path: '/cfo-services' },
      { label: 'Business Advisory', path: '/business-advisory' },
    ],
  },
  taxRelief: {
    title: 'Tax Relief & Audit Support',
    description: "Facing IRS issues? We're here to help you resolve tax problems and get back on track.",
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'IRS Audit Representation', content: 'An IRS audit notice can be stressful, but you don\'t have to face it alone. We represent you before the IRS, handle all communications, prepare documentation, and work to achieve the best possible outcome. Our experience with IRS procedures protects your rights and minimizes additional liability.', link: '/irs-audit-representation' },
      { title: 'Tax Debt Resolution', content: 'If you have unpaid taxes, the situation won\'t improve on its own—but it can get better. We help you resolve your tax balance through installment agreements, offers in compromise, or other relief programs. The sooner you act, the more options you have.', link: '/tax-debt-resolution' },
      { title: 'Penalty Abatement', content: 'IRS penalties can significantly increase your tax debt. We evaluate your situation to determine if you qualify for penalty abatement based on reasonable cause, first-time penalty relief, or other available programs.', link: '/penalty-abatement' },
      { title: 'Audit Defense', content: 'When the IRS questions your return, you need experienced representation. We gather supporting documentation, prepare your case, and communicate directly with IRS agents to protect your interests throughout the examination process.', link: '/audit-defense' },
      { title: 'IRS Appeals', content: 'If you disagree with an IRS determination, you have the right to appeal. We help you navigate the appeals process, present your case effectively, and work toward a fair resolution of your tax dispute.', link: '/irs-appeals' },
    ],
    relatedPages: [
      { label: 'IRS Audit Representation', path: '/irs-audit-representation' },
      { label: 'Tax Debt Resolution', path: '/tax-debt-resolution' },
      { label: 'Penalty Abatement', path: '/penalty-abatement' },
    ],
  },
  itServices: {
    title: 'IT Services',
    description: 'Comprehensive IT solutions to support and grow your business.',
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'Network Setup & Support', content: 'We design, implement, and maintain robust network infrastructure tailored to your business needs. From small office setups to enterprise solutions, we ensure your network is secure, reliable, and optimized for performance.', link: '/network-setup' },
      { title: 'Cloud Solutions', content: 'Leverage the power of cloud computing for increased flexibility, scalability, and cost savings. We help you migrate to cloud platforms, set up cloud-based applications, and manage your cloud infrastructure effectively.', link: '/cloud-solutions' },
      { title: 'Cybersecurity', content: 'Protect your business from cyber threats with comprehensive security solutions. We implement firewalls, antivirus protection, intrusion detection, and security protocols to safeguard your data and systems.', link: '/cybersecurity' },
      { title: 'Data Backup & Recovery', content: 'Never lose critical business data with our backup and disaster recovery solutions. We implement automated backup systems and create recovery plans to ensure business continuity in any situation.', link: '/data-backup' },
      { title: 'IT Consulting', content: 'Get expert guidance on technology decisions that impact your business. Our IT consultants help you plan technology investments, optimize existing systems, and align IT with your business goals.', link: '/it-consulting' },
      { title: 'Software Integration', content: 'Streamline your operations by integrating your business software systems. We connect accounting, CRM, inventory, and other applications to eliminate data silos and improve efficiency.', link: '/software-integration' },
    ],
    relatedPages: [
      { label: 'Network Setup', path: '/network-setup' },
      { label: 'Cloud Solutions', path: '/cloud-solutions' },
      { label: 'Cybersecurity', path: '/cybersecurity' },
    ],
  },
  industries: {
    title: 'Industry Specialties',
    description: 'We provide specialized accounting and tax services tailored to your industry.',
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Construction', content: 'Construction accounting requires specialized knowledge of job costing, progress billing, retention, and contractor compliance. We help contractors track profitability by project and stay compliant with bonding needs.', link: '/construction' },
      { title: 'Restaurants', content: 'Restaurant accounting demands expertise in daily sales reconciliation, food cost analysis, tip reporting compliance, and labor cost management. We help you maintain healthy margins in a challenging industry.', link: '/restaurants' },
      { title: 'Retail', content: 'Retail businesses need inventory management, POS integration, multi-location reporting, and sales tax compliance. We provide the financial insights to optimize your retail operations.', link: '/retail' },
      { title: 'Manufacturing', content: 'Manufacturers need accurate cost accounting to understand true product profitability. We help with inventory valuation, job costing, and overhead allocation.', link: '/manufacturing' },
      { title: 'Dentists', content: 'Dental practices have unique financial needs including production tracking, associate compensation, and practice valuation. We understand the metrics that drive dental practice success.', link: '/dentists' },
      { title: 'Healthcare', content: 'Medical practices face unique challenges including insurance reimbursements, HIPAA compliance, and complex compensation structures. We provide specialized accounting for healthcare providers.', link: '/healthcare' },
      { title: 'Real Estate', content: 'Real estate professionals need specialized tax strategies including 1031 exchanges, depreciation optimization, and entity structuring to maximize returns.', link: '/real-estate' },
      { title: 'Law Firms', content: 'Law firms must maintain strict trust accounting standards and manage complex partner compensation. We understand IOLTA requirements and contingency fee accounting.', link: '/law-firms' },
    ],
    relatedPages: [
      { label: 'Construction', path: '/construction' },
      { label: 'Restaurants', path: '/restaurants' },
      { label: 'Healthcare', path: '/healthcare' },
      { label: 'Real Estate', path: '/real-estate' },
      { label: 'Law Firms', path: '/law-firms' },
    ],
  },
  taxCenter: {
    title: 'Tax Center',
    description: 'Your one-stop resource for tax information, forms, and tools.',
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Track Your Refund', content: "Wondering where your refund is? Use our links to check the status of your federal and state tax refunds. The IRS typically issues refunds within 21 days of accepting an e-filed return, though some returns require additional review.", link: '/refund-tracking' },
      { title: 'Tax Due Dates', content: 'Missing a tax deadline can result in penalties and interest. Our tax calendar includes all important dates for individual and business filers—estimated tax payments, filing deadlines, and extension due dates throughout the year.', link: '/tax-due-dates' },
      { title: 'Tax Rates', content: 'Understanding current tax rates helps with planning. We provide up-to-date federal income tax brackets, capital gains rates, self-employment tax rates, and state tax information to help you estimate your liability.', link: '/tax-rates' },
      { title: 'IRS Forms', content: 'Need a specific IRS form or publication? Our resource center provides quick access to commonly needed documents including W-4s, W-9s, 1099 forms, and informational publications on various tax topics.', link: '/irs-forms' },
      { title: 'Record Retention', content: 'How long should you keep tax documents? Generally, you should retain tax returns and supporting documents for at least three years—longer in some situations. Our guide explains what to keep and for how long.', link: '/record-retention' },
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
      { title: 'Financial Calculators', content: 'Use our interactive calculators to estimate taxes, project retirement savings, analyze business scenarios, and more. These tools help you understand the numbers behind important financial decisions.', link: '/financial-calculators' },
      { title: 'IRS Forms & Publications', content: 'Access commonly needed IRS forms including W-4s, W-9s, 1099 forms, and informational publications on various tax topics. We make it easy to find the documents you need.', link: '/irs-forms' },
      { title: 'Tax Rates', content: 'Stay informed with current federal income tax brackets, capital gains rates, self-employment tax rates, and state tax information to help you estimate your liability.', link: '/tax-rates' },
      { title: 'State Tax Forms', content: 'Access state tax agency forms and information. We help you navigate multi-state filing requirements and understand your state tax obligations.', link: '/state-tax-forms' },
      { title: 'Track Your Refund', content: 'Check the status of your federal and state tax refunds. We provide guidance on typical processing times and what to do if your refund is delayed.', link: '/refund-tracking' },
      { title: 'Tax Due Dates', content: 'Never miss a deadline with our comprehensive tax calendar. We track all important dates for individual and business filers throughout the year.', link: '/tax-due-dates' },
    ],
    relatedPages: [
      { label: 'Financial Calculators', path: '/financial-calculators' },
      { label: 'IRS Forms', path: '/irs-forms' },
      { label: 'Tax Rates', path: '/tax-rates' },
      { label: 'Track Your Refund', path: '/refund-tracking' },
      { label: 'Tax Due Dates', path: '/tax-due-dates' },
    ],
  },
};

// Simple pages that use GenericPage with minimal content
// Simple pages that use GenericPage with detailed content sections
const simplePages = {
  estatePlanning: { 
    title: 'Estate Planning', 
    description: 'Protect your legacy and provide for your loved ones with comprehensive estate planning services.', 
    backgroundImage: bannerPlanning,
    sections: [
      { title: 'Wealth Preservation Strategies', content: 'Our estate planning services help you preserve and transfer wealth efficiently to the next generation. We work with your legal advisors to implement tax-efficient strategies that protect your assets while ensuring your wishes are honored. From basic estate planning to complex multi-generational wealth transfer, we provide the financial expertise needed for sound decisions.' },
      { title: 'Gift Planning', content: 'Strategic gifting can significantly reduce estate taxes while allowing you to see your loved ones benefit from your generosity during your lifetime. We help you understand annual gift tax exclusions, lifetime exemptions, and techniques like qualified personal residence trusts (QPRTs) and grantor retained annuity trusts (GRATs).' },
      { title: 'Trust Tax Services', content: 'Trusts require specialized tax treatment and annual filings. We prepare fiduciary income tax returns (Form 1041) and advise trustees on distribution planning, income allocation between trust and beneficiaries, and compliance with complex trust tax rules.' },
      { title: 'Succession Planning', content: 'Whether passing a family business to the next generation or planning for the transition of personal assets, succession planning requires careful coordination of tax, legal, and family considerations. We help you develop a comprehensive plan that balances financial efficiency with family harmony.' },
    ]
  },
  smallBusinessAccounting: { 
    title: 'Small Business Accounting', 
    description: 'Complete accounting solutions designed specifically for small businesses.', 
    backgroundImage: bannerTeamMeeting,
    sections: [
      { title: 'Full-Service Accounting', content: 'We handle all aspects of your small business accounting—from daily transaction recording to monthly financial statements. Our team ensures your books are accurate, up-to-date, and compliant with accounting standards, giving you reliable information to make business decisions.' },
      { title: 'Financial Statement Preparation', content: 'Banks, investors, and partners need professional financial statements. We prepare income statements, balance sheets, and cash flow statements that present your business clearly and accurately. Our statements help you secure financing, attract investors, and monitor business performance.' },
      { title: 'Accounts Receivable & Payable', content: 'Efficient management of receivables and payables is crucial for cash flow. We help you implement systems to invoice promptly, track payments, manage vendor relationships, and optimize your cash conversion cycle.' },
      { title: 'Chart of Accounts Setup', content: 'A well-designed chart of accounts provides the foundation for meaningful financial reporting. We design account structures that capture the information you need for decision-making, tax reporting, and industry-specific requirements.' },
    ]
  },
  bookkeeping: { 
    title: 'Bookkeeping Services', 
    description: 'Accurate, timely bookkeeping to keep your business finances organized.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'Daily Transaction Recording', content: 'We record all your business transactions accurately and consistently, ensuring your financial records reflect the true state of your business. From sales and deposits to expenses and vendor payments, every transaction is properly categorized and documented.' },
      { title: 'Bank & Credit Card Reconciliation', content: 'Monthly reconciliation catches errors, identifies fraud, and ensures your records match your bank statements. We reconcile all accounts monthly and investigate any discrepancies promptly, giving you confidence in your financial data.' },
      { title: 'Cloud-Based Solutions', content: 'We work with leading cloud accounting platforms like QuickBooks Online, Xero, and FreshBooks. Cloud-based bookkeeping gives you real-time access to your financial information from anywhere, automatic backups, and seamless collaboration with our team.' },
      { title: 'Monthly Reporting', content: 'Receive clear, understandable monthly reports that show how your business is performing. We provide income statements, balance sheets, and custom reports designed to highlight the metrics that matter most to your business.' },
    ]
  },
  cfoServices: { 
    title: 'CFO Services', 
    description: 'Strategic financial leadership and guidance for growing businesses.', 
    backgroundImage: bannerTeamMeeting,
    sections: [
      { title: 'Virtual CFO', content: 'Get executive-level financial guidance without the cost of a full-time CFO. Our virtual CFO services provide strategic financial leadership, helping you make informed decisions about growth, financing, and operations. We become a trusted advisor to you and your leadership team.' },
      { title: 'Financial Forecasting', content: 'Look ahead with confidence using our financial forecasting services. We develop detailed projections based on your historical data, market conditions, and growth plans. Use these forecasts for budgeting, securing financing, and strategic planning.' },
      { title: 'KPI Development & Monitoring', content: 'Identify and track the key performance indicators that drive your business success. We help you define meaningful metrics, establish targets, and implement reporting systems that keep you informed of progress toward your goals.' },
      { title: 'Board & Investor Relations', content: 'When you need to present financial information to boards, investors, or lenders, we help you prepare compelling presentations that tell your financial story clearly. We can also attend meetings to answer questions and provide expert perspective.' },
    ]
  },
  payroll: { 
    title: 'Payroll Services', 
    description: 'Comprehensive payroll processing, tax filings, and compliance management.', 
    backgroundImage: bannerTeamMeeting,
    sections: [
      { title: 'Payroll Processing', content: 'We handle every aspect of payroll—calculating wages, processing deductions, issuing payments via direct deposit or check, and maintaining detailed records. Employees are paid accurately and on time, every time.' },
      { title: 'Tax Filings & Compliance', content: 'Payroll taxes are complex and penalties for errors are steep. We calculate and remit federal, state, and local payroll taxes, file quarterly returns, and prepare year-end W-2s and 1099s. Stay compliant without the headache.' },
      { title: 'Employee Self-Service', content: 'Give your employees access to their pay stubs, W-2s, and personal information through a secure online portal. Reduce administrative burden while improving employee satisfaction and transparency.' },
      { title: 'Workers Compensation & Benefits', content: 'We coordinate payroll with workers compensation audits, retirement plan contributions, and health insurance deductions. Ensure all withholdings and employer contributions are accurate and properly reported.' },
    ]
  },
  auditsReviews: { 
    title: 'Audits, Reviews & Compilations', 
    description: 'Professional assurance services for your financial statements.', 
    backgroundImage: bannerFeedback,
    sections: [
      { title: 'Financial Statement Audits', content: 'When stakeholders require the highest level of assurance, a financial statement audit provides independent verification that your statements are free from material misstatement. Our audits follow Generally Accepted Auditing Standards (GAAS) and provide valuable insights into your financial processes.' },
      { title: 'Review Engagements', content: 'A review provides limited assurance at a lower cost than an audit. We perform analytical procedures and inquiries to determine whether any material modifications should be made to your financial statements. Reviews are often required by lenders and bonding companies.' },
      { title: 'Compilation Services', content: 'Compilations present your financial information in statement form without providing assurance. This cost-effective option is appropriate when you need professionally prepared statements for internal use or when third parties do not require assurance.' },
      { title: 'Agreed-Upon Procedures', content: 'When you need specific testing performed on financial information, we design and execute procedures tailored to your needs. Results are reported factually, providing exactly the information required by the engaging party.' },
    ]
  },
  cashFlowManagement: { 
    title: 'Cash Flow Management', 
    description: 'Strategies to optimize your cash flow and improve business health.', 
    backgroundImage: bannerPlanning,
    sections: [
      { title: 'Cash Flow Analysis', content: 'Understanding your cash flow patterns is essential for business success. We analyze your inflows and outflows, identify trends and seasonality, and pinpoint opportunities to improve liquidity. Our detailed analysis reveals the true drivers of your cash position.' },
      { title: 'Forecasting & Projections', content: 'Anticipate cash needs before they become crises. We develop rolling cash flow forecasts that help you plan for major expenses, seasonal fluctuations, and growth investments. Know in advance when you\'ll need financing or when excess cash can be invested.' },
      { title: 'Working Capital Optimization', content: 'Efficient management of receivables, inventory, and payables can free up significant cash. We help you implement strategies to collect faster, optimize inventory levels, and negotiate better payment terms—all without harming relationships.' },
      { title: 'Cash Flow Improvement Strategies', content: 'From invoice factoring to payment term renegotiation, we identify and implement strategies tailored to your business. Every business has opportunities to improve cash flow; we help you find and execute on yours.' },
    ]
  },
  businessAdvisory: { 
    title: 'Business Advisory', 
    description: 'Strategic guidance to help your business grow and succeed.', 
    backgroundImage: bannerTeamMeeting,
    sections: [
      { title: 'Strategic Planning', content: 'Where do you want your business to be in three to five years? We help you develop clear strategic plans with measurable objectives, actionable initiatives, and financial projections. Regular reviews keep you on track and responsive to changing conditions.' },
      { title: 'Profitability Analysis', content: 'Not all revenue is created equal. We analyze profitability by product, service, customer, and segment to help you focus resources where they generate the best returns. Understanding your true profit drivers enables smarter business decisions.' },
      { title: 'Growth Planning', content: 'Growth requires capital, people, and infrastructure. We help you plan for growth in a sustainable way, identifying financing needs, staffing requirements, and operational capabilities needed to execute your vision successfully.' },
      { title: 'Business Valuation Support', content: 'Whether you\'re planning to sell, bring in partners, or simply want to understand your business\'s worth, we provide valuation support and analysis. Know what your business is worth and what drives that value.' },
    ]
  },
  financialPlanningBusiness: { 
    title: 'Financial Planning for Business', 
    description: 'Long-term financial strategies for business success.', 
    backgroundImage: bannerPlanning,
    sections: [
      { title: 'Budgeting & Forecasting', content: 'A well-constructed budget aligns spending with strategic priorities. We help you develop realistic budgets based on historical performance and future plans, then track actual results against budget to identify variances and take corrective action.' },
      { title: 'Capital Planning', content: 'Major investments in equipment, facilities, or technology require careful financial analysis. We help you evaluate capital investments, model financing options, and determine the impact on your financial position and cash flow.' },
      { title: 'Financing Strategy', content: 'Choosing between debt and equity, selecting lenders, and structuring financing requires expertise. We help you evaluate options, prepare financial packages for lenders, and negotiate terms that support your business goals.' },
      { title: 'Exit Planning', content: 'Every business owner eventually exits their business. Whether through sale, succession, or closure, planning ahead maximizes value and minimizes disruption. We help you prepare your business and your finances for a successful transition.' },
    ]
  },
  newBusinessFormation: { 
    title: 'New Business Formation', 
    description: 'Guidance on entity selection, formation, and startup accounting.', 
    backgroundImage: bannerTeamwork,
    sections: [
      { title: 'Entity Selection', content: 'Choosing the right business structure—sole proprietorship, LLC, S-Corp, or C-Corp—affects taxes, liability, and operational flexibility. We analyze your specific situation and recommend the structure that best serves your goals, considering both current needs and future plans.' },
      { title: 'Business Registration', content: 'We guide you through the registration process, including state filings, EIN applications, and necessary licenses and permits. Get started on the right foot with proper documentation and compliance from day one.' },
      { title: 'Accounting System Setup', content: 'Starting with a well-designed accounting system saves headaches later. We set up your chart of accounts, configure your accounting software, and establish processes that capture the information you need for management and tax purposes.' },
      { title: 'Startup Tax Planning', content: 'Tax decisions made in your first year can have lasting consequences. We help you understand startup cost treatment, select the right accounting methods, and implement tax-efficient practices from the beginning.' },
    ]
  },
  nonprofit: { 
    title: 'Non-Profit Organizations', 
    description: 'Specialized accounting and compliance services for non-profits.', 
    backgroundImage: bannerTeamwork,
    sections: [
      { title: 'Non-Profit Accounting', content: 'Non-profit accounting follows different standards than for-profit businesses. We understand fund accounting, restrictions on contributions, and the unique financial reporting requirements of tax-exempt organizations. Your financial statements will meet both GAAP and funder requirements.' },
      { title: 'Form 990 Preparation', content: 'The annual Form 990 is both a compliance requirement and a public document that tells your organization\'s story. We prepare accurate, complete returns that satisfy IRS requirements while presenting your organization positively to donors, grantors, and watchdog organizations.' },
      { title: 'Grant Management', content: 'Grants come with restrictions and reporting requirements. We help you track grant funds properly, maintain compliance with grant terms, and prepare the financial reports grantors require. Never worry about grant audit findings.' },
      { title: 'Board Financial Training', content: 'Non-profit board members have fiduciary responsibilities but often lack financial expertise. We provide training sessions that help board members understand financial statements, ask the right questions, and fulfill their oversight duties effectively.' },
    ]
  },
  internalControls: { 
    title: 'Internal Controls', 
    description: 'Protect your business with effective internal control systems.', 
    backgroundImage: bannerSecurity,
    sections: [
      { title: 'Control Assessment', content: 'We evaluate your current internal control environment, identifying strengths and weaknesses. Our assessment covers financial controls, operational controls, and compliance controls, providing a clear picture of your risk exposure.' },
      { title: 'Fraud Prevention', content: 'Employee fraud costs businesses billions annually. We design controls that prevent and detect fraudulent activity—segregation of duties, authorization requirements, physical safeguards, and monitoring procedures tailored to your operations.' },
      { title: 'Process Documentation', content: 'Documented procedures ensure consistency and provide the foundation for effective controls. We help you document key financial processes, including who does what, how transactions are authorized, and how exceptions are handled.' },
      { title: 'Control Implementation', content: 'Identifying control weaknesses is only the first step. We help you implement practical, cost-effective controls that address identified risks without creating excessive bureaucracy or hindering operations.' },
    ]
  },
  taxPreparationIndividual: { 
    title: 'Individual Tax Preparation', 
    description: 'Professional preparation of your personal tax returns.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'Federal & State Returns', content: 'Our tax professionals prepare accurate federal and state income tax returns for individuals and families. We handle all filing statuses and income types, from straightforward W-2 returns to complex situations involving multiple income sources, investments, and deductions.' },
      { title: 'Deduction Optimization', content: 'We identify every deduction and credit you\'re entitled to claim. From mortgage interest and charitable contributions to education expenses and medical costs, we ensure you\'re not leaving money on the table.' },
      { title: 'Investment Income Reporting', content: 'Capital gains, dividends, interest, and other investment income require careful reporting. We properly categorize investment transactions, apply wash sale rules, and maximize the tax efficiency of your investment portfolio.' },
      { title: 'Self-Employment Returns', content: 'Self-employed individuals face unique tax challenges. We prepare Schedule C returns, calculate self-employment tax, and ensure you\'re taking advantage of retirement plan contributions, health insurance deductions, and other self-employment benefits.' },
    ]
  },
  taxPreparationBusiness: { 
    title: 'Business Tax Preparation', 
    description: 'Expert preparation of business tax returns for all entity types.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'Partnership & S-Corp Returns', content: 'Pass-through entities have complex reporting requirements. We prepare Form 1065 partnership returns and Form 1120S S-Corporation returns, ensuring proper allocation of income, deductions, and credits among owners while maintaining compliance with basis and at-risk rules.' },
      { title: 'C-Corporation Returns', content: 'C-Corporations face double taxation and complex rules. We prepare Form 1120 returns, optimize the timing of income and deductions, and ensure compliance with accumulated earnings and personal holding company rules.' },
      { title: 'Multi-State Returns', content: 'Businesses operating in multiple states face complicated nexus and apportionment rules. We determine your filing requirements, prepare all necessary state returns, and ensure consistent treatment across jurisdictions.' },
      { title: 'Tax Credit Identification', content: 'Business tax credits can significantly reduce your tax liability. We identify credits you may qualify for—R&D credits, work opportunity credits, energy credits, and more—and ensure proper documentation to support your claims.' },
    ]
  },
  taxPlanning: { 
    title: 'Tax Planning', 
    description: 'Year-round strategies to minimize your tax liability.', 
    backgroundImage: bannerPlanning,
    sections: [
      { title: 'Proactive Tax Strategies', content: 'Effective tax planning happens throughout the year, not just at filing time. We monitor your situation, identify planning opportunities, and recommend specific actions to reduce your tax burden while keeping you compliant with tax laws.' },
      { title: 'Income Timing', content: 'When you recognize income can significantly affect your tax bill. We help you evaluate options for deferring income or accelerating deductions based on current and expected future tax rates, optimizing your tax position across multiple years.' },
      { title: 'Entity Structure Optimization', content: 'The right business structure can save significant taxes. We analyze your situation and recommend entity structures—or restructuring existing entities—to minimize overall tax burden while achieving your business objectives.' },
      { title: 'Retirement Planning Integration', content: 'Retirement plan contributions are one of the most powerful tax planning tools available. We coordinate tax planning with retirement planning to maximize current deductions while building long-term wealth in tax-advantaged accounts.' },
    ]
  },
  // Tax Relief & Audit Support pages
  irsAuditRepresentation: { 
    title: 'IRS Audit Representation', 
    description: 'Professional representation during IRS examinations.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'Audit Response & Preparation', content: 'Receiving an IRS audit notice is stressful, but you don\'t have to face it alone. We review the notice, gather required documentation, and prepare a comprehensive response. Our experience with IRS procedures ensures nothing is overlooked and your rights are protected.' },
      { title: 'Direct IRS Communication', content: 'We handle all communication with the IRS on your behalf. You won\'t have to speak with auditors directly unless absolutely necessary. We correspond in writing, attend meetings, and advocate for your position throughout the examination process.' },
      { title: 'Documentation & Support', content: 'Proper documentation is critical to audit success. We help you organize records, reconstruct missing documentation when possible, and present your information in a way that supports your tax positions clearly and convincingly.' },
      { title: 'Audit Outcome Negotiation', content: 'If adjustments are proposed, we work to minimize the impact. We negotiate with examiners, challenge unsupported positions, and ensure you only pay what you legitimately owe—not a penny more.' },
    ]
  },
  taxDebtResolution: { 
    title: 'Tax Debt Resolution', 
    description: 'Strategies to resolve unpaid tax balances with the IRS.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'Installment Agreements', content: 'If you can\'t pay your tax debt in full, an installment agreement allows you to pay over time. We negotiate payment plans that fit your budget while stopping collection actions. Various agreement types are available depending on your balance and circumstances.' },
      { title: 'Offer in Compromise', content: 'In some cases, the IRS will accept less than the full amount owed. We evaluate whether you qualify for an Offer in Compromise based on your ability to pay, income, expenses, and asset equity, then prepare and negotiate the offer on your behalf.' },
      { title: 'Currently Not Collectible', content: 'If paying your tax debt would create economic hardship, you may qualify for Currently Not Collectible status. The IRS temporarily suspends collection activity while you get back on your feet. We document your hardship and request this protection.' },
      { title: 'Penalty Relief Programs', content: 'Penalties often add significantly to tax debt. We evaluate your eligibility for penalty abatement based on reasonable cause, first-time penalty relief, or other programs. Reducing penalties can make the remaining balance much more manageable.' },
    ]
  },
  penaltyAbatement: { 
    title: 'Penalty Abatement', 
    description: 'Help reducing or eliminating IRS penalties.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'First-Time Penalty Abatement', content: 'The IRS offers administrative relief for taxpayers with a clean compliance history. If you\'ve filed and paid on time for the past three years, you may qualify to have penalties removed for a one-time slip. We evaluate your eligibility and request relief.' },
      { title: 'Reasonable Cause Relief', content: 'When circumstances beyond your control prevented compliance, the IRS may abate penalties. We document your reasonable cause—illness, natural disaster, death in family, or other circumstances—and present a compelling case for relief.' },
      { title: 'Statutory Exceptions', content: 'Certain penalties have specific statutory exceptions. We identify situations where these exceptions apply, such as written IRS advice you relied upon, and pursue the appropriate relief channels.' },
      { title: 'Penalty Appeals', content: 'If initial penalty relief requests are denied, you have the right to appeal. We prepare and present appeals to the IRS Office of Appeals, often achieving better outcomes than at the examination level.' },
    ]
  },
  auditDefense: { 
    title: 'Audit Defense', 
    description: 'Comprehensive defense services for IRS audits.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'Examination Representation', content: 'We represent you throughout the audit process—from initial contact through final resolution. Our experience with IRS audit procedures and examiner tactics protects your interests and often results in more favorable outcomes than self-representation.' },
      { title: 'Technical Position Defense', content: 'When the IRS challenges a tax position, we defend it with applicable tax law, regulations, revenue rulings, and court cases. We build the strongest possible case for your position using the same authorities the IRS uses.' },
      { title: 'Information Request Management', content: 'IRS information requests can be overly broad or fishing expeditions. We carefully review each request, provide only what\'s legally required, and protect privileged information. Controlled information flow is a key audit defense strategy.' },
      { title: 'Settlement Negotiations', content: 'Not every audit issue is worth fighting to the end. We help you evaluate the costs and benefits of contesting versus settling each issue, and negotiate settlements that balance risk with practical considerations.' },
    ]
  },
  irsAppeals: { 
    title: 'IRS Appeals', 
    description: 'Navigate the IRS appeals process effectively.', 
    backgroundImage: bannerLaptopNotes,
    sections: [
      { title: 'Appeals Process Overview', content: 'If you disagree with an IRS determination, you have the right to appeal before going to court. The IRS Office of Appeals is independent from examination and often provides a fresh perspective. We guide you through the process and maximize your chances of success.' },
      { title: 'Protest Preparation', content: 'A well-written protest is essential for appeals success. We prepare comprehensive protests that clearly state the disputed issues, relevant facts, applicable law, and arguments supporting your position.' },
      { title: 'Appeals Conference Representation', content: 'We represent you at appeals conferences, presenting your case to appeals officers and responding to their questions and concerns. Our experience with appeals procedures and negotiation strategies benefits your case.' },
      { title: 'Settlement Authority', content: 'Appeals officers have broad authority to settle cases based on litigation hazards—the likelihood the IRS would win in court. We evaluate the hazards of your case and use this analysis to negotiate favorable settlements.' },
    ]
  },
  // IT Services pages
  networkSetup: { 
    title: 'Network Setup & Support', 
    description: 'Design and maintain robust network infrastructure for your business.', 
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'Network Design & Implementation', content: 'We design and implement network infrastructure tailored to your business needs. From small office setups to multi-location enterprises, we create secure, reliable, and scalable networks that support your operations and growth plans.' },
      { title: 'Wireless Solutions', content: 'Modern businesses need reliable wireless connectivity. We design and deploy enterprise-grade wireless networks with proper coverage, security, and performance. Guest networks, mobile device management, and BYOD policies are included.' },
      { title: 'Network Security', content: 'Your network is only as strong as its security. We implement firewalls, intrusion detection, VPNs for remote access, and network segmentation to protect your data and systems from unauthorized access and cyber threats.' },
      { title: 'Ongoing Support & Monitoring', content: 'Networks require ongoing attention. We provide proactive monitoring, performance optimization, and responsive support when issues arise. Minimize downtime and keep your team productive.' },
    ]
  },
  cloudSolutions: { 
    title: 'Cloud Solutions', 
    description: 'Leverage cloud computing for flexibility and scalability.', 
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'Cloud Migration', content: 'Moving to the cloud requires careful planning. We assess your current infrastructure, select appropriate cloud platforms, and execute migrations that minimize disruption while maximizing the benefits of cloud computing.' },
      { title: 'Microsoft 365 & Google Workspace', content: 'Cloud productivity suites transform how your team works. We implement and configure Microsoft 365 or Google Workspace, including email, collaboration tools, file storage, and security features. Training ensures your team gets maximum value.' },
      { title: 'Cloud Infrastructure (IaaS)', content: 'Need cloud servers, storage, or networking? We design, deploy, and manage infrastructure on AWS, Azure, or Google Cloud. Right-size your resources to balance performance with cost efficiency.' },
      { title: 'Hybrid Cloud Solutions', content: 'Not everything belongs in the cloud. We design hybrid solutions that keep sensitive data on-premises while leveraging cloud benefits for appropriate workloads. Get the best of both worlds.' },
    ]
  },
  cybersecurity: { 
    title: 'Cybersecurity', 
    description: 'Protect your business from cyber threats with comprehensive security.', 
    backgroundImage: bannerSecurity,
    sections: [
      { title: 'Security Assessment', content: 'Understanding your vulnerabilities is the first step to protection. We conduct comprehensive security assessments that identify weaknesses in your systems, processes, and policies, providing actionable recommendations to improve your security posture.' },
      { title: 'Endpoint Protection', content: 'Every device is a potential entry point for attackers. We deploy and manage advanced endpoint protection including antivirus, anti-malware, and endpoint detection and response (EDR) solutions across all your devices.' },
      { title: 'Email Security', content: 'Email is the most common attack vector. We implement email security solutions that filter spam, block phishing attempts, prevent business email compromise, and protect against malicious attachments and links.' },
      { title: 'Security Awareness Training', content: 'Your employees are your last line of defense—and often the weakest link. We provide security awareness training that teaches your team to recognize and respond to threats, reducing the risk of successful attacks.' },
    ]
  },
  dataBackup: { 
    title: 'Data Backup & Recovery', 
    description: 'Never lose critical data with automated backup solutions.', 
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'Automated Backup Systems', content: 'Manual backups are unreliable. We implement automated backup solutions that protect your data continuously without requiring daily attention. Backups are verified regularly to ensure recoverability.' },
      { title: 'Disaster Recovery Planning', content: 'When disaster strikes, you need a plan. We develop disaster recovery plans that define recovery objectives, document procedures, and identify resources needed to restore operations. Regular testing ensures the plan works when needed.' },
      { title: 'Cloud Backup Solutions', content: 'Off-site backup protects against local disasters. We implement secure cloud backup solutions that encrypt your data in transit and at rest, providing geographic redundancy and rapid recovery capabilities.' },
      { title: 'Business Continuity', content: 'Beyond backup, we help you maintain operations during disruptions. Business continuity planning ensures critical functions can continue even when primary systems are unavailable.' },
    ]
  },
  itConsulting: { 
    title: 'IT Consulting', 
    description: 'Expert guidance on technology decisions for your business.', 
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'Technology Strategy', content: 'Technology decisions should support business goals. We help you develop IT strategies that align technology investments with your business objectives, ensuring you get maximum value from your technology spending.' },
      { title: 'Vendor Evaluation & Selection', content: 'Choosing the right technology vendors is critical. We evaluate options objectively, comparing features, costs, and vendor stability to recommend solutions that best fit your needs and budget.' },
      { title: 'Project Management', content: 'Technology projects often fail due to poor management. We provide project management expertise to keep implementations on track, on budget, and aligned with expectations.' },
      { title: 'IT Budgeting & Planning', content: 'Plan your technology spending effectively. We help you develop IT budgets that account for current needs, anticipated growth, and technology refresh cycles, avoiding surprise expenses.' },
    ]
  },
  softwareIntegration: { 
    title: 'Software Integration', 
    description: 'Connect your business systems for improved efficiency.', 
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'System Integration', content: 'Disconnected systems create inefficiency and errors. We connect your accounting, CRM, inventory, e-commerce, and other business applications so data flows automatically between systems, eliminating duplicate entry and improving accuracy.' },
      { title: 'API Development & Integration', content: 'When off-the-shelf integrations aren\'t available, we develop custom API connections. Our developers create reliable, secure integrations that automate data exchange between any systems with API capabilities.' },
      { title: 'Workflow Automation', content: 'Repetitive tasks waste time and introduce errors. We identify automation opportunities and implement solutions that streamline workflows, from automated data entry to complex approval processes.' },
      { title: 'Data Migration', content: 'Changing systems requires careful data migration. We plan and execute data migrations that preserve your historical information, maintain data integrity, and minimize disruption to operations.' },
    ]
  },
  // Industry pages
  construction: { 
    title: 'Construction Industry', 
    description: 'Specialized accounting for contractors and builders.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Job Costing', content: 'Accurate job costing is essential for construction profitability. We implement systems that track costs by job, phase, and cost code, giving you real-time visibility into project profitability. Know which jobs make money and which don\'t—before it\'s too late.' },
      { title: 'Progress Billing & WIP', content: 'Construction billing is complex. We help you manage progress billing, retention, change orders, and work-in-progress (WIP) reporting. Our WIP schedules provide the information bonding companies and lenders require.' },
      { title: 'Contractor Compliance', content: 'Prevailing wage requirements, certified payroll, and contractor licensing add complexity. We ensure you meet all compliance requirements, avoiding penalties and maintaining your ability to bid on public and private projects.' },
      { title: 'Bonding Support', content: 'Bonding capacity drives growth for contractors. We prepare financial statements that maximize your bonding capacity and provide the information surety companies need. Strong financial reporting leads to larger bond limits.' },
    ]
  },
  restaurants: { 
    title: 'Restaurants', 
    description: 'Specialized accounting for restaurants and food service.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Daily Sales Reconciliation', content: 'Restaurants generate high transaction volumes. We reconcile daily sales, track cash and credit card receipts, and identify discrepancies quickly. Proper controls protect against theft and ensure accurate reporting.' },
      { title: 'Food Cost Analysis', content: 'Food costs make or break restaurant profitability. We track food costs as a percentage of sales, analyze menu item profitability, and identify waste and theft. Our analysis helps you maintain healthy margins.' },
      { title: 'Tip Reporting & Compliance', content: 'Tip reporting has strict IRS requirements. We ensure proper tip allocation, 8% minimum wage credit calculations, and compliance with tip pooling rules. Avoid costly penalties with proper tip reporting procedures.' },
      { title: 'Labor Cost Management', content: 'Labor is typically the largest restaurant expense. We provide labor cost analysis, help with scheduling optimization, and ensure compliance with wage and hour laws. Control labor costs without sacrificing service quality.' },
    ]
  },
  retail: { 
    title: 'Retail', 
    description: 'Accounting solutions for retail businesses.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Inventory Management', content: 'Inventory ties up cash and affects profitability. We help you implement inventory tracking systems, conduct periodic counts, and analyze turnover. Optimize inventory levels to balance availability with cash flow.' },
      { title: 'Point of Sale Integration', content: 'Your POS system generates valuable data. We integrate POS data with your accounting system, automate sales recording, and generate reports that reveal customer trends and product performance.' },
      { title: 'Multi-Location Reporting', content: 'Retail chains need location-specific and consolidated reporting. We set up accounting systems that track performance by location while providing meaningful consolidated financial statements.' },
      { title: 'Sales Tax Compliance', content: 'Retail sales tax is complex, especially with multi-state operations. We ensure proper collection, exemption documentation, and timely filing of sales tax returns across all jurisdictions.' },
    ]
  },
  healthcare: { 
    title: 'Healthcare Industry', 
    description: 'Accounting services for medical practices.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Medical Practice Accounting', content: 'Healthcare has unique accounting needs. We understand insurance reimbursements, contractual adjustments, patient collections, and the metrics that drive practice profitability. Our reports help you understand and improve financial performance.' },
      { title: 'Provider Compensation', content: 'Physician compensation plans are complex. We track productivity measures, calculate compensation under various methodologies, and ensure compliance with Stark Law and Anti-Kickback requirements.' },
      { title: 'HIPAA Compliance', content: 'Financial data often contains protected health information. We maintain strict HIPAA compliance in all our processes, using secure systems and procedures that protect patient privacy.' },
      { title: 'Practice Valuation', content: 'Whether buying, selling, or bringing in partners, practice valuation requires specialized knowledge. We provide valuation support that considers healthcare-specific factors like patient relationships, payer contracts, and regulatory environment.' },
    ]
  },
  dentists: { 
    title: 'Dental Practices', 
    description: 'Specialized accounting for dental offices.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Dental Practice Accounting', content: 'Dental practices have unique financial characteristics. We understand insurance reimbursements, patient financing, lab costs, and the key performance indicators specific to dentistry. Our services help you build a more profitable practice.' },
      { title: 'Production & Collection Analysis', content: 'Production and collection rates drive dental practice success. We track these metrics by provider and procedure type, identify collection issues, and help you optimize both production scheduling and collection processes.' },
      { title: 'Associate & Partner Compensation', content: 'Associate compensation arrangements and partnership buy-ins require careful structuring. We help design fair, tax-efficient arrangements and track the metrics needed to calculate compensation accurately.' },
      { title: 'Practice Acquisition Support', content: 'Growing through acquisition? We provide due diligence services, help structure deals, and support integration of acquired practices. Make informed decisions with comprehensive financial analysis.' },
    ]
  },
  hospitality: { 
    title: 'Hospitality Industry', 
    description: 'Accounting for restaurants and hotels.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Hotel & Lodging Accounting', content: 'Hotels require specialized accounting for room revenue, amenities, food and beverage, and event spaces. We implement the Uniform System of Accounts for the Lodging Industry (USALI) and provide management reports that benchmark performance.' },
      { title: 'Revenue Management Support', content: 'Maximizing revenue per available room requires good data. We provide the financial reporting and analysis that supports revenue management decisions, tracking ADR, occupancy, RevPAR, and other key metrics.' },
      { title: 'Multi-Department Accounting', content: 'Hotels have multiple revenue and cost centers. We set up accounting systems that track performance by department—rooms, F&B, spa, events—while providing meaningful consolidated reporting.' },
      { title: 'Seasonal Cash Flow Management', content: 'Many hospitality businesses are highly seasonal. We help you plan for seasonal fluctuations, manage cash flow through slow periods, and make the most of peak season revenue.' },
    ]
  },
  lawFirms: { 
    title: 'Law Firms', 
    description: 'Trust accounting and financial services for attorneys.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'IOLTA Trust Accounting', content: 'Bar rules require strict separation and tracking of client funds. We maintain compliant trust accounting systems, perform regular reconciliations, and ensure your IOLTA accounts meet all state bar requirements.' },
      { title: 'Partner Compensation', content: 'Law firm partner compensation is often complex, involving origination credits, hours, collections, and subjective factors. We track the metrics used in your compensation formula and calculate distributions accurately.' },
      { title: 'Matter Profitability', content: 'Not all matters are equally profitable. We analyze profitability by matter, client, and practice area, helping you focus resources on the most valuable work and identify unprofitable relationships.' },
      { title: 'Contingency Fee Accounting', content: 'Contingency cases require special accounting treatment. We track costs advanced, calculate fee distributions, and ensure proper recognition of contingency fee revenue when cases settle.' },
    ]
  },
  manufacturing: { 
    title: 'Manufacturing', 
    description: 'Cost accounting and financial management for manufacturers.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Cost Accounting', content: 'Understanding true product costs is essential for pricing and profitability. We implement cost accounting systems that track direct materials, direct labor, and manufacturing overhead, providing accurate product costs for decision-making.' },
      { title: 'Inventory Valuation', content: 'Manufacturers carry raw materials, work-in-process, and finished goods. We ensure proper inventory valuation using appropriate methods (FIFO, LIFO, weighted average) and maintain accurate perpetual inventory records.' },
      { title: 'Standard Costing & Variance Analysis', content: 'Standard cost systems enable variance analysis that identifies inefficiencies. We help you establish meaningful standards and analyze variances for materials, labor, and overhead.' },
      { title: 'Financial Reporting', content: 'Manufacturers need specialized financial reports. We provide production reports, cost of goods manufactured statements, and analysis that helps you understand and control manufacturing operations.' },
    ]
  },
  realEstate: { 
    title: 'Real Estate', 
    description: 'Property accounting and real estate tax services.', 
    backgroundImage: bannerTechMeeting,
    sections: [
      { title: 'Rental Property Accounting', content: 'We track income, expenses, and cash flow for rental properties of all sizes. From single-family rentals to large commercial portfolios, our accounting provides the information you need to maximize returns.' },
      { title: '1031 Exchange Planning', content: 'Like-kind exchanges allow tax deferral on property sales. We help you plan and execute 1031 exchanges, ensuring compliance with strict timing and reinvestment requirements that preserve your tax deferral.' },
      { title: 'Real Estate Investment Tax', content: 'Real estate offers unique tax advantages. We help you maximize depreciation deductions, navigate passive activity rules, and structure investments for tax efficiency. Cost segregation studies can accelerate deductions significantly.' },
      { title: 'Entity Structuring', content: 'Proper entity structure protects your assets and optimizes taxes. We advise on LLCs, partnerships, and other structures commonly used in real estate, helping you balance liability protection with tax efficiency.' },
    ]
  },
  refundTracking: { 
    title: 'Track Your Refund', 
    description: 'Check the status of your tax refund.', 
    backgroundImage: bannerTablet,
    sections: [
      { title: 'Federal Refund Status', content: 'The IRS typically issues refunds within 21 days of accepting an e-filed return. You can check your federal refund status using the IRS "Where\'s My Refund?" tool. You\'ll need your Social Security number, filing status, and exact refund amount.' },
      { title: 'State Refund Tracking', content: 'State refund timing varies. Most states provide online refund tracking through their tax agency websites. Processing times range from a few days to several weeks depending on the state and whether you e-filed or mailed your return.' },
      { title: 'Refund Delays', content: 'Some returns require additional review, which delays refunds. Common causes include earned income credit or child tax credit claims (these cannot be issued before mid-February), identity verification requirements, or errors on the return.' },
      { title: 'Direct Deposit', content: 'Direct deposit is the fastest way to receive your refund. Ensure your bank account and routing numbers are correct when filing. You can split your refund into multiple accounts or use it to purchase savings bonds.' },
    ]
  },
  taxDueDates: { 
    title: 'Tax Due Dates', 
    description: 'Important tax filing and payment deadlines.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Individual Tax Deadlines', content: 'Individual tax returns (Form 1040) are generally due April 15. Extensions push the filing deadline to October 15, but taxes owed are still due April 15. Estimated tax payments for self-employed individuals are due quarterly: April 15, June 15, September 15, and January 15.' },
      { title: 'Business Tax Deadlines', content: 'Business tax deadlines vary by entity type. Partnerships and S-corporations file by March 15 (or the 15th day of the third month after year-end). C-corporations file by April 15 (or the 15th day of the fourth month after year-end).' },
      { title: 'Payroll Tax Deadlines', content: 'Payroll taxes have their own schedule. Federal deposits may be semi-weekly or monthly depending on your deposit schedule. Form 941 quarterly returns are due by the end of the month following each quarter. Annual W-2s are due to employees by January 31.' },
      { title: 'Extension Deadlines', content: 'Extensions provide additional time to file, not to pay. Individual extensions (Form 4868) are due by April 15 and extend filing to October 15. Business extensions vary by entity type. Interest and penalties accrue on taxes not paid by the original due date.' },
    ]
  },
  taxRates: { 
    title: 'Tax Rates', 
    description: 'Current federal and state tax rates.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Federal Income Tax Brackets', content: 'Federal income tax uses a progressive rate structure with rates ranging from 10% to 37%. Your marginal tax rate applies only to income in that bracket—lower brackets are taxed at lower rates. Tax brackets are adjusted annually for inflation.' },
      { title: 'Capital Gains Rates', content: 'Long-term capital gains (assets held over one year) are taxed at preferential rates: 0%, 15%, or 20% depending on your income. Short-term gains are taxed as ordinary income. Net investment income tax of 3.8% may also apply for high earners.' },
      { title: 'Self-Employment Tax', content: 'Self-employed individuals pay both the employee and employer portions of Social Security and Medicare taxes—15.3% on net self-employment income (12.4% for Social Security up to the wage base, 2.9% for Medicare). A deduction for half of self-employment tax helps offset this.' },
      { title: 'State Tax Rates', content: 'State income tax rates vary widely. Some states have no income tax, others have flat rates, and many have progressive structures. Local income taxes may also apply in certain cities and counties. Contact us for specific information about your state.' },
    ]
  },
  irsForms: { 
    title: 'IRS Forms & Publications', 
    description: 'Access commonly needed tax forms.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Common Forms', content: 'The most frequently needed forms include W-4 (Employee Withholding), W-9 (Request for Taxpayer Identification Number), 1099 series (various income reporting), and Form 4868 (Individual Extension). These are available on the IRS website or through our secure client portal.' },
      { title: 'Business Forms', content: 'Businesses commonly need Form SS-4 (EIN Application), Form 941 (Quarterly Payroll), Form 940 (Annual Unemployment), and various 1099 forms for contractor and interest reporting. We can provide these forms or prepare them on your behalf.' },
      { title: 'IRS Publications', content: 'IRS publications provide guidance on specific topics. Publication 17 (Your Federal Income Tax) is a comprehensive guide for individuals. Publication 334 (Small Business Tax Guide) helps small business owners. We can help you find the publication you need.' },
      { title: 'Need Assistance?', content: 'Filling out tax forms correctly is important. Errors can delay processing or result in additional taxes and penalties. If you need help with any form, our team is ready to assist. Contact us for form completion assistance.' },
    ]
  },
  recordRetention: { 
    title: 'Record Retention Guide', 
    description: 'How long to keep your financial records.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Tax Returns & Supporting Documents', content: 'Keep tax returns and supporting documentation for at least three years from the filing date or due date, whichever is later. If you underreported income by more than 25%, the IRS has six years to assess additional tax. Keep records indefinitely if you didn\'t file or filed a fraudulent return.' },
      { title: 'Business Records', content: 'Business records should generally be kept for seven years. This includes receipts, invoices, canceled checks, and bank statements. Some records like corporate minutes, contracts, and real estate documents should be kept permanently.' },
      { title: 'Property Records', content: 'Keep records related to property (home, investments, business assets) for as long as you own the property plus the applicable statute of limitations. You\'ll need these records to calculate gain or loss when you sell.' },
      { title: 'Digital Storage', content: 'The IRS accepts electronic records if they\'re accurate, accessible, and maintained properly. Scan paper documents and store them securely. Ensure you have reliable backups and can produce records if requested.' },
    ]
  },
  stateTaxForms: { 
    title: 'State Tax Forms', 
    description: 'Links to state tax agency forms.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'State Tax Agencies', content: 'Each state maintains its own tax agency with forms and filing requirements. Most states have websites where you can download forms, make payments, and check the status of returns. We can help you navigate your state\'s requirements.' },
      { title: 'Multi-State Filing', content: 'If you work or have income in multiple states, you may need to file returns in each state. Rules for allocating income between states are complex. We help you understand your filing obligations and ensure compliance with all applicable states.' },
      { title: 'State Business Taxes', content: 'Beyond income tax, states may impose franchise taxes, gross receipts taxes, and other business levies. Requirements vary significantly by state. We help you understand and comply with your state\'s business tax obligations.' },
      { title: 'Need Help?', content: 'State tax rules are often more complex than federal. If you have questions about your state tax obligations or need help with state forms, contact our team for assistance.' },
    ]
  },
  newsletter: { 
    title: 'Newsletter', 
    description: 'Subscribe to our financial newsletter.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Stay Informed', content: 'Our newsletter delivers timely updates on tax law changes, financial planning strategies, and important deadlines directly to your inbox. We cut through the complexity to bring you clear, actionable information that affects your finances.' },
      { title: 'Tax Law Updates', content: 'Tax laws change frequently. Our newsletter keeps you current on new legislation, IRS guidance, and court decisions that may affect your tax situation. Be the first to know about opportunities and requirements.' },
      { title: 'Seasonal Reminders', content: 'Never miss a deadline with our seasonal reminders for tax filings, estimated payments, and year-end planning. We send timely notifications so you can take action before deadlines pass.' },
      { title: 'Subscribe Today', content: 'Join thousands of readers who rely on our newsletter for financial insights. Simply provide your email address and select your areas of interest. We respect your privacy and never share your information.' },
    ]
  },
  businessStrategies: { 
    title: 'Business Strategies', 
    description: 'Strategies for business success.', 
    backgroundImage: bannerPlanning,
    sections: [
      { title: 'Growth Planning', content: 'Sustainable growth requires planning. We help you identify growth opportunities, assess resource requirements, and develop implementation plans. Whether organic growth or acquisition, we provide the financial analysis to support informed decisions.' },
      { title: 'Cost Reduction', content: 'Improving profitability often means reducing costs without sacrificing quality. We analyze your cost structure, benchmark against industry standards, and identify opportunities for savings. Small improvements across multiple areas add up to significant impact.' },
      { title: 'Pricing Strategy', content: 'Pricing affects both sales volume and margins. We help you analyze your cost structure, understand customer value perception, and develop pricing strategies that maximize profitability while remaining competitive.' },
      { title: 'Operational Efficiency', content: 'Streamlined operations improve both profitability and customer satisfaction. We help you identify bottlenecks, eliminate waste, and implement processes that make your business more efficient and effective.' },
    ]
  },
  faq: { 
    title: 'Frequently Asked Questions', 
    description: 'Answers to common questions.', 
    backgroundImage: bannerFeedback,
    sections: [
      { title: 'Getting Started', content: 'New clients can get started by calling our office or completing the contact form on our website. We\'ll schedule an initial consultation to discuss your needs and explain how we can help. Bring your most recent tax returns and any questions you have.' },
      { title: 'Fees & Billing', content: 'Our fees vary based on the complexity of your situation and services required. We provide clear estimates before beginning work and bill monthly or at project completion. We accept various payment methods for your convenience.' },
      { title: 'Document Delivery', content: 'You can provide documents through our secure client portal, encrypted email, mail, or in-person delivery. We recommend the secure portal for fastest processing and best security. We\'ll provide access credentials when you become a client.' },
      { title: 'Response Times', content: 'We strive to respond to all inquiries within one business day. During tax season, response times may be slightly longer due to volume. Urgent matters are prioritized, and we always communicate expected timelines.' },
    ]
  },
  financialCalculators: { 
    title: 'Financial Calculators', 
    description: 'Interactive financial planning tools.', 
    backgroundImage: bannerMacbook,
    sections: [
      { title: 'Tax Calculators', content: 'Estimate your tax liability, compare filing statuses, and evaluate the impact of deductions with our tax calculators. These tools help you understand your tax situation and plan more effectively.' },
      { title: 'Retirement Planning', content: 'Project your retirement savings growth, determine how much to save, and analyze distribution strategies. Our retirement calculators help you plan for a secure financial future.' },
      { title: 'Business Tools', content: 'Analyze business scenarios, calculate break-even points, and evaluate investment opportunities with our business calculators. Make data-driven decisions about your business finances.' },
      { title: 'Loan & Mortgage', content: 'Calculate loan payments, compare financing options, and understand amortization with our loan calculators. Whether for business or personal use, these tools help you make informed borrowing decisions.' },
    ]
  },
  clientPortal: { 
    title: 'Client Portal', 
    description: 'Secure access for existing clients.', 
    backgroundImage: bannerSecurity,
    sections: [
      { title: 'Secure Document Exchange', content: 'Our client portal provides bank-level security for sharing sensitive documents. Upload tax documents, download completed returns, and exchange information with your accountant—all through an encrypted, secure platform.' },
      { title: 'Access Your Documents', content: 'Your portal stores copies of your tax returns, financial statements, and other important documents. Access your files anytime from any device. No more searching for that document you need.' },
      { title: 'E-Signatures', content: 'Sign engagement letters, tax returns, and other documents electronically through the portal. E-signatures are legally valid and save time compared to printing, signing, and mailing.' },
      { title: 'First Time Login?', content: 'If you\'re a client and haven\'t set up your portal access, contact our office and we\'ll send you an invitation. You\'ll create a unique password and can begin using the portal immediately.' },
    ]
  },
  secureUpload: { 
    title: 'Secure File Upload', 
    description: 'Securely send documents to our team.', 
    backgroundImage: bannerSecurity,
    sections: [
      { title: 'Bank-Level Security', content: 'Our secure upload system uses 256-bit encryption—the same level of security used by major banks. Your sensitive documents are protected during transmission and storage.' },
      { title: 'Easy Upload Process', content: 'Uploading documents is simple. Select your files, add any notes or instructions, and click upload. We\'ll receive your documents immediately and confirm receipt. No special software required.' },
      { title: 'Accepted File Types', content: 'We accept most common file types including PDF, Word documents, Excel spreadsheets, and image files. For best results, scan documents to PDF format. Maximum file size is 25MB per file.' },
      { title: 'Privacy Protection', content: 'Your privacy is paramount. Files are stored securely and accessed only by authorized team members. We retain documents according to our privacy policy and destroy them securely when no longer needed.' },
    ]
  },
  blog: { 
    title: 'Blog', 
    description: 'Latest news and insights on accounting and tax.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Expert Insights', content: 'Our blog features articles written by our team of accounting and tax professionals. We share practical advice, explain complex topics in plain language, and help you stay informed about changes that affect your finances.' },
      { title: 'Tax Updates', content: 'When tax laws change, we explain what it means for you. Our tax update articles break down new legislation, IRS guidance, and court decisions that may impact your tax planning.' },
      { title: 'Business Advice', content: 'Find practical advice for running and growing your business. From cash flow management to hiring decisions, our business articles share insights gained from working with hundreds of business owners.' },
      { title: 'Personal Finance', content: 'Managing personal finances is challenging. Our articles cover topics like retirement planning, tax-efficient investing, and financial decision-making to help you achieve your financial goals.' },
    ]
  },
  privacyPolicy: { 
    title: 'Privacy Policy', 
    description: 'How we protect your information.', 
    backgroundImage: bannerSecurity,
    sections: [
      { title: 'Information We Collect', content: 'We collect information necessary to provide our services, including contact information, financial data, and tax documents. We only collect what we need and use it solely for the purposes you authorized.' },
      { title: 'How We Protect Your Data', content: 'Your data is protected by physical, electronic, and procedural safeguards. We use encryption, secure facilities, and access controls to protect your information from unauthorized access or disclosure.' },
      { title: 'Information Sharing', content: 'We do not sell or rent your information to third parties. We may share information with service providers who assist our operations, but only under strict confidentiality agreements. We comply with legal requirements for disclosure.' },
      { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal information. Contact us if you have questions about your data or wish to exercise your privacy rights.' },
    ]
  },
  disclaimer: { 
    title: 'Disclaimer', 
    description: 'Important legal information.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'General Information', content: 'The information on this website is provided for general informational purposes only. It does not constitute professional advice and should not be relied upon as such. Every situation is unique and requires individual analysis.' },
      { title: 'Not Legal or Tax Advice', content: 'Nothing on this website constitutes legal or tax advice. Tax laws are complex and change frequently. Before making decisions based on information found here, consult with a qualified professional who can consider your specific circumstances.' },
      { title: 'No Professional Relationship', content: 'Using this website does not create an accountant-client relationship. Such relationships are established only through signed engagement letters. We encourage you to contact us if you would like to discuss becoming a client.' },
      { title: 'Limitation of Liability', content: 'We make no warranties about the accuracy or completeness of information on this website. We are not liable for any losses or damages arising from use of this information. For specific advice, please contact our office directly.' },
    ]
  },
  securityMeasures: { 
    title: 'Security Measures', 
    description: 'How we keep your data secure.', 
    backgroundImage: bannerSecurity,
    sections: [
      { title: 'Physical Security', content: 'Our office employs physical security measures including restricted access, secure document storage, and proper disposal of sensitive materials. We protect your information whether in digital or physical form.' },
      { title: 'Digital Security', content: 'We use industry-leading security measures including encryption, firewalls, intrusion detection, and multi-factor authentication. Our systems are regularly updated and monitored for potential threats.' },
      { title: 'Staff Training', content: 'Our team receives regular training on security best practices, phishing awareness, and handling sensitive information. Human error is a major security risk, and training helps prevent it.' },
      { title: 'Compliance', content: 'We comply with all applicable regulations regarding data protection and privacy. Regular assessments ensure our security measures meet current standards and best practices.' },
    ]
  },
  taxStrategiesIndividual: { 
    title: 'Tax Strategies for Individuals', 
    description: 'Smart tax strategies to minimize your personal tax burden.', 
    backgroundImage: bannerReviewing,
    sections: [
      { title: 'Income Timing', content: 'When you receive income affects when you pay tax. Strategies like deferring bonuses, accelerating deductions, or timing investment sales can reduce taxes in high-income years and smooth your tax burden over time.' },
      { title: 'Retirement Contributions', content: 'Retirement account contributions are one of the most powerful tax reduction strategies. Maximize 401(k), IRA, and other retirement plan contributions to reduce current taxes while building long-term wealth.' },
      { title: 'Investment Tax Planning', content: 'Investment decisions have tax consequences. We help you manage capital gains, harvest losses, and position investments in the most tax-efficient account types. Asset location is as important as asset allocation.' },
      { title: 'Charitable Giving', content: 'Strategic charitable giving can reduce taxes while supporting causes you care about. Donor-advised funds, qualified charitable distributions, and appreciated asset donations offer tax benefits beyond standard deductions.' },
    ]
  },
  taxStrategiesBusiness: { 
    title: 'Tax Strategies for Business', 
    description: 'Business tax strategies to maximize savings and efficiency.', 
    backgroundImage: bannerPlanning,
    sections: [
      { title: 'Entity Selection', content: 'The right business structure can save significant taxes. We analyze your situation and recommend whether sole proprietorship, LLC, S-Corp, or C-Corp best fits your goals—considering both current operations and future plans.' },
      { title: 'Retirement Plans', content: 'Business retirement plans provide tax deductions while building wealth. Options include SEP-IRAs, SIMPLE IRAs, Solo 401(k)s, and defined benefit plans. The right choice depends on your income, employees, and retirement goals.' },
      { title: 'Equipment & Depreciation', content: 'Section 179 expensing and bonus depreciation allow immediate deduction of equipment purchases. Timing equipment purchases strategically can generate significant tax savings in high-income years.' },
      { title: 'Tax Credits', content: 'Business tax credits directly reduce tax liability dollar-for-dollar. We identify credits you may qualify for including R&D credits, work opportunity credits, small business health insurance credits, and more.' },
    ]
  },
  irsRecordRetrieval: { 
    title: 'IRS Record Retrieval', 
    description: 'Get copies of your past tax records from the IRS.', 
    backgroundImage: bannerDesk,
    sections: [
      { title: 'Tax Return Transcripts', content: 'Tax transcripts show most line items from your tax return including filing status, taxable income, and payments. They\'re often acceptable for mortgage applications and other purposes. Free transcripts are available for the current year and prior three years.' },
      { title: 'Account Transcripts', content: 'Account transcripts show your account status including payments, penalties, interest, and adjustments after your return was filed. These are useful for verifying payments and understanding your current standing with the IRS.' },
      { title: 'Wage and Income Transcripts', content: 'These transcripts show W-2s, 1099s, and other information returns filed with the IRS. They\'re helpful when you\'ve lost original documents or need to verify income reported by third parties.' },
      { title: 'How to Request Records', content: 'You can request transcripts online through IRS.gov, by phone, by mail using Form 4506-T, or through a tax professional with proper authorization. We can obtain transcripts on your behalf with Form 2848 power of attorney.' },
    ]
  },
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
          <Route path="/services-individuals" element={<GenericPage {...pageData.servicesIndividuals} />} />
          <Route path="/services-business" element={<GenericPage {...pageData.servicesBusiness} />} />
          <Route path="/tax-relief" element={<GenericPage {...pageData.taxRelief} />} />
          <Route path="/it-services" element={<GenericPage {...pageData.itServices} />} />
          <Route path="/industries" element={<GenericPage {...pageData.industries} />} />
          <Route path="/tax-center" element={<GenericPage {...pageData.taxCenter} />} />
          <Route path="/resources" element={<GenericPage {...pageData.resources} />} />

          {/* Simple pages */}
          <Route path="/estate-planning" element={<GenericPage {...simplePages.estatePlanning} />} />
          <Route path="/small-business-accounting" element={<GenericPage {...simplePages.smallBusinessAccounting} />} />
          <Route path="/bookkeeping" element={<GenericPage {...simplePages.bookkeeping} />} />
          <Route path="/cfo-services" element={<GenericPage {...simplePages.cfoServices} />} />
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
          {/* Tax Relief & Audit Support pages */}
          <Route path="/irs-audit-representation" element={<GenericPage {...simplePages.irsAuditRepresentation} />} />
          <Route path="/tax-debt-resolution" element={<GenericPage {...simplePages.taxDebtResolution} />} />
          <Route path="/penalty-abatement" element={<GenericPage {...simplePages.penaltyAbatement} />} />
          <Route path="/audit-defense" element={<GenericPage {...simplePages.auditDefense} />} />
          <Route path="/irs-appeals" element={<GenericPage {...simplePages.irsAppeals} />} />
          {/* IT Services pages */}
          <Route path="/network-setup" element={<GenericPage {...simplePages.networkSetup} />} />
          <Route path="/cloud-solutions" element={<GenericPage {...simplePages.cloudSolutions} />} />
          <Route path="/cybersecurity" element={<GenericPage {...simplePages.cybersecurity} />} />
          <Route path="/data-backup" element={<GenericPage {...simplePages.dataBackup} />} />
          <Route path="/it-consulting" element={<GenericPage {...simplePages.itConsulting} />} />
          <Route path="/software-integration" element={<GenericPage {...simplePages.softwareIntegration} />} />
          {/* Industry pages */}
          <Route path="/construction" element={<GenericPage {...simplePages.construction} />} />
          <Route path="/restaurants" element={<GenericPage {...simplePages.restaurants} />} />
          <Route path="/retail" element={<GenericPage {...simplePages.retail} />} />
          <Route path="/healthcare" element={<GenericPage {...simplePages.healthcare} />} />
          <Route path="/dentists" element={<GenericPage {...simplePages.dentists} />} />
          <Route path="/hospitality" element={<GenericPage {...simplePages.hospitality} />} />
          <Route path="/law-firms" element={<GenericPage {...simplePages.lawFirms} />} />
          <Route path="/manufacturing" element={<GenericPage {...simplePages.manufacturing} />} />
          <Route path="/real-estate" element={<GenericPage {...simplePages.realEstate} />} />
          <Route path="/refund-tracking" element={<GenericPage {...simplePages.refundTracking} />} />
          <Route path="/tax-due-dates" element={<GenericPage {...simplePages.taxDueDates} />} />
          <Route path="/tax-rates" element={<GenericPage {...simplePages.taxRates} />} />
          <Route path="/irs-forms" element={<IrsForms />} />
          <Route path="/record-retention" element={<GenericPage {...simplePages.recordRetention} />} />
          <Route path="/state-tax-forms" element={<GenericPage {...simplePages.stateTaxForms} />} />
          <Route path="/newsletter" element={<GenericPage {...simplePages.newsletter} />} />
          <Route path="/business-strategies" element={<GenericPage {...simplePages.businessStrategies} />} />
          <Route path="/faq" element={<GenericPage {...simplePages.faq} />} />
          <Route path="/financial-calculators" element={<FinancialCalculators />} />
          <Route path="/client-portal" element={<GenericPage {...simplePages.clientPortal} />} />
          <Route path="/secure-upload" element={<GenericPage {...simplePages.secureUpload} />} />
          <Route path="/blog" element={<GenericPage {...simplePages.blog} />} />
          <Route path="/privacy-policy" element={<GenericPage {...simplePages.privacyPolicy} />} />
          <Route path="/disclaimer" element={<GenericPage {...simplePages.disclaimer} />} />
          <Route path="/security-measures" element={<GenericPage {...simplePages.securityMeasures} />} />
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
