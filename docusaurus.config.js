const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Mylinx',
  tagline: 'Unlock the full power of your links with Mylinx—trusted worldwide for automated customization, deep linking, and click analytics through our API.',
  url: 'https://docs.mylinx.cc',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'mylinx-llc', // Usually your GitHub org/user name.
  projectName: 'docs-mylinx', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/mylinx-llc/docs-mylinx/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/mylinx-llc/docs-mylinx/main/website/blog/',
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
      navbar: {
        title: 'DEVELOPER',
        logo: {
          alt: 'Mylinx logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'main',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'tutorials/shorten-and-customize-link',
            position: 'left',
            label: 'Shorten URL',
          },
          /* {to: '/blog', label: 'Blog', position: 'left'}, */
          {
            href: 'https://github.com/mylinx-llc/docs-mylinx',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Main',
                to: '/docs/main',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/mylinx',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/fanWUQgygx',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/MylinxOfficial',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mylinx-llc/docs-mylinx',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mylinx, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
