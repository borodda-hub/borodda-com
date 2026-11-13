# borodda.com

Personal site of **Warner B. ("Bo") Rodda**: Assistant Professor of
Experiential Media and Data Communications in the School of Design +
Society at Illinois Institute of Technology, and co-founder of ChiLab
Design Studio.

The site has never been published. This is a rebuild toward launch.

**This file is the single source of truth for the site's rules.**
`PROJECT_BRIEF.md` and `CLAUDE_PROJECT.md` are kept as history; where
they disagree with this file, this file wins. If a rule changes, change
it here first. Last rewritten 2026-11-13.

## 1. Audiences

Four audiences, one homepage. None is hidden from the others.

1. **Tenure reviewers, search committees, deans, grant officers.** They
   must be able to verify scholarly seriousness within five seconds and
   reach the full research and CV pages in one click.
2. **Organizations that may hire or partner with Bo**: industry, civic
   and cultural. They should see capability, prior partnerships, and a
   plain way to start a conversation.
3. **Readers of Bo's public essays** on studio practice and AI:
   university leaders, design educators, builders.
4. **Designer peers, curators, journalists, conference organizers.**
   They should see the work itself at quality.

Where audiences conflict, scholarly accuracy wins. Nothing on the site
may overstate what a project did or proved.

## 2. Positioning

Decided 2026-11-13: **a broad thesis, with decision quality named as
the primary field beneath it.** The homepage frames Bo in three layers,
each doing one job.

1. **Label**: roles and territory. "Designer, researcher, educator.
   Art and design for emerging technologies."
2. **Thesis**: one line wide enough for all the work, from the
   visualizations and instruments to the fabricated and installed
   pieces. Current draft: "I turn new technologies into things people
   can see, handle and judge." The direction is settled; the wording is
   Bo's to finalize.
3. **Primary field**: decision quality, as a method for analyzing games
   and decision environments. It is stated in the homepage credentials
   list and in About, and its strand is listed first.

Rules that follow from this:

- Technology is the material, not the subject. Lead with what the work
  lets people do, not with the technology used.
- The five research strands stay, but they are not presented as equals.
  Game Studies and Decision Quality is primary; the other four are the
  same question at other scales and in other media.
- Decision quality is an established term from decision analysis. Bo's
  contribution is carrying it into games, design and instruments. Say
  so wherever the claim is made; never present the term as his coinage.
- Fabrication, installation and public art are presented as evidence
  of the thesis, not as a separate portfolio.

## 3. Voice: two lanes

**Lane A, scholarly.** Project case studies, research strands,
publications, talks, exhibitions, About, CV. Direct, scholarly,
intellectually serious but readable. The register of the LakeSIM case
study (`src/content/projects/lakesim.md`).

**Lane B, essay.** Only `/writing/` essays. First person, a builder
reflecting on real work. Short paragraphs, plain claims, concrete
studio images. Honest about failures; negative results are stated.
The canonical example is "The rendering is not the building."

Rules for both lanes:

- No SaaS or agency vocabulary: "elevate," "leverage," "transform,"
  "unlock," "drive impact," "best-in-class," and the like.
- No AI-default tropes: "in today's rapidly evolving landscape," "we
  are excited to announce."
- Never "thought leadership" or "thought leader."
- Em dashes are fine in prose but must not become a tic.
- One italic phrase per long-form piece, used semantically. On the
  homepage the only italic phrase is "decision quality."
- When a fact is not known (a date, a partner, a venue, an outcome),
  ask Bo. Do not fabricate publications, dates, partners, awards,
  services or outcomes.

Draft flags, removed before publication:

- `[VERIFY]` a factual claim needing confirmation
- `[INFERRED]` metadata derived rather than stated
- `[DRAFT — Bo:]` a gap only Bo can fill

## 4. Practice and hiring

The site says openly that Bo takes on outside work. Keep it understated
and specific.

- One page, `/practice/`, states what Bo can be engaged for, in plain
  nouns. **The list must come from Bo; do not invent services.** The
  mockup's four items (decision-quality instruments, data
  visualization, experiential media, fabrication through ChiLab) are
  placeholders until he confirms them.
- Words to use: "practice," "engagements," "commissions,"
  "partnerships." Words to avoid: "consulting services," "solutions,"
  "clients we serve." No pricing, packages or testimonials.
- One direct invitation is allowed per page, in the manner of "Tell me
  what you are trying to make." No other calls to action.
- Outside `/practice/`, the homepage Practice section and the contact
  section, no hiring language.
- Prior partners are listed as plain text. No logo walls.

## 5. Goldeneye and other live research

- Goldeneye is a research instrument for decision quality, not a
  trading product.
- State plainly that its audit found no confirmed directional
  predictive edge, and that calibrated volatility ranges are the one
  confirmed capability. This appears wherever Goldeneye is featured,
  including the homepage.
- Ground every claim in what is built. If unsure, ask.

## 6. Information architecture

Homepage sections, in order, numbered 00 to 05 on the page:

