// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Basil.css",
  tagline: "A lightwight CSS framework",
  favicon: "img/basilcss-transparent.png",

  // Set the production url of your site here
  url: "https://basilcss.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Basilcss", // Usually your GitHub org/user name.
  projectName: "Basilcss/core", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: "/",
          editUrl: "https://github.com/Basilcss/docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/basilcss-transparent.png",
      navbar: {
        title: "Basil.css",
        logo: {
          alt: "My Site Logo",
          src: "img/basilcss-transparent.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/Basilcss",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://demo.basilcss.com/",
            label: "Demo",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },

          {
            title: "Participate",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Basilcss",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Basil.css.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
}

module.exports = config
