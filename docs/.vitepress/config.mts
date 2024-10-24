import { defineConfig } from "vitepress";

export default defineConfig({
  title: "探索者的笔记本",
  description: "",
  
  base: "/Explorers-Notes",
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
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

    // 自定义配置

    // @ts-ignore
    visitor: {
      badgeId: 'hzihhuang_dev',
    },
  },
});
