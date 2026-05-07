import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      subtitle: z.string(),
      date: z.string(),
      dateDisplay: z.string(),
      status: z.enum(['completed', 'ongoing', 'archived']),
      themes: z.array(z.string()).default([]),
      partners: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      excerpt: z.string(),
      credits: z
        .array(
          z.object({
            role: z.string(),
            name: z.string(),
            affiliation: z.string(),
          })
        )
        .default([]),
      funding: z.array(z.string()).default([]),
      press: z
        .array(
          z.object({
            citation: z.string(),
            url: z.string().url().optional(),
          })
        )
        .default([]),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number().int(),
    status: z.enum(['published', 'under-review', 'in-prep']),
    type: z.enum(['journal', 'conference', 'chapter', 'review']),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    date: z.string(),
    type: z.enum(['invited', 'keynote', 'panel', 'conference', 'public']),
    location: z.string(),
    url: z.string().url().optional(),
    abstract: z.string().optional(),
  }),
});

const exhibitions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/exhibitions' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      venue: z.string(),
      city: z.string(),
      date: z.string(),
      type: z.enum(['solo', 'group', 'juried', 'invitational']),
      workShown: z.string(),
      collaborators: z.string().optional(),
      award: z.string().optional(),
      image: image().optional(),
    }),
});

const researchStrands = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research-strands' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    order: z.number().int(),
    summary: z.string(),
    relatedProjects: z.array(z.string()).default([]),
    relatedPublications: z.array(z.string()).default([]),
    relatedTalks: z.array(z.string()).default([]),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['industry', 'civic', 'cultural', 'research', 'lab']),
    description: z.string().optional(),
    url: z.string().url().optional(),
    yearStart: z.number().int().optional(),
    yearEnd: z.number().int().optional(),
    ongoing: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  publications,
  essays,
  talks,
  exhibitions,
  researchStrands,
  partners,
};
