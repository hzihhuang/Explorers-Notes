import { defineConfig } from "vitepress";

export default defineConfig({
  title: "探索者的笔记本",
  description: "探索者的笔记，记录着我编程学习过程，包括遇到的挑战和收获。",
  base: "/Explorers-Notes",
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/61496900?v=4&size=40', type: "image/x-icon" }],
  ],

  themeConfig: {
    logo: "https://avatars.githubusercontent.com/u/171891773?v=4",
    siteTitle: "探索者的笔记本",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
    nav: [{ text: "Home", link: "/" }],
    search: {
      provider: 'local'
    },
    sidebar: [],
    socialLinks: [
      { icon: "github", link: "https://github.com/hzihhuang" },
      { icon: "npm", link: "https://www.npmjs.com/~hzihhuang" }
    ],

    footer: {
      message: "知识的积累，是时间的沉淀，愿这份耕耘能滋养每一个探索者的心田。",
      copyright: 'Copyright © 2024-present hzihhuang'
    },
    // 自定义配置
    // @ts-ignore
    visitor: {
      badgeId: 'hzihhuang_dev',
    },

  },
});
