# borodda.com — repo orientation

Personal academic + design-portfolio site for **Warner B. ("Bo") Rodda**,
Assistant Professor of Experiential Media and Data Communication at
Illinois Institute of Technology. Built with Astro 6, deployed to
Cloudflare Pages.

## Where to start

- **Foundational brief**: [`PROJECT_BRIEF.md`](./PROJECT_BRIEF.md) —
  voice, IA, anti-references, audience priorities. Always re-read
  before substantive work.
- **Recent state**: `git log --oneline -20` — commits are stage-numbered
  (Stage 1 through Stage 12 + content expansions).
- **Content development companion**: [`CLAUDE_PROJECT.md`](./CLAUDE_PROJECT.md)
  — setup guide for the parallel Claude Project (claude.ai) used for
  drafting and curation. Code-editing stays here in Claude Code; content
  drafting happens there.

## Stack

- Astro 6 (static SSG, no SSR adapter — confirmed at stage 13 after
  reverting Cloudflare's auto-config)
- TypeScript strict
- Vanilla CSS with custom-property design tokens (no Tailwind)
- Source Serif 4 (body/display) + Inter (UI/metadata) self-hosted via
  fontsource
- @astrojs/mdx, @astrojs/sitemap, @astrojs/rss
- Deployment: Cloudflare Pages from GitHub `main` branch
- Repo: https://github.com/borodda-hub/borodda-com (private)

## Common commands

```sh
npm install          # first run on a new machine
npm run dev          # http://localhost:4321
npm run build        # static site to dist/
npx pa11y --standard WCAG2AA <url>   # accessibility check
```

## Key paths

| Path | What |
|---|---|
| `src/pages/` | Page routes |
| `src/content/` | Content collections (projects, publications, essays, talks, exhibitions, research-strands, partners) |
| `src/content.config.ts` | Zod schemas for all collections |
| `src/components/` | Layout, Nav, Footer, ThemeToggle, Lightbox |
| `src/layouts/Layout.astro` | Page shell + OG metadata + theme bootstrap |
| `src/styles/global.css` | Design tokens + base styles + .rich-text rules |
| `src/config.ts` | Site identity, emails, profile URLs, route list |
| `public/` | Static files (favicon, robots.txt, feed.xsl) |

## External resources NOT in the repo

- **Photo / source archive**: `C:\Users\Bo\Pictures\Rodda_Portfolio Archive\`
  on Bo's primary Windows machine. Web-ready images get copied into the
  appropriate `_assets/` folder per content collection. The archive is
  too large to track in git.
- **Bo's CV**: `C:\Users\Bo\Projects\Bo Rodda Docs\Rodda_CV_May_2026.pdf`
  — read this when adding publications, talks, partnerships, or other
  CV-derived content.

## Conventions

- Body text in 720px column, left-aligned, within a 1280px page wrapper
  (matches `/partnerships/` and `/cv/` widths)
- Project case studies follow the seven-move structure (hook, framing,
  description, what-was-hard, intellectual stakes, continuity, credits)
  — LakeSIM is the canonical example
- Featured publications/projects get a 2px terracotta left rule (no dot
  marker — that pattern was rejected; the rule pattern was approved)
- Inline `<img>` in markdown bodies preserves natural aspect ratio;
  click any image to open in the lightbox at full resolution
- Hero images on project pages span the same width as the nav-inner
  (1280px max with 24/64/96px scaling padding) — NOT full-bleed to
  viewport
- Italics are used sparingly. The phrase "decision quality" is the
  only italicized phrase on the homepage research statement
- No "consulting" framing anywhere; partnership inquiries land in one
  italic paragraph at the bottom of `/partnerships/`

## Out of scope (per brief)

- Newsletter signup forms, contact forms, comments, search
- Video backgrounds, parallax, scroll-triggered animations
- Any third-party widget that ships meaningful client-side JS beyond
  the theme toggle, the project filter, and the lightbox
- Internationalization, e-commerce, paywall

## Cross-machine workflow

Bo works on this site from at least two machines (primary work +
home), with a parallel content-drafting Claude Project on claude.ai.

Before starting:

```sh
git pull origin main
npm install              # if package.json changed since last pull
npm run dev
```

Before stopping:

```sh
git add -A
git commit -m "..."
git push origin main
```

Cloudflare Pages auto-deploys on push to `main` (~2 min).

If you (Claude) are starting a fresh session on a new machine: read
this file, then `PROJECT_BRIEF.md`, then `git log --oneline -20`.
That's enough context to pick up wherever the previous session left
off.
