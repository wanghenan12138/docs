const nav = require('./utils/nav.js');
const { webpackSidebar, vueAnalysisSidebar, vueNextAnalysisSidebar } = nav;

module.exports = {
  title: '王贺楠',
  description: '王贺楠的个人博客',
  base: '/weblog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  port: 8080,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/wanghenan12138',
    repoLabel: 'Github',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      {
        text: '面试之道',
        items: [
          {
            text: 'Javascript',
            link: '/interview/'
          },
          {
            text: '算法',
            link: '/algorithm/'
          }
        ]
      },
      {
        text: 'Webpack',
        link: '/webpack/'
      },
      {
        text: 'TypeScript',
        link: '/typescript/'
      },
      {
        text: 'Git基本使用',
        link: '/git/'
      }
    ],
    sidebar: {
      '/webpack/': [webpackSidebar],
    }
  },
  plugins: [
    '@vuepress/active-header-links', 
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images',
        '@vuepress': '../images/vuepress',
        '@components': '../.vuepress/components'
      }
    }
  }
}