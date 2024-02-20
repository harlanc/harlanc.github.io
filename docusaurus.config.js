const path = require('path')
const fs = require('fs')

// Change this value to update what the un-versioned docs url should be
const unreleasedTauriVersion = 'v0.10.0'
var lastestReleasedVersion

// Checks if Docusaurus has been versioned before and sets versions accordingly
try {
  lastestReleasedVersion = JSON.parse(
    fs.readFileSync('versions.json', 'utf-8')
  )[0]
} catch {
  console.error()
}

const repoUrl = 'https://github.com/harlanc/xiu'

const navbarItems = [
  {
    label: 'Docs',
    type: 'docSidebar',
    sidebarId: 'docs',
  },
  
  {
    label: 'Blog',
    type: 'docSidebar',
    sidebarId: 'blog',
  },

  {
    href: repoUrl,
    'aria-label': 'GitHub',
    position: 'right',
    className: 'navbarIcon gitHubIcon',
    target: '_self',
  },
  {
    type: 'localeDropdown',
    position: 'right',
    // dropdownItemsAfter: [
    //   {
    //     to: 'https://tauri.crowdin.com/documentation',
    //     label: 'Help us translate',
    //   },
    // ],
  },

]

const footerLinks = [
  {
    title: 'Learning',
    items: [
      {
        label: 'Docs',
        to: 'v0.10.0/docs',
      },
      {
        label: 'Blog',
        to: 'v0.10.0/blog',
      },
      // {
      //   label: 'TAO',
      //   href: 'https://github.com/tauri-apps/tao',
      //   target: '_self',
      // },
      // {
      //   label: 'WRY',
      //   href: 'https://github.com/tauri-apps/wry',
      //   target: '_self',
      // },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        label: 'Mail',
        href: 'mailto:harlanc@foxmail.com',
        target: '_self',
      },

    ],
  },
  {
    title: 'Network',
    items: [
      // {
      //   label: 'Blog',
      //   href: 'https://beta.tauri.app/blog',
      // },
      // {
      //   label: 'OpenCollective',
      //   href: 'https://opencollective.com/tauri',
      //   target: '_self',
      // },
      {
        label: 'GitHub',
        href: 'https://github.com/harlanc/xiu',
        target: '_self',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'Discord',
        href: 'https://discord.gg/gS5wBRtpcB',
        target: '_self',
      },
    ],
  },
]

async function siteConfig() {
  const mdxMermaid = await import('mdx-mermaid')
  return {
    title: 'XIU',
    tagline:
      'Building a Stable, Secure, and Efficient Live Streaming Media Service',
    organizationName: 'harlanc',
    projectName: 'harlanc.github.io',
    baseUrl: '/',
    favicon: '/meta/xiu.png',
    url: 'https://harlanc.github.io/',
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'zh-cn',],
    },
    themeConfig: {
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/oceanicNext'),
        additionalLanguages: ['rust', 'powershell', 'bash', 'toml', 'json5'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        content:
          "<b>🚀 The <a id='announcement-link' href='https://github.com/harlanc/xiu/releases/tag/v0.10.0'>XIU v0.10.0</a> has launched!</b>",
        backgroundColor: 'var(--ifm-color-primary)',
        textColor: 'var(--ifm-button-color)',
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'XIU Logo',
          src: 'meta/xiu_logo.svg',
          srcDark: 'meta/xiu_logo.svg',
        },
        items: navbarItems,
      },

      footer: {
        style: 'dark',
        links: footerLinks,
        copyright: `Copyright © 2020 - ${new Date().getFullYear()} XIU. CC-BY / MIT`,
      },
      algolia: {
        apiKey: '56e45b617c6be4d5f106686843d55980',
        indexName: 'harlancio',
        appId: '0TA4S52VKE',
        placeholder: 'Search...'
      },
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            routeBasePath: '/',
            path: './docs/',
            exclude: ['api/rust/**', 'api/js/js-api.json', '**/_*.{md,mdx}'],
            sidebarPath: require.resolve('./sidebars.js'),
            showLastUpdateTime: true,
            editUrl: ({ docPath, versionDocsDirPath }) => {
              if (docPath === 'api/cli.md') {
                return 'https://github.com/tauri-apps/tauri/tree/dev/tooling/cli/src'
              } else if (docPath === 'api/config.md') {
                return 'https://github.com/tauri-apps/tauri/edit/dev/core/tauri-utils/src/config.rs'
              } else if (docPath.startsWith('api/js')) {
                const mod = docPath.split('/').at(-1).split('.')[0]
                return `https://github.com/tauri-apps/tauri/edit/dev/tooling/api/src/${mod}.ts`
              } else {
                return `https://github.com/harlanc/xiu-doc/edit/dev/${versionDocsDirPath}/${docPath}`
              }
            },
            sidebarCollapsible: true,
            versions: {
              // Maps the working "current" version to a custom url instead of `next`
              current: {
                label: unreleasedTauriVersion,
                path: unreleasedTauriVersion,
              },
              // If there is a "latest" version, map url to version number
              ...(lastestReleasedVersion && {
                [lastestReleasedVersion]: {
                  label: lastestReleasedVersion,
                  path: lastestReleasedVersion,
                },
              }),
            },
            remarkPlugins: [
              [
                mdxMermaid.default,
                {
                  mermaid: {
                    theme: 'default',
                    themeCSS: fs.readFileSync('./src/css/mermaid.css', 'utf-8'),
                  },
                },
              ],
            ],
            async sidebarItemsGenerator({
              defaultSidebarItemsGenerator,
              ...args
            }) {
              const sidebarItems = await defaultSidebarItemsGenerator(args)
              return sidebarItems.filter(
                (item) =>
                  // This makes sure that the landing pages are not duplicated in the sidebars
                  item.id !== 'docs/readme' && item.id !== 'blog/readme'
              )
            },
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },

          googleAnalytics: {
            trackingID: 'G-2H6DLY9T0Y',
            anonymizeIP: true,
          },
        },
      ],
    ],
    plugins: [
      path.resolve('./plugins/external-assets'),
      [
        '@docusaurus/plugin-pwa',
        {
          debug: process.env.NODE_ENV === 'development',
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'saveData',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/meta/favicon-96x96.png',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'link',
              rel: 'apple-touch-icon',
              href: '/meta/favicon-apple-touch-icon.png',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileImage',
              content: '/meta/favicon-144x144.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/meta/manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: '#0F0F0F',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#0F0F0F',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileColor',
              content: '#0F0F0F',
            },
          ],
        },
      ],
    ],

    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve('esbuild-loader'),
        options: {
          loader: 'tsx',
          format: isServer ? 'cjs' : undefined,
          target: isServer ? 'node12' : 'es2017',
        },
      }),
    },
  }
}

module.exports = siteConfig
