#!/usr/bin/env python3
"""
Comprehensive script to generate all website pages
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

# All page definitions
ALL_PAGES = {
    # Estate Planning
    'estate-planning.html': {
        'title': 'Estate Planning',
        'meta_description': 'Comprehensive estate planning services. Protect your assets and ensure your wishes are carried out.',
        'page_title': 'Estate Planning Services',
        'content': '''
                <h2>Protect Your Legacy with Professional Estate Planning</h2>
                <p>Estate planning ensures your assets are protected and distributed according to your wishes while minimizing tax implications for your heirs. Our estate planning services help you create a comprehensive plan that serves your family's best interests.</p>
                
                <h2>Our Estate Planning Services</h2>
                <ul>
                    <li>Estate tax planning and minimization strategies</li>
                    <li>Asset protection planning</li>
                    <li>Trust planning and administration guidance</li>
                    <li>Gift tax planning</li>
                    <li>Estate valuation and analysis</li>
                    <li>Coordination with legal advisors</li>
                    <li>Beneficiary planning and education</li>
                </ul>
                
                <h2>Why Estate Planning Matters</h2>
                <p>Proper estate planning helps you:</p>
                <ul>
                    <li>Minimize estate and inheritance taxes</li>
                    <li>Ensure your assets go to intended beneficiaries</li>
                    <li>Protect assets from unnecessary taxation</li>
                    <li>Provide for your family's financial security</li>
                    <li>Avoid probate complications</li>
                </ul>
                
                <p>Let's discuss your estate planning needs. <a href="contact.html">Contact us</a> today.</p>
        '''
    },
    
    # Tax Services Pages
    'tax-services.html': {
        'title': 'Tax Services',
        'meta_description': 'Comprehensive tax preparation and planning services for individuals and businesses. Expert tax guidance.',
        'page_title': 'Tax Services',
        'content': '''
                <h2>Comprehensive Tax Services for Individuals and Businesses</h2>
                <p>Tax preparation and planning require expertise, attention to detail, and staying current with constantly changing tax laws. Our comprehensive tax services ensure you maximize deductions, minimize liability, and maintain full compliance with all tax requirements.</p>
                
                <h2>Our Tax Services</h2>
                <ul>
                    <li>Individual tax preparation and filing</li>
                    <li>Business tax preparation (all entity types)</li>
                    <li>Year-round tax planning and strategy</li>
                    <li>Estate and trust tax services</li>
                    <li>Cryptocurrency tax guidance</li>
                    <li>Tax problem resolution</li>
                    <li>IRS representation and audit support</li>
                </ul>
                
                <h2>Why Professional Tax Services Matter</h2>
                <p>Working with tax professionals provides:</p>
                <ul>
                    <li><strong>Maximized Savings:</strong> Identify all eligible deductions and credits</li>
                    <li><strong>Compliance Confidence:</strong> Ensure accurate filing and avoid penalties</li>
                    <li><strong>Strategic Planning:</strong> Year-round strategies to minimize tax liability</li>
                    <li><strong>Problem Resolution:</strong> Expert help with IRS issues and tax problems</li>
                    <li><strong>Peace of Mind:</strong> Know your taxes are handled correctly</li>
                </ul>
                
                <p>Ready to optimize your tax situation? <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
    
    'tax-preparation-individual.html': {
        'title': 'Individual Tax Preparation',
        'meta_description': 'Professional individual tax preparation services. Accurate, thorough tax return preparation.',
        'page_title': 'Individual Tax Preparation',
        'content': '''
                <h2>Professional Individual Tax Preparation Services</h2>
                <p>Filing your tax return accurately and on time is essential, but it shouldn't be stressful. Our individual tax preparation services ensure your return is complete, accurate, and optimized to minimize your tax liability while maintaining full compliance.</p>
                
                <h2>What We Handle</h2>
                <ul>
                    <li>W-2 and 1099 income reporting</li>
                    <li>Itemized deductions and standard deduction analysis</li>
                    <li>Investment income and capital gains</li>
                    <li>Retirement account contributions and distributions</li>
                    <li>Self-employment income and expenses</li>
                    <li>Rental property income and deductions</li>
                    <li>Education credits and deductions</li>
                    <li>Medical expense deductions</li>
                    <li>Charitable contribution documentation</li>
                    <li>State and local tax returns</li>
                </ul>
                
                <h2>Benefits of Professional Tax Preparation</h2>
                <ul>
                    <li>Maximize your refund or minimize your tax due</li>
                    <li>Ensure accuracy and avoid errors</li>
                    <li>Identify all eligible deductions and credits</li>
                    <li>Save time and reduce stress</li>
                    <li>Get expert answers to your tax questions</li>
                </ul>
                
                <p>Let us handle your tax preparation. <a href="contact.html">Contact us</a> to get started.</p>
        '''
    },
    
    'tax-preparation-business.html': {
        'title': 'Business Tax Preparation',
        'meta_description': 'Professional business tax preparation for all entity types. Accurate, compliant business tax returns.',
        'page_title': 'Business Tax Preparation',
        'content': '''
                <h2>Expert Business Tax Preparation Services</h2>
                <p>Business tax returns are more complex than individual returns, with different forms, deductions, and compliance requirements depending on your entity type. Our business tax preparation services ensure your returns are accurate, complete, and filed on time.</p>
                
                <h2>Business Tax Services We Provide</h2>
                <ul>
                    <li>Corporate tax returns (C-Corp and S-Corp)</li>
                    <li>Partnership tax returns (Form 1065)</li>
                    <li>LLC tax preparation</li>
                    <li>Sole proprietorship tax returns (Schedule C)</li>
                    <li>Multi-state tax preparation</li>
                    <li>Payroll tax returns and compliance</li>
                    <li>Sales tax reporting assistance</li>
                    <li>Business expense documentation and optimization</li>
                </ul>
                
                <h2>Why Professional Business Tax Preparation Matters</h2>
                <p>Professional business tax preparation helps you:</p>
                <ul>
                    <li>Maximize business deductions and credits</li>
                    <li>Ensure compliance with complex business tax rules</li>
                    <li>Avoid costly errors and penalties</li>
                    <li>Optimize your business tax structure</li>
                    <li>Maintain proper documentation for audits</li>
                </ul>
                
                <p>Ensure your business taxes are handled correctly. <a href="contact.html">Contact us</a> today.</p>
        '''
    },
    
    'tax-planning.html': {
        'title': 'Tax Planning',
        'meta_description': 'Year-round tax planning services. Strategic tax strategies to minimize your tax liability.',
        'page_title': 'Tax Planning Services',
        'content': '''
                <h2>Strategic Tax Planning Throughout the Year</h2>
                <p>Effective tax planning happens year-round, not just during tax season. Our tax planning services help you make strategic decisions throughout the year to minimize your tax liability and take advantage of opportunities as they arise.</p>
                
                <h2>Our Tax Planning Services</h2>
                <ul>
                    <li>Quarterly tax planning reviews</li>
                    <li>Income and deduction timing strategies</li>
                    <li>Retirement planning and tax optimization</li>
                    <li>Investment tax strategy</li>
                    <li>Business tax planning and structure optimization</li>
                    <li>Estate tax planning</li>
                    <li>Year-end tax planning</li>
                    <li>Estimated tax payment planning</li>
                </ul>
                
                <h2>Benefits of Year-Round Tax Planning</h2>
                <p>Proactive tax planning helps you:</p>
                <ul>
                    <li>Minimize your overall tax liability</li>
                    <li>Take advantage of tax-saving opportunities</li>
                    <li>Avoid surprises at tax time</li>
                    <li>Make informed financial decisions</li>
                    <li>Plan for major transactions tax-efficiently</li>
                </ul>
                
                <p>Start planning now for better tax outcomes. <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
    
    'estate-trust-tax.html': {
        'title': 'Estate & Trust Tax Services',
        'meta_description': 'Estate and trust tax preparation and planning. Expert guidance for estates and trusts.',
        'page_title': 'Estate & Trust Tax Services',
        'content': '''
                <h2>Specialized Estate and Trust Tax Services</h2>
                <p>Estate and trust taxation involves complex rules and requirements. Our specialized services ensure estates and trusts comply with all tax obligations while maximizing tax efficiency for beneficiaries.</p>
                
                <h2>Our Estate and Trust Tax Services</h2>
                <ul>
                    <li>Estate tax return preparation (Form 706)</li>
                    <li>Fiduciary income tax returns (Form 1041)</li>
                    <li>Gift tax return preparation (Form 709)</li>
                    <li>Estate tax planning and minimization</li>
                    <li>Trust administration tax guidance</li>
                    <li>Beneficiary tax planning</li>
                </ul>
                
                <h2>Why Professional Estate and Trust Tax Services Matter</h2>
                <p>Expert estate and trust tax services help you:</p>
                <ul>
                    <li>Navigate complex estate and trust tax rules</li>
                    <li>Minimize estate and inheritance taxes</li>
                    <li>Ensure compliance with all requirements</li>
                    <li>Optimize tax outcomes for beneficiaries</li>
                    <li>Avoid costly errors and penalties</li>
                </ul>
                
                <p>Let us handle your estate and trust tax needs. <a href="contact.html">Contact us</a> today.</p>
        '''
    },
    
    'cryptocurrency-accounting.html': {
        'title': 'Cryptocurrency Accounting Services',
        'meta_description': 'Tax and accounting services for cryptocurrency transactions. Expert guidance for digital currency.',
        'page_title': 'Cryptocurrency Accounting Services',
        'content': '''
                <h2>Expert Cryptocurrency Tax and Accounting Services</h2>
                <p>Cryptocurrency transactions create unique tax and accounting challenges. The IRS treats cryptocurrency as property, which means every transaction can have tax implications. Our specialized services help you navigate cryptocurrency taxation and accounting correctly.</p>
                
                <h2>Our Cryptocurrency Services</h2>
                <ul>
                    <li>Cryptocurrency transaction tracking and reporting</li>
                    <li>Tax basis calculation and cost basis methods</li>
                    <li>Capital gains and losses reporting</li>
                    <li>Mining income reporting</li>
                    <li>Staking and DeFi transaction tax treatment</li>
                    <li>NFT tax implications</li>
                    <li>Cryptocurrency accounting and record-keeping</li>
                </ul>
                
                <h2>Why Professional Cryptocurrency Services Matter</h2>
                <p>Cryptocurrency taxation is complex and evolving. Professional services help you:</p>
                <ul>
                    <li>Comply with IRS cryptocurrency tax requirements</li>
                    <li>Accurately calculate gains and losses</li>
                    <li>Maintain proper documentation</li>
                    <li>Avoid costly errors and penalties</li>
                    <li>Optimize your cryptocurrency tax situation</li>
                </ul>
                
                <p>Navigate cryptocurrency taxation with confidence. <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
    
    # Tax Relief Main Page
    'tax-relief.html': {
        'title': 'Tax Relief Services',
        'meta_description': 'Expert tax relief and IRS problem resolution. Help with audits, back taxes, liens, levies, and more.',
        'page_title': 'Tax Relief Services',
        'content': '''
                <h2>Expert Help Resolving Your Tax Problems</h2>
                <p>Facing IRS issues can be overwhelming and stressful. Whether you're dealing with an audit, back taxes, liens, levies, or other tax problems, you don't have to face it alone. Our tax relief services provide experienced representation and resolution for a wide range of IRS issues.</p>
                
                <h2>We're Here to Help Resolve Your Tax Problems</h2>
                <p>Tax problems don't resolve themselves, and ignoring them typically makes things worse. We understand the stress and anxiety that comes with IRS issues, and we're committed to helping you find solutions and end the worry.</p>
                
                <h2>Our Tax Relief Services</h2>
                <ul>
                    <li>IRS audit representation and support</li>
                    <li>Unfiled tax return preparation and filing</li>
                    <li>Back tax resolution and negotiation</li>
                    <li>Payroll tax problem resolution</li>
                    <li>IRS lien and levy resolution</li>
                    <li>Wage garnishment relief</li>
                    <li>IRS seizure prevention and resolution</li>
                    <li>Installment agreement negotiation</li>
                    <li>Offer in Compromise assistance</li>
                    <li>Bankruptcy tax guidance</li>
                    <li>Innocent spouse relief</li>
                    <li>IRS record retrieval</li>
                </ul>
                
                <h2>Why Choose Our Tax Relief Services</h2>
                <ul>
                    <li><strong>Experience:</strong> Years of experience resolving complex tax problems</li>
                    <li><strong>Empathy:</strong> We understand your stress and work to resolve it</li>
                    <li><strong>Results:</strong> Proven track record of successful resolutions</li>
                    <li><strong>Communication:</strong> We keep you informed throughout the process</li>
                    <li><strong>Advocacy:</strong> We're on your side, working to protect your interests</li>
                </ul>
                
                <p>Don't let tax problems control your life. <a href="contact.html">Contact us</a> today to discuss your situation and learn how we can help.</p>
        '''
    },
}

# Tax Relief Sub-pages
TAX_RELIEF_PAGES = {
    'irs-audit-support.html': {
        'title': 'IRS Audit Support',
        'meta_description': 'Professional IRS audit representation. Expert support and representation during IRS audits.',
        'page_title': 'IRS Audit Support & Representation',
        'content': '''
                <h2>Expert Representation During IRS Audits</h2>
                <p>Receiving an IRS audit notice can be intimidating and stressful. You don't have to face an audit alone. Our experienced team provides professional representation and support throughout the audit process, working to protect your interests and achieve the best possible outcome.</p>
                
                <h2>How We Help During Audits</h2>
                <ul>
                    <li>Review and analysis of audit notices</li>
                    <li>Preparation and organization of documentation</li>
                    <li>Communication and correspondence with the IRS</li>
                    <li>Representation at audit meetings and interviews</li>
                    <li>Negotiation of audit findings and adjustments</li>
                    <li>Appeal representation if needed</li>
                    <li>Resolution of audit issues</li>
                </ul>
                
                <h2>Why Professional Audit Representation Matters</h2>
                <p>Having professional representation during an audit helps you:</p>
                <ul>
                    <li>Navigate the audit process confidently</li>
                    <li>Present your case effectively</li>
                    <li>Protect your rights and interests</li>
                    <li>Minimize potential tax adjustments</li>
                    <li>Reduce stress and anxiety</li>
                </ul>
                
                <p>If you've received an audit notice, don't panic. <a href="contact.html">Contact us</a> immediately to discuss your situation.</p>
        '''
    },
    
    'unfiled-returns.html': {
        'title': 'Unfiled Tax Returns',
        'meta_description': 'Help with unfiled tax returns. Professional preparation and filing of past due tax returns.',
        'page_title': 'Unfiled Tax Returns',
        'content': '''
                <h2>Professional Help with Unfiled Tax Returns</h2>
                <p>If you have unfiled tax returns, the sooner you address them, the better. Unfiled returns can lead to penalties, interest, liens, levies, and other serious consequences. We help you get caught up by preparing and filing all past due returns professionally and accurately.</p>
                
                <h2>How We Help with Unfiled Returns</h2>
                <ul>
                    <li>Gather necessary documentation and records</li>
                    <li>Prepare all unfiled tax returns accurately</li>
                    <li>File returns with proper procedures</li>
                    <li>Address penalties and interest issues</li>
                    <li>Work with the IRS to resolve outstanding issues</li>
                    <li>Develop plans to stay current going forward</li>
                </ul>
                
                <h2>Why Address Unfiled Returns Now</h2>
                <p>Addressing unfiled returns helps you:</p>
                <ul>
                    <li>Stop the accumulation of penalties and interest</li>
                    <li>Prevent more serious collection actions</li>
                    <li>Get back into compliance</li>
                    <li>Reduce stress and worry</li>
                    <li>Move forward with a clean slate</li>
                </ul>
                
                <p>Don't let unfiled returns create bigger problems. <a href="contact.html">Contact us</a> to get started.</p>
        '''
    },
    
    'back-taxes.html': {
        'title': 'Back Taxes',
        'meta_description': 'Help resolving back taxes owed to the IRS. Payment plans, settlements, and resolution options.',
        'page_title': 'Back Taxes Resolution',
        'content': '''
                <h2>Expert Help Resolving Back Taxes</h2>
                <p>Owing back taxes to the IRS can feel overwhelming, but there are options available. We help you understand your situation, explore resolution options, and negotiate with the IRS to find a solution that works for you.</p>
                
                <h2>Resolution Options for Back Taxes</h2>
                <ul>
                    <li>Installment agreements (payment plans)</li>
                    <li>Offer in Compromise (settlement for less than owed)</li>
                    <li>Currently Not Collectible status</li>
                    <li>Penalty abatement requests</li>
                    <li>Innocent spouse relief</li>
                    <li>Bankruptcy options</li>
                </ul>
                
                <h2>How We Help</h2>
                <p>We work with you to:</p>
                <ul>
                    <li>Assess your financial situation</li>
                    <li>Determine the best resolution option</li>
                    <li>Prepare and submit necessary applications</li>
                    <li>Negotiate with the IRS on your behalf</li>
                    <li>Resolve your back tax issues</li>
                </ul>
                
                <p>There are solutions for back taxes. <a href="contact.html">Contact us</a> to explore your options.</p>
        '''
    },
    
    'payroll-tax-issues.html': {
        'title': 'Payroll Tax Issues',
        'meta_description': 'Resolution of payroll tax problems. Help with payroll tax debt and compliance issues.',
        'page_title': 'Payroll Tax Issues',
        'content': '''
                <h2>Expert Resolution of Payroll Tax Problems</h2>
                <p>Payroll tax issues are among the most serious tax problems a business can face. The IRS aggressively pursues unpaid payroll taxes, and business owners can be personally liable. We provide expert help resolving payroll tax issues and getting back into compliance.</p>
                
                <h2>How We Help with Payroll Tax Issues</h2>
                <ul>
                    <li>Assess the scope of payroll tax problems</li>
                    <li>Negotiate payment plans and settlements</li>
                    <li>Address trust fund recovery penalties</li>
                    <li>Resolve payroll tax liens and levies</li>
                    <li>Get businesses back into compliance</li>
                    <li>Prevent future payroll tax problems</li>
                </ul>
                
                <h2>Why Act Quickly on Payroll Tax Issues</h2>
                <p>Payroll tax problems escalate quickly. Acting promptly helps you:</p>
                <ul>
                    <li>Avoid more serious collection actions</li>
                    <li>Protect business assets</li>
                    <li>Reduce personal liability exposure</li>
                    <li>Preserve resolution options</li>
                    <li>Get back to running your business</li>
                </ul>
                
                <p>If you have payroll tax issues, act now. <a href="contact.html">Contact us</a> immediately.</p>
        '''
    },
    
    'liens-levies.html': {
        'title': 'IRS Liens & Levies',
        'meta_description': 'Help resolving IRS liens and levies. Protect your assets and resolve collection actions.',
        'page_title': 'IRS Liens & Levies Resolution',
        'content': '''
                <h2>Expert Help Resolving IRS Liens and Levies</h2>
                <p>IRS liens and levies are serious collection actions that can significantly impact your financial life. A lien attaches to your property, while a levy actually seizes assets. We help you resolve these actions and protect your assets.</p>
                
                <h2>Understanding Liens and Levies</h2>
                <p><strong>IRS Liens:</strong> A legal claim against your property to secure payment of tax debt. Liens can affect your credit and ability to sell property.</p>
                <p><strong>IRS Levies:</strong> Actual seizure of assets, including bank accounts, wages, and property, to satisfy tax debt.</p>
                
                <h2>How We Help Resolve Liens and Levies</h2>
                <ul>
                    <li>Assess your situation and options</li>
                    <li>Negotiate release of liens</li>
                    <li>Stop and release levies</li>
                    <li>Establish payment arrangements</li>
                    <li>Explore settlement options</li>
                    <li>Protect your assets</li>
                </ul>
                
                <h2>Why Professional Help Matters</h2>
                <p>Resolving liens and levies requires expertise and negotiation. Professional help ensures:</p>
                <ul>
                    <li>Your rights are protected</li>
                    <li>All options are explored</li>
                    <li>Negotiations are handled effectively</li>
                    <li>Your assets are protected</li>
                    <li>You achieve the best possible outcome</li>
                </ul>
                
                <p>Don't let liens and levies control your finances. <a href="contact.html">Contact us</a> today.</p>
        '''
    },
    
    'wage-garnishment.html': {
        'title': 'Wage Garnishment',
        'meta_description': 'Help stopping IRS wage garnishment. Protect your income and resolve tax debt.',
        'page_title': 'Wage Garnishment Relief',
        'content': '''
                <h2>Stop IRS Wage Garnishment and Protect Your Income</h2>
                <p>IRS wage garnishment can take a significant portion of your paycheck, making it difficult to meet your basic living expenses. We help you stop wage garnishment and find solutions to resolve your tax debt.</p>
                
                <h2>How We Help Stop Wage Garnishment</h2>
                <ul>
                    <li>Negotiate release of wage garnishment</li>
                    <li>Establish affordable payment plans</li>
                    <li>Explore settlement options</li>
                    <li>Negotiate Currently Not Collectible status</li>
                    <li>Address the underlying tax debt</li>
                </ul>
                
                <h2>Options to Stop Wage Garnishment</h2>
                <ul>
                    <li>Installment agreement (payment plan)</li>
                    <li>Offer in Compromise (settlement)</li>
                    <li>Currently Not Collectible status</li>
                    <li>Full payment of tax debt</li>
                </ul>
                
                <p>You don't have to live with wage garnishment. <a href="contact.html">Contact us</a> to explore your options.</p>
        '''
    },
    
    'irs-seizures.html': {
        'title': 'IRS Seizures',
        'meta_description': 'Help preventing and resolving IRS asset seizures. Protect your property and assets.',
        'page_title': 'IRS Seizures - Prevention & Resolution',
        'content': '''
                <h2>Prevent and Resolve IRS Asset Seizures</h2>
                <p>IRS seizures can take your bank accounts, vehicles, real estate, and other assets. If you're at risk of seizure or have already had assets seized, we help you protect your property and resolve the underlying tax issues.</p>
                
                <h2>How We Help with Seizures</h2>
                <ul>
                    <li>Prevent seizures through negotiation</li>
                    <li>Stop seizures in progress</li>
                    <li>Release seized assets</li>
                    <li>Negotiate payment arrangements</li>
                    <li>Explore settlement options</li>
                    <li>Protect remaining assets</li>
                </ul>
                
                <h2>Why Act Quickly</h2>
                <p>IRS seizures can happen quickly. Acting promptly helps you:</p>
                <ul>
                    <li>Prevent asset seizure</li>
                    <li>Stop seizures in progress</li>
                    <li>Release already-seized assets</li>
                    <li>Protect your financial stability</li>
                </ul>
                
                <p>If you're facing seizure risk, act now. <a href="contact.html">Contact us</a> immediately.</p>
        '''
    },
    
    'payment-plans.html': {
        'title': 'IRS Payment Plans',
        'meta_description': 'Help setting up IRS installment agreements. Affordable payment plans for tax debt.',
        'page_title': 'IRS Payment Plans (Installment Agreements)',
        'content': '''
                <h2>Affordable Payment Plans for Tax Debt</h2>
                <p>If you can't pay your tax debt in full, an IRS installment agreement (payment plan) allows you to pay over time. We help you negotiate the best possible payment plan that fits your budget while resolving your tax debt.</p>
                
                <h2>Types of Payment Plans</h2>
                <ul>
                    <li>Short-term payment plans (120 days or less)</li>
                    <li>Long-term payment plans (monthly payments)</li>
                    <li>Streamlined installment agreements</li>
                    <li>Partial payment installment agreements</li>
                </ul>
                
                <h2>How We Help Set Up Payment Plans</h2>
                <ul>
                    <li>Assess your financial situation</li>
                    <li>Determine the best payment plan option</li>
                    <li>Prepare and submit applications</li>
                    <li>Negotiate payment terms</li>
                    <li>Ensure plan approval</li>
                </ul>
                
                <p>An affordable payment plan can resolve your tax debt. <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
    
    'offer-in-compromise.html': {
        'title': 'Offer in Compromise',
        'meta_description': 'Help with IRS Offer in Compromise. Settle tax debt for less than the full amount owed.',
        'page_title': 'Offer in Compromise',
        'content': '''
                <h2>Settle Your Tax Debt for Less Than You Owe</h2>
                <p>An Offer in Compromise (OIC) allows you to settle your tax debt for less than the full amount owed if you meet certain criteria. This can be an excellent option if you can't pay your full tax debt, but the process is complex and requires careful preparation.</p>
                
                <h2>How We Help with Offers in Compromise</h2>
                <ul>
                    <li>Assess your eligibility for an OIC</li>
                    <li>Calculate reasonable collection potential</li>
                    <li>Prepare comprehensive OIC application</li>
                    <li>Negotiate with the IRS</li>
                    <li>Maximize your settlement amount</li>
                </ul>
                
                <h2>OIC Eligibility Factors</h2>
                <p>The IRS considers:</p>
                <ul>
                    <li>Your ability to pay</li>
                    <li>Your income and expenses</li>
                    <li>Your asset equity</li>
                    <li>Doubt as to collectibility</li>
                    <li>Doubt as to liability</li>
                </ul>
                
                <p>An OIC can significantly reduce your tax debt. <a href="contact.html">Contact us</a> to see if you qualify.</p>
        '''
    },
    
    'bankruptcy-options.html': {
        'title': 'Bankruptcy Options',
        'meta_description': 'Tax debt and bankruptcy guidance. Understanding how bankruptcy affects tax debt.',
        'page_title': 'Bankruptcy Options for Tax Debt',
        'content': '''
                <h2>Understanding Bankruptcy and Tax Debt</h2>
                <p>Bankruptcy can be an option for resolving tax debt in certain situations, but the rules are complex. Some tax debt can be discharged in bankruptcy, while other tax debt cannot. We help you understand your options and work with bankruptcy attorneys when appropriate.</p>
                
                <h2>How We Help with Bankruptcy and Tax Debt</h2>
                <ul>
                    <li>Assess whether bankruptcy is appropriate for your situation</li>
                    <li>Determine which tax debt may be dischargeable</li>
                    <li>Coordinate with bankruptcy attorneys</li>
                    <li>Handle tax aspects of bankruptcy proceedings</li>
                    <li>Address post-bankruptcy tax obligations</li>
                </ul>
                
                <h2>Important Considerations</h2>
                <p>Bankruptcy and tax debt involves:</p>
                <ul>
                    <li>Complex rules about dischargeability</li>
                    <li>Timing requirements</li>
                    <li>Coordination with bankruptcy proceedings</li>
                    <li>Impact on future tax obligations</li>
                </ul>
                
                <p>Bankruptcy may be an option for your tax debt. <a href="contact.html">Contact us</a> to discuss your situation.</p>
        '''
    },
    
    'innocent-spouse-relief.html': {
        'title': 'Innocent Spouse Relief',
        'meta_description': 'Help with innocent spouse relief. Relief from tax liability for innocent spouses.',
        'page_title': 'Innocent Spouse Relief',
        'content': '''
                <h2>Relief from Tax Liability for Innocent Spouses</h2>
                <p>Innocent spouse relief provides protection from tax liability when your spouse (or former spouse) understated or underpaid taxes on a joint return, and you didn't know and had no reason to know about the understatement. We help you understand your eligibility and apply for relief.</p>
                
                <h2>Types of Innocent Spouse Relief</h2>
                <ul>
                    <li>Innocent Spouse Relief</li>
                    <li>Separation of Liability Relief</li>
                    <li>Equitable Relief</li>
                </ul>
                
                <h2>How We Help</h2>
                <ul>
                    <li>Assess your eligibility for relief</li>
                    <li>Determine which type of relief applies</li>
                    <li>Prepare and submit relief applications</li>
                    <li>Provide supporting documentation</li>
                    <li>Negotiate with the IRS</li>
                </ul>
                
                <p>You may be eligible for relief from your spouse's tax liability. <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
    
    'irs-record-retrieval.html': {
        'title': 'IRS Record Retrieval',
        'meta_description': 'Help getting your IRS tax records. Retrieve transcripts, account information, and tax documents.',
        'page_title': 'IRS Record Retrieval',
        'content': '''
                <h2>Get Your IRS Records and Transcripts</h2>
                <p>Sometimes you need copies of your tax returns, transcripts, or other IRS records. Whether you've lost your records, need them for a loan, or require them for tax preparation, we help you retrieve the information you need from the IRS.</p>
                
                <h2>Types of Records We Can Retrieve</h2>
                <ul>
                    <li>Tax return transcripts</li>
                    <li>Account transcripts</li>
                    <li>Wage and income transcripts</li>
                    <li>Record of account</li>
                    <li>Copies of filed tax returns</li>
                </ul>
                
                <h2>How We Help</h2>
                <ul>
                    <li>Request records on your behalf</li>
                    <li>Navigate IRS record request processes</li>
                    <li>Obtain necessary authorizations</li>
                    <li>Follow up on requests</li>
                    <li>Interpret and explain retrieved records</li>
                </ul>
                
                <p>Need your IRS records? <a href="contact.html">Contact us</a> to get started.</p>
        '''
    },
}

# QuickBooks Pages
QUICKBOOKS_PAGES = {
    'quickbooks-services.html': {
        'title': 'QuickBooks Services',
        'meta_description': 'Professional QuickBooks services. Setup, training, tune-ups, and ongoing support.',
        'page_title': 'QuickBooks Services',
        'content': '''
                <h2>Professional QuickBooks Services</h2>
                <p>QuickBooks is powerful accounting software, but it works best when set up correctly and used properly. Our QuickBooks services help you get the most from your software investment through professional setup, training, and ongoing support.</p>
                
                <h2>Our QuickBooks Services</h2>
                <ul>
                    <li>QuickBooks setup and configuration</li>
                    <li>Comprehensive QuickBooks training</li>
                    <li>QuickBooks file tune-ups and cleanup</li>
                    <li>Ongoing QuickBooks support</li>
                    <li>QuickBooks troubleshooting</li>
                    <li>Integration with other business systems</li>
                </ul>
                
                <h2>Why Professional QuickBooks Services Matter</h2>
                <p>Professional QuickBooks services help you:</p>
                <ul>
                    <li>Set up your books correctly from the start</li>
                    <li>Use QuickBooks efficiently and effectively</li>
                    <li>Maintain accurate, organized records</li>
                    <li>Save time on accounting tasks</li>
                    <li>Get the most from your QuickBooks investment</li>
                </ul>
                
                <p>Maximize your QuickBooks investment. <a href="contact.html">Contact us</a> to learn more.</p>
        '''
    },
    
    'why-quickbooks.html': {
        'title': 'Why QuickBooks',
        'meta_description': 'Benefits of using QuickBooks for your business accounting. Why QuickBooks is the right choice.',
        'page_title': 'Why Choose QuickBooks',
        'content': '''
                <h2>Why QuickBooks is the Right Choice for Your Business</h2>
                <p>QuickBooks is the leading small business accounting software for good reasons. It offers powerful features, ease of use, and integration capabilities that make it an excellent choice for most businesses.</p>
                
                <h2>Key Benefits of QuickBooks</h2>
                <ul>
                    <li><strong>User-Friendly:</strong> Intuitive interface that's easy to learn and use</li>
                    <li><strong>Comprehensive Features:</strong> Complete accounting functionality in one platform</li>
                    <li><strong>Scalability:</strong> Grows with your business from startup to established company</li>
                    <li><strong>Integration:</strong> Connects with banks, payment processors, and other business tools</li>
                    <li><strong>Reporting:</strong> Powerful reporting and financial analysis tools</li>
                    <li><strong>Cloud Access:</strong> Access your books from anywhere with online versions</li>
                    <li><strong>Industry Standard:</strong> Widely used and supported by accountants and bookkeepers</li>
                    <li><strong>Cost-Effective:</strong> Affordable pricing for the value provided</li>
                    <li><strong>Support:</strong> Extensive resources, training, and support available</li>
                    <li><strong>Tax Integration:</strong> Easy export to tax preparation software</li>
                </ul>
                
                <p>Ready to get started with QuickBooks? <a href="contact.html">Contact us</a> to learn how we can help.</p>
        '''
    },
    
    'quickbooks-setup.html': {
        'title': 'QuickBooks Setup',
        'meta_description': 'Professional QuickBooks setup and configuration. Get your QuickBooks set up correctly from the start.',
        'page_title': 'QuickBooks Setup Services',
        'content': '''
                <h2>Professional QuickBooks Setup and Configuration</h2>
                <p>Proper QuickBooks setup is essential for accurate accounting and efficient operations. A poorly configured QuickBooks file creates ongoing problems and inefficiencies. Our professional setup ensures your QuickBooks is configured correctly from the start.</p>
                
                <h2>Our QuickBooks Setup Services</h2>
                <ul>
                    <li>Company file creation and configuration</li>
                    <li>Chart of accounts design and setup</li>
                    <li>Preferences and settings configuration</li>
                    <li>Bank account and credit card setup</li>
                    <li>Customer and vendor setup</li>
                    <li>Product and service item setup</li>
                    <li>Sales tax setup</li>
                    <li>Payroll setup (if applicable)</li>
                    <li>Integration with banks and payment processors</li>
                    <li>Initial data entry and conversion</li>
                </ul>
                
                <h2>Why Professional Setup Matters</h2>
                <p>Professional QuickBooks setup ensures:</p>
                <ul>
                    <li>Your books are organized correctly</li>
                    <li>Financial reports are accurate</li>
                    <li>Tax preparation is streamlined</li>
                    <li>You avoid costly setup mistakes</li>
                    <li>Your system works efficiently</li>
                </ul>
                
                <p>Get your QuickBooks set up right the first time. <a href="contact.html">Contact us</a> to get started.</p>
        '''
    },
    
    'quickbooks-training.html': {
        'title': 'QuickBooks Training',
        'meta_description': 'Comprehensive QuickBooks training. Learn to use QuickBooks effectively and efficiently.',
        'page_title': 'QuickBooks Training Services',
        'content': '''
                <h2>Comprehensive QuickBooks Training</h2>
                <p>QuickBooks is powerful software, but it's most effective when you know how to use it properly. Our QuickBooks training helps you and your team master the software, improving efficiency and ensuring accurate record-keeping.</p>
                
                <h2>Our Training Programs</h2>
                <ul>
                    <li>Basic QuickBooks training for new users</li>
                    <li>Advanced features and techniques</li>
                    <li>Industry-specific QuickBooks training</li>
                    <li>Customized training for your business</li>
                    <li>One-on-one or group training options</li>
                    <li>Ongoing support and refresher training</li>
                </ul>
                
                <h2>Training Topics We Cover</h2>
                <ul>
                    <li>Navigating QuickBooks interface</li>
                    <li>Setting up customers and vendors</li>
                    <li>Creating invoices and receiving payments</li>
                    <li>Entering bills and paying vendors</li>
                    <li>Bank reconciliation</li>
                    <li>Running financial reports</li>
                    <li>Payroll processing (if applicable)</li>
                    <li>Inventory management</li>
                    <li>Best practices and tips</li>
                </ul>
                
                <p>Master QuickBooks with professional training. <a href="contact.html">Contact us</a> to schedule training.</p>
        '''
    },
    
    'quickbooks-tuneup.html': {
        'title': 'QuickBooks Tune-Up',
        'meta_description': 'QuickBooks file tune-up and cleanup services. Optimize and clean up your QuickBooks file.',
        'page_title': 'QuickBooks Tune-Up Services',
        'content': '''
                <h2>QuickBooks File Tune-Up and Cleanup</h2>
                <p>Over time, QuickBooks files can become cluttered with duplicate entries, unused accounts, incorrect balances, and other issues that affect accuracy and performance. Our QuickBooks tune-up services clean up your file and optimize it for better performance and accuracy.</p>
                
                <h2>What Our Tune-Up Includes</h2>
                <ul>
                    <li>Review of chart of accounts and cleanup</li>
                    <li>Identification and removal of duplicate entries</li>
                    <li>Correction of account balances</li>
                    <li>Reconciliation of all accounts</li>
                    <li>Review and cleanup of customer and vendor lists</li>
                    <li>Inventory reconciliation (if applicable)</li>
                    <li>Review of preferences and settings</li>
                    <li>Performance optimization</li>
                    <li>Backup and file integrity check</li>
                    <li>Report on findings and recommendations</li>
                </ul>
                
                <h2>Benefits of a QuickBooks Tune-Up</h2>
                <p>Regular tune-ups help you:</p>
                <ul>
                    <li>Maintain accurate financial records</li>
                    <li>Improve QuickBooks performance</li>
                    <li>Identify and correct errors</li>
                    <li>Prepare for tax season efficiently</li>
                    <li>Ensure reliable financial reporting</li>
                </ul>
                
                <p>Keep your QuickBooks running smoothly. <a href="contact.html">Contact us</a> to schedule a tune-up.</p>
        '''
    },
}

def generate_all_pages():
    """Generate all pages"""
    os.makedirs('pages', exist_ok=True)
    
    all_pages_dict = {**ALL_PAGES, **TAX_RELIEF_PAGES, **QUICKBOOKS_PAGES}
    
    for filename, page_data in all_pages_dict.items():
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
    
    print(f"\nGenerated {len(all_pages_dict)} pages successfully!")

if __name__ == '__main__':
    generate_all_pages()

