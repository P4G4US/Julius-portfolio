# Julius portfolio

Static site. No build step.

- index.html: page markup
- styles.css: all styles (light and dark themes, layout, motion)
- script.js: all interactions: smooth scroll, reveals, blob portrait, process sphere, works index and grid, project viewer, lightbox, contact panel, Zen easter egg
- assets/images, assets/video: every image and video on the page

## Run it
Serve the folder, then open the address it prints:
- `npx serve .`
- or `python3 -m http.server 8000` and open http://localhost:8000

Opening index.html straight from disk also works in Chrome, Safari and Firefox.

## Needs internet for
- Google Fonts (Archivo, Azeret Mono, Chivo, Chivo Mono)
- Lenis smooth scroll from jsDelivr
Without them the page falls back to system fonts and native scrolling. Everything else, Process animations included, runs locally.

## Editing content
Top of script.js:
- `works`: the eight projects shown in the index and grid
- `DETAIL`: each project's write up, media and detail crops

## Easter egg
Three quick clicks on the hero logo, or type "zen".
