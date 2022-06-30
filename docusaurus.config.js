// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentacion',
  tagline: 'Herramientas y Tecnologias para desarollo web',
  url: 'https://fedeleva.github.io',
  baseUrl: '/documentacion/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fedeleva', // Usually your GitHub org/user name.
  projectName: 'documentacion', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '7KL6IQT2TV',
        apiKey: '0e0214c26197198d4aadaacea20230af',
        indexName: 'search_documentacion',
        contextualSearch: true,
         placeholder:'Busca en la documentacion' ,
      },
      navbar: {
        title: 'Presentacion',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
        
          
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'La informacion es sacada de:',
            items: [
              {
                label: 'Bluuweb',
                href: 'https://www.youtube.com/c/Bluuweb',
              },
              {
                label: 'Soy Dalto',
                href: 'https://www.youtube.com/c/soydalto',
              },
              {
                label: 'Dorian Desings',
                href: 'https://www.youtube.com/c/DorianDesings',
              },   
              {
                label: 'Mis resumenes',
                href: 'http://localhost:3000/',
              },
       
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Documentacion, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
