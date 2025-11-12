#!/usr/bin/env python3
"""
Script to download all images from assets.json
"""
import json
import os
import urllib.request
from urllib.parse import urlparse
from pathlib import Path

# Load asset URLs
with open('assets.json', 'r') as f:
    assets = json.load(f)

# Create images directory
images_dir = Path('public/images')
images_dir.mkdir(parents=True, exist_ok=True)

def download_file(url, dest_path):
    """Download a file from URL to destination"""
    try:
        print(f"Downloading {url}...")
        # Create request with user agent to avoid blocking
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=30) as response:
            with open(dest_path, 'wb') as out_file:
                out_file.write(response.read())
        print(f"  ✓ Saved to {dest_path}")
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

# Download images
print(f"Downloading {len(assets['images'])} images...\n")
downloaded = 0
failed = 0

for url in assets['images']:
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    # Remove query parameters from filename
    filename = filename.split('?')[0]
    
    # Skip if filename is empty
    if not filename:
        print(f"  ⊙ Skipping {url} (no filename)")
        continue
    
    dest = images_dir / filename
    
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
print(f"  ⊙ Skipped (already exists): {len(assets['images']) - downloaded - failed}")
print(f"{'='*60}")

