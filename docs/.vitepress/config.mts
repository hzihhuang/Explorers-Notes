import { defineConfig } from "vitepress";
import nav from './configs/nav';

const BASE = '/Explorers-Notes'
export default defineConfig({
  title: "探索者的笔记本",
  description: "探索者的笔记，记录着我编程学习过程，包括遇到的挑战和收获。",
  base: BASE,
  head: [
    ['link', { rel: 'icon', href: `${BASE}/logo.png`, type: "image/x-icon" }],
  ],

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "探索者的笔记本",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
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
    nav,
    // 自定义配置
    // @ts-ignore
    visitor: {
      badgeId: 'hzihhuang_dev',
    },

  },
});
