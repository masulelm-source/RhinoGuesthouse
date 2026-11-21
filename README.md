# Rhino Guest House website starter

This is an editable, standalone starter folder based on the saved Rhino Guest House website content. It is **not an export of the original Sites project**: the original uploaded photos, logo artwork, fonts and any platform-specific code were not available in the saved site text. Replace the image placeholders with your own files to finish it.

## Folder structure

- `index.html` — page content and sections
- `css/styles.css` — layout, colours, typography and responsive styling
- `js/main.js` — mobile navigation and email enquiry form
- `assets/images/` — add your photographs here

## Add your images

Copy your images into `assets/images/` and use these filenames, or update the matching paths in `index.html`:

- `hero.jpg`
- `room.jpg`
- `food.jpg`
- `bar.jpg`
- `gallery-1.jpg` through `gallery-6.jpg`

The logo is currently a simple text/letter placeholder. Add your original logo image and update the `.brand` markup in `index.html` if you have it.

## Run locally

No build tools are required. Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Hosting

Upload the contents of this folder to a static web host (for example, the public web root of your hosting provider). Keep the `css`, `js`, and `assets` folders alongside `index.html`.

## Before publishing

- Add and test all original guest-house photos and logo files.
- Confirm room rates, contact details, address and services are still correct.
- Test the enquiry form. It opens the visitor's email application; it does not submit to a booking database.
- Add any required privacy policy, analytics or booking integration yourself.
