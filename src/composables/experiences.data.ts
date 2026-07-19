import { createContentLoader } from 'vitepress';
import type { ContentItem } from './projects.data';

declare const data: ContentItem[];
export { data };

export default createContentLoader('experiences/**/*.md', {
  transform(raw): ContentItem[] {
    return raw
      .filter((page) => page.frontmatter.title && page.frontmatter.image)
      .map((page) => ({
        title: page.frontmatter.title,
        description: page.frontmatter.description ?? '',
        url: page.url,
        image: page.frontmatter.image ?? null,
        tags: page.frontmatter.tags ?? [],
        category: page.frontmatter.type ?? null,
        featured: page.frontmatter.featured === true,
        order: page.frontmatter.order ?? 99,
        github: page.frontmatter.github ?? null,
        link: page.frontmatter.link ?? null,
      }))
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  },
});
