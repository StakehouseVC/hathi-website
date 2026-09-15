# Hathi website source and mirror

Captured from https://www.hathi.vc/ on September 15, 2026.

## Files

- `original/desktop.html` and `original/mobile.html`: untouched HTML responses from the public website, including the original inline CSS, configuration, scripts, text, and links.
- `site/index.html` and `site/mobile.html`: local visual mirrors using the original HTML layout and styling, with downloaded assets. No redesign or copy edits were made.
- `site/assets/`: the original publicly served images and fonts that the mirror actually references, plus a small local navigation helper. All webfonts are self-hosted here, so the mirror makes no runtime requests to Wix. The captured Wix runtime bundles were removed because neither page loads them.
- `asset-manifest.json`: maps downloaded files to their original URLs.

## Run locally

From this folder, run:

```sh
python3 -m http.server 8000 --directory site
```

Open http://localhost:8000/ for the desktop page. Phones automatically use the captured mobile page. You can also open http://localhost:8000/mobile.html directly.

## What cannot be exported from a public Wix site

The public website does not expose its Wix editor project, server code, subscriber database, or private configuration. The original Wix runtime relies on hathi.vc and Wix services, so the untouched source requires those services and may not initialize correctly on another domain.

The local visual mirror omits the hosted Wix runtime and uses a small helper for navigation. The subscription form retains its original appearance; submitting a valid email opens the original site's form without sending or storing the entered email. Re-enter the email there to subscribe. A standalone subscription backend must be connected separately if deploying this mirror as an independent site. The original CSS entrance animations are triggered locally. The full hosted Wix application is not included in the local mirror.

External links retain their original destinations. The untouched HTML files are included for exact source reference.
