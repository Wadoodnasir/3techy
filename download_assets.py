#!/usr/bin/env python3
"""
Script to download all assets from the extracted URLs
Note: This is a helper script - assets should be downloaded manually or via wget/curl
"""
import json
import os
from pathlib import Path
import urllib.request
from urllib.parse import urlparse

# Load asset URLs
with open('assets.json', 'r') as f:
    assets = json.load(f)

# Create directories
os.makedirs('public/images', exist_ok=True)
os.makedirs('public/css', exist_ok=True)
os.makedirs('public/js', exist_ok=True)

def download_file(url, dest_path):
    """Download a file from URL to destination"""
    try:
        print(f"Downloading {url}...")
        urllib.request.urlretrieve(url, dest_path)
        print(f"  ✓ Saved to {dest_path}")
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

# Download images
print("Downloading images...")
for i, url in enumerate(assets['images'][:10]):  # Limit to first 10 for now
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    # Remove query parameters from filename
    filename = filename.split('?')[0]
    dest = f"public/images/{filename}"
    if not os.path.exists(dest):
        download_file(url, dest)
    else:
        print(f"  ⊙ Skipping {filename} (already exists)")

print(f"\nNote: Only downloaded first 10 images as example.")
print("For full download, use: wget -r -np -nH --cut-dirs=2 -P public/images/ https://beetechy.com/wp-content/uploads/")

