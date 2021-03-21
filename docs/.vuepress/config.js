module.exports = {
  title: 'Weblog',
  description: '王贺楠的个人博客',
  base: '/weblog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  port: 8080,
  markdown: {
    lineNumbers: false
  },
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    overrideTheme: 'light',
    sidebar: 'auto',
    repo: 'https://github.com/wanghenan12138',
    repoLabel: 'Github',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      {
        text: '面试',
        items: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/css/' },
          { text: 'JavaScript', link: '/javascript/' },
          { text: '网络', link: '/internet/' }
        ]
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
        text: 'Vue',
        link: '/vue/design/'
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
      '/bigFE/': [{
        title: '大前端',
        collapsable: false,
        children: [
          '/bigFE/'
        ]
      }],
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
      '/vue/': [
        {
          title: '源码目录设计和架构设计',
          collapsable: false,
          children: ['design/']
        },
        {
          title: 'Rollup构建版本',
          collapsable: false,
          children: [
            'rollup/',
            'rollup/vue'
          ]
        },
        {
          title: '从入口到构造函数整体流程',
          collapsable: false,
          children: [
            'entry/',
            'entry/global',
            'entry/init',
            'entry/state',
            'entry/events',
            'entry/lifecycle',
            'entry/render'
          ]
        },
        {
          title: '响应式原理',
          collapsable: false,
          children: [
            'reactive/',
            'reactive/prepare',
            'reactive/props',
            'reactive/methods',
            'reactive/data',
            'reactive/computed',
            'reactive/watch',
            'reactive/reactive',
            'reactive/dep',
            'reactive/notify',
            'reactive/nexttick',
            'reactive/problem',
            'reactive/api'
          ]
        },
        {
          title: '虚拟DOM和VNode',
          collapsable: false,
          children: [
            'dom/',
            'dom/vnode',
            'dom/diff'
          ]
        },
        {
          title: '组件化',
          collapsable: false,
          children: [
            'component/',
            'component/mount',
            'component/render',
            'component/createElement',
            'component/createComponent',
            'component/merge',
            'component/patch',
            'component/lifecycle',
            'component/register'
          ]
        },
        {
          title: '编译原理',
          collapsable: false,
          children: [
            'compile/',
            'compile/compileToFunctions',
            'compile/parse',
            'compile/optimize',
            'compile/codegen'
          ]
        },
        {
          title: '扩展',
          collapsable: false,
          children: [
            'expand/',
            'expand/directive',
            'expand/filter',
            'expand/event',
            'expand/vmodel',
            'expand/slot',
            'expand/keep-alive',
            'expand/transition',
            'expand/transition-group',
            'expand/plugin'
          ]
        }
      ],

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