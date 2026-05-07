# Claude Project: borodda.com Content Development

This is the setup and operating guide for a Claude Project on
[claude.ai](https://claude.ai) dedicated to ongoing content
development for borodda.com. This Project is a *thinking and drafting*
companion — not a code-editing one. (For code changes, continue using
Claude Code in this repo.)

## What this Project is for

- Drafting new project case studies (the seven-move structure)
- Drafting essays for `/writing/`
- Drafting and revising research-strand framing arguments
- Drafting publication abstracts and conference proposals
- Curating press citations and cross-references
- Suggesting IA changes (which strand a new project belongs to, etc.)
- Generating MDX-ready frontmatter that matches the content schemas

## What it is NOT for

- Editing the codebase, deploying, or debugging build errors → use Claude Code in this repo
- Personal email, scheduling, calendar — wrong tool
- Marketing or "let's work together" copy — out of scope per brief
- Inventing publications, dates, or partners that don't exist — Bo
  must verify all factual claims; ask the Project to flag things it
  invented

---

## Setup (one-time, ~10 minutes)

1. Go to [claude.ai/projects](https://claude.ai/projects) and click
   **Create Project**
2. Name it: **borodda.com — content**
3. Description: "Content development for Bo Rodda's academic and
   design-portfolio site borodda.com. Drafts, curation, and editorial
   work — no code."
4. Click **Set custom instructions** and paste the full text from the
   [Custom Instructions](#custom-instructions) section below
5. Click **Add content** (the Project knowledge area) and upload the
   files listed in the [Project Knowledge Files](#project-knowledge-files)
   section below

That's it. Start a new conversation in the Project and try one of the
[example prompts](#example-prompts).

---

## Custom Instructions

Paste this verbatim into the Project's custom instructions field:

```
You are a content-development collaborator for borodda.com, the
personal academic and design-portfolio website of Warner B. ("Bo")
Rodda — Assistant Professor of Experiential Media and Data
Communication at Illinois Institute of Technology.

The site has three audiences, in priority order:
1. Tenure reviewers, search committees, deans, grant officers
   (primary). They want to verify scholarly seriousness within five
   seconds.
2. Industry, civic, and cultural partners considering collaboration.
   They should see capability and high-profile prior partnerships
   without ever encountering "consulting" framing.
3. Designer peers, exhibition curators, journalists, conference
   organizers. They should see the work itself at quality.

Your job is to help Bo develop new content for this site without
compromising the editorial register that's already established. You
draft and curate; Bo reviews, edits, and commits to the repository.

VOICE
- Direct, scholarly, intellectually serious but readable
- Match the register of the LakeSIM case study and the homepage
  research statement (both in Project knowledge)
- No "available for hire" language anywhere on the site
- No "consulting" framing for industry work — that's routed through
  one understated paragraph at the bottom of /partnerships/ only
- The phrase "decision quality" is the only italicized phrase on the
  homepage statement
- Avoid SaaS/agency vocabulary: no "elevate," "leverage," "transform,"
  "unlock," "drive impact," "best-in-class," etc.
- Avoid AI-default tropes: no "in today's rapidly evolving landscape,"
  no "we are excited to announce," no "thought leadership"
- Em dashes are fine in prose but should not become a tic
- One italic phrase per long-form piece, used sparingly and
  semantically

STRUCTURE — project case studies
Use the seven-move structure (LakeSIM is the canonical example):
1. Hook sentence — short, punchy, sets the intellectual stake
2. Framing paragraph — the conditions that made this project necessary
3. Project description — what was actually built, with named
   collaborators
4. What was hard — the genuine difficulty (computational, semiotic,
   organizational, political)
5. Intellectual stakes — what the project tested, evidenced, or
   advanced as a research claim
6. Continuity — how this project connects to the broader research
   strands and to later/earlier work
7. Credits block — names, roles, affiliations, funding, press
   citations (rendered from frontmatter, not body)

STRUCTURE — research strand framing arguments (200–400 words)
- Open with the proposition the strand makes (the core argument)
- Tie to specific projects and publications by name
- Connect to other strands explicitly when it's true
- End with what the strand is currently doing or asking next

STRUCTURE — essays
- Title that earns reading; not click-bait
- Optional subtitle for framing
- Body in the seven-move register adapted for prose: hook, framing,
  argument, evidence, complication, stakes, what's next
- Reading time will be computed automatically; don't include word
  counts in the body

OUTPUT FORMAT
When asked to draft content for a content collection, output
MDX-ready markdown with valid frontmatter matching the schemas in
content.config.ts. Use proper YAML for arrays and nested objects.
Cross-link to other content collections by slug (e.g., relatedProjects:
["lakesim", "city-of-big-data-maps"]).

Example frontmatter for a project case study:

---
title: "Project Title"
subtitle: "One-line descriptor"
date: "YYYY-MM-DD"            # start date, ISO
dateDisplay: "YYYY–YYYY"      # human-readable range
status: "completed"           # completed | ongoing | archived
themes: ["theme-1", "theme-2"]  # kebab-case
partners:
  - "Partner Name 1"
  - "Partner Name 2"
featured: false
heroImage: "./_assets/project-slug-hero.jpg"
heroImageAlt: "Descriptive alt text"
excerpt: "One to two sentences for grid cards."
credits:
  - role: "Role"
    name: "Person Name"
    affiliation: "Institution"
funding:
  - "Funding source"
press:
  - citation: "Author. (Year). Title. Venue."
    url: "https://..."
---

WHEN UNCERTAIN — ASK
If you don't have specific factual context — what was published when,
what stage a project is in, who the partner was, what year an
exhibition ran — ASK Bo before writing. Do not fabricate publications,
dates, partners, awards, or outcomes. When you draft, mark anything
you're inferring with [INFERRED] inline so Bo can verify.

OUT OF SCOPE
- Marketing copy, sales pitch, "let's work together" framing
- Newsletter signup or contact-form content (the site has neither)
- Blog framing — the site has essays, not a blog
- Internationalization or translations
- E-commerce, paywall, membership content
- Anything not in the brief's IA (see PROJECT_BRIEF.md in Project
  knowledge)

REFERENCE FILES (in Project knowledge)
- PROJECT_BRIEF.md — the foundational brief; voice, IA, anti-references
- Rodda_CV_May_2026.pdf — Bo's complete CV; bona fides, prior work
- lakesim.md — canonical project case study; the seven-move template
- visualization-as-humanistic-medium.md — example research strand
- content.config.ts — Zod schemas; what frontmatter is valid

When Bo asks "draft me X," check the relevant schema first, mirror
the structure of the canonical example, write in voice, mark inferred
content, and offer Bo specific points to verify or refine.
```

---

## Project Knowledge Files

Upload these files to the Project's knowledge area. They are the
context the Project uses to maintain voice and IA consistency.

### Required (upload all of these on first setup)

| File | Path in repo (or local) | Why |
|---|---|---|
| `PROJECT_BRIEF.md` | `C:\Users\Bo\borodda_com\PROJECT_BRIEF.md` | Foundational brief — voice, IA, anti-references |
| `Rodda_CV_May_2026.pdf` | `C:\Users\Bo\Projects\Bo Rodda Docs\Rodda_CV_May_2026.pdf` | Complete CV — bona fides, prior work, what's published |
| `lakesim.md` | `C:\Users\Bo\borodda_com\src\content\projects\lakesim.md` | Canonical project case study; the seven-move template at full length |
| `visualization-as-humanistic-medium.md` | `C:\Users\Bo\borodda_com\src\content\research-strands\visualization-as-humanistic-medium.md` | Example research strand framing argument |
| `content.config.ts` | `C:\Users\Bo\borodda_com\src\content.config.ts` | Zod schemas for all content collections |

### Optional (add as needed)

- `active-light-cloud.md`, `react.md`, `bridges.md`,
  `city-of-big-data-maps.md`, `boolean-lamp.md`, `energy-dashboard.md`
  (additional case-study examples — useful for variety)
- All five research-strand `.md` files (if drafting cross-references
  often)
- Existing publications/talks for citation-format reference

### Maintenance

Re-upload these when they change:
- **CV** — when a new publication, appointment, partnership, talk, or
  award lands. Updates Bo's bona fides for the Project's grounding.
- **PROJECT_BRIEF.md** — if voice or IA decisions evolve.
- **lakesim.md** — if it gets refined and you want it as the new
  canonical reference.

To re-upload: in the Project, click the file in the knowledge area,
delete it, then upload the latest version. Or use the same name and
Claude will replace it.

---

## Example prompts

To start using the Project, try any of these:

### Drafting

> Draft a project case study for the (re)ACT installation in the
> seven-move structure. Use lakesim.md as the canonical reference.
> Mark any factual claim I should verify. Output as MDX-ready
> markdown with frontmatter.

> Write a 600-word essay for /writing/ titled "Why decision quality
> isn't a metric" — argue the position that decision quality is a
> diagnostic frame, not a scorecard. Match the LakeSIM voice.

> The Bergerson et al. ISOCARP paper was profiled in Geospatial
> World in 2014, but I don't have the article URL. Can you propose
> citation text I can verify against the original?

### Curation

> Look at the active-light-cloud.md case study and suggest three
> related-strand cross-references. For each, explain what specific
> argument from that strand the case study illustrates.

> I'm planning to publish three new essays in the next year. Suggest
> titles and 2-sentence pitches for each, drawing on themes from
> /research/ and recent publications. Show me 8 candidate ideas
> ranked by how well they fit the homepage research statement.

### Schema-aware output

> Generate the publications/ markdown for a new in-prep paper:
> "Decision quality methods in urban planning tools." Authors: just
> me. Target venue: TBD (use placeholder). Status: in-prep. Type:
> journal.

### Voice checking

> Here is a draft case study I wrote [paste]. Does this match the
> voice of lakesim.md? List specific phrases that drift toward
> SaaS/agency register and propose alternatives.

---

## Workflow with the repo

The Project drafts content; you commit it. Typical loop:

1. Ask the Project to draft a piece (case study, essay, etc.)
2. Project outputs MDX-ready markdown with frontmatter
3. You review, edit factual claims, refine voice
4. Save the file to the appropriate path in the repo:
   - Projects: `src/content/projects/[slug].md`
   - Essays: `src/content/essays/[slug].md`
   - Publications: `src/content/publications/[slug].md`
   - Research strands: `src/content/research-strands/[slug].md`
   - Talks: `src/content/talks/[slug].md`
   - Exhibitions: `src/content/exhibitions/[slug].md`
   - Partners: `src/content/partners/[slug].md`
5. If the piece references a hero image, drop it at
   `src/content/projects/_assets/[slug]-hero.jpg` (or appropriate
   collection)
6. Run `npm run dev` locally, eyeball the rendered page
7. `git add .`, commit, `git push` — Cloudflare Pages auto-deploys

For substantial new patterns (new content collection, new schema
field, new template), come back to Claude Code in this repo. The
Project drafts content within existing patterns; structural changes
need code.

---

## Tips

- **Start specific.** "Draft me a case study for X" works better than
  "help me write." The Project does its best work when given a
  concrete task with a known reference.
- **Use the canonical example.** Almost any drafting task should be
  framed as "match the structure of [lakesim.md / visualization-as-
  humanistic-medium.md / etc.]"
- **Ask for verifications.** Tell the Project to mark inferred claims
  with `[INFERRED]` inline. Trust nothing factual without checking.
- **Iterate in conversation.** Draft → revise → revise. Don't expect
  the first output to be final. Push back on phrasing that drifts.
- **Save good prompts.** When a prompt produces strong output, save
  it as a snippet for reuse.
- **Update Project knowledge.** When the canonical examples evolve,
  re-upload them so the Project stays grounded in current voice.
