import path from 'node:path';
import { defineConfig, PageData } from 'vitepress';
import tailwindcss from '@tailwindcss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Timothée Lafay 👨🏻‍💻",
  description: "Ceci est mon portfolio. Vous y trouverez mes projets personnels et mes projets de l'école 42.",
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Expériences',
        link: '/experiences/',
      },
      {
        text: 'Projets',
        link: '/projects/',
      },
      { text: 'A propos de moi', link: '/about-me' },
    ],

    sidebar: {
      '/projects': [
        {
          text: 'Projets',
          collapsed: false,
          items: [
            {
              text: 'Projets 42', link: '/projects/42/', collapsed: true, items: [
                { text: 'Taskmaster', link: '/projects/42/taskmaster' },
                { text: 'Rainfall', link: '/projects/42/rainfall' },
                { text: 'Snowcrash', link: '/projects/42/snowcrash' },

              ],
            },
            {
              text: 'Projets personnels', link: '/projects/personal/', collapsed: true, items: [
                { text: '2ez', link: '/projects/personal/2ez' },
                { text: 'Portfolio', link: '/projects/personal/portfolio' },
              ]
            },
          ]
        },
      ],
      '/experiences': [
        {
          text: 'Experiences',
          collapsed: false,
          items: [
            {
              text: 'Stage', link: '/experiences/internship-itd.md', collapsed: true, items: [
                { text: 'IT-Development', link: '/experiences/internship-itd.md' },
                { text: 'ENE', link: '/experiences/internship-ene.md' },
              ]
            },
            { text: 'Alternance', link: '/experiences/apprenticeship-itd.md' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/timothee-lafay/' },
      {
        icon: {
          svg: '<svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.001 330.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_348_"> <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602 L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"></path> <polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 "></polygon> </g> </g></svg>'
        },
        link: 'mailto: tlafay@student.42lyon.fr'
      },
      { icon: 'github', link: 'https://github.com/Tlafay1' }
    ],
    footer: {
      message: 'Créé avec VitePress - <a href="https://github.com/Tlafay1/portfolio" target="_blank"> Code source </a>',
    },
    search: {
      provider: 'algolia',
      options: {
        apiKey: 'fcd7c30ad6914e89808be1e6541bbdc3',
        indexName: 'tlafay1io',
        appId: 'KYLBEVKZAL',
        sitemaps: [
          "https://tlafay1.github.io/portfolio/sitemap.xml"
        ],
        exclusionPatterns: [
          "/experiences/",
          "/projects/"
        ],
      }
    },
  },
  sitemap: {
    hostname: 'https://tlafay1.github.io/portfolio/'
  },
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Portfolio',
      description: "This is my portfolio. You will find my personal projects and my 42 school projects.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Projects', link: '/en/projects' },
          { text: 'About me', link: '/en/about-me' },
        ],

        sidebar: [
          {
            text: 'Projects',
            items: [
              {
                text: 'Projects', link: '/projects/', items: [
                  { text: 'personal projects', link: '/projects/personal/' },
                  { text: '42 projects', link: '/projects/42/' },
                ]
              },
            ]
          },
        ],
        footer: {
          message: 'Generated using VitePress - <a href="https://github.com/Tlafay1/portfolio" target="_blank"> Source code </a>',
        }
      }
    },
  },
  transformPageData(pageData: PageData) {
    pageData.title = pageData.relativePath.replace(/\.[^/.]+$/, "").split('/').map(elem => { elem = elem.replace(/-/g, " "); return elem.charAt(0).toUpperCase() + elem.slice(1) }).join(' | ');
    return pageData;
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@components': path.join(__dirname, '../../src/components'),
        '@composables': path.join(__dirname, '../../src/composables'),
        '@': path.resolve(__dirname, '../../src'),
      },
    },
  },
  // head: [
  //   [
  //     'script',
  //     { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-L6CJHN29W7' }
  //   ],
  //   [
  //     'script',
  //     {},
  //     `window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());
  //     gtag('config', 'G-L6CJHN29W7');`
  //   ]
  // ]
})
