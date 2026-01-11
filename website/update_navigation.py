#!/usr/bin/env python3
"""
Update all HTML pages with improved navigation including mobile menu toggle
"""

import os
import re

def update_navigation_in_file(filepath):
    """Update navigation in a single HTML file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file already has mobile menu toggle
        if 'mobile-menu-toggle' in content:
            return False
        
        # Determine if it's a root page or subdirectory page
        is_root = 'pages/' not in filepath
        
        # Pattern to find nav section
        nav_pattern = r'(<nav class="container">\s*<a[^>]*class="logo"[^>]*>.*?</a>)\s*(<ul class="nav-menu">)'
        
        # Replacement with mobile menu toggle
        if is_root:
            replacement = r'\1\n            <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>\n            \2'
        else:
            replacement = r'\1\n            <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>\n            \2'
        
        new_content = re.sub(nav_pattern, replacement, content, flags=re.DOTALL)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        return False
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
        return False

def main():
    """Update all HTML files"""
    pages_dir = 'pages'
    root_file = 'index.html'
    
    updated_count = 0
    
    # Update root index.html
    if os.path.exists(root_file):
        if update_navigation_in_file(root_file):
            print(f"Updated: {root_file}")
            updated_count += 1
    
    # Update all pages
    if os.path.exists(pages_dir):
        for filename in os.listdir(pages_dir):
            if filename.endswith('.html'):
                filepath = os.path.join(pages_dir, filename)
                if update_navigation_in_file(filepath):
                    print(f"Updated: {filepath}")
                    updated_count += 1
    
    print(f"\nUpdated {updated_count} files with mobile menu toggle.")

if __name__ == '__main__':
    main()

