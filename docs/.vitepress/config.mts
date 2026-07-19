import path from 'node:path';
import { defineConfig } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

const HOSTNAME = 'https://tlafay.fr';
const OG_DEFAULT = `${HOSTNAME}/covers/og-default.png`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Timothée Lafay',
  titleTemplate: ':title · Timothée Lafay',
  description:
    'Pentester et développeur — je trouve les failles, puis j\'accompagne les équipes pour les corriger dans le code. Projets, expériences et write-ups.',
  lang: 'fr-FR',
  appearance: 'force-dark',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#09090b' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Timothée Lafay' }],
    ['meta', { property: 'og:image', content: OG_DEFAULT }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: OG_DEFAULT }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Expériences', link: '/experiences/', activeMatch: '/experiences/' },
      { text: 'Projets', link: '/projects/', activeMatch: '/projects/' },
      { text: 'À propos', link: '/about-me' },
    ],

    sidebar: {
      '/projects': [
        {
          text: 'Projets',
          items: [
            { text: 'Tous les projets', link: '/projects/' },
            { text: 'Graphe des projets', link: '/projects/graphe' },
          ],
        },
        {
          text: 'Projets 42',
          collapsed: false,
          items: [
            { text: 'Boot2Root', link: '/projects/42/boot2root' },
            { text: 'Rainfall', link: '/projects/42/rainfall' },
            { text: 'Snowcrash', link: '/projects/42/snowcrash' },
            { text: 'Inception of Things', link: '/projects/42/inception-of-things' },
            { text: 'ft_nm', link: '/projects/42/ft_nm' },
            { text: 'ft_transcendence', link: '/projects/42/ft_transcendence' },
            { text: 'Taskmaster', link: '/projects/42/taskmaster' },
          ],
        },
        {
          text: 'Projets personnels',
          collapsed: false,
          items: [
            { text: 'Cybersécurité & bug bounty', link: '/projects/personal/cyber' },
            { text: '2ez', link: '/projects/personal/2ez' },
            { text: 'Ce portfolio', link: '/projects/personal/portfolio' },
          ],
        },
      ],
      '/experiences': [
        {
          text: 'Expériences',
          items: [
            { text: 'Toutes les expériences', link: '/experiences/' },
            { text: 'Graphe des compétences', link: '/experiences/graphe' },
          ],
        },
        {
          text: 'Parcours',
          collapsed: false,
          items: [
            { text: 'Alternance · IT-Development', link: '/experiences/apprenticeship-itd' },
            { text: 'Stage · IT-Development', link: '/experiences/internship-itd' },
            { text: "Stage · L'ENE", link: '/experiences/internship-ene' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/timothee-lafay/' },
      { icon: 'github', link: 'https://github.com/Tlafay1' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5-8-5V6l8 5 8-5z"/></svg>',
        },
        link: 'mailto:timotheelafay4@gmail.com',
        ariaLabel: 'Email',
      },
    ],

    footer: {
      message:
        'Pentester &amp; développeur · <a href="mailto:timotheelafay4@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/timothee-lafay/" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://github.com/Tlafay1/portfolio" target="_blank" rel="noopener">Code source</a>',
      copyright: `© ${new Date().getFullYear()} Timothée Lafay`,
    },

    search: {
      provider: 'algolia',
      options: {
        apiKey: 'fcd7c30ad6914e89808be1e6541bbdc3',
        indexName: 'tlafay1io',
        appId: 'KYLBEVKZAL',
        sitemaps: [`${HOSTNAME}/sitemap.xml`],
      },
    },
  },

  sitemap: {
    hostname: HOSTNAME,
  },

  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Timothée Lafay',
      titleTemplate: ':title · Timothée Lafay',
      description:
        'Pentester and developer — I find the flaws, then help teams fix them in the code. Projects, experience and write-ups.',
      themeConfig: {
        nav: [
          { text: 'Experience', link: '/en/experiences/', activeMatch: '/en/experiences/' },
          { text: 'Projects', link: '/en/projects/', activeMatch: '/en/projects/' },
          { text: 'About', link: '/en/about-me' },
        ],
        sidebar: {
          '/en/projects': [
            {
              text: 'Projects',
              items: [
                { text: 'All projects', link: '/en/projects/' },
                { text: 'Projects graph', link: '/en/projects/graphe' },
              ],
            },
            {
              text: '42 projects',
              collapsed: false,
              items: [
                { text: 'Boot2Root', link: '/en/projects/42/boot2root' },
                { text: 'Rainfall', link: '/en/projects/42/rainfall' },
                { text: 'Snowcrash', link: '/en/projects/42/snowcrash' },
                { text: 'Inception of Things', link: '/en/projects/42/inception-of-things' },
                { text: 'ft_nm', link: '/en/projects/42/ft_nm' },
                { text: 'ft_transcendence', link: '/en/projects/42/ft_transcendence' },
                { text: 'Taskmaster', link: '/en/projects/42/taskmaster' },
              ],
            },
            {
              text: 'Personal projects',
              collapsed: false,
              items: [
                { text: 'Cybersecurity & bug bounty', link: '/en/projects/personal/cyber' },
                { text: '2ez', link: '/en/projects/personal/2ez' },
                { text: 'This portfolio', link: '/en/projects/personal/portfolio' },
              ],
            },
          ],
          '/en/experiences': [
            {
              text: 'Experience',
              items: [
                { text: 'All experience', link: '/en/experiences/' },
                { text: 'Skills graph', link: '/en/experiences/graphe' },
              ],
            },
            {
              text: 'Career',
              collapsed: false,
              items: [
                { text: 'Apprenticeship · IT-Development', link: '/en/experiences/apprenticeship-itd' },
                { text: 'Internship · IT-Development', link: '/en/experiences/internship-itd' },
                { text: 'Internship · ENE', link: '/en/experiences/internship-ene' },
              ],
            },
          ],
        },
        footer: {
          message:
            'Pentester &amp; developer · <a href="mailto:timotheelafay4@gmail.com">Email</a> · <a href="https://www.linkedin.com/in/timothee-lafay/" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://github.com/Tlafay1/portfolio" target="_blank" rel="noopener">Source code</a>',
          copyright: `© ${new Date().getFullYear()} Timothée Lafay`,
        },
      },
    },
  },

  // Chaque page utilise sa cover (frontmatter.image) comme og:image ; sinon l'og par défaut.
  transformHead({ pageData, siteConfig }) {
    const img = pageData.frontmatter.image as string | undefined;
    if (!img) return [];
    const abs = img.startsWith('http') ? img : `${HOSTNAME}${img}`;
    const title = pageData.frontmatter.title
      ? `${pageData.frontmatter.title} · Timothée Lafay`
      : siteConfig.site.title;
    const desc = (pageData.frontmatter.description as string) ?? siteConfig.site.description;
    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: desc }],
      ['meta', { property: 'og:image', content: abs }],
      ['meta', { name: 'twitter:image', content: abs }],
    ];
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.join(__dirname, '../../src/components'),
        '@composables': path.join(__dirname, '../../src/composables'),
        '@': path.resolve(__dirname, '../../src'),
      },
    },
  },
});
