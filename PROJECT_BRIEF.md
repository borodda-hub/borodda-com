# Claude Code Project Brief — borodda.com

You are building a personal academic and design-portfolio website for Warner B. ("Bo") Rodda, Assistant Professor of Experiential Media and Data Communication at Illinois Institute of Technology. The site will replace his existing borodda.com. Read this entire brief before writing any code. Confirm understanding before scaffolding.

## 1. Project identity and intent

Bo is a tenure-track faculty member, a working designer with internationally exhibited work, a co-founder of an academic research center, and an active industry collaborator. The site has three audiences in priority order:

1. Tenure reviewers, search committees, deans, and grant officers (primary). These readers want to verify scholarly seriousness within five seconds.
2. Industry, civic, and cultural partners considering collaboration. These readers should see capability and high-profile prior partnerships without ever encountering "consulting" framing.
3. Designer peers, exhibition curators, journalists, and conference organizers. These readers should see the work itself at quality.

The site must serve all three without compromising the first. The visual register and copy must read as scholar-first, with the design and applied work positioned as evidence of practice-based research, not as portfolio entries or service offerings. There must be no "available for hire" language anywhere on the site. Industry partnership inquiries are routed through a single understated paragraph at the bottom of the /partnerships page.

## 2. Tonal references

Build to evoke, not copy:

- frerejones.com — typography-first scholar-practitioner site. Confident serif use, restrained palette, generous whitespace.
- worrydream.com (Bret Victor) — content-dense, intellectually serious, idiosyncratic; feels written by a thinker.
- mariusbueche.com — design-research practice; project case studies as the spine.
- allisonparrish.com — academic-creative-technologist hybrid; the writing-and-making register.
- placesjournal.org — editorial voice for project case studies (not a personal site, but the right voice).

Anti-references to actively avoid: SaaS landing-page aesthetics, gradient-heavy modern portfolios, agency sites with sticky CTAs, AI-postdoc default looks (centered hero, three-card grid, "selected publications" with paper thumbnails), neobrutalist designs, anything with parallax scroll, anything with auto-playing animations.

## 3. Tech stack

- **Framework:** Astro (latest stable, currently v6).
- **Starter:** Astro's basics starter, not an academic theme. Build the design system from scratch.
- **Styling:** Vanilla CSS using CSS custom properties for the design tokens. No Tailwind, no DaisyUI, no shadcn. Tailwind would force a utility-class register that fights the editorial voice we want. CSS modules or scoped Astro `<style>` blocks are the right pattern.
- **Content:** Astro Content Collections, typed via Zod schemas. Markdown and MDX files in the repo. No CMS at launch.
- **Image handling:** Astro's built-in `<Image />` component. Source images at full quality in `/src/content/[collection]/_assets/`. Astro generates responsive variants at build time.
- **Deployment:** Cloudflare Pages, deployed from a GitHub repo on push to main.
- **Analytics:** Plausible. Lightweight script include only.
- **RSS:** Yes, at `/feed.xml`, scoped to the essays collection only (not publications, not projects).
- **Search:** None.
- **Accessibility target:** WCAG 2.2 AA. Audit at the end with axe-core and pa11y. Lighthouse accessibility score of 100 is the goal.
- **Performance target:** Lighthouse performance 95+ on a cold load over 3G. Astro should ship near-zero JavaScript by default; only the theme toggle and possibly the project filter need client-side JS.

## 4. Design system

### 4.1 Color tokens

Define both light and dark themes. Theme toggle is a small icon-only control in the upper-right of the navigation. System preference is honored on first visit; user preference is persisted in localStorage after toggle.

```
--paper-light:    #FAF7F2   /* off-white, slightly warm */
--paper-dark:     #1A1814   /* near-black, slightly warm */
--ink-light:      #1A1A1A   /* on light, body text */
--ink-dark:       #E8E4DC   /* on dark, body text */
--ink-muted-light:#5A5A55   /* metadata, captions */
--ink-muted-dark: #9A958B
--rule-light:     #C8C2B6   /* hairline rules, borders */
--rule-dark:      #3A352D
--accent:         #A0522D   /* terracotta, used identically in both modes */
--accent-hover:   #C26B3F
```

