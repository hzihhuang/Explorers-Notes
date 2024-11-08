import * as path from "path";
import { defineConfig } from "rspress/config";
import { pluginSass } from "@rsbuild/plugin-sass";
import nav from "./configs/nav";
import sidebar from "./configs/sidebar";

export default defineConfig({
  title: "探索者的笔记本",
  description: "探索者的笔记，记录着我编程学习过程，包括遇到的挑战和收获。",
  icon: "/logo.png",
  logoText: "探索者的笔记本",
  logo: "/logo.png",
  themeConfig: {
    enableContentAnimation: true, // 内容动画
    enableAppearanceAnimation: true, // 主题切换动画
    enableScrollToTop: true, // 返回顶部按钮
    lastUpdated: true, // 最后更新时间
    hideNavbar: "auto", // 滚动隐藏导航栏
    outlineTitle: "目录",
    nav,
    sidebar,
    socialLinks: [
      { icon: "github", mode: "link", content: "https://github.com/hzihhuang" },
      {
        icon: "qq",
        mode: "img",
        content:
          "https://hzihhuang-site.github.io/h-blog/assets/images/QQ%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",
      },
      {
        icon: "wechat",
        mode: "img",
        content:
          "https://hzihhuang-site.github.io/h-blog/assets/images/%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg",
      },
    ],
    footer: {
      message:
        "<p>知识的积累，是时间的沉淀，愿这份耕耘能滋养每一个探索者的心田。</p><p>Copyright © 2024-present hzihhuang</p>",
    },
  },

  root: path.join(__dirname, "docs"),
  outDir: "dist",
  base: "/Explorers-Notes",
  builderConfig: {
    source: {
      alias: {
        "@": "./theme",
      },
    },
  },

  globalStyles: path.join(__dirname, "./theme/styles/index.scss"),
  plugins: [pluginSass()],
});