| No. | Section | Contents |
|---|---|---|
| — | Thesis | Small label, one thesis line, and a credentials list (position, school, studio, primary field, links to Research and CV). See section 2. |
| 00 | Featured project | Currently Goldeneye Research Terminal |
| 01 | Selected work | Category index with counts, six project cards, link to the full index |
| 02 | Practice | One sentence, the engagement list, the one invitation, prior partners |
| 03 | Writing | Essays (Lane B) beside recent publications |
| 04 | About | Research statement, the five strands, links to Research, CV and Teaching |
| 05 | Contact | Three pathways, each a label and an email. No form. |

Routes:

- `/` home
- `/research/`, `/research/[slug]/` the five research strands
- `/projects/`, `/projects/[slug]/` work index and case studies
  (shown as "Work" in the navigation)
- `/teaching/`
- `/practice/` **replaces `/partnerships/`**. The site was never
  published, so no redirect is needed.
- `/writing/`, `/writing/essays/[slug]/`
- `/cv/` HTML CV with PDF download
- `/contact/`
- `/feed.xml` essays only; `/sitemap-index.xml`

Work-index categories, one per project: **Research, Platforms, Public
Art and Fabrication, Teaching, Writing.**

The five research strands, in order: Game Studies and Decision Quality
(primary); Visualization as Humanistic Medium; Urban Computing and
Smart Cities; Experiential and Immersive Media; Industry-Engaged
Pedagogy and Institutional Innovation.

Open IA questions for Bo (do not decide these unasked):

- Whether `/projects/` is renamed `/work/`.
- Whether About becomes its own page or stays a homepage section.

## 7. Look

Related to chilabstudio.com, not a copy of it. The approved reference
is the homepage mockup, saved in the repo at
**`design/homepage-mockup.html`**. Open it directly in a browser; it
loads its images from `src/content/projects/_assets/`. Take markup
structure, class names, spacing and the full CSS from that file.

- It is a reference only. It is outside `src/` and `public/`, so it is
  not built or deployed. Do not move it into either.
- Copy in [BRACKETS] is placeholder. The thesis line and the Practice
  list are drafts awaiting Bo.
- It loads fonts from Google Fonts for convenience; the site must
  self-host them.
- Its header comment lists the alternate accents, typefaces and
  weights that were explored. The values in this section are the ones
  chosen.
- The same mockup lives on a claude.ai design canvas:
  https://claude.ai/artifact/9aZH7kqQBDrDPKP4ELKgQ3

Shared with ChiLab: a near-edge grid, hairline rules, small uppercase
labels, numbered sections, a work index with category counts, square
4:3 image frames, a dark theme with a light toggle.

Different from ChiLab (which uses Inter Tight at weight 900 and an
oxide-red accent on warm neutrals): the typeface, the display weight,
the accent, cooler neutrals, and a homepage that leads with Bo and one
thesis line. Imagery mixes photography with interfaces, charts and
drawings.

**Type.** One sans family for everything, plus its mono for labels.

- Geist (variable) for display, body and navigation
- Geist Mono for section numerals, dates, labels and counts, set small,
  uppercase, lightly tracked
- Display lines at weight 500, tight tracking (about -0.035em),
  line-height near 1.0, up to roughly 112px on wide screens
- Self-host through fontsource (`@fontsource-variable/geist`,
  `@fontsource-variable/geist-mono`; confirm package names at install).
  No font CDN calls.

**Color.** Dark is the default; system preference is honored on first
visit and the toggle choice is stored.

| Token | Dark | Light |
|---|---|---|
| page | `#101113` | `#F4F4F2` |
| ink | `#EDEDEA` | `#111214` |
| muted | `#9A9CA3` | `#62646B` |
| rule (soft) | `#2B2D31` | `#D9D9D5` |
| rule (strong) | `#5E6168` | `#111214` |
| panel | `#1A1B1E` | `#E8E8E5` |
| accent (cobalt) | `#86A2FF` | `#1F47D6` |

The accent is for section numerals, link hover, the focus ring, the
one invitation, and the marker on featured items. Not for fills,
buttons or badges.

**Layout and components.**

- 12-column grid, page padding and gutters of `clamp(20px, 2.4vw, 40px)`,
  content up to 1680px wide
- Every section opens with a strong hairline rule and a mono label
- No rounded corners, shadows, gradients, parallax, scroll-triggered
  or auto-playing animation
- Hover changes color or image contrast only
- Links and controls are text with hairline underlines, not filled
  buttons
- Prose in case studies and essays stays in a readable measure of
  about 65 to 70 characters
- Click any body image to open it in the lightbox
- WCAG 2.2 AA: 4.5:1 text contrast in both themes, visible focus, 44px
  touch targets

Retired from the earlier build: Source Serif 4, Inter, the terracotta
accent, the warm cream and brown neutrals, and the name-first hero with
a three-sentence statement. `src/styles/global.css` and the page
templates still carry them until the redesign is implemented.

## 8. Content structures

**Project case studies** use seven moves; LakeSIM is the model.

