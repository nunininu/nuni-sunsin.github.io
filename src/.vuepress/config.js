import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'nunininu의 기술블로그',
  description: "엑셀도 두렵지 않은 개발자입니다",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '젊은 늙은이 nunininu의 기술블로그' }],
    ['meta', { property: 'og:description', content: '엑셀도 두렵지 않은 개발자입니다' }],
    ['meta', { property: 'og:image', content: 'https://blog.nunininu.shop/images/repository-open-graph-nunininu.jpg' }],
    ['meta', { property: 'og:url', content: 'https://blog.nunininu.shop' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/logo.jpg",
    logoDark: "/images/logoDark.webp",

    repo: "https://github.com/oss-cashmallow/oss-cashmallow.github.io/discussions",
    repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "nunininu", link: "https://www.cashmallow.com" },
      { text: "nunininu", link: "/team/recruit/" },
    ],

    sidebar: {
      "/": [
        {
          text: "resume",
          collapsible: true,
          children: [
            "/resume/",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({

    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-4NMC1K5VGF",
      debug: true,
    }),
  ],

})