The accent color does not change between modes. It is used for: links (underlined on hover only), the `:focus-visible` ring, hairline rules at section breaks, and small accent details on the homepage hero. It is not used for buttons, badges, or large fills. Restraint is the rule.

### 4.2 Typography

- **Body and display:** Source Serif 4 (Adobe, open-source, available via Google Fonts as Source Serif 4). Loaded via `@fontsource-variable/source-serif-4` for a single self-hosted variable font file. No Google Fonts CDN call.
- **UI and metadata:** Inter (variable). Loaded via `@fontsource-variable/inter`. Used only for navigation, dates, captions, project metadata blocks, and form labels. Never for body text.
- **Scale:** Modular, base 18px on body, ratio 1.25 (major third). Larger base on long-form essay pages (20px). Generous line-height (1.6 body, 1.3 display).
- **Measure:** Body copy capped at 65 characters per line. Long-form essays at 70.
- **Hierarchy:** A single typeface family (Source Serif 4) handles h1 through h4. Differentiation is by weight, size, and tracking — not by switching to a sans for headers. This is a deliberate, disciplined choice consistent with the tonal references.

### 4.3 Layout and grid

- **Max content width:** 720px for prose, 1080px for project case studies that include images, 1280px for the homepage and project grid.
- **Margins:** Generous. Minimum 24px on mobile, 64px on desktop, more on wide screens.
- **Spacing scale:** 4px base, with steps at 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Vertical rhythm:** Aligned to the body line-height. Section breaks marked by a hairline rule in `--rule-*` color, not by negative space alone.

### 4.4 Component restraint

No card components with shadows. No rounded corners on anything except images (which get a subtle 2px radius). No gradient backgrounds. No hover animations on text — only color changes and underline appearances. Images may have a slow (400ms) crossfade on hover for project tiles. Buttons are text links with hairline underlines, not filled rectangles.

## 5. Information architecture

### Routes

- `/` — Home
- `/research/` — index of research strands
- `/research/[slug]/` — individual research strand pages
- `/projects/` — filterable project grid
- `/projects/[slug]/` — individual project case studies
- `/teaching/` — courses, Coursera, mentorship, curricular leadership
- `/writing/` — publications above, essays below
- `/writing/essays/[slug]/` — individual essay pages
- `/partnerships/` — industry/civic/cultural partnerships
- `/cv/` — HTML mirror of the CV with PDF download link
- `/contact/`
- `/feed.xml` — RSS for essays
- `/sitemap-index.xml` — auto-generated

### Navigation

Top nav, left-aligned, all routes visible (no hamburger on desktop, no mega-menu). Mobile collapses to a single text link "Menu" that expands a vertical list. Theme toggle in the top right.

Footer: copyright line, "Built with Astro" credit (small, muted), social and academic profile links (ORCID, Google Scholar, LinkedIn — emails are configured as constants in `src/config.ts`), and the RSS link.

## 6. Content collections

Define typed Astro Content Collections in `src/content/config.ts`:

### projects

```typescript
{
  title: string,
  slug: string,
  subtitle: string,           // e.g. "Lakeside Sustainable Infrastructure Model"
  date: string,               // YYYY-MM-DD or YYYY range
  dateDisplay: string,        // human-readable, e.g. "2013–2015"
  status: enum,               // 'completed' | 'ongoing' | 'archived'
  themes: string[],           // tags for filtering, e.g. ['data-viz', 'urban-computing']
  partners: string[],         // institutional partners
  featured: boolean,          // appears on homepage
  heroImage: image,
  heroImageAlt: string,
  excerpt: string,            // 1-2 sentences for the grid card
  credits: { role: string, name: string, affiliation: string }[],
  funding: string[],
  press: { citation: string, url?: string }[]
}
```

Body of each markdown file follows the seven-move case study structure: hook sentence, framing paragraph, project description with named collaborators, "what was hard" paragraph, intellectual stakes paragraph, continuity paragraph, plus a credits block.

### publications

