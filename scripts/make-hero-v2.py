from PIL import Image
import os

src = "E:/Omni/Zomboid/deadmtl-site/assets/stadium_neon.blue-neon-readable.png"
out_dir = "E:/Omni/Zomboid/deadmtl-site/public/images/home"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(src)
print(f"Source: {img.size[0]}x{img.size[1]}, mode={img.mode}")

# Full 1920px hero
w_full, h_full = 1920, int(img.size[1] * (1920 / img.size[0]))
hero = img.resize((w_full, h_full), Image.LANCZOS)

out_webp = out_dir + "/deadmtl-hero.webp"
hero.save(out_webp, "WEBP", quality=84, method=6)
print(f"WebP  {w_full}x{h_full}  {os.path.getsize(out_webp)//1024}KB  -> {out_webp}")

out_jpg = out_dir + "/deadmtl-hero.jpg"
hero.save(out_jpg, "JPEG", quality=86, optimize=True, progressive=True)
print(f"JPG   {w_full}x{h_full}  {os.path.getsize(out_jpg)//1024}KB  -> {out_jpg}")

# Mobile 900px
w_sm, h_sm = 900, int(img.size[1] * (900 / img.size[0]))
hero_sm = img.resize((w_sm, h_sm), Image.LANCZOS)
out_sm = out_dir + "/deadmtl-hero-sm.webp"
hero_sm.save(out_sm, "WEBP", quality=80, method=6)
print(f"SM    {w_sm}x{h_sm}  {os.path.getsize(out_sm)//1024}KB  -> {out_sm}")

print("Done. Originals untouched.")
