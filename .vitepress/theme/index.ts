import '@catppuccin/vitepress/theme/mocha/teal.css';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css';
import 'virtual:group-icons.css';
import DefaultTheme from 'vitepress/theme';
import { InjectionKey, NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import type { Theme } from 'vitepress';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }){
    app.use(NolebaseGitChangelogPlugin);
    app.provide(InjectionKey, {
      locales: {
        'en': {
          changelog: {
            title: 'Changelog',
            noData: 'No recent changes',
            lastEdited: 'This page was last edited {{daysAgo}}',
            lastEditedDateFnsLocaleName: 'enUS',
            viewFullHistory: 'View full history',
            committedOn: ' on {{date}}',
          },
          contributors: {
            title: 'Contributors',
            noData: 'No recent contributors',
          },
        },
        'zh-CN': {
          changelog: {
            title: '页面历史',
            noData: '暂无最近变更历史',
            lastEdited: '本页面最后编辑于 {{daysAgo}}',
            lastEditedDateFnsLocaleName: 'zhCN',
            viewFullHistory: '查看完整历史',
            committedOn: '于 {{date}} 提交',
          },
          contributors: {
            title: '贡献者',
            noData: '暂无最近贡献者',
          },
        },
      },
    });
  },
} satisfies Theme;