```typescript
{
  title: string,
  authors: string,            // formatted citation string
  venue: string,
  year: number,
  status: enum,               // 'published' | 'under-review' | 'in-prep'
  type: enum,                 // 'journal' | 'conference' | 'chapter' | 'review'
  doi?: string,
  url?: string,
  featured: boolean
}
```

### essays

```typescript
{
  title: string,
  subtitle?: string,
  date: string,
  excerpt: string,
  readingTime: number,        // computed, in minutes
  draft: boolean
}
```

### talks

```typescript
{
  title: string,
  venue: string,
  date: string,
  type: enum,                 // 'invited' | 'keynote' | 'panel' | 'conference' | 'public'
  location: string,
  url?: string,
  abstract?: string
}
```

### exhibitions

```typescript
{
  title: string,
  venue: string,
  city: string,
  date: string,
  type: enum,                 // 'solo' | 'group' | 'juried' | 'invitational'
  workShown: string,
  collaborators?: string,
  award?: string,             // e.g. "Best in Show, Wanted Design NYC"
  image?: image
}
```

### research-strands

```typescript
{
  title: string,
  slug: string,
  order: number,              // navigation order
  summary: string,            // 2-3 sentence statement
  relatedProjects: string[],  // project slugs
  relatedPublications: string[],
  relatedTalks: string[]
}
```

### partners

```typescript
{
  name: string,
  category: enum,             // 'industry' | 'civic' | 'cultural' | 'research' | 'lab'
  description?: string,       // 1-2 sentences if notable
  yearStart?: number,
  yearEnd?: number,
  ongoing: boolean,
  featured: boolean
}
```

## 7. Page-by-page specifications

### / (Home)

- **Above the fold:** Bo's name (Source Serif 4, large, bold, single line). Title and institution on the next line in smaller weight. Three-sentence research statement (provided below in Section 9). No image of Bo at the top — the design itself is the first impression.
- **Featured projects strip:** Four to six tiles drawn from projects where `featured: true`. Each tile: image, title, single-line excerpt, year. No "view project →" arrows. The whole tile is the link. Tiles use a generous grid (2-up on desktop, 1-up on mobile).
- **Recent writing:** Three most recent items from essays and publications combined, sorted by date. Title, single-line excerpt, date.
- No homepage CTAs. No newsletter signup. No "let's work together." No social proof logos. The site's job on the homepage is to establish identity, not to convert.

### /research/

Index page listing all five research strands as full-width sections (not cards). Each section shows: strand title, two-to-three-sentence statement, three featured related items (mix of projects and publications), and a "Read more" link to the strand page.

The five strands, in order:

1. Visualization as Humanistic Medium
2. Game Studies and Decision Quality
3. Urban Computing and Smart Cities
4. Experiential and Immersive Media
5. Industry-Engaged Pedagogy and Institutional Innovation

### /research/[slug]/

Each strand is a full essay-style page: a 200–400 word framing argument at the top, then sections for related projects (with thumbnails), publications, and talks. This is the page tenure committees will read most carefully. Treat it as serious editorial.

### /projects/

Filterable grid. Filters: theme tags, decade, status, partner type. Filter UI is a horizontal row of toggle pills using `--accent` for the active state, hairline border for inactive. Filter state is reflected in the URL via query params so links to filtered views are shareable. Filter logic is client-side; no server round-trip.

Grid: 3-up on wide desktop, 2-up on standard desktop, 1-up on mobile. Each tile: hero image (with crossfade hover), title, dateDisplay, excerpt, theme tags as small text below.

### /projects/[slug]/

Layout for case studies. Top: title, subtitle, dateDisplay, partners (small Inter caption). Hero image at full content width. Body in 720px measure. Pull-quotes use the accent color for the leading rule, no italic block treatment. Images within the body can break out to 1080px width. Credits block at the bottom in a smaller Inter-set table.

### /teaching/

Sections in this order:

1. **Currently Teaching** — list of current semester courses with descriptions
2. **Coursera and Open Courses** — feature Data Visualization and the Art of Storytelling with the 266+ enrollment count
3. **Curricular Leadership** — the CEM program-building work, IPRO Labs framework, Art of Data Visualization SAIC/Northwestern course
4. **Mentorship at Scale** — the 1,300+ student IPRO figure, current advisees, student startup outcomes
5. **Teaching Statement** — a single short paragraph or link to a full statement (placeholder for now)

