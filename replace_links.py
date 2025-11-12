#!/usr/bin/env python3
"""
Script to replace all beetechy.com domain references with xyz.com
This is a helper script for bulk link replacement
"""
import re
from pathlib import Path

def replace_links_in_file(file_path, old_domain="beetechy.com", new_domain="xyz.com"):
    """Replace domain in a file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all instances of old domain with new domain
    # Preserve paths
    content = content.replace(f"https://{old_domain}", f"https://{new_domain}")
    content = content.replace(f"http://{old_domain}", f"http://{new_domain}")
    content = content.replace(f"//{old_domain}", f"//{new_domain}")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Replaced links in {file_path}")

# Replace in all TypeScript/TSX files
for ext in ['*.tsx', '*.ts', '*.js', '*.jsx']:
    for file_path in Path('.').rglob(ext):
        if 'node_modules' not in str(file_path):
            try:
                replace_links_in_file(file_path)
            except Exception as e:
                print(f"✗ Error processing {file_path}: {e}")

print("\nLink replacement complete!")

