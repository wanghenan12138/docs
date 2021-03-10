module.exports = {
  title: 'Weblog',
  description: '王贺楠的个人博客',
  base: '/weblog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  port: 8080,
  markdown: {
    lineNumbers: true
  },
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    overrideTheme: 'dark',
    sidebar: 'auto',
    repo: 'https://github.com/wanghenan12138',
    repoLabel: 'Github',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      {
        text: '高频知识点',
        link: '/interview/'
      },
      {
        text: '项目集',
        link: '/projects/'
      },
      {
        text: '算法',
        link: '/algorithm/'
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
      '/webpack/': [{
        title: 'Webpack',
        collapsable: false,
        children: [
          '/webpack/',
          '/webpack/install.md',
          '/webpack/start.md',
          '/webpack/static.md',
          '/webpack/core.md',
          '/webpack/advanced.md',
          '/webpack/case.md',
          '/webpack/optimization.md',
          '/webpack/loader.md',
          '/webpack/plugin.md'
        ]
      }],
      '/interview/': [{
        title: 'Interview',
        collapsable: false,
        children: [
          '/interview/'
        ]
      }]
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
        '@images': '../images'
      }
    }
  }
}