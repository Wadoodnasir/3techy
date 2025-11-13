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
print("Downloading Reviews Page Assets")
print("============================================================\n")

# CSS files to download
css_files = [
    "https://beetechy.com/wp-content/uploads/elementor/css/post-2824.css",
    "https://beetechy.com/wp-content/uploads/elementor/css/post-709.css",
]

# Image files to download (20 review images + upwork badge)
image_files = [
    "https://beetechy.com/wp-content/uploads/2023/12/Review1.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review2.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review3.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review4.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review5.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review6.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review7.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review8.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review9.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review10.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review11.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review12.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review13.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review14.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review15.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review16.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review17.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review18.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review19.png",
    "https://beetechy.com/wp-content/uploads/2023/12/Review20.png",
    "https://beetechy.com/wp-content/uploads/2024/03/upwork-badge.png",
]

downloaded_css_count = 0
downloaded_image_count = 0

print("📄 Downloading CSS files...")
for url in css_files:
    parsed = urlparse(url)
    path_parts = parsed.path.split('/')
    # Construct destination path based on original URL structure
    dest = os.path.join("public", "css", *path_parts[2:])
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

print("✅ All files processed!")

