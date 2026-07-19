import { createContentLoader } from 'vitepress';

export interface ContentItem {
  title: string;
  description: string;
  url: string;
  image: string | null;
  tags: string[];
  category: string | null;
  featured: boolean;
  order: number;
  github: string | null;
  link: string | null;
}

declare const data: ContentItem[];
export { data };

export default createContentLoader('projects/**/*.md', {
  transform(raw): ContentItem[] {
    return raw
      // Seules les fiches projet ont une `image` : cela exclut les pages
      // d'index et de graphe (dont l'URL est /projects/ avec cleanUrls).
      .filter((page) => page.frontmatter.title && page.frontmatter.image)
      .map((page) => ({
        title: page.frontmatter.title,
        description: page.frontmatter.description ?? '',
        url: page.url,
        image: page.frontmatter.image ?? null,
        tags: page.frontmatter.tags ?? [],
        // YAML parse `category: 42` en nombre : on force la chaîne.
        category: page.frontmatter.category != null ? String(page.frontmatter.category) : null,
        featured: page.frontmatter.featured === true,
        order: page.frontmatter.order ?? 99,
        github: page.frontmatter.github ?? null,
        link: page.frontmatter.link ?? null,
      }))
      .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  },
});
