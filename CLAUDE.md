# Notes for Claude

This is a Jekyll site served by GitHub Pages (Jekyll 3.10, no plugins). Content lives in `_data/*.yml`; templates should rarely need changes.

## Privacy rules (from the site owner)

Never publish: articles in review, articles in progress, grants under review or not funded, or student advisee names. Apply the same rule to `files/Jiayao_Qi_CV.pdf` when regenerating it from the owner's Word CV, and check the document's hidden parts (tracked changes, comments) before converting.

## Facts

Publication details must come from the owner's CV or the publisher's record (Crossref). Never invent numbers, titles, DOIs, or co-authors. Bold the owner's name with the existing `replace` filter in the includes; do not hard code `<strong>` in data.

## Two languages

English is the default; Chinese pages are under `/zh/` and share the page bodies in `_includes/pages/`. Every text change in `profile.yml`, `cv.yml`, or `teaching.yml` must be mirrored in the `_zh` file, in natural Chinese. Publication titles, journal, course, and conference names stay in English. The privacy rules apply to both languages.

## Visual system

Follow `DESIGN.md`. In short: Manrope only, no italics, sizes from the fixed type scale, spacing from the fixed spacing scale, nested radius = outer radius minus gap, flat backgrounds, the `--ease` curve for motion, and every color from the tokens in `assets/css/site.css` (light and dark).

## Before pushing

Run `jekyll build` and check the home page and one inner page at 1440px and 390px wide, in light and dark: no horizontal overflow, no console errors.
