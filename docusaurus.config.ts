import { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const currentYear = new Date().getFullYear();
const discordServerLink = "https://discord.gg/Tmn6BKwSnr";
const frxPackageLink = "https://pub.dev/packages/flutter_release_x";
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
      content: `🚀 New updates! Subscribe to <b><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@king_rittik?sub_confirmation=1" style="color: yellow;">YouTube</a></b> for the latest features.`,
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
      { name: "twitter:site", content: "@Rittik__Soni" },
      { name: "twitter:title", content: "Flutter Release X" },
      {
        name: "twitter:description",
        content:
          "Effortlessly release your Flutter apps with automated pipelines.",
      },
      {
        name: "twitter:image",
        content: "img/logo.png",
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
        content: "img/logo.png",
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
        { to: "docs/", label: "Docs", position: "left" },
        { to: "/docs/community", label: "Community", position: "left" },
        {
          type: "docsVersion",
          position: "right",
          to: `${frxPackageLink}`,
          label: "v0.2.0",
        },

        {
          href: `${frxGithubLink}`,

          html: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
          <g fill="#c8c8c8" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
          </svg>`,
          position: "right",
        },
        {
          href: `${frxPackageLink}`,

          html: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
          <linearGradient id="gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1" x1="34.31" x2="21.223" y1="47.31" y2="34.223" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0176d0"></stop><stop offset=".454" stop-color="#0275ce"></stop><stop offset=".617" stop-color="#0472c7"></stop><stop offset=".733" stop-color="#076bbc"></stop><stop offset=".827" stop-color="#0d63ab"></stop><stop offset=".907" stop-color="#135895"></stop><stop offset=".933" stop-color="#16538c"></stop></linearGradient><polygon fill="url(#gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1)" points="37,44 25,44 14,33 20,27"></polygon><polygon fill="#50e6ff" points="5,24 25,4 37,4 11,30"></polygon><polygon fill="#50e6ff" points="37,22 20,39 14,33 25,22"></polygon><rect width="8.485" height="8.485" x="15.757" y="28.757" fill="#35c1f1" transform="rotate(-45.001 20 33)"></rect>
          </svg>`,
          position: "right",
        },
        {
          href: `${discordServerLink}`,
          html: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
</svg>`,

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
        href: `${frxGithubLink}`,
        target: "_blank",
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
              href: "https://www.youtube.com/@king_rittik?sub_confirmation=1",
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
      copyright: `Copyright © ${currentYear} Flutter Release X.`,
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
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

export default config;
