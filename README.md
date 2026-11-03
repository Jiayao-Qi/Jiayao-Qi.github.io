# jiayao-qi.github.io

Personal academic website of Jiayao (Chee) Qi, Clinical Assistant Professor of Sport Management at Southern Methodist University.

Live at **https://jiayao-qi.github.io**. GitHub Pages rebuilds the site automatically about a minute after every change to the `main` branch.

## How to update the site

Most updates only touch one file in `_data/`. You can edit these directly on github.com (open the file, click the pencil icon, then **Commit changes**), or ask Claude to do it.

| To change | Edit |
| --- | --- |
| A new paper, or a paper moving from "In press" to published | `_data/publications.yml` |
| A new talk, or slides for a talk | `_data/talks.yml` |
| A new course | `_data/teaching.yml` |
| Grants, awards, service, education | `_data/cv.yml` |
| Bio, research summary, links, email | `_data/profile.yml` |
| The downloadable CV | Replace `files/Jiayao_Qi_CV.pdf` (keep the same file name) |

Each data file has comments at the top explaining its fields. Copy an existing entry and edit it.

## What is deliberately not on the site

Articles in review, articles in progress, grants under review or not funded, and student advisee names. The public CV PDF has the same items removed. Keep it that way when replacing the PDF.

## Structure

```
_config.yml         Site settings
_data/              All content (edit these)
_layouts/           Page frames: default (home, 404) and page (with profile sidebar)
_includes/          Shared pieces: head, nav, footer, publication and talk rows, icons
assets/css/site.css Design tokens and styles
assets/js/site.js   Menu, scroll reveals, tagline, signal trace, publication filter
assets/img/         Portrait crops, social image, icons
files/              Public CV PDF
index.html, research.html, publications.html, talks.html, teaching.html, cv.html, 404.html
```

## Preview locally (optional)

```bash
gem install jekyll -v 3.10.0
jekyll serve
```

Then open http://localhost:4000.

## Credits

- Visual rules adapted from the [landing-page-design skill](https://github.com/elayadesign/ai-design-skills) by Elaya, MIT License.
- Icons from [Phosphor Icons](https://phosphoricons.com), MIT License.
- Typeface: [Manrope](https://fonts.google.com/specimen/Manrope), SIL Open Font License.
