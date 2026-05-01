import { defineValaxyConfig } from 'valaxy';
import { addonGitLog } from 'valaxy-addon-git-log';

export default defineValaxyConfig({
  theme: 'press',
  themeConfig: {
    logo: '/valaxy-logo.png',
    socialLinks: [
      { icon: 'i-ri-github-line', link: 'https://github.com/qwqnt-community/' },
    ],
    nav: [
      { text: '主页', link: '/' },
      { text: '框架介绍', link: '/framework/' },
      { text: '开发指南', link: '/development/' },
    ],
    sidebar: [
      {
        text: '框架介绍',
        link: '/framework/',
        items: [
          { text: '获取框架', link: '/framework/get-framework' },
          { text: '开源策略', link: '/framework/open-source' },
          { text: '反馈问题', link: '/framework/feedback' },
          { text: 'LiteLoaderQQNT 兼容', link: '/framework/adapt-liteloaderqqnt' },
          { text: '活动存档', link: '/framework/event-archive' },
        ],
      },
      {
        text: '开发指南',
        link: '/development/',
        items: [
          { text: '开发规范', link: '/development/development-standards' },
          { text: '构建环境', link: '/development/setup-environment' },
          { text: '迈出第一步', link: '/development/first-step' },
        ],
      },
    ],
    footer: {
      message: 'QwQNT Community | Powered by <a href="https://valaxy.site">Valaxy</a>',
    },
  },
  vite: {
    base: '/',
  },
  math: true,
  markdown: {
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
      },
      warning: {
        icon: 'i-carbon-warning-alt',
      },
      danger: {
        icon: 'i-carbon-warning',
      },
      info: {
        icon: 'i-carbon-information',
      },
    },

    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, '[!code')
        },
      },
    ],
  },
  unocss: {
    safelist: [
      'i-ri-book-2-line',
      'i-ri-flashlight-line',
      'i-ri-palette-line',
    ],
  },

  addons: [
    addonGitLog({
      repositoryUrl: 'https://github.com/qwqnt-community/docs.git',
      contributor: {
        strategy: 'prebuilt',
      },
    }),
  ],
});
