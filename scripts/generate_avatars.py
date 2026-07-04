#!/usr/bin/env python3
"""Download photorealistic young student headshots and save as local WebP avatars.

Sources: Unsplash or Pexels (free license). Re-run to refresh public/avatars/reviewer-01..10.webp.
Names and appearance pairings match lib/reviewerPhotos.ts.
"""

from __future__ import annotations

import sys
import urllib.error
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image

OUT = Path(__file__).resolve().parent.parent / "public" / "avatars"
SIZE = 200

# (reviewer index, source kind, id or URL, maintainer note)
# Young campus-style portraits; ethnicity matched to reviewer name; clean-shaven men.
PHOTOS: list[tuple[int, str, str, str]] = [
    (
        1,
        "unsplash",
        "1507003211169-0a1dd7228f2d",
        "Wei Zhang — East Asian male undergrad, casual, clean-shaven",
    ),
    (
        2,
        "pexels",
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        "Priya Nair — South Asian female, young student portrait",
    ),
    (
        3,
        "unsplash",
        "1534528741775-53994a69daeb",
        "Emma Wong — East Asian female, college student headshot",
    ),
    (
        4,
        "pexels",
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        "James Okonkwo — Black male, college age, clean-shaven",
    ),
    (
        5,
        "unsplash",
        "1529626455594-4ff0802cfb7e",
        "Sophie Laurent — White/European female, young casual student",
    ),
    (
        6,
        "pexels",
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        "Mei Lin Tan — East Asian female, student portrait",
    ),
    (
        7,
        "unsplash",
        "1500648767791-00dcc994a43e",
        "Carlos Mendez — Latino male, young casual, clean-shaven",
    ),
    (
        8,
        "pexels",
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=right",
        "Aisha Rahman — South Asian female, young student",
    ),
    (
        9,
        "pexels",
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=left",
        "Maya Chen — East Asian female, relaxed student photo",
    ),
    (
        10,
        "pexels",
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        "Tyler Brennan — White American male, young clean-shaven",
    ),
]


def fetch_unsplash(photo_id: str) -> Image.Image:
    url = (
        f"https://images.unsplash.com/photo-{photo_id}"
        f"?w={SIZE * 2}&h={SIZE * 2}&fit=crop&crop=faces&auto=format"
    )
    return _download_image(url)


def fetch_url(url: str) -> Image.Image:
    return _download_image(url)


def _download_image(url: str) -> Image.Image:
    req = urllib.request.Request(url, headers={"User-Agent": "ResumeEdge-avatar-script/1.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = resp.read()
    img = Image.open(BytesIO(data)).convert("RGB")
    return img.resize((SIZE, SIZE), Image.Resampling.LANCZOS)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    failed = 0

    for index, kind, source, note in PHOTOS:
        try:
            if kind == "unsplash":
                img = fetch_unsplash(source)
            elif kind == "pexels":
                img = fetch_url(source)
            else:
                raise ValueError(f"Unknown source kind: {kind}")

            path = OUT / f"reviewer-{index:02d}.webp"
            img.save(path, "WEBP", quality=88)
            print(f"Wrote {path.name} — {note}")
        except (urllib.error.URLError, urllib.error.HTTPError, OSError, ValueError) as exc:
            failed += 1
            print(f"FAILED reviewer-{index:02d} ({kind}:{source}): {exc}", file=sys.stderr)

    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
