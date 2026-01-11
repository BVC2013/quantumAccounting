#!/usr/bin/env python3
"""
Script to generate all remaining website pages from templates
"""

import os

# Base HTML template
BASE_TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{meta_description}">
    <title>{title} | Quantum Accounting Advisory</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <nav class="container">
            <a href="../index.html" class="logo">Quantum Accounting Advisory</a>
            <ul class="nav-menu">
                <li><a href="../index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <div class="page-header">
        <div class="container">
            <h1>{page_title}</h1>
        </div>
    </div>

    <div class="page-content container">
        <div class="two-column">
            <div>
                {content}
            </div>
            
            <div class="sidebar">
                <h3>Get Started Today</h3>
                <p>Schedule a consultation to discuss your needs.</p>
                <a href="book-meeting.html" class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;">Book a Consultation</a>
                
                <h3>Contact Us</h3>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> info@quantumaccounting.com</p>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Quantum Accounting Advisory</h3>
                    <p>Your trusted partner for comprehensive accounting, tax, and financial advisory services.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Quantum Accounting Advisory LLC. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="../js/navigation.js"></script>
</body>
</html>
'''

# Page definitions with content
PAGES = {
    # Business Services
    'services-business.html': {
        'title': 'Business Services',
        'meta_description': 'Comprehensive accounting and financial services for businesses. Bookkeeping, payroll, financial statements, and business advisory.',
        'page_title': 'Business Services',
        'content': '''
                <h2>Complete Financial Solutions for Your Business</h2>
                <p>Running a business requires focus, dedication, and attention to countless details. Financial management shouldn't be one of the things keeping you up at night. At Quantum Accounting Advisory, we provide comprehensive business accounting services that give you the financial clarity and strategic guidance you need to grow and succeed.</p>
                
                <h2>Our Business Services</h2>
                
                <h3>Small Business Accounting</h3>
                <p>Complete accounting services tailored to small businesses. We handle your day-to-day accounting needs so you can focus on running your business.</p>
                
                <h3>Bookkeeping Services</h3>
                <p>Accurate, timely bookkeeping that keeps your financial records organized and up-to-date. We ensure your books are always ready for review, tax preparation, or business decisions.</p>
                
                <h3>Payroll Processing</h3>
                <p>Reliable payroll services that ensure your employees are paid accurately and on time, with all tax withholdings and reporting handled correctly.</p>
                
                <h3>Financial Statement Preparation</h3>
                <p>Professional financial statements including compilations, reviews, and audits that give you and your stakeholders confidence in your financial position.</p>
                
                <h3>Cash Flow Management</h3>
                <p>Strategic cash flow analysis and planning to help you maintain healthy liquidity, plan for growth, and avoid cash crunches.</p>
                
                <h3>Business Advisory Services</h3>
                <p>Strategic guidance and planning to help you make informed business decisions, plan for growth, and achieve your business objectives.</p>
                
                <h3>Financial Planning for Businesses</h3>
                <p>Comprehensive financial planning that aligns your financial resources with your business goals and growth strategies.</p>
                
                <h3>New Business Formation</h3>
                <p>Expert guidance on entity selection, setup, and initial accounting structure to give your new business a strong financial foundation.</p>
                
                <h3>Non-Profit Organizations</h3>
                <p>Specialized accounting and compliance services for non-profit organizations, ensuring you meet all regulatory requirements while maximizing your mission impact.</p>
                
                <h3>Internal Controls</h3>
                <p>Risk management and fraud prevention services that protect your business assets and ensure the integrity of your financial processes.</p>
                
                <h2>Why Choose Our Business Services</h2>
                <ul>
                    <li><strong>Business-Focused Expertise:</strong> We understand the unique challenges and opportunities facing businesses today</li>
                    <li><strong>Scalable Solutions:</strong> Services that grow with your business, from startup to established enterprise</li>
                    <li><strong>Strategic Insight:</strong> We don't just record transactions—we help you understand what they mean for your business</li>
                    <li><strong>Time Savings:</strong> Free up your time to focus on what you do best—running your business</li>
                    <li><strong>Compliance Confidence:</strong> Stay current with regulations and requirements without the stress</li>
                </ul>
                
                <p>Ready to streamline your business finances? <a href="contact.html">Contact us</a> to learn how we can help your business thrive.</p>
        '''
    },
    
    'small-business-accounting.html': {
        'title': 'Small Business Accounting',
        'meta_description': 'Complete accounting services for small businesses. Bookkeeping, financial reporting, and strategic guidance.',
        'page_title': 'Small Business Accounting',
        'content': '''
                <h2>Accounting Services Designed for Small Businesses</h2>
                <p>Small businesses face unique financial challenges. You need accounting services that understand your business model, respect your budget, and provide the insights you need to make smart decisions. Our small business accounting services are designed specifically with your needs in mind.</p>
                
                <h2>What We Provide</h2>
                <ul>
                    <li>Complete bookkeeping and record-keeping</li>
                    <li>Monthly financial statements and reporting</li>
                    <li>Accounts payable and receivable management</li>
                    <li>Bank reconciliation and cash management</li>
                    <li>Financial analysis and business insights</li>
                    <li>Budget preparation and variance analysis</li>
                    <li>Quarterly and annual financial reviews</li>
                </ul>
                
                <h2>Benefits for Your Business</h2>
                <p>When you work with us for your small business accounting needs, you get:</p>
                <ul>
                    <li>Accurate, up-to-date financial records you can trust</li>
                    <li>Clear financial reports that help you understand your business performance</li>
                    <li>Time savings that let you focus on growing your business</li>
                    <li>Expert guidance on financial decisions and opportunities</li>
                    <li>Peace of mind knowing your books are handled professionally</li>
                </ul>
                
                <p>Let's discuss how our small business accounting services can help your business succeed. <a href="contact.html">Contact us</a> today.</p>
        '''
    },
    
    'bookkeeping.html': {
        'title': 'Bookkeeping Services',
        'meta_description': 'Professional bookkeeping services for businesses. Accurate record-keeping, timely reporting, and organized financial records.',
        'page_title': 'Bookkeeping Services',
        'content': '''
                <h2>Professional Bookkeeping Services You Can Trust</h2>
                <p>Accurate, organized financial records are the foundation of good business management. Our professional bookkeeping services ensure your books are always current, accurate, and ready for decision-making, tax preparation, or financial review.</p>
                
                <h2>Our Bookkeeping Services Include</h2>
                <ul>
                    <li>Daily transaction recording and categorization</li>
                    <li>Accounts payable and receivable management</li>
                    <li>Bank and credit card account reconciliation</li>
                    <li>Payroll journal entries and tracking</li>
                    <li>Inventory tracking and cost of goods sold</li>
                    <li>Fixed asset and depreciation tracking</li>
                    <li>Monthly financial statement preparation</li>
                    <li>Year-end closing and account reconciliation</li>
                </ul>
                
                <h2>Why Outsource Your Bookkeeping</h2>
                <p>Outsourcing your bookkeeping to professionals offers significant advantages:</p>
                <ul>
                    <li><strong>Accuracy:</strong> Professional bookkeepers reduce errors and ensure compliance</li>
                    <li><strong>Time Savings:</strong> Free up your time to focus on revenue-generating activities</li>
                    <li><strong>Expertise:</strong> Benefit from specialized knowledge and best practices</li>
                    <li><strong>Cost Efficiency:</strong> Often more cost-effective than hiring in-house staff</li>
                    <li><strong>Scalability:</strong> Services that adapt as your business grows</li>
                </ul>
                
                <p>Ready to streamline your bookkeeping? <a href="contact.html">Contact us</a> to discuss your needs.</p>
        '''
    },
    
    'payroll.html': {
        'title': 'Payroll Services',
        'meta_description': 'Professional payroll processing services. Accurate payroll, tax withholdings, and compliance for your business.',
        'page_title': 'Payroll Services',
        'content': '''
                <h2>Reliable Payroll Processing Services</h2>
                <p>Payroll is one of the most critical and time-sensitive aspects of running a business. Get it wrong, and you face unhappy employees, compliance issues, and potential penalties. Our payroll services ensure accuracy, timeliness, and full compliance with all payroll tax requirements.</p>
                
                <h2>What We Handle</h2>
                <ul>
                    <li>Payroll calculation and processing</li>
                    <li>Federal, state, and local tax withholdings</li>
                    <li>Payroll tax deposits and filings</li>
                    <li>W-2 and 1099 preparation and distribution</li>
                    <li>Direct deposit setup and management</li>
                    <li>Payroll reporting and record-keeping</li>
                    <li>New hire reporting and compliance</li>
                    <li>Workers' compensation reporting</li>
                </ul>
                
                <h2>Benefits of Professional Payroll Services</h2>
                <ul>
                    <li><strong>Accuracy:</strong> Eliminate payroll errors and calculation mistakes</li>
                    <li><strong>Compliance:</strong> Stay current with ever-changing payroll tax regulations</li>
                    <li><strong>Time Savings:</strong> Free up hours each pay period for other priorities</li>
                    <li><strong>Security:</strong> Protect sensitive employee information with secure processes</li>
                    <li><strong>Peace of Mind:</strong> Know your payroll is handled correctly and on time</li>
                </ul>
                
                <p>Let us handle your payroll so you can focus on your business. <a href="contact.html">Contact us</a> to get started.</p>
        '''
    },
    
    'audits-reviews.html': {
        'title': 'Audits, Reviews & Compilations',
        'meta_description': 'Financial statement assurance services. Audits, reviews, and compilations for businesses and organizations.',
        'page_title': 'Audits, Reviews & Compilations',
        'content': '''
                <h2>Financial Statement Assurance Services</h2>
                <p>Whether you need financial statements for lenders, investors, regulatory compliance, or internal decision-making, we provide the appropriate level of assurance service for your needs. Our audits, reviews, and compilations give stakeholders confidence in your financial information.</p>
                
                <h2>Types of Financial Statement Services</h2>
                
                <h3>Compilations</h3>
                <p>We present your financial information in the form of financial statements without providing assurance. Compilations are useful for internal use, certain lenders, and situations where formal assurance isn't required.</p>
                
                <h3>Reviews</h3>
                <p>We perform analytical procedures and inquiries to provide limited assurance that your financial statements are free of material misstatements. Reviews provide more confidence than compilations while being less extensive than audits.</p>
                
                <h3>Audits</h3>
                <p>We perform comprehensive examination of your financial records and internal controls to provide reasonable assurance that your financial statements are free of material misstatement. Audits provide the highest level of assurance and are often required by lenders, investors, or regulators.</p>
                
                <h2>When You Might Need These Services</h2>
                <ul>
                    <li>Bank loan applications and renewals</li>
                    <li>Investor reporting requirements</li>
                    <li>Regulatory compliance obligations</li>
                    <li>Board of directors reporting</li>
                    <li>Merger and acquisition due diligence</li>
                    <li>Internal financial management and planning</li>
                </ul>
                
                <p>Let's discuss which level of service is right for your situation. <a href="contact.html">Contact us</a> today.</p>
        '''
    },
    
    'cash-flow-management.html': {
        'title': 'Cash Flow Management',
        'meta_description': 'Cash flow analysis and planning services. Improve liquidity, plan for growth, and avoid cash crunches.',
        'page_title': 'Cash Flow Management',
        'content': '''
                <h2>Strategic Cash Flow Management</h2>
                <p>Cash flow is the lifeblood of any business. Even profitable companies can fail if they run out of cash. Our cash flow management services help you understand, monitor, and optimize your cash position to support growth and avoid liquidity crises.</p>
                
                <h2>Our Cash Flow Services</h2>
                <ul>
                    <li>Cash flow analysis and forecasting</li>
                    <li>Working capital management</li>
                    <li>Accounts receivable optimization</li>
                    <li>Accounts payable timing strategies</li>
                    <li>Cash flow budgeting and planning</li>
                    <li>Liquidity risk assessment</li>
                    <li>Cash flow improvement recommendations</li>
                </ul>
                
                <h2>Why Cash Flow Management Matters</h2>
                <p>Effective cash flow management helps you:</p>
                <ul>
                    <li>Maintain adequate liquidity for operations</li>
                    <li>Plan for growth and capital investments</li>
                    <li>Avoid cash crunches and emergency financing</li>
                    <li>Optimize the timing of income and expenses</li>
                    <li>Make informed decisions about credit and financing</li>
                </ul>
                
                <p>Take control of your cash flow. <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
    
    'business-advisory.html': {
        'title': 'Business Advisory Services',
        'meta_description': 'Strategic business planning and advisory services. Expert guidance to help your business grow and succeed.',
        'page_title': 'Business Advisory Services',
        'content': '''
                <h2>Strategic Business Advisory Services</h2>
                <p>Growing a successful business requires more than just accurate accounting. You need strategic guidance, financial insights, and expert advice to navigate challenges and seize opportunities. Our business advisory services provide the strategic support you need to achieve your business goals.</p>
                
                <h2>How We Help</h2>
                <ul>
                    <li>Business planning and strategy development</li>
                    <li>Financial analysis and performance metrics</li>
                    <li>Profitability analysis and improvement</li>
                    <li>Budgeting and forecasting</li>
                    <li>Growth planning and capital needs assessment</li>
                    <li>Operational efficiency analysis</li>
                    <li>Exit planning and business valuation</li>
                    <li>Succession planning</li>
                </ul>
                
                <h2>Benefits of Business Advisory Services</h2>
                <p>Working with a business advisor provides:</p>
                <ul>
                    <li><strong>Strategic Perspective:</strong> Objective insights into your business performance and opportunities</li>
                    <li><strong>Financial Expertise:</strong> Deep understanding of financial metrics and what they mean for your business</li>
                    <li><strong>Planning Support:</strong> Help developing and executing strategic plans</li>
                    <li><strong>Risk Management:</strong> Identification and mitigation of business risks</li>
                    <li><strong>Growth Guidance:</strong> Expert advice on scaling and expanding your business</li>
                </ul>
                
                <p>Ready to take your business to the next level? <a href="contact.html">Contact us</a> to discuss your advisory needs.</p>
        '''
    },
    
    'financial-planning-business.html': {
        'title': 'Financial Planning for Businesses',
        'meta_description': 'Comprehensive financial planning services for businesses. Strategic planning, budgeting, and financial goal setting.',
        'page_title': 'Financial Planning for Businesses',
        'content': '''
                <h2>Comprehensive Financial Planning for Your Business</h2>
                <p>Strategic financial planning aligns your financial resources with your business objectives. Whether you're planning for growth, managing cash flow, or preparing for major investments, our financial planning services help you make informed decisions and achieve your business goals.</p>
                
                <h2>Our Financial Planning Services</h2>
                <ul>
                    <li>Strategic financial planning and goal setting</li>
                    <li>Budgeting and forecasting</li>
                    <li>Capital planning and investment analysis</li>
                    <li>Financial modeling and scenario planning</li>
                    <li>Performance measurement and KPI development</li>
                    <li>Risk assessment and mitigation planning</li>
                    <li>Succession and exit planning</li>
                </ul>
                
                <h2>Why Financial Planning Matters</h2>
                <p>Effective financial planning helps you:</p>
                <ul>
                    <li>Set and achieve realistic business goals</li>
                    <li>Make informed decisions about investments and growth</li>
                    <li>Prepare for challenges and opportunities</li>
                    <li>Optimize your use of financial resources</li>
                    <li>Build confidence with stakeholders and lenders</li>
                </ul>
                
                <p>Let's create a financial plan that supports your business success. <a href="contact.html">Contact us</a> to get started.</p>
        '''
    },
    
    'new-business-formation.html': {
        'title': 'New Business Formation',
        'meta_description': 'Expert guidance on starting a new business. Entity selection, setup, and initial accounting structure.',
        'page_title': 'New Business Formation',
        'content': '''
                <h2>Expert Guidance for Starting Your Business</h2>
                <p>Starting a new business involves many important decisions, and the choices you make at the beginning can have lasting implications. Our new business formation services help you make informed decisions about entity structure, accounting setup, and initial financial planning to give your business a strong foundation.</p>
                
                <h2>How We Help New Businesses</h2>
                <ul>
                    <li>Entity selection guidance (LLC, Corporation, S-Corp, etc.)</li>
                    <li>Tax implications analysis for different entity types</li>
                    <li>Initial accounting system setup</li>
                    <li>Chart of accounts design</li>
                    <li>Business registration and compliance guidance</li>
                    <li>Initial budgeting and financial projections</li>
                    <li>Tax planning for new businesses</li>
                    <li>Ongoing accounting and bookkeeping setup</li>
                </ul>
                
                <h2>Why Professional Guidance Matters</h2>
                <p>Starting your business with professional guidance helps you:</p>
                <ul>
                    <li>Choose the right entity structure for your situation</li>
                    <li>Avoid costly mistakes in setup and structure</li>
                    <li>Establish proper accounting from day one</li>
                    <li>Understand tax obligations and opportunities</li>
                    <li>Set up systems that scale with your growth</li>
                </ul>
                
                <p>Start your business on the right foot. <a href="contact.html">Contact us</a> to discuss your new business needs.</p>
        '''
    },
    
    'nonprofit.html': {
        'title': 'Non-Profit Organizations',
        'meta_description': 'Specialized accounting and compliance services for non-profit organizations. Financial reporting and regulatory compliance.',
        'page_title': 'Non-Profit Organizations',
        'content': '''
                <h2>Specialized Services for Non-Profit Organizations</h2>
                <p>Non-profit organizations face unique accounting, reporting, and compliance requirements. Our specialized non-profit services ensure you meet all regulatory obligations while maintaining focus on your mission and maximizing your impact.</p>
                
                <h2>Non-Profit Services We Provide</h2>
                <ul>
                    <li>Fund accounting and financial reporting</li>
                    <li>Form 990 preparation and filing</li>
                    <li>Grant accounting and reporting</li>
                    <li>Compliance with non-profit regulations</li>
                    <li>Financial statement preparation</li>
                    <li>Budgeting and financial planning</li>
                    <li>Board financial reporting</li>
                    <li>Donor reporting and stewardship</li>
                </ul>
                
                <h2>Why Non-Profits Choose Us</h2>
                <ul>
                    <li><strong>Non-Profit Expertise:</strong> Deep understanding of non-profit accounting and compliance</li>
                    <li><strong>Mission Focus:</strong> We help you maintain focus on your mission while handling financial complexity</li>
                    <li><strong>Regulatory Compliance:</strong> Stay current with IRS and state non-profit requirements</li>
                    <li><strong>Cost-Effective:</strong> Services designed to fit non-profit budgets</li>
                    <li><strong>Transparency:</strong> Financial reporting that builds trust with donors and stakeholders</li>
                </ul>
                
                <p>Let us handle your financial management so you can focus on your mission. <a href="contact.html">Contact us</a> today.</p>
        '''
    },
    
    'internal-controls.html': {
        'title': 'Internal Controls',
        'meta_description': 'Risk management and fraud prevention services. Internal control design and assessment for businesses.',
        'page_title': 'Internal Controls & Risk Management',
        'content': '''
                <h2>Protect Your Business with Strong Internal Controls</h2>
                <p>Fraud and financial mismanagement can devastate a business. Strong internal controls protect your assets, ensure the accuracy of your financial records, and provide confidence to stakeholders. Our internal control services help you identify risks and implement effective safeguards.</p>
                
                <h2>Our Internal Control Services</h2>
                <ul>
                    <li>Internal control assessment and design</li>
                    <li>Fraud risk assessment</li>
                    <li>Segregation of duties analysis</li>
                    <li>Process documentation and improvement</li>
                    <li>Financial controls implementation</li>
                    <li>Ongoing monitoring and testing</li>
                    <li>Compliance with regulatory requirements</li>
                </ul>
                
                <h2>Why Internal Controls Matter</h2>
                <p>Effective internal controls help you:</p>
                <ul>
                    <li>Prevent and detect fraud and errors</li>
                    <li>Protect business assets</li>
                    <li>Ensure accurate financial reporting</li>
                    <li>Comply with regulatory requirements</li>
                    <li>Build confidence with lenders and investors</li>
                    <li>Reduce risk of financial loss</li>
                </ul>
                
                <p>Protect your business with professional internal control services. <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
}

def generate_page(filename, page_data):
    """Generate a single page from template and data"""
    content = BASE_TEMPLATE.format(
        title=page_data['title'],
        meta_description=page_data['meta_description'],
        page_title=page_data['page_title'],
        content=page_data['content']
    )
    
    filepath = os.path.join('pages', filename)
    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Generated: {filepath}")

if __name__ == '__main__':
    os.makedirs('pages', exist_ok=True)
    for filename, page_data in PAGES.items():
        generate_page(filename, page_data)
    print(f"\nGenerated {len(PAGES)} pages successfully!")

