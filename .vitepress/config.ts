import { defineConfig } from 'vitepress';
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

process.env.VITE_EXTRA_EXTENSIONS = 'z01';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',
  base: '/docs/',
  cleanUrls: true,

  lang: 'zh-CN',
  title: 'QwQNT',
  description: 'QwQNT 社区驱动文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qwqnt-community/' },
    ],
  },

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
    config(md){
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin(),
      GitChangelog({
        repoURL: 'https://github.com/qwqnt-community/docs',
      }),
      GitChangelogMarkdownSection(),
    ],
  },
});
