import os
import urllib.request
from urllib.parse import urlparse

def download_file(url, dest_path):
    """Download a file from URL to destination"""
    try:
        print(f"Downloading {url}...")
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        urllib.request.urlretrieve(url, dest_path)
        print(f"  ✓ Saved successfully")
        return True
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False

print("============================================================")
print("Downloading Portfolio Page Assets")
print("============================================================\n")

# CSS files to download
css_files = [
    "https://beetechy.com/wp-content/uploads/elementor/css/post-1234.css",
    "https://beetechy.com/wp-content/plugins/elementor-pro/assets/css/widget-loop-builder.min.css",
    "https://beetechy.com/wp-content/plugins/elementor-pro/assets/css/widget-theme-elements.min.css",
]

# Image files to download (from the portfolio projects)
image_files = [
    "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-msptech-ai-chatbot-demo.jpg-768x576.png",
    "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-professional-networking-platform-ui.jpg-768x642.png",
    "https://beetechy.com/wp-content/uploads/2025/10/pigeon-post-ai-case-study-768x432.png",
    "https://beetechy.com/wp-content/uploads/2025/10/A-768x683.jpg",
    "https://beetechy.com/wp-content/uploads/2025/10/nduro-ai-fitness-app-case-study-768x576.png",
    "https://beetechy.com/wp-content/uploads/2025/04/01-2.jpg",
    "https://beetechy.com/wp-content/uploads/2025/04/01-1.jpg",
    "https://beetechy.com/wp-content/uploads/2025/03/1.jpg",
    "https://beetechy.com/wp-content/uploads/2025/03/01.jpg",
    "https://beetechy.com/wp-content/uploads/2025/03/Screenshot-2025-03-04-at-9.41.05 PM.png",
    "https://beetechy.com/wp-content/uploads/2025/02/1.jpg",
    "https://beetechy.com/wp-content/uploads/2025/01/1-1.png",
    "https://beetechy.com/wp-content/uploads/2025/01/1.png",
]

downloaded_css_count = 0
downloaded_image_count = 0

print("📄 Downloading CSS files...")
for url in css_files:
    parsed = urlparse(url)
    path_parts = parsed.path.split('/')
    # Construct destination path based on original URL structure
    dest = os.path.join("public", *path_parts[2:]) # Skip empty string and 'wp-content'
    print(f"  → {dest}")
    if not os.path.exists(dest):
        if download_file(url, dest):
            downloaded_css_count += 1
    else:
        print(f"  ⊙ Skipping {os.path.basename(dest)} (already exists)")

print("\n🖼️  Downloading images...")
for url in image_files:
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    filename = filename.split('?')[0] # Remove query parameters
    # Handle special characters in filename
    filename = filename.replace(' ', '-')
    dest = f"public/images/{filename}"
    print(f"  → {dest}")
    if not os.path.exists(dest):
        if download_file(url, dest):
            downloaded_image_count += 1
    else:
        print(f"  ⊙ Skipping {filename} (already exists)")

print("\n============================================================")
print(f"Download Summary:")
print(f"  CSS files: {downloaded_css_count}/{len(css_files)}")
print(f"  Images: {downloaded_image_count}/{len(image_files)}")
print("============================================================\n")

print("✅ All files downloaded successfully!")

