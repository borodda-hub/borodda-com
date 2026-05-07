import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  const sorted = essays.sort((a, b) => b.data.date.localeCompare(a.data.date));

  return rss({
    title: `${SITE.name} — Essays`,
    description:
      'Essays by Bo Rodda on visualization, urban computing, game studies, decision quality, and design pedagogy.',
    site: context.site!,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      pubDate: new Date(`${entry.data.date}T12:00:00Z`),
      description: entry.data.excerpt,
      link: `/writing/essays/${entry.id}/`,
    })),
    customData: '<language>en-us</language>',
    stylesheet: '/feed.xsl',
  });
}
