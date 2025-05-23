import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '芯梯科技',
  description: '构建洞察因果的AI，探索深度人机协作，打造以人为本的应用',
  lang: 'zh-CN',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: '芯梯科技 | SiCoreLadder' }],
    ['meta', { property: 'og:site_name', content: '芯梯科技' }],
    ['meta', { property: 'og:image', content: '/assets/Kabipula.png' }],
    ['meta', { property: 'og:url', content: 'https://1587causalai.github.io/SiCoreLadder/' }],
  ],

  themeConfig: {
    logo: '/assets/Kabipula.png',
    
    nav: [
      { text: '关于我们', link: '/intro' },
      { text: '技术基石', link: '/core_technology' },
      { text: '协作智能', link: '/projects/human_collaboration' },
      { text: '行业赋能', link: '/solutions/industry-cases' },
      { text: '联系我们', link: '/contact' }
    ],

    sidebar: false, // 禁用侧边栏
    
    // 禁用右侧目录栏
    outline: false,
    
    // 或者如果你想要可点击显示的目录栏，使用以下配置：
    // outline: {
    //   level: [2, 3],
    //   label: '页面目录'
    // },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/1587causalai/SiCoreLadder' }
    ],

    footer: {
      message: '构建洞察因果的AI，探索深度人机协作，打造以人为本的应用',
      copyright: 'Copyright © 2024 芯梯科技 (SiCoreLadder)'
    },

    editLink: {
      pattern: 'https://github.com/1587causalai/SiCoreLadder/edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  vue: {
    reactivityTransform: true
  }
}) 