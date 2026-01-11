#!/usr/bin/env python3
"""
Generate remaining website pages: industries, tax center, resources, utilities
"""

import os

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
        {content}
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

# Industry Pages
INDUSTRY_PAGES = {
    'industries.html': {
        'title': 'Industries We Serve',
        'meta_description': 'Specialized accounting services for various industries. Construction, healthcare, legal, real estate, and more.',
        'page_title': 'Industries We Serve',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Industry-Specific Accounting Expertise</h2>
                        <p>Different industries face unique accounting, tax, and compliance challenges. Our specialized industry expertise ensures you receive services tailored to your specific industry's needs, regulations, and best practices.</p>
                        
                        <h2>Industries We Serve</h2>
                        <ul>
                            <li><a href="construction.html">Construction</a></li>
                            <li><a href="healthcare.html">Healthcare</a></li>
                            <li><a href="dentists.html">Dental Practices</a></li>
                            <li><a href="hospitality.html">Hospitality</a></li>
                            <li><a href="law-firms.html">Law Firms</a></li>
                            <li><a href="manufacturing.html">Manufacturing</a></li>
                            <li><a href="real-estate.html">Real Estate</a></li>
                        </ul>
                        
                        <h2>Why Industry Expertise Matters</h2>
                        <p>Industry-specific knowledge helps us:</p>
                        <ul>
                            <li>Understand your unique business model and challenges</li>
                            <li>Identify industry-specific tax opportunities</li>
                            <li>Ensure compliance with industry regulations</li>
                            <li>Provide relevant financial insights and benchmarks</li>
                            <li>Offer best practices from your industry</li>
                        </ul>
                    </div>
                    <div class="sidebar">
                        <h3>Get Started</h3>
                        <p>Let's discuss your industry-specific needs.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
    
    'construction.html': {
        'title': 'Construction Industry',
        'meta_description': 'Specialized accounting services for construction companies. Job costing, progress billing, and construction-specific tax strategies.',
        'page_title': 'Construction Industry Accounting',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Specialized Accounting for Construction Companies</h2>
                        <p>Construction companies face unique accounting challenges including job costing, progress billing, retainage, change orders, and complex payroll requirements. Our construction industry expertise ensures your accounting addresses these specialized needs.</p>
                        
                        <h2>Construction-Specific Services</h2>
                        <ul>
                            <li>Job costing and project accounting</li>
                            <li>Progress billing and retainage tracking</li>
                            <li>Change order management</li>
                            <li>Equipment and vehicle depreciation</li>
                            <li>Multi-state tax compliance</li>
                            <li>Prevailing wage and certified payroll</li>
                            <li>Contractor-specific tax strategies</li>
                            <li>Financial reporting for bonding</li>
                        </ul>
                        
                        <h2>Why Construction Accounting Expertise Matters</h2>
                        <p>Construction accounting requires understanding of:</p>
                        <ul>
                            <li>Percentage of completion accounting</li>
                            <li>Job cost allocation methods</li>
                            <li>Construction-specific tax deductions</li>
                            <li>Bonding and insurance requirements</li>
                            <li>Prevailing wage regulations</li>
                        </ul>
                        
                        <p>Get construction accounting services that understand your business. <a href="contact.html">Contact us</a> today.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Construction Expertise</h3>
                        <p>We understand the unique needs of construction companies.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
    
    'healthcare.html': {
        'title': 'Healthcare Industry',
        'meta_description': 'Accounting services for healthcare practices. Medical practice accounting, billing, and healthcare-specific tax strategies.',
        'page_title': 'Healthcare Industry Accounting',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Specialized Accounting for Healthcare Practices</h2>
                        <p>Healthcare practices have unique accounting needs including patient billing, insurance reimbursements, HIPAA compliance, and specialized tax considerations. Our healthcare accounting expertise addresses these industry-specific requirements.</p>
                        
                        <h2>Healthcare-Specific Services</h2>
                        <ul>
                            <li>Medical practice accounting and bookkeeping</li>
                            <li>Revenue cycle management support</li>
                            <li>Insurance reimbursement tracking</li>
                            <li>HIPAA-compliant financial processes</li>
                            <li>Healthcare-specific tax strategies</li>
                            <li>Practice valuation and financial planning</li>
                            <li>Compliance with healthcare regulations</li>
                        </ul>
                        
                        <p>Get healthcare accounting services tailored to your practice. <a href="contact.html">Contact us</a> today.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Healthcare Expertise</h3>
                        <p>We understand the unique needs of healthcare practices.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
    
    'dentists.html': {
        'title': 'Dental Practices',
        'meta_description': 'Accounting services for dental practices. Dental practice accounting, tax strategies, and financial management.',
        'page_title': 'Dental Practice Accounting',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Specialized Accounting for Dental Practices</h2>
                        <p>Dental practices have unique accounting needs including patient billing, insurance processing, equipment depreciation, and practice management. Our dental practice expertise ensures your accounting addresses these specialized requirements.</p>
                        
                        <h2>Dental Practice Services</h2>
                        <ul>
                            <li>Dental practice accounting and bookkeeping</li>
                            <li>Patient billing and insurance tracking</li>
                            <li>Equipment and technology depreciation</li>
                            <li>Practice-specific tax strategies</li>
                            <li>Practice valuation and sale planning</li>
                            <li>Financial planning for practice growth</li>
                        </ul>
                        
                        <p>Get dental practice accounting services that understand your business. <a href="contact.html">Contact us</a> today.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Dental Practice Expertise</h3>
                        <p>We understand the unique needs of dental practices.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
    
    'hospitality.html': {
        'title': 'Hospitality Industry',
        'meta_description': 'Accounting services for hotels, restaurants, and hospitality businesses. Hospitality-specific accounting and tax strategies.',
        'page_title': 'Hospitality Industry Accounting',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Specialized Accounting for Hospitality Businesses</h2>
                        <p>Hotels, restaurants, and other hospitality businesses face unique accounting challenges including inventory management, seasonal fluctuations, tip reporting, and complex labor costs. Our hospitality expertise addresses these industry-specific needs.</p>
                        
                        <h2>Hospitality-Specific Services</h2>
                        <ul>
                            <li>Restaurant and hotel accounting</li>
                            <li>Inventory and cost of goods sold management</li>
                            <li>Tip reporting and compliance</li>
                            <li>Seasonal cash flow planning</li>
                            <li>Hospitality-specific tax strategies</li>
                            <li>Food and beverage cost analysis</li>
                        </ul>
                        
                        <p>Get hospitality accounting services tailored to your business. <a href="contact.html">Contact us</a> today.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Hospitality Expertise</h3>
                        <p>We understand the unique needs of hospitality businesses.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
    
    'law-firms.html': {
        'title': 'Law Firms',
        'meta_description': 'Accounting services for law firms. Legal practice accounting, trust accounting, and law firm-specific tax strategies.',
        'page_title': 'Law Firm Accounting',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Specialized Accounting for Law Firms</h2>
                        <p>Law firms have unique accounting requirements including trust account management, time tracking, client billing, and compliance with bar association rules. Our law firm expertise ensures your accounting meets these specialized needs.</p>
                        
                        <h2>Law Firm Services</h2>
                        <ul>
                            <li>Legal practice accounting and bookkeeping</li>
                            <li>Trust account (IOLTA) management and reconciliation</li>
                            <li>Time and billing support</li>
                            <li>Law firm-specific tax strategies</li>
                            <li>Partnership accounting and distributions</li>
                            <li>Compliance with bar association requirements</li>
                        </ul>
                        
                        <p>Get law firm accounting services that understand your practice. <a href="contact.html">Contact us</a> today.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Law Firm Expertise</h3>
                        <p>We understand the unique needs of legal practices.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
    
    'manufacturing.html': {
        'title': 'Manufacturing',
        'meta_description': 'Accounting services for manufacturing companies. Cost accounting, inventory management, and manufacturing-specific tax strategies.',
        'page_title': 'Manufacturing Industry Accounting',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Specialized Accounting for Manufacturing Companies</h2>
                        <p>Manufacturing companies require sophisticated cost accounting, inventory management, and production cost tracking. Our manufacturing expertise ensures your accounting addresses these complex requirements.</p>
                        
                        <h2>Manufacturing-Specific Services</h2>
                        <ul>
                            <li>Cost accounting and job costing</li>
                            <li>Inventory valuation and management</li>
                            <li>Production cost analysis</li>
                            <li>Manufacturing-specific tax strategies</li>
                            <li>Equipment depreciation and capital planning</li>
                            <li>Financial reporting for manufacturing operations</li>
                        </ul>
                        
                        <p>Get manufacturing accounting services tailored to your operations. <a href="contact.html">Contact us</a> today.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Manufacturing Expertise</h3>
                        <p>We understand the unique needs of manufacturing companies.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
    
    'real-estate.html': {
        'title': 'Real Estate',
        'meta_description': 'Accounting services for real estate businesses. Property management accounting, real estate tax strategies, and investment property accounting.',
        'page_title': 'Real Estate Accounting',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Specialized Accounting for Real Estate Businesses</h2>
                        <p>Real estate businesses have unique accounting needs including property management, depreciation, passive activity rules, and complex tax considerations. Our real estate expertise addresses these industry-specific requirements.</p>
                        
                        <h2>Real Estate Services</h2>
                        <ul>
                            <li>Property management accounting</li>
                            <li>Rental property income and expense tracking</li>
                            <li>Real estate depreciation and cost segregation</li>
                            <li>Real estate-specific tax strategies</li>
                            <li>1031 exchange planning</li>
                            <li>Real estate investment analysis</li>
                        </ul>
                        
                        <p>Get real estate accounting services that understand your business. <a href="contact.html">Contact us</a> today.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Real Estate Expertise</h3>
                        <p>We understand the unique needs of real estate businesses.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%;">Schedule Consultation</a>
                    </div>
                </div>
        '''
    },
}

# Tax Center Pages
TAX_CENTER_PAGES = {
    'tax-center.html': {
        'title': 'Tax Center',
        'meta_description': 'Tax tools, resources, and information. Track refunds, find forms, check due dates, and access tax resources.',
        'page_title': 'Tax Center',
        'content': '''
                <div>
                    <h2>Your Comprehensive Tax Resource Center</h2>
                    <p>Access helpful tax tools, information, and resources all in one place. From tracking your refund to finding tax forms, our Tax Center provides everything you need to stay informed and organized.</p>
                    
                    <div class="service-grid">
                        <div class="service-card">
                            <h3><a href="refund-tracking.html">Track Your Refund</a></h3>
                            <p>Check the status of your federal and state tax refunds online.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="tax-due-dates.html">Tax Due Dates</a></h3>
                            <p>Important tax deadlines and due dates calendar.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="tax-rates.html">Tax Rates</a></h3>
                            <p>Current federal and state tax rate information.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="irs-forms.html">IRS Forms & Publications</a></h3>
                            <p>Access to IRS forms, publications, and instructions.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="record-retention.html">Record Retention Guide</a></h3>
                            <p>Guidelines for how long to keep tax and financial records.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="state-tax-forms.html">State Tax Forms</a></h3>
                            <p>Links to state tax forms and filing information.</p>
                        </div>
                    </div>
                </div>
        '''
    },
    
    'refund-tracking.html': {
        'title': 'Track Your Refund',
        'meta_description': 'Track the status of your federal and state tax refunds. Check refund status online.',
        'page_title': 'Track Your Tax Refund',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Track Your Tax Refund Status</h2>
                        <p>Wondering when your tax refund will arrive? Use these official tools to check the status of your federal and state tax refunds.</p>
                        
                        <h3>Federal Tax Refund</h3>
                        <p>Track your federal tax refund using the IRS "Where's My Refund?" tool. You'll need:</p>
                        <ul>
                            <li>Your Social Security Number or ITIN</li>
                            <li>Your filing status</li>
                            <li>The exact refund amount</li>
                        </ul>
                        <p><a href="https://www.irs.gov/refunds" target="_blank" class="btn btn-primary">Check Federal Refund Status</a></p>
                        
                        <h3>State Tax Refund</h3>
                        <p>Most states offer online refund tracking. Visit your state's department of revenue website to check your state refund status.</p>
                        
                        <h3>Refund Processing Times</h3>
                        <p>Typical refund processing times:</p>
                        <ul>
                            <li>E-filed returns: 21 days or less</li>
                            <li>Paper returns: 6-8 weeks</li>
                            <li>Returns with errors or requiring review: Longer processing time</li>
                        </ul>
                        
                        <p>Need help with your refund? <a href="contact.html">Contact us</a> for assistance.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Need Help?</h3>
                        <p>If you have questions about your refund, we're here to help.</p>
                        <a href="contact.html" class="btn btn-primary" style="width: 100%;">Contact Us</a>
                    </div>
                </div>
        '''
    },
    
    'tax-due-dates.html': {
        'title': 'Tax Due Dates',
        'meta_description': 'Important tax deadlines and due dates. Tax calendar of important dates.',
        'page_title': 'Tax Due Dates & Deadlines',
        'content': '''
                <div>
                    <h2>Important Tax Deadlines and Due Dates</h2>
                    <p>Stay on top of important tax deadlines to avoid penalties and interest. Here are key dates to remember throughout the year.</p>
                    
                    <h3>Annual Tax Deadlines</h3>
                    <ul>
                        <li><strong>January 15:</strong> Final estimated tax payment for previous year (if applicable)</li>
                        <li><strong>January 31:</strong> W-2 and 1099 forms due to recipients</li>
                        <li><strong>April 15:</strong> Individual tax returns due (or October 15 with extension)</li>
                        <li><strong>April 15:</strong> First quarter estimated tax payment due</li>
                        <li><strong>June 15:</strong> Second quarter estimated tax payment due</li>
                        <li><strong>September 15:</strong> Third quarter estimated tax payment due</li>
                        <li><strong>October 15:</strong> Extended individual tax returns due</li>
                        <li><strong>December 15:</strong> Fourth quarter estimated tax payment due</li>
                    </ul>
                    
                    <h3>Business Tax Deadlines</h3>
                    <ul>
                        <li><strong>March 15:</strong> S-Corporation and Partnership returns due</li>
                        <li><strong>April 15:</strong> C-Corporation returns due</li>
                        <li><strong>Monthly:</strong> Payroll tax deposits (varies by deposit schedule)</li>
                    </ul>
                    
                    <p><strong>Note:</strong> Dates may vary if they fall on weekends or holidays. Always verify current year deadlines.</p>
                    
                    <p>Need help meeting deadlines? <a href="contact.html">Contact us</a> for assistance.</p>
                </div>
        '''
    },
    
    'tax-rates.html': {
        'title': 'Tax Rates',
        'meta_description': 'Current federal and state tax rates. Income tax brackets and rates.',
        'page_title': 'Current Tax Rates',
        'content': '''
                <div>
                    <h2>Current Tax Rates</h2>
                    <p>Understanding current tax rates helps with planning and decision-making. Here's an overview of current federal tax rates. State rates vary by state.</p>
                    
                    <h3>Federal Income Tax Rates (2024)</h3>
                    <p>Federal income tax uses a progressive rate structure with different brackets for different filing statuses. Rates and brackets are subject to annual adjustments for inflation.</p>
                    
                    <p><strong>Note:</strong> Tax rates and brackets change annually. Consult current year tax tables for exact rates and brackets.</p>
                    
                    <h3>Capital Gains Tax Rates</h3>
                    <p>Long-term capital gains (assets held more than one year) are generally taxed at lower rates than ordinary income.</p>
                    
                    <h3>State Tax Rates</h3>
                    <p>State income tax rates vary significantly by state. Some states have no income tax, while others have progressive rate structures.</p>
                    
                    <p>For specific tax rate information for your situation, <a href="contact.html">contact us</a> for personalized guidance.</p>
                </div>
        '''
    },
    
    'irs-forms.html': {
        'title': 'IRS Forms & Publications',
        'meta_description': 'Access to IRS forms, publications, and instructions. Download tax forms and publications.',
        'page_title': 'IRS Forms & Publications',
        'content': '''
                <div>
                    <h2>IRS Forms and Publications</h2>
                    <p>Access official IRS forms, publications, and instructions. The IRS provides comprehensive resources to help you understand and complete your tax obligations.</p>
                    
                    <h3>Common Tax Forms</h3>
                    <ul>
                        <li>Form 1040 - Individual Income Tax Return</li>
                        <li>Form 1040-ES - Estimated Tax for Individuals</li>
                        <li>Form 1120 - Corporate Income Tax Return</li>
                        <li>Form 1120S - S-Corporation Income Tax Return</li>
                        <li>Form 1065 - Partnership Income Tax Return</li>
                        <li>Form 941 - Employer's Quarterly Federal Tax Return</li>
                        <li>Form W-2 - Wage and Tax Statement</li>
                        <li>Form 1099 - Various Information Returns</li>
                    </ul>
                    
                    <h3>Access IRS Resources</h3>
                    <p><a href="https://www.irs.gov/forms-instructions" target="_blank" class="btn btn-primary">Visit IRS Forms & Instructions</a></p>
                    <p><a href="https://www.irs.gov/publications" target="_blank" class="btn btn-primary">Visit IRS Publications</a></p>
                    
                    <p>Need help understanding which forms you need? <a href="contact.html">Contact us</a> for guidance.</p>
                </div>
        '''
    },
    
    'record-retention.html': {
        'title': 'Record Retention Guide',
        'meta_description': 'Guidelines for how long to keep tax and financial records. Record retention best practices.',
        'page_title': 'Record Retention Guide',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>How Long to Keep Tax and Financial Records</h2>
                        <p>Proper record retention protects you in case of audits, helps with tax preparation, and ensures you have documentation when needed. Here are general guidelines for how long to keep various records.</p>
                        
                        <h3>Tax Returns and Supporting Documents</h3>
                        <p><strong>Keep for at least 3-7 years:</strong></p>
                        <ul>
                            <li>Tax returns (federal and state)</li>
                            <li>W-2s, 1099s, and other income statements</li>
                            <li>Receipts for deductions and credits</li>
                            <li>Bank statements and canceled checks</li>
                            <li>Investment records</li>
                        </ul>
                        
                        <h3>Business Records</h3>
                        <p><strong>Keep permanently:</strong></p>
                        <ul>
                            <li>Articles of incorporation</li>
                            <li>Partnership agreements</li>
                            <li>Stock records</li>
                            <li>Minutes of board meetings</li>
                        </ul>
                        <p><strong>Keep for 7 years:</strong></p>
                        <ul>
                            <li>Payroll records</li>
                            <li>Business tax returns</li>
                            <li>Financial statements</li>
                        </ul>
                        
                        <h3>Property Records</h3>
                        <p><strong>Keep for the life of the property plus 7 years:</strong></p>
                        <ul>
                            <li>Purchase and sale documents</li>
                            <li>Improvement records</li>
                            <li>Depreciation records</li>
                        </ul>
                        
                        <p>For specific record retention questions, <a href="contact.html">contact us</a> for guidance.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Need Help Organizing?</h3>
                        <p>We can help you organize and manage your records.</p>
                        <a href="contact.html" class="btn btn-primary" style="width: 100%;">Contact Us</a>
                    </div>
                </div>
        '''
    },
    
    'state-tax-forms.html': {
        'title': 'State Tax Forms',
        'meta_description': 'Links to state tax forms and filing information. Access state tax resources.',
        'page_title': 'State Tax Forms',
        'content': '''
                <div>
                    <h2>State Tax Forms and Resources</h2>
                    <p>Each state has its own tax forms and filing requirements. Here are links to state tax resources. For specific state tax guidance, contact your state's department of revenue or taxation.</p>
                    
                    <h3>State Tax Resources</h3>
                    <p>Most states provide online access to tax forms, filing instructions, and refund tracking. Visit your state's department of revenue or taxation website for:</p>
                    <ul>
                        <li>State income tax forms</li>
                        <li>Filing instructions</li>
                        <li>Refund tracking</li>
                        <li>Tax rate information</li>
                        <li>E-filing options</li>
                    </ul>
                    
                    <p>Need help with state tax filing? <a href="contact.html">Contact us</a> for assistance.</p>
                </div>
        '''
    },
}

def generate_remaining():
    """Generate remaining pages"""
    os.makedirs('pages', exist_ok=True)
    
    all_remaining = {**INDUSTRY_PAGES, **TAX_CENTER_PAGES}
    
    for filename, page_data in all_remaining.items():
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
    
    print(f"\nGenerated {len(all_remaining)} pages successfully!")

if __name__ == '__main__':
    generate_remaining()

