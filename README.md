# Arotech Solutions Website

Multi-page responsive static website for Arotech Solutions.

## Pages

- `index.html` - homepage
- `about.html` - business overview
- `services.html` - services overview
- `contact.html` - contact page
- `services/network-cabling.html`
- `services/fiber-optic-installation.html`
- `services/access-control.html`
- `services/security-cameras.html`
- `services/smart-home.html`
- `services/tv-mounting.html`

## Assets

- `assets/css/styles.css` - shared styles for all pages
- `assets/js/main.js` - mobile navigation and reveal interactions
- `assets/images/*.jpg` - service photography used across the site
- `assets/images/showcase-server-room.mp4` - showcase video used on home and services pages

## Preview locally

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Notes

- The contact form is configured for a static-site submission endpoint.
- Footer attribution includes SurgeXlabs as requested.
