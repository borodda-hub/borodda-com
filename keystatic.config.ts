import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle' }),
        date: fields.text({ label: 'Date', description: 'YYYY-MM-DD' }),
        dateDisplay: fields.text({ label: 'Date Display', description: 'e.g. 2013–2015' }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Completed', value: 'completed' },
            { label: 'Ongoing', value: 'ongoing' },
            { label: 'Archived', value: 'archived' },
          ],
          defaultValue: 'completed',
        }),
        themes: fields.array(
          fields.text({ label: 'Theme' }),
          { label: 'Themes', itemLabel: (props) => props.value }
        ),
        partners: fields.array(
          fields.text({ label: 'Partner' }),
          { label: 'Partners', itemLabel: (props) => props.value }
        ),
        featured: fields.checkbox({ label: 'Featured on homepage', defaultValue: false }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/content/projects/_assets',
          publicPath: './_assets/',
        }),
        heroImageAlt: fields.text({ label: 'Hero Image Alt Text' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        credits: fields.array(
          fields.object({
            role: fields.text({ label: 'Role' }),
            name: fields.text({ label: 'Name' }),
            affiliation: fields.text({ label: 'Affiliation' }),
          }),
          {
            label: 'Credits',
            itemLabel: (props) => `${props.fields.name.value} — ${props.fields.role.value}`,
          }
        ),
        funding: fields.array(
          fields.text({ label: 'Funder' }),
          { label: 'Funding', itemLabel: (props) => props.value }
        ),
        press: fields.array(
          fields.object({
            citation: fields.text({ label: 'Citation', multiline: true }),
            url: fields.url({ label: 'URL (optional)' }),
          }),
          {
            label: 'Press',
            itemLabel: (props) => props.fields.citation.value.slice(0, 60) + '…',
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            heading: true,
            blockquote: true,
            orderedList: true,
            unorderedList: true,
            link: true,
            image: {
              directory: 'src/content/projects/_assets',
              publicPath: './_assets/',
            },
            divider: true,
            codeBlock: true,
          },
        }),
      },
    }),

    publications: collection({
      label: 'Publications',
      slugField: 'title',
      path: 'src/content/publications/*',
      format: { contentField: 'notes' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        authors: fields.text({ label: 'Authors' }),
        venue: fields.text({ label: 'Venue / Journal / Conference' }),
        year: fields.number({ label: 'Year' }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Published', value: 'published' },
            { label: 'Under Review', value: 'under-review' },
            { label: 'In Prep', value: 'in-prep' },
          ],
          defaultValue: 'in-prep',
        }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Journal Article', value: 'journal' },
            { label: 'Conference Paper', value: 'conference' },
            { label: 'Book Chapter', value: 'chapter' },
            { label: 'Review', value: 'review' },
          ],
          defaultValue: 'conference',
        }),
        doi: fields.text({ label: 'DOI' }),
        url: fields.url({ label: 'URL' }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        notes: fields.markdoc({
          label: 'Notes',
          extension: 'md',
          options: { bold: true, italic: true, link: true },
        }),
      },
    }),

    essays: collection({
      label: 'Essays',
      slugField: 'title',
      path: 'src/content/essays/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle' }),
        date: fields.text({ label: 'Date', description: 'YYYY-MM-DD' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        draft: fields.checkbox({ label: 'Draft (hide from public)', defaultValue: true }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            heading: true,
            blockquote: true,
            orderedList: true,
            unorderedList: true,
            link: true,
            divider: true,
            codeBlock: true,
          },
        }),
      },
    }),

    talks: collection({
      label: 'Talks',
      slugField: 'title',
      path: 'src/content/talks/*',
      format: { contentField: 'notes' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        venue: fields.text({ label: 'Venue' }),
        date: fields.text({ label: 'Date', description: 'YYYY-MM-DD' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Invited', value: 'invited' },
            { label: 'Keynote', value: 'keynote' },
            { label: 'Panel', value: 'panel' },
            { label: 'Conference', value: 'conference' },
            { label: 'Public', value: 'public' },
          ],
          defaultValue: 'conference',
        }),
        location: fields.text({ label: 'Location' }),
        url: fields.url({ label: 'URL (slides, recording, etc.)' }),
        abstract: fields.text({ label: 'Abstract', multiline: true }),
        notes: fields.markdoc({
          label: 'Notes',
          extension: 'md',
          options: { bold: true, italic: true, link: true },
        }),
      },
    }),

    exhibitions: collection({
      label: 'Exhibitions',
      slugField: 'title',
      path: 'src/content/exhibitions/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        venue: fields.text({ label: 'Venue' }),
        city: fields.text({ label: 'City' }),
        date: fields.text({ label: 'Date', description: 'YYYY-MM-DD' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Solo', value: 'solo' },
            { label: 'Group', value: 'group' },
            { label: 'Juried', value: 'juried' },
            { label: 'Invitational', value: 'invitational' },
          ],
          defaultValue: 'group',
        }),
        workShown: fields.text({ label: 'Work Shown' }),
        collaborators: fields.text({ label: 'Collaborators' }),
        award: fields.text({ label: 'Award' }),
        image: fields.image({
          label: 'Image',
          directory: 'src/content/exhibitions/_assets',
          publicPath: './_assets/',
        }),
        content: fields.markdoc({
          label: 'Notes',
          extension: 'md',
          options: {
            bold: true,
            italic: true,
            link: true,
            divider: true,
          },
        }),
      },
    }),

    researchStrands: collection({
      label: 'Research Strands',
      slugField: 'title',
      path: 'src/content/research-strands/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        order: fields.number({ label: 'Display Order', defaultValue: 1 }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        relatedProjects: fields.array(
          fields.text({ label: 'Project slug' }),
          { label: 'Related Projects', itemLabel: (props) => props.value }
        ),
        relatedPublications: fields.array(
          fields.text({ label: 'Publication slug' }),
          { label: 'Related Publications', itemLabel: (props) => props.value }
        ),
        relatedTalks: fields.array(
          fields.text({ label: 'Talk slug' }),
          { label: 'Related Talks', itemLabel: (props) => props.value }
        ),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            heading: true,
            blockquote: true,
            orderedList: true,
            unorderedList: true,
            link: true,
            divider: true,
            codeBlock: true,
          },
        }),
      },
    }),

    partners: collection({
      label: 'Partners',
      slugField: 'name',
      path: 'src/content/partners/*',
      format: { contentField: 'notes' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Industry', value: 'industry' },
            { label: 'Civic', value: 'civic' },
            { label: 'Cultural', value: 'cultural' },
            { label: 'Research', value: 'research' },
            { label: 'Lab', value: 'lab' },
          ],
          defaultValue: 'industry',
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        url: fields.url({ label: 'Website URL' }),
        yearStart: fields.number({ label: 'Year Start' }),
        yearEnd: fields.number({ label: 'Year End' }),
        ongoing: fields.checkbox({ label: 'Ongoing relationship', defaultValue: false }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        notes: fields.markdoc({
          label: 'Notes',
          extension: 'md',
          options: { bold: true, italic: true, link: true },
        }),
      },
    }),
  },
});
