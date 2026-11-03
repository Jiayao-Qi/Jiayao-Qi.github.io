# Design system

Adapted from the landing-page-design skill by Elaya (github.com/elayadesign/ai-design-skills, MIT). The tokens live at the top of `assets/css/site.css`.

## Concept

Simple and professional, with no background pictures or colored panels. The home page opens on the plain page background: name, title, and two buttons on the left, the portrait in a card on the right. Warm neutrals with a copper accent throughout.

## Color

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | #F7F7F5 | #131209 | Page |
| `--surface` | #FFFFFF | #1F1F1F | Cards |
| `--surface-2` | #EFEEEA | #272727 | Hover and current nav item |
| `--fg` | #161616 | #F3F2EE | Text |
| `--muted` | #5C5B57 | #A6A39C | Secondary text |
| `--line` | #E3E1DC | #313131 | Borders and rules |
| `--accent` | #9A4A24 | #E39466 | Copper, from the portrait's tie |

Backgrounds are flat. The only gradient is the name text on the home page (`--hero-from` to `--hero-to`).

## Type

Manrope, weights 400, 500, 600. No italics. Chinese characters use Noto Sans SC (subset to the three characters of the name).

Named styles in CSS: `heading-1` 60/60 through `heading-6` 20/28 (semibold), `title-1` 20/28 through `title-4` 14/20 (medium), `body-3` 16/24, `body-5` and `body-6` 14/20, `button-md` 16/24, `button-sm` 14/20, `caption-3` to `caption-5` 12/16. Do not introduce other sizes.

## Spacing and radius

Spacing: 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96 (`--s-25` to `--s-900`). Radius: 4, 6, 8, 12, 16, 24, full. Nested radius equals the outer radius minus the gap (portrait card: 24 outer, 8 padding, 16 inner).

## Motion

Curve `cubic-bezier(0.22, 1, 0.36, 1)`. 500ms for layout, 300ms for color. Animate only transform and opacity. Sections below the fold rise 32px and fade in once. The home tagline lights up word by word. Everything respects `prefers-reduced-motion`.

## Copy

Sentence case. No hyphens or dashes inside sentences written for the site (publication titles stay exactly as published). No orphaned last words: headings use `text-wrap: balance`, body uses `pretty`.