### /writing/

Top half: Publications. Sectioned by status: Peer-Reviewed Journal Articles, Peer-Reviewed Conference Papers, Under Review, In Preparation. Items rendered as full citations (Source Serif 4). Featured items have a small terracotta marker.

Bottom half: Essays. Reverse-chronological list. Title, subtitle, date, excerpt, reading time. RSS link in the section header.

### /partnerships/

Categorized list of past partnerships (industry, civic, cultural, research, lab). Each category in a separate section with a one-sentence framing line. Partners listed plainly, with the most notable getting a one-sentence description.

The page closes with a single italicized paragraph at the bottom:

> *I work with industry, civic, and cultural partners on selected projects through Illinois Tech and independently. For partnership inquiries, contact me at wrodda@illinoistech.edu.*

That paragraph is the only commercial signal anywhere on the site. It does the work without ever using the word "consulting."

### /cv/

HTML mirror of the CV. Same content as the docx. Add a "Download PDF" button at the top in plain text, no fill. Rendered from a single MDX file so updates are easy.

### /contact/

Single-page contact. Three pathways: Academic / Research, Partnership, Press and Speaking. Each pathway is a sentence and an email link. No contact form. Contact forms invite spam and signal corporate, not scholarly.

## 8. Build order

Build the site in this order. Do not skip ahead.

1. Scaffold the Astro project, install dependencies, set up the file structure.
2. Implement the design system: tokens, fonts, base styles, theme toggle.
3. Build the layout shell: nav, footer, page wrapper.
4. Define all Content Collections with Zod schemas.
5. Build the homepage with placeholder content.
6. Build the project case study layout (single template) and a single placeholder case study (LakeSIM, content provided below in Section 10).
7. Build the projects grid with filtering.
8. Build the writing page (publications + essays).
9. Build the research strand index and individual strand template.
10. Build the teaching, partnerships, cv, and contact pages.
11. Add RSS, sitemap, and OpenGraph metadata.
12. Run accessibility audit (axe-core, pa11y, Lighthouse). Fix all issues to AA.
13. Set up Cloudflare Pages deployment from GitHub.
14. Wire up Plausible analytics.

After each major step, stop and confirm the result before moving to the next. Do not generate the whole site in one pass.

## 9. Homepage research statement (final copy, paste verbatim)

> Bo Rodda studies and builds at the intersection of design, computation, and lived experience. As Assistant Professor of Experiential Media and Data Communication at Illinois Institute of Technology, his research spans game studies, urban computing, and data visualization, with recent peer-reviewed work developing *decision quality* as a portable method for analyzing games and decision environments. He has built dynamic urban data platforms with the University of Chicago and Argonne National Laboratory, exhibited internationally as co-founder of ChiLab Design Studio, and led dozens of industry-partnered design studios at Illinois Tech's Kaplan Institute.

The phrase *decision quality* is the only italicized phrase. The whole statement is set in body Source Serif 4, no h1 treatment. It sits below the name and title.

## 10. LakeSIM project case study (final copy, paste verbatim into src/content/projects/lakesim.md)

Use this content. The seven-move structure (hook, framing, description, what-was-hard, intellectual stakes, continuity, credits) is the template all other case studies will follow.

