// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Front End Programming',
  tagline: 'Haaga-Helia Front End Programming course',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://haagahelia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/frontendprogramming/',
  plugins: ['@docusaurus/theme-live-codeblock'],
 
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haagahelia', // Usually your GitHub org/user name.
  projectName: 'frontendprogramming', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          remarkPlugins: [
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'MB3I4A58K3',

        // Public API key: it is safe to commit it
        apiKey: '742137e5fcae295479213f2064afa9ac',
  
        indexName: 'frontendprogramming',
        contextualSearch: false,
      },
      navbar: {
        title: 'Front End Programming',
        logo: {
          alt: 'Haaga-Helia',
          src: 'img/haagahelia.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Course Material',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Haaga-Helia',
            items: [
              {
                label: 'Moodle',
                href: 'https://hhmoodle.haaga-helia.fi/login/index.php',
              },
            ],
          },
          {
            title: 'Powered By Docusaurus',
            items: [
            ],
          },
        ],
        copyright: `Front End Programming © (${new Date().getFullYear()}) is licensed under CC BY-NC-SA 4.0`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json'],
      },
      markdown: {
        mermaid: true,
      },
      themes: ['@docusaurus/theme-mermaid'],
    }),
};

module.exports = config;
