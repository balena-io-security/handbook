// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Balena Security Handbook",
  tagline: "Dinosaurs are cool",
  // TODO: use the custom domain as the base url once we get the DNS set up
  // url: "https://security.balena.io",
  // baseUrl: "/",
  url: "https://balenaltd.github.io",
  baseUrl: "/security/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/balenaltd/security/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/balenaltd/security/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Balena Security",
        logo: {
          alt: "Balena Logo",
          src: "img/balena_icon.png",
        },
        items: [
          // { to: "/blog", label: "Blog", position: "left" }, // TODO: Uncomment when the first blog post is made
          {
            href: "https://github.com/balenaltd/security",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Forums",
                href: "https://forums.balena.io/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/balena_io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Balena Handbook",
                href: "https://handbook.balena.io/",
              },
              {
                label: "GitHub",
                href: "https://github.com/balenaltd/security",
              },
            ],
          },
        ],
        copyright: `Imagined by Balena. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        hashed: true,
        docsRouteBasePath: "/",
        searchBarShortcutHint: false,
      },
    ],
  ],
};

module.exports = config;
