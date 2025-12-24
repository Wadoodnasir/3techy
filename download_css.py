#!/usr/bin/env python3
"""
Script to download all CSS files from assets.json
"""
import json
import os
import urllib.request
from urllib.parse import urlparse
from pathlib import Path

# Load asset URLs
with open('assets.json', 'r') as f:
    assets = json.load(f)

# Create CSS directory
css_dir = Path('public/css')
css_dir.mkdir(parents=True, exist_ok=True)

def download_file(url, dest_path):
    """Download a file from URL to destination"""
    try:
        print(f"Downloading {url}...")
        # Create request with user agent
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as response:
            with open(dest_path, 'wb') as out_file:
                out_file.write(response.read())
        print(f"  ✓ Saved to {dest_path}")
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

# Download CSS files
print(f"Downloading {len(assets['css'])} CSS files...\n")
downloaded = 0
failed = 0

for url in assets['css']:
    parsed = urlparse(url)
    # Get the path and create a safe filename
    path_parts = parsed.path.strip('/').split('/')
    # Use the last part as filename, but make it safe
    filename = path_parts[-1].split('?')[0]  # Remove query params
    
    # If no extension, add .css
    if not filename.endswith('.css'):
        filename += '.css'
    
    # Create subdirectory structure if needed (e.g., elementor/css/)
    if len(path_parts) > 1:
        subdir = css_dir / '/'.join(path_parts[:-1])
        subdir.mkdir(parents=True, exist_ok=True)
        dest = subdir / filename
    else:
        dest = css_dir / filename
    
    # Skip if already exists
    if dest.exists():
        print(f"  ⊙ Skipping {filename} (already exists)")
        continue
    
    if download_file(url, dest):
        downloaded += 1
    else:
        failed += 1

print(f"\n{'='*60}")
print(f"Download complete!")
print(f"  ✓ Downloaded: {downloaded}")
print(f"  ✗ Failed: {failed}")
print(f"{'='*60}")

