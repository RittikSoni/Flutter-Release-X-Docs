import { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const currentYear = new Date().getFullYear();
const discordServerLink = "https://discord.gg/Tmn6BKwSnr";
const frxPackageLink = "https://pub.dev/packages/flutter_release_x";
const krYouTubeLink = "https://www.youtube.com/@king_rittik?sub_confirmation=1";
const frxGithubLink = "https://github.com/RittikSoni/Flutter-Release-X";
const instaKingRittikLink = "https://instagram.com/kingrittikofficial";
const mediumKingRittikLink = "https://medium.com/@kingrittik";

const config: Config = {
  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.palenight,
    },

    // ✅ Improved Announcement Bar for Better Engagement
    announcementBar: {
      id: "subscribe",
      content: `🚀 New updates! Subscribe to <b><a target="_blank" rel="noopener noreferrer" href=${krYouTubeLink} style="color: yellow;">YouTube</a></b> for the latest features.`,
      backgroundColor: "#FF0000",
      textColor: "#FFFFFF",
      isCloseable: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    colorMode: {
      respectPrefersColorScheme: true,
    },

    // ✅ SEO & Social Media Meta Tags
    metadata: [
      {
        name: "keywords",
        content:
          "frx, flutter, flutter release x, flutter ci/cd, flutter pipeline, flutter automation",
      },
      {
        name: "description",
        content:
          "Flutter Release X - Simplify your Flutter app release process with automation, pipelines, and CI/CD integration.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@king_rittik" }, // TODO: Update with correct Twitter handle
      { name: "twitter:title", content: "Flutter Release X" },
      {
        name: "twitter:description",
        content:
          "Effortlessly release your Flutter apps with automated pipelines.",
      },
      {
        name: "twitter:image",
        content: "https://elpisverse.com/img/social-preview.png",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elpisverse.com" },
      { property: "og:title", content: "Flutter Release X" },
      {
        property: "og:description",
        content:
          "A powerful tool for automating Flutter app releases and CI/CD workflows.",
      },
      {
        property: "og:image",
        content: "https://elpisverse.com/img/social-preview.png",
      },
    ],

    // ✅ Navbar with Call-to-Action Button
    navbar: {
      hideOnScroll: false, // Keeps the navbar visible while scrolling
      title: "Flutter Release X",
      logo: {
        alt: "Flutter Release X Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/docs/community", label: "Community", position: "right" },
        { to: "docs/", label: "Docs", position: "left" },
        {
          type: "docsVersion",
          position: "left",
          to: `${frxPackageLink}`,
          label: "v0.2.0",
        },

        {
          href: `${frxGithubLink}`,
          label: "GitHub",
          position: "right",
        },
        {
          href: `${frxPackageLink}`,
          label: "Pub.dev",
          position: "right",
        },
        {
          href: `${discordServerLink}`,
          label: "Join Discord",
          position: "right",
          className: "navbar__discord",
        },
      ],
    },

    // ✅ Footer
    footer: {
      style: "dark",
      logo: {
        alt: "Flutter Release X Open Source Logo",
        src: "img/frx_open_source.png",
        href: `${frxPackageLink}`,
      },
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting Started", to: "/docs" },
            {
              label: "Advanced Pipelines",
              to: "/docs/configuration#advance-pipeline-config-file",
            },
            { label: "Configuration", to: "/docs/configuration" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: `${discordServerLink}`,
            },
            { label: "Instagram", href: instaKingRittikLink },
            {
              label: "YouTube",
              href: `${krYouTubeLink}`,
            },
            { label: "Medium Blog", href: mediumKingRittikLink },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: `${frxGithubLink}`,
            },
            {
              label: "Pub.dev",
              href: `${frxPackageLink}`,
            },
            { label: "License", to: "/docs/license" },
            { label: "Community", to: "/docs/community" },
          ],
        },
      ],
      copyright: `Copyright © ${currentYear} Flutter Release X. Built with ❤️ using Docusaurus.`,
    },
  },

  title: "Flutter Release X",
  tagline: "Effortless Flutter Releases",
  url: "https://elpisverse.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  presets: [
    [
      "classic",
      {
        docs: { sidebarPath: require.resolve("./sidebars.ts") },
        theme: { customCss: require.resolve("./src/css/custom.css") },
      },
    ],
  ],
};

export default config;
