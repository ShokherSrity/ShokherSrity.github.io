import os
import json
from PIL import Image

def build_cheat_sheet(base_dir, output_file):
    valid_extensions = {".webp"}
    images_data = []

    # Map folders to categories for the gallery
    category_map = {
        'Wedding Photoshooot': 'wedding',
        'Bride Photoshoot': 'bride',
        'Reception': 'reception',
        'Engegment Photoshoot': 'engagement',
        'Baby Shower': 'babyshower',
        'Baby Photoshoot': 'baby'
    }

    print(f"Scanning {base_dir} for webp images...")

    for root, dirs, files in os.walk(base_dir):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in valid_extensions and file not in ['L.webp', 'logo.webp']:
                full_path = os.path.join(root, file)
                # get relative path starting from attached_assets
                rel_path = os.path.relpath(full_path, start=".")
                rel_path = rel_path.replace("\\", "/") # Normalize to forward slashes for web
                
                # Determine category based on folder
                folder_name = os.path.basename(root)
                category = category_map.get(folder_name, 'other')
                
                # Get dimensions
                try:
                    with Image.open(full_path) as img:
                        w, h = img.size
                        images_data.append({
                            "src": rel_path,
                            "category": category,
                            "label": category_map.get(folder_name, "Photography").capitalize(),
                            "width": w,
                            "height": h
                        })
                except Exception as e:
                    print(f"Failed to process {file}: {e}")

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(images_data, f, indent=4)
        
    print(f"Done! Generated {output_file} with {len(images_data)} images.")

if __name__ == "__main__":
    # Point this to attached_assets
    build_cheat_sheet("attached_assets", "image_catalog.json")
