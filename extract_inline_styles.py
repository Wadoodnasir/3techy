#!/usr/bin/env python3
"""
Extract all inline <style> tags from HTML and combine them
"""
import re
from pathlib import Path

html_file = Path("Landing_Page HTML")

# Read HTML
with open(html_file, 'r', encoding='utf-8') as f:
    html = f.read()

# Extract all style tags
style_pattern = r'<style[^>]*>(.*?)</style>'
styles = re.findall(style_pattern, html, re.DOTALL | re.IGNORECASE)

# Combine all styles
combined_css = "/* Inline styles extracted from HTML */\n\n"
for i, style in enumerate(styles, 1):
    combined_css += f"/* Style block {i} */\n"
    combined_css += style.strip()
    combined_css += "\n\n"

# Save to file
output_file = Path("styles/inline-styles.css")
output_file.parent.mkdir(exist_ok=True)
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(combined_css)

print(f"Extracted {len(styles)} style blocks")
print(f"Saved to {output_file}")

