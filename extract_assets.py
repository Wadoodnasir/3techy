#!/usr/bin/env python3
"""
Script to extract all asset URLs from the HTML file
"""
import re
import json
from pathlib import Path

html_file = Path("Landing_Page HTML")

# Read HTML
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# Extract all asset URLs
assets = {
    'css': [],
    'js': [],
    'images': [],
    'fonts': []
}

# CSS files
css_pattern = r'href="(https://beetechy\.com[^"]+\.css[^"]*)"'
for match in re.finditer(css_pattern, html):
    assets['css'].append(match.group(1))

# JS files
js_pattern = r'src="(https://beetechy\.com[^"]+\.js[^"]*)"'
for match in re.finditer(js_pattern, html):
    assets['js'].append(match.group(1))

# Images
img_pattern = r'src="(https://beetechy\.com/wp-content/uploads/[^"]+\.(?:png|jpg|jpeg|gif|svg|webp)[^"]*)"'
for match in re.finditer(img_pattern, html):
    assets['images'].append(match.group(1))

# Also check srcset
srcset_pattern = r'srcset="([^"]+)"'
for match in re.finditer(srcset_pattern, html):
    srcset = match.group(1)
    for url in re.finditer(r'https://beetechy\.com/wp-content/uploads/[^\s,]+', srcset):
        if url.group(0) not in assets['images']:
            assets['images'].append(url.group(0))

# Remove duplicates
assets['css'] = list(set(assets['css']))
assets['js'] = list(set(assets['js']))
assets['images'] = list(set(assets['images']))

# Save to JSON
with open('assets.json', 'w') as f:
    json.dump(assets, f, indent=2)

print(f"Found {len(assets['css'])} CSS files")
print(f"Found {len(assets['js'])} JS files")
print(f"Found {len(assets['images'])} images")