1. Hook sentence: short, sets the intellectual stake
2. Framing paragraph: the conditions that made the project necessary
3. Project description: what was built, with named collaborators
4. What was hard: computational, semiotic, organizational or political
5. Intellectual stakes: what the project tested, evidenced or advanced
6. Continuity: links to the research strands and to other work
7. Credits: names, roles, affiliations, funding, press, rendered from
   frontmatter and not written in the body

**Research strand framing arguments** run 200 to 400 words. Open with
the proposition, tie it to named projects and publications, connect to
other strands where true, end with what the strand is asking next.

**Essays** have a title that earns reading, an optional subtitle, and
the Lane B arc: hook, framing, argument, evidence, complication,
stakes, what is next. They close with the standard author line (ask Bo
for the current one). Reading time is computed; never write word
counts.

**Frontmatter** must match `src/content.config.ts`. Use proper YAML,
and cross-link collections by slug. Do not invent schema fields. If a
rule here calls for a field the schema lacks, say so and leave it out
until the schema is changed. Known gap: projects have no `category`
field yet.

## 9. Stack

- Astro 5, static output, TypeScript strict
- Vanilla CSS with custom-property tokens in `src/styles/global.css`.
  No Tailwind or component libraries.
- Content Collections with Zod schemas; Markdown and MDX in the repo
- `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss`
- Deployment: Cloudflare Pages from `main` (not yet set up)
- Analytics: Plausible (not yet set up)
- Repo: https://github.com/borodda-hub/borodda-com (private)

**No CMS.** Keystatic was tried and removed on 2026-11-13. It forced
the downgrade from Astro 6 to 5, pulled in React, stripped image paths
from entries on save, and left an invalid test essay behind. Content
is drafted in the claude.ai Project and committed as Markdown. Do not
add a CMS. With Keystatic gone, returning to Astro 6 is unblocked but
has not been done or tested.

```sh
npm install          # after any pull that changes package.json
npm run dev          # http://localhost:4321
npm run dev:fresh    # clears caches first; use after a pull
npm run build        # static site to dist/
npx pa11y --standard WCAG2AA <url>
```

| Path | What |
|---|---|
| `src/pages/` | Page routes |
| `src/content/` | Collections: projects, publications, essays, talks, exhibitions, research-strands, partners |
| `src/content.config.ts` | Zod schemas |
| `src/components/` | Nav, Footer, ThemeToggle, Lightbox |
| `src/layouts/Layout.astro` | Page shell, OpenGraph metadata, theme bootstrap |
| `src/styles/global.css` | Design tokens and base styles |
| `src/config.ts` | Site identity, emails, profile links, route list |
| `public/` | Favicon, robots.txt, feed stylesheet |
| `design/homepage-mockup.html` | Approved homepage mockup; reference only, not built |

Images live in `_assets/` beside each collection's entries, at full
quality; Astro generates responsive variants.

Not in the repo, on Bo's primary Windows machine:

- Photo and source archive: `C:\Users\Bo\Pictures\Rodda_Portfolio Archive\`
- CV: `C:\Users\Bo\Projects\Bo Rodda Docs\Rodda_CV_May_2026.pdf`. Read
  it before adding publications, talks or partnerships.

## 10. Out of scope

- Sales copy, pricing, packages, testimonials
- Blog framing; the site has essays
- Newsletter signup, contact forms, comments, search
- Internationalization, e-commerce, paywall or membership content
- Client-side JavaScript beyond the theme toggle, the project filter
  and the lightbox
- Anything not in section 6

## 11. State of the build

Done: scaffold, layout shell, schemas, all page templates, RSS,
sitemap, OpenGraph, an accessibility pass, and real content in
projects (9), publications (6), talks (14), partners (26) and research
strands (5).

Not done, roughly in order:

1. Implement the look in section 7, working from
   `design/homepage-mockup.html`: tokens, fonts, navigation, homepage
2. Correct the title and affiliation in `src/config.ts`, the homepage,
   the CV page and anywhere else it reads "Data Communication" or omits
   the School of Design + Society
3. Rename `/partnerships/` to `/practice/` and write the page, once Bo
   supplies the engagement list
4. Add `category` to the projects schema and assign each project
5. Reorder the research strands (`order` frontmatter) so Game Studies
   and Decision Quality is first, and revise the strand pages and
   About copy to the positioning in section 2
6. Replace homepage placeholder tiles and placeholder writing items
   with real entries
7. Essays: none exist yet. Exhibitions: none exist yet.
8. Teaching entries for the work index
9. Canonical Google Scholar profile link in `src/config.ts`
10. Cloudflare Pages deployment, then Plausible
11. Final accessibility and performance audit against the new look

## 12. Working across machines

Bo works on this from more than one machine, alongside a claude.ai
Project used for drafting. Drafting happens there; code and file
placement happen here.

Start: `git pull origin main`, `npm install`, `npm run dev:fresh`.
Stop: commit and `git push origin main`.

A fresh session should read this file, then `git log --oneline -20`.
