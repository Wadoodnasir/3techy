#!/usr/bin/env python3
"""
Script to download missing CSS, JS, and images for the About page
"""
import os
import urllib.request
from pathlib import Path

# Base URL
BASE_URL = "https://beetechy.com"

# Files to download
files_to_download = {
    # CSS Files
    "css": [
        {
            "url": f"{BASE_URL}/wp-content/uploads/elementor/css/post-997.css",
            "dest": "public/css/wp-content/uploads/elementor/css/post-997.css"
        },
        {
            "url": f"{BASE_URL}/wp-content/plugins/elementor-pro/assets/css/widget-call-to-action.min.css",
            "dest": "public/css/wp-content/plugins/elementor-pro/assets/css/widget-call-to-action.min.css"
        }
    ],
    # Images
    "images": [
        {
            "url": f"{BASE_URL}/wp-content/uploads/2023/09/Screen-Shot-2021-03-16-at-6.29.10-PM-794x1024.png",
            "dest": "public/images/Screen-Shot-2021-03-16-at-6.29.10-PM-794x1024.png"
        },
        {
            "url": f"{BASE_URL}/wp-content/uploads/2024/03/TSJLCB1J5-U06LTQFAED6-784701590903-512.png",
            "dest": "public/images/TSJLCB1J5-U06LTQFAED6-784701590903-512.png"
        },
        {
            "url": f"{BASE_URL}/wp-content/uploads/2024/03/TSJLCB1J5-U05RPVD8HTJ-eef6dbc755d6-512.png",
            "dest": "public/images/TSJLCB1J5-U05RPVD8HTJ-eef6dbc755d6-512.png"
        },
        {
            "url": f"{BASE_URL}/wp-content/uploads/2024/03/shopify.svg",
            "dest": "public/images/shopify.svg"
        },
        {
            "url": f"{BASE_URL}/wp-content/uploads/2024/03/image.webp",
            "dest": "public/images/image.webp"
        },
        {
            "url": f"{BASE_URL}/wp-content/uploads/2024/03/image-2.webp",
            "dest": "public/images/image-2.webp"
        }
    ]
}

def download_file(url, dest_path):
    """Download a file from URL to destination"""
    try:
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        
        # Check if file already exists
        if os.path.exists(dest_path):
            print(f"  ⊙ Skipping {os.path.basename(dest_path)} (already exists)")
            return True
        
        print(f"Downloading {url}...")
        print(f"  → {dest_path}")
        
        # Download with user agent to avoid blocking
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
        with urllib.request.urlopen(req) as response:
            with open(dest_path, 'wb') as out_file:
                out_file.write(response.read())
        
        print(f"  ✓ Saved successfully")
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

def main():
    print("=" * 60)
    print("Downloading About Page Assets")
    print("=" * 60)
    
    # Download CSS files
    print("\n📄 Downloading CSS files...")
    css_success = 0
    for file_info in files_to_download["css"]:
        if download_file(file_info["url"], file_info["dest"]):
            css_success += 1
    
    # Download images
    print("\n🖼️  Downloading images...")
    img_success = 0
    for file_info in files_to_download["images"]:
        if download_file(file_info["url"], file_info["dest"]):
            img_success += 1
    
    # Summary
    print("\n" + "=" * 60)
    print("Download Summary:")
    print(f"  CSS files: {css_success}/{len(files_to_download['css'])}")
    print(f"  Images: {img_success}/{len(files_to_download['images'])}")
    print("=" * 60)
    
    if css_success == len(files_to_download["css"]) and img_success == len(files_to_download["images"]):
        print("\n✅ All files downloaded successfully!")
    else:
        print("\n⚠️  Some files failed to download. Please check the errors above.")

if __name__ == "__main__":
    main()

