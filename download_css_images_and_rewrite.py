#!/usr/bin/env python3
import re
import os
import urllib.request
from pathlib import Path
from urllib.parse import urlparse

CSS_ROOT = Path('public/css')
IMAGES_DIR = Path('public/images')
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# Collect all css files under public/css
css_files = [p for p in CSS_ROOT.rglob('*.css')]

# Regex to find url(...) occurrences
url_regex = re.compile(r"url\((?:'|\")?(.*?)(?:'|\")?\)")

# Track downloaded
downloaded = 0
rewritten = 0

for css_path in css_files:
    css_text = css_path.read_text(encoding='utf-8', errors='ignore')
    urls = url_regex.findall(css_text)
    if not urls:
        continue

    replacements = {}
    for url in urls:
        if not url:
            continue
        # Only process wp-content/uploads URLs
        if 'wp-content/uploads' not in url:
            continue
        # Normalize full URL
        if url.startswith('//'):
            full_url = 'https:' + url
        elif url.startswith('http'):
            full_url = url
        else:
            # relative like /wp-content/uploads/...
            full_url = 'https://beetechy.com' + (url if url.startswith('/') else '/' + url)
        parsed = urlparse(full_url)
        filename = os.path.basename(parsed.path)
        if not filename:
            continue
        local_path = IMAGES_DIR / filename
        # Download if missing
        if not local_path.exists():
            try:
                req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=30) as resp, open(local_path, 'wb') as f:
                    f.write(resp.read())
                downloaded += 1
            except Exception as e:
                print(f"Failed to download {full_url}: {e}")
                continue
        # Prepare replacement
        replacements[url] = f"/images/{filename}"

    # Rewrite css content
    if replacements:
        new_text = css_text
        for old, new in replacements.items():
            new_text = new_text.replace(old, new)
        if new_text != css_text:
            css_path.write_text(new_text, encoding='utf-8')
            rewritten += 1
            print(f"Rewrote URLs in {css_path}")

print(f"Downloaded images: {downloaded}")
print(f"Rewritten CSS files: {rewritten}")
