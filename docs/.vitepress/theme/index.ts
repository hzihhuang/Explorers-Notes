import DefaultTheme from "vitepress/theme";
import "./styles/index.scss";
import Layout from "./Layout.vue";

export default {
  ...DefaultTheme,
  Layout
};

// 检查浏览器，添加到类以进行条件样式
if (typeof window !== 'undefined') {
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}