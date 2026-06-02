from PIL import Image
from pathlib import Path

src = Path(r"E:\Omni\Zomboid\deadmtl-site\assets\stadium_neon.blue-neon-readable.png")
out = Path(r"E:\Omni\Zomboid\deadmtl-site\public\images\home")
out.mkdir(parents=True, exist_ok=True)

img = Image.open(src).convert("RGB")

# Full hero
full_w = 1920
full_h = round(img.height * (full_w / img.width))
full = img.resize((full_w, full_h), Image.LANCZOS)

full.save(out / "deadmtl-hero.webp", "WEBP", quality=82, method=6)
full.save(out / "deadmtl-hero.jpg", "JPEG", quality=86, optimize=True)

# Mobile hero
sm_w = 900
sm_h = round(img.height * (sm_w / img.width))
sm = img.resize((sm_w, sm_h), Image.LANCZOS)
sm.save(out / "deadmtl-hero-sm.webp", "WEBP", quality=80, method=6)

print("Updated:")
print(out / "deadmtl-hero.webp")
print(out / "deadmtl-hero.jpg")
print(out / "deadmtl-hero-sm.webp")
