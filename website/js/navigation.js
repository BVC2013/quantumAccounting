// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-menu > li');
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Dropdown menu functionality
    navItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            const link = item.querySelector('a');
            
            // For mobile: toggle dropdown on click
            if (window.innerWidth <= 768) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    item.classList.toggle('dropdown-open');
                });
            } else {
                // For desktop: add delay to prevent accidental closing
                let hoverTimeout;
                let isHovering = false;
                
                item.addEventListener('mouseenter', function() {
                    clearTimeout(hoverTimeout);
                    isHovering = true;
                    item.classList.add('dropdown-open');
                });
                
                item.addEventListener('mouseleave', function(e) {
                    isHovering = false;
                    // Check if mouse is moving to dropdown
                    const relatedTarget = e.relatedTarget;
                    if (relatedTarget && (item.contains(relatedTarget) || dropdown.contains(relatedTarget))) {
                        return; // Don't close if moving to dropdown
                    }
                    hoverTimeout = setTimeout(function() {
                        if (!isHovering) {
                            item.classList.remove('dropdown-open');
                        }
                    }, 150); // 150ms delay before closing
                });
                
                // Keep dropdown open when hovering over it
                dropdown.addEventListener('mouseenter', function() {
                    clearTimeout(hoverTimeout);
                    isHovering = true;
                    item.classList.add('dropdown-open');
                });
                
                dropdown.addEventListener('mouseleave', function(e) {
                    isHovering = false;
                    const relatedTarget = e.relatedTarget;
                    if (relatedTarget && item.contains(relatedTarget)) {
                        return; // Don't close if moving back to parent
                    }
                    hoverTimeout = setTimeout(function() {
                        if (!isHovering) {
                            item.classList.remove('dropdown-open');
                        }
                    }, 150);
                });
            }
            
            // Close dropdown when clicking outside (mobile)
            document.addEventListener('click', function(e) {
                if (!item.contains(e.target) && window.innerWidth <= 768) {
                    item.classList.remove('dropdown-open');
                }
            });
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.innerHTML = '☰';
                }
            }
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navItems.forEach(item => {
                    item.classList.remove('dropdown-open');
                });
                if (mobileMenuToggle) {
                    mobileMenuToggle.innerHTML = '☰';
                }
            }
        }, 250);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Active menu item highlighting
    const currentPath = window.location.pathname;
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            const linkPath = link.getAttribute('href');
            if (currentPath.includes(linkPath) || 
                (currentPath === '/' && linkPath.includes('index.html'))) {
                item.classList.add('active');
            }
        }
    });
});

