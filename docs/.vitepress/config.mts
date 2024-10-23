import { defineConfig } from "vitepress";

export default defineConfig({
  title: "探索者的笔记本",
  description: "",
  base: "/Explorers-Notes",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [],

    socialLinks: [{ icon: "github", link: "https://github.com/hzihhuang" }],
  },
});
