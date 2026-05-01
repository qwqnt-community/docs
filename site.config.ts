import { defineSiteConfig } from 'valaxy';

export default defineSiteConfig({
  lang: 'zh-CN',
  languages: ['zh-CN'],
  title: 'QwQNT',
  description: 'QwQNT 社区文档',
  url: 'https://qwqnt-community.github.io/docs/',
  search: {
    enable: true,
    provider: 'fuse',
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      ignoreLocation: true,
    },
  },
  mediumZoom: {
    enable: true,
  },
  lastUpdated: true,
  llms: {
    enable: true,
  },
});
