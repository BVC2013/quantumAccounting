#!/usr/bin/env python3
"""
Generate final pages: resources, contact, utilities, legal pages
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

FINAL_PAGES = {
    # Resources Pages
    'resources.html': {
        'title': 'Resources',
        'meta_description': 'Financial resources, guides, newsletters, and tools. Educational content and helpful resources.',
        'page_title': 'Client Resources',
        'content': '''
                <div>
                    <h2>Helpful Resources and Educational Content</h2>
                    <p>Access educational resources, guides, newsletters, and tools to help you make informed financial decisions and stay current with tax and accounting matters.</p>
                    
                    <div class="service-grid">
                        <div class="service-card">
                            <h3><a href="newsletter.html">Newsletter</a></h3>
                            <p>Monthly newsletter with tax tips, financial insights, and important updates.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="financial-guides.html">Financial Guides</a></h3>
                            <p>Comprehensive guides on various financial topics.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="life-events.html">Life Events</a></h3>
                            <p>Financial guidance for major life milestones and transitions.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="business-strategies.html">Business Strategies</a></h3>
                            <p>Guides and insights for business planning and strategy.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="investment-strategies.html">Investment Strategies</a></h3>
                            <p>Educational content on investing and saving.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="tax-strategies-business.html">Tax Strategies for Business</a></h3>
                            <p>Tax-saving strategies and tips for business owners.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="tax-strategies-individual.html">Tax Strategies for Individuals</a></h3>
                            <p>Tax-saving strategies and tips for individuals.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="faq.html">Frequently Asked Questions</a></h3>
                            <p>Answers to common questions about taxes, accounting, and our services.</p>
                        </div>
                        <div class="service-card">
                            <h3><a href="financial-calculators.html">Financial Calculators</a></h3>
                            <p>Interactive calculators for loans, savings, retirement, and more.</p>
                        </div>
                    </div>
                </div>
        '''
    },
    
    'newsletter.html': {
        'title': 'Newsletter',
        'meta_description': 'Monthly newsletter with tax tips, financial insights, and important updates.',
        'page_title': 'Monthly Newsletter',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Stay Informed with Our Monthly Newsletter</h2>
                        <p>Our monthly newsletter provides valuable tax tips, financial insights, important deadline reminders, and updates on tax law changes that may affect you or your business.</p>
                        
                        <h3>What You'll Find in Our Newsletter</h3>
                        <ul>
                            <li>Tax-saving tips and strategies</li>
                            <li>Important deadline reminders</li>
                            <li>Updates on tax law changes</li>
                            <li>Financial planning insights</li>
                            <li>Business strategy tips</li>
                            <li>Industry news and updates</li>
                        </ul>
                        
                        <h3>Subscribe to Our Newsletter</h3>
                        <form style="margin: 2rem 0;">
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="name">Name (Optional)</label>
                                <input type="text" id="name" name="name">
                            </div>
                            <button type="submit" class="btn btn-primary">Subscribe</button>
                        </form>
                        
                        <p><a href="newsletter-archive.html">View Previous Newsletters</a></p>
                    </div>
                    <div class="sidebar">
                        <h3>Current Issue</h3>
                        <p>Check out our latest newsletter for current tax tips and financial insights.</p>
                    </div>
                </div>
        '''
    },
    
    'newsletter-archive.html': {
        'title': 'Newsletter Archive',
        'meta_description': 'Archive of past newsletters. Access previous issues of our monthly newsletter.',
        'page_title': 'Newsletter Archive',
        'content': '''
                <div>
                    <h2>Newsletter Archive</h2>
                    <p>Browse our archive of past newsletters for valuable tax tips, financial insights, and important updates.</p>
                    
                    <ul>
                        <li><a href="#">December 2024 Newsletter</a></li>
                        <li><a href="#">November 2024 Newsletter</a></li>
                        <li><a href="#">October 2024 Newsletter</a></li>
                        <li><a href="#">September 2024 Newsletter</a></li>
                        <li><a href="#">August 2024 Newsletter</a></li>
                    </ul>
                    
                    <p><a href="newsletter.html">Subscribe to receive future newsletters</a></p>
                </div>
        '''
    },
    
    'financial-guides.html': {
        'title': 'Financial Guides',
        'meta_description': 'Comprehensive financial guides and educational articles on various financial topics.',
        'page_title': 'Financial Guides',
        'content': '''
                <div>
                    <h2>Financial Guides and Educational Articles</h2>
                    <p>Access comprehensive guides on various financial topics to help you make informed decisions.</p>
                    
                    <h3>Available Guides</h3>
                    <ul>
                        <li>Understanding Your Tax Return</li>
                        <li>Small Business Tax Deductions</li>
                        <li>Retirement Planning Basics</li>
                        <li>Estate Planning Essentials</li>
                        <li>Investment Fundamentals</li>
                        <li>Business Financial Management</li>
                    </ul>
                    
                    <p>For personalized financial guidance, <a href="contact.html">contact us</a> to schedule a consultation.</p>
                </div>
        '''
    },
    
    'life-events.html': {
        'title': 'Life Events',
        'meta_description': 'Financial guidance for major life milestones. Planning for life transitions.',
        'page_title': 'Financial Planning for Life Events',
        'content': '''
                <div>
                    <h2>Financial Guidance for Major Life Events</h2>
                    <p>Major life events often have significant financial implications. Our guides help you navigate the financial aspects of important life transitions.</p>
                    
                    <h3>Life Events We Cover</h3>
                    <ul>
                        <li>Getting Married</li>
                        <li>Starting a Family</li>
                        <li>Buying a Home</li>
                        <li>Changing Jobs</li>
                        <li>Starting a Business</li>
                        <li>Planning for Retirement</li>
                        <li>Estate Planning</li>
                    </ul>
                    
                    <p>For personalized guidance on your specific situation, <a href="contact.html">contact us</a> to schedule a consultation.</p>
                </div>
        '''
    },
    
    'business-strategies.html': {
        'title': 'Business Strategies',
        'meta_description': 'Business planning guides and strategic insights for business owners.',
        'page_title': 'Business Strategies',
        'content': '''
                <div>
                    <h2>Business Strategy Guides and Insights</h2>
                    <p>Strategic planning and informed decision-making are essential for business success. Our business strategy resources provide insights and guidance to help you grow and manage your business effectively.</p>
                    
                    <h3>Topics We Cover</h3>
                    <ul>
                        <li>Business Planning and Strategy</li>
                        <li>Financial Management</li>
                        <li>Tax Planning for Businesses</li>
                        <li>Cash Flow Management</li>
                        <li>Growth Planning</li>
                        <li>Succession Planning</li>
                    </ul>
                    
                    <p>For personalized business advisory services, <a href="contact.html">contact us</a> to schedule a consultation.</p>
                </div>
        '''
    },
    
    'investment-strategies.html': {
        'title': 'Investment Strategies',
        'meta_description': 'Educational content on investing and saving. Investment strategy guides.',
        'page_title': 'Investment Strategies',
        'content': '''
                <div>
                    <h2>Investment Strategy Guides</h2>
                    <p>Understanding investment fundamentals and strategies helps you make informed decisions about saving and investing for your future.</p>
                    
                    <h3>Investment Topics</h3>
                    <ul>
                        <li>Investment Basics</li>
                        <li>Retirement Planning</li>
                        <li>Tax-Efficient Investing</li>
                        <li>Portfolio Diversification</li>
                        <li>Risk Management</li>
                    </ul>
                    
                    <p>For personalized investment guidance, <a href="contact.html">contact us</a> to schedule a consultation.</p>
                </div>
        '''
    },
    
    'tax-strategies-business.html': {
        'title': 'Tax Strategies for Business',
        'meta_description': 'Tax-saving strategies and tips for business owners. Business tax planning strategies.',
        'page_title': 'Tax Strategies for Business Owners',
        'content': '''
                <div>
                    <h2>Tax-Saving Strategies for Business Owners</h2>
                    <p>Effective tax planning can significantly reduce your business tax liability. Our guides provide strategies and tips to help business owners minimize taxes while maintaining compliance.</p>
                    
                    <h3>Business Tax Strategies</h3>
                    <ul>
                        <li>Entity Structure Optimization</li>
                        <li>Business Expense Deductions</li>
                        <li>Depreciation Strategies</li>
                        <li>Retirement Plan Contributions</li>
                        <li>Timing Income and Expenses</li>
                    </ul>
                    
                    <p>For personalized business tax planning, <a href="contact.html">contact us</a> to schedule a consultation.</p>
                </div>
        '''
    },
    
    'tax-strategies-individual.html': {
        'title': 'Tax Strategies for Individuals',
        'meta_description': 'Tax-saving strategies and tips for individuals. Personal tax planning strategies.',
        'page_title': 'Tax Strategies for Individuals',
        'content': '''
                <div>
                    <h2>Tax-Saving Strategies for Individuals</h2>
                    <p>Strategic tax planning helps you minimize your tax liability and maximize your after-tax income. Our guides provide strategies and tips for individual taxpayers.</p>
                    
                    <h3>Individual Tax Strategies</h3>
                    <ul>
                        <li>Maximizing Deductions</li>
                        <li>Retirement Contribution Strategies</li>
                        <li>Investment Tax Planning</li>
                        <li>Charitable Giving Strategies</li>
                        <li>Timing Income and Deductions</li>
                    </ul>
                    
                    <p>For personalized tax planning, <a href="contact.html">contact us</a> to schedule a consultation.</p>
                </div>
        '''
    },
    
    'faq.html': {
        'title': 'Frequently Asked Questions',
        'meta_description': 'Answers to common questions about taxes, accounting, and our services.',
        'page_title': 'Frequently Asked Questions',
        'content': '''
                <div>
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common questions about our services, taxes, and accounting matters.</p>
                    
                    <h3>General Questions</h3>
                    <p><strong>Q: What services do you provide?</strong><br>
                    A: We provide comprehensive accounting, tax preparation, tax planning, business advisory, and QuickBooks services for individuals and businesses.</p>
                    
                    <p><strong>Q: How much do your services cost?</strong><br>
                    A: Service fees vary based on the complexity and scope of work. We provide transparent pricing and will discuss fees before beginning work.</p>
                    
                    <p><strong>Q: Do you work with clients year-round or just during tax season?</strong><br>
                    A: We provide year-round support and services, not just during tax season. We're available to help with tax planning, business advisory, and other services throughout the year.</p>
                    
                    <h3>Tax Questions</h3>
                    <p><strong>Q: When should I file my tax return?</strong><br>
                    A: Individual tax returns are generally due April 15, or October 15 if you file an extension. Business returns have different deadlines depending on entity type.</p>
                    
                    <p><strong>Q: What documents do I need for tax preparation?</strong><br>
                    A: You'll need W-2s, 1099s, receipts for deductions, bank statements, and other income and expense documentation. We provide a checklist when you engage our services.</p>
                    
                    <p>Have more questions? <a href="contact.html">Contact us</a> and we'll be happy to help.</p>
                </div>
        '''
    },
    
    'financial-calculators.html': {
        'title': 'Financial Calculators',
        'meta_description': 'Interactive financial calculators. Loan calculators, savings calculators, retirement calculators, and more.',
        'page_title': 'Financial Calculators',
        'content': '''
                <div>
                    <h2>Interactive Financial Calculators</h2>
                    <p>Use our interactive calculators to help with financial planning and decision-making.</p>
                    
                    <div class="service-grid">
                        <div class="service-card">
                            <h3>Loan Calculator</h3>
                            <p>Calculate monthly loan payments, total interest, and amortization schedules.</p>
                        </div>
                        <div class="service-card">
                            <h3>Savings Calculator</h3>
                            <p>Calculate how much you need to save to reach your goals.</p>
                        </div>
                        <div class="service-card">
                            <h3>Retirement Calculator</h3>
                            <p>Estimate how much you need to save for retirement.</p>
                        </div>
                        <div class="service-card">
                            <h3>Tax Calculator</h3>
                            <p>Estimate your tax liability or refund.</p>
                        </div>
                    </div>
                    
                    <p><em>Note: Calculators are for estimation purposes only. For personalized financial guidance, <a href="contact.html">contact us</a> to schedule a consultation.</em></p>
                </div>
        '''
    },
    
    # Contact and Utility Pages
    'contact.html': {
        'title': 'Contact Us',
        'meta_description': 'Contact Quantum Accounting Advisory. Get in touch with our team.',
        'page_title': 'Contact Us',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Get in Touch</h2>
                        <p>We're here to help with all your accounting, tax, and financial advisory needs. Reach out to us using any of the methods below, and we'll respond promptly.</p>
                        
                        <h3>Contact Information</h3>
                        <p><strong>Phone:</strong> (555) 123-4567<br>
                        <strong>Email:</strong> info@quantumaccounting.com<br>
                        <strong>Address:</strong> [Your Business Address]<br>
                        [City, State ZIP]</p>
                        
                        <h3>Office Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
                        Saturday: By Appointment<br>
                        Sunday: Closed</p>
                        
                        <h3>Send Us a Message</h3>
                        <form>
                            <div class="form-group">
                                <label for="name">Your Name *</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone">
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject">
                            </div>
                            <div class="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" rows="6" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    <div class="sidebar">
                        <h3>Schedule a Consultation</h3>
                        <p>Prefer to schedule a meeting? Use our online scheduling tool.</p>
                        <a href="book-meeting.html" class="btn btn-primary" style="width: 100%; margin-bottom: 1rem;">Book a Meeting</a>
                        
                        <h3>Client Portal</h3>
                        <p>Existing clients can access their portal to view documents and communicate securely.</p>
                        <a href="client-portal.html" class="btn btn-secondary" style="width: 100%;">Client Portal Login</a>
                    </div>
                </div>
        '''
    },
    
    'book-meeting.html': {
        'title': 'Book a Meeting',
        'meta_description': 'Schedule a consultation with Quantum Accounting Advisory. Book an appointment online.',
        'page_title': 'Schedule a Consultation',
        'content': '''
                <div class="two-column">
                    <div>
                        <h2>Schedule Your Consultation</h2>
                        <p>Ready to discuss your accounting, tax, or financial advisory needs? Schedule a consultation with us. We offer in-person, phone, and video consultations to accommodate your preferences.</p>
                        
                        <h3>What to Expect</h3>
                        <p>During your consultation, we'll:</p>
                        <ul>
                            <li>Discuss your specific needs and goals</li>
                            <li>Answer your questions</li>
                            <li>Explain how we can help</li>
                            <li>Provide an overview of our services</li>
                            <li>Discuss next steps</li>
                        </ul>
                        
                        <h3>Schedule Online</h3>
                        <p>Use our online scheduling system to book your preferred date and time. You'll receive a confirmation email with meeting details.</p>
                        
                        <p><em>[Embed online scheduling calendar here]</em></p>
                        
                        <h3>Prefer to Call?</h3>
                        <p>If you'd prefer to schedule by phone, call us at (555) 123-4567 during business hours.</p>
                    </div>
                    <div class="sidebar">
                        <h3>Contact Information</h3>
                        <p><strong>Phone:</strong> (555) 123-4567<br>
                        <strong>Email:</strong> info@quantumaccounting.com</p>
                        
                        <h3>Office Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
                        Saturday: By Appointment</p>
                    </div>
                </div>
        '''
    },
    
    'client-portal.html': {
        'title': 'Client Portal',
        'meta_description': 'Secure client portal login. Access your documents and communicate with your accountant.',
        'page_title': 'Client Portal',
        'content': '''
                <div style="max-width: 500px; margin: 0 auto;">
                    <h2>Client Portal Login</h2>
                    <p>Access your secure client portal to view documents, upload files, and communicate with your accountant.</p>
                    
                    <form>
                        <div class="form-group">
                            <label for="username">Username or Email</label>
                            <input type="text" id="username" name="username" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Login</button>
                    </form>
                    
                    <p style="text-align: center; margin-top: 1rem;">
                        <a href="#">Forgot Password?</a> | <a href="#">New Client Registration</a>
                    </p>
                    
                    <div style="margin-top: 2rem; padding: 1rem; background: var(--bg-light); border-radius: 8px;">
                        <h3>Portal Features</h3>
                        <ul>
                            <li>Secure document access</li>
                            <li>File upload and sharing</li>
                            <li>Secure messaging</li>
                            <li>Tax return access</li>
                            <li>Account information</li>
                        </ul>
                    </div>
                </div>
        '''
    },
    
    'secure-upload.html': {
        'title': 'Secure File Upload',
        'meta_description': 'Securely upload files to Quantum Accounting Advisory. Secure file transfer.',
        'page_title': 'Secure File Upload',
        'content': '''
                <div style="max-width: 600px; margin: 0 auto;">
                    <h2>Secure File Upload</h2>
                    <p>Securely upload documents and files to our office. Our secure file transfer system uses encryption to protect your sensitive information.</p>
                    
                    <form>
                        <div class="form-group">
                            <label for="name">Your Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message (Optional)</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="file">Select File(s) *</label>
                            <input type="file" id="file" name="file" multiple required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Upload Files</button>
                    </form>
                    
                    <div style="margin-top: 2rem; padding: 1rem; background: var(--bg-light); border-radius: 8px;">
                        <h3>Security & Privacy</h3>
                        <p>All file transfers are encrypted and secure. Your documents are protected with industry-standard security measures.</p>
                    </div>
                </div>
        '''
    },
    
    'blog.html': {
        'title': 'Blog',
        'meta_description': 'Tax tips, financial insights, and accounting news. Read our latest blog posts.',
        'page_title': 'Blog',
        'content': '''
                <div>
                    <h2>Our Blog</h2>
                    <p>Stay informed with our latest articles on tax tips, financial insights, accounting news, and more.</p>
                    
                    <div class="service-grid">
                        <div class="service-card">
                            <h3>Tax Planning Tips for 2024</h3>
                            <p>Strategies to minimize your tax liability and maximize savings.</p>
                            <p><small>Published: January 2024</small></p>
                        </div>
                        <div class="service-card">
                            <h3>Small Business Tax Deductions You Might Be Missing</h3>
                            <p>Common deductions that business owners often overlook.</p>
                            <p><small>Published: December 2023</small></p>
                        </div>
                        <div class="service-card">
                            <h3>Understanding Your Tax Return</h3>
                            <p>A guide to understanding the key components of your tax return.</p>
                            <p><small>Published: November 2023</small></p>
                        </div>
                    </div>
                </div>
        '''
    },
    
    # Legal/Footer Pages
    'privacy-policy.html': {
        'title': 'Privacy Policy',
        'meta_description': 'Privacy policy for Quantum Accounting Advisory. How we protect and use your information.',
        'page_title': 'Privacy Policy',
        'content': '''
                <div>
                    <h2>Privacy Policy</h2>
                    <p><strong>Last Updated:</strong> [Date]</p>
                    
                    <h3>Information We Collect</h3>
                    <p>We collect information that you provide directly to us, including name, contact information, tax and financial information, and other information necessary to provide our services.</p>
                    
                    <h3>How We Use Your Information</h3>
                    <p>We use your information to provide accounting, tax, and financial advisory services, communicate with you, and comply with legal obligations.</p>
                    
                    <h3>Information Security</h3>
                    <p>We implement appropriate security measures to protect your personal and financial information from unauthorized access, disclosure, or destruction.</p>
                    
                    <h3>Sharing of Information</h3>
                    <p>We do not sell your information. We may share information with service providers who assist us in providing services, or as required by law.</p>
                    
                    <h3>Your Rights</h3>
                    <p>You have the right to access, correct, or delete your personal information, subject to legal and professional obligations.</p>
                    
                    <h3>Contact Us</h3>
                    <p>If you have questions about this privacy policy, please <a href="contact.html">contact us</a>.</p>
                </div>
        '''
    },
    
    'disclaimer.html': {
        'title': 'Disclaimer',
        'meta_description': 'Disclaimer for Quantum Accounting Advisory website.',
        'page_title': 'Disclaimer',
        'content': '''
                <div>
                    <h2>Website Disclaimer</h2>
                    <p>The information on this website is provided for general informational purposes only and should not be considered as professional tax, accounting, or financial advice.</p>
                    
                    <h3>No Professional Advice</h3>
                    <p>This website does not provide personalized tax, accounting, or financial advice. You should consult with a qualified professional for advice specific to your situation.</p>
                    
                    <h3>Accuracy of Information</h3>
                    <p>While we strive to provide accurate information, we make no warranties about the completeness, reliability, or accuracy of information on this website.</p>
                    
                    <h3>No Client Relationship</h3>
                    <p>Use of this website does not create a professional-client relationship. A professional relationship is established only through a written engagement agreement.</p>
                    
                    <h3>Contact Us</h3>
                    <p>For professional advice, please <a href="contact.html">contact us</a> to schedule a consultation.</p>
                </div>
        '''
    },
    
    'security-measures.html': {
        'title': 'Security Measures',
        'meta_description': 'Security measures and data protection practices at Quantum Accounting Advisory.',
        'page_title': 'Security Measures',
        'content': '''
                <div>
                    <h2>Our Commitment to Security</h2>
                    <p>We take the security and privacy of your information seriously. We implement comprehensive security measures to protect your sensitive financial and personal information.</p>
                    
                    <h3>Data Encryption</h3>
                    <p>We use industry-standard encryption to protect data in transit and at rest.</p>
                    
                    <h3>Secure Systems</h3>
                    <p>Our systems are protected with firewalls, intrusion detection, and other security measures.</p>
                    
                    <h3>Access Controls</h3>
                    <p>Access to your information is restricted to authorized personnel only, and we maintain strict access controls.</p>
                    
                    <h3>Regular Security Updates</h3>
                    <p>We regularly update our systems and software to address security vulnerabilities.</p>
                    
                    <h3>Employee Training</h3>
                    <p>Our team is trained on security best practices and data protection requirements.</p>
                    
                    <h3>Compliance</h3>
                    <p>We comply with applicable data protection and privacy regulations.</p>
                    
                    <p>If you have questions about our security measures, please <a href="contact.html">contact us</a>.</p>
                </div>
        '''
    },
    
    'sitemap.html': {
        'title': 'Sitemap',
        'meta_description': 'Sitemap for Quantum Accounting Advisory website.',
        'page_title': 'Sitemap',
        'content': '''
                <div>
                    <h2>Website Sitemap</h2>
                    <p>Find all pages on our website organized by category.</p>
                    
                    <h3>Main Pages</h3>
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="our-values.html">Our Values</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    
                    <h3>Services</h3>
                    <ul>
                        <li><a href="services-individuals.html">Services for Individuals</a></li>
                        <li><a href="services-business.html">Business Services</a></li>
                        <li><a href="tax-services.html">Tax Services</a></li>
                        <li><a href="tax-relief.html">Tax Relief</a></li>
                        <li><a href="quickbooks-services.html">QuickBooks Services</a></li>
                    </ul>
                    
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="tax-center.html">Tax Center</a></li>
                        <li><a href="resources.html">Resources</a></li>
                        <li><a href="newsletter.html">Newsletter</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                    
                    <p>For a complete list of all pages, please use the navigation menu.</p>
                </div>
        '''
    },
    
    'useful-links.html': {
        'title': 'Useful Links',
        'meta_description': 'Useful links to external resources. Helpful websites and resources.',
        'page_title': 'Useful Internet Links',
        'content': '''
                <div>
                    <h2>Useful Links and Resources</h2>
                    <p>Helpful links to external resources that may be useful for tax, accounting, and financial matters.</p>
                    
                    <h3>Government Resources</h3>
                    <ul>
                        <li><a href="https://www.irs.gov" target="_blank">Internal Revenue Service (IRS)</a></li>
                        <li><a href="https://www.ssa.gov" target="_blank">Social Security Administration</a></li>
                        <li><a href="https://www.sba.gov" target="_blank">Small Business Administration</a></li>
                    </ul>
                    
                    <h3>Financial Resources</h3>
                    <ul>
                        <li><a href="https://www.sec.gov" target="_blank">Securities and Exchange Commission</a></li>
                        <li><a href="https://www.fdic.gov" target="_blank">FDIC</a></li>
                    </ul>
                    
                    <p><em>Note: We are not responsible for the content of external websites.</em></p>
                </div>
        '''
    },
}

def generate_final():
    """Generate final pages"""
    os.makedirs('pages', exist_ok=True)
    
    for filename, page_data in FINAL_PAGES.items():
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
    
    print(f"\nGenerated {len(FINAL_PAGES)} pages successfully!")

if __name__ == '__main__':
    generate_final()