```markdown
---
title: "LakeSIM"
slug: "lakesim"
subtitle: "Lakeside Sustainable Infrastructure Model"
date: "2013-01-01"
dateDisplay: "2013–2015"
status: "completed"
themes: ["data-viz", "urban-computing", "design-research"]
partners: ["UrbanCCD / University of Chicago", "Argonne National Laboratory", "Skidmore Owings & Merrill", "McCaffery Interests"]
featured: true
heroImage: "./_assets/lakesim-hero.jpg"
heroImageAlt: "LakeSIM data visualization overlay on the Chicago Lakeside Development site plan"
excerpt: "A prototype workflow framework coupling urban design with computational modeling, developed for the 600-acre Chicago Lakeside Development."
credits:
  - role: "Co-Principal Investigator"
    name: "Charles Catlett"
    affiliation: "UrbanCCD / Argonne"
  - role: "Co-Principal Investigator"
    name: "Leah Guzowski"
    affiliation: "Argonne National Laboratory"
  - role: "Technical Lead and Principal Project Architect"
    name: "Bo Rodda"
    affiliation: "UrbanCCD"
funding:
  - "Argonne National Laboratory"
  - "The University of Chicago"
  - "McCaffery Interests"
press:
  - citation: "Lasky, J. (2013). Going for the remix. The New York Times, D1, D6–D7."
  - citation: "Tuhus-Dubrow, R. (2014). What happens when developers, scientists, and supercomputers connect on urban design. Next City."
    url: "https://nextcity.org/daily/entry/chicago-lakesim-scientists-developers-urban-design"
  - citation: "Sisson, P. (2015). Using a real-life SimCity to design a massive development. Curbed Chicago."
---

**Cities are designed at scales their tools cannot model.**

A single building can be modeled with confidence. A neighborhood can be sketched. But the 600 acres of a master-planned community, unfolding over decades — that scale exceeds the working tools of architects, urban planners, and developers. The decisions that matter most at that scale — energy demand, transportation flow, water systems, microclimate, infrastructure investment — interact in ways that no individual professional discipline is equipped to forecast. So most of those decisions, on most large developments, are made on intuition.

LakeSIM was an attempt to change that.

[...continues with the full case study text from the prior conversation...]
```

The full text of the case study has been provided separately and should be placed verbatim into the markdown body. The title block above is what the frontmatter must look like.

## 11. What you should ask Bo before generating

Before generating any code, confirm the following with Bo:

1. The repo name (suggest `borodda-com`).
2. Whether the existing borodda.com should be archived/redirected, or whether the new site simply replaces it on the same domain.
3. Whether he wants to commit to GitHub now or build locally first.
4. Whether placeholder Lorem-ipsum content is acceptable for unfinished sections, or whether real content draft files should be flagged with `draft: true` frontmatter and excluded from production builds.

Once those four are confirmed, scaffold the Astro project and proceed through the build order.

## 12. What's out of scope

- Newsletter signup forms.
- Contact forms.
- A blog (use essays instead).
- Comment systems.
- Search.
- Internationalization.
- E-commerce.
- Membership / paywall features.
- Video backgrounds, parallax effects, scroll-triggered animations, page transitions beyond standard cross-fades.
- Any third-party widget that ships meaningful client-side JavaScript.

If a feature is not in this brief, it is not in this site. Add nothing speculatively.

---

End of brief

## Operator notes (from Bo's collaborator)

When you're ready, paste this in. A few notes on what to expect:

Claude Code will probably ask clarifying questions before scaffolding. Good — those are the right questions to ask. The four in Section 11 are the ones I anticipate. Anything else, use your judgment and tell me what came up if you want a second opinion.

The build will likely take Claude Code two to four sessions to complete. Don't try to do it all in one. The build order in Section 8 is structured so each step has a natural stopping point. After the design system (step 2), pause and look at the result before continuing — that's the highest-leverage moment to course-correct.

The LakeSIM case study text I drafted earlier in this conversation should be saved as a separate file and pasted into the lakesim.md body when Claude Code asks. I included the full frontmatter in the brief but left the body as a reference because the brief was already getting long. If Claude Code tells you it needs the full text, copy the case study from the earlier message in this conversation and paste it in.

Two things you'll need to do that Claude Code can't:

1. Set up the GitHub repo and a Cloudflare Pages account when Claude Code reaches the deployment step. Both are free and take about ten minutes each.
2. Sign up for Plausible ($9/month) or decide to defer analytics until later.

When the first session wraps up, send me the result and we'll iterate from there. The most likely place we'll need to push back on Claude Code is the typography hierarchy and the homepage above-the-fold composition — those are the two places where AI-generated design tends to drift toward defaults. Everything else should follow naturally from the spec.

Good luck. This is going to be a much better website than borodda.com currently is.
