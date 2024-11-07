import { ReactNode } from "react";
import { YayText } from './icons/base64';

export type ItemsType = {
    icon?: ReactNode;
    title: string;
    desc: string;
    link: string;
}

/** 在线工具站点 */
export const TOOL: ItemsType[] = [
    {
        title: "Can I use",
        desc: "一个查询 CSS、HTML5、SVG 等前端技术兼容性的网站",
        link: "https://caniuse.com/",
        icon: "https://caniuse.com/img/favicon-128.png",
    },
    {
        title: "JSDELIVR",
        desc: "一个免费、快速的 CDN 服务，用于托管和分发 JavaScript 库和框架",
        link: "https://www.jsdelivr.com/",
        icon: "https://www.jsdelivr.com/favicon.ico",
    },
    {
        title: "cdnjs",
        desc: "一个免费、快速的 CDN 服务，用于托管和分发 JavaScript 库和框架",
        link: "https://cdnjs.com/",
        icon: "https://cdnjs.com/favicon.png",
    },
    {
        title: "Wappalyzer",
        desc: "一个用于检测网站所使用的技术和工具的浏览器扩展程序",
        link: "https://www.wappalyzer.com/",
        icon: "https://www.wappalyzer.com/favicon.ico",
    },
    {
        title: "Lorem Picsum",
        desc: "一个生成随机图片的网站，可以生成指定尺寸、格式和数量的图片",
        link: "https://picsum.photos/",
        icon: "https://picsum.photos/favicon.ico",
    },
    {
        title: "TinyPNG",
        desc: "一个在线的图片压缩工具, 专门用于压缩WebP、JPEG和PNG格式的图片",
        link: "https://tinypng.com/",
        icon: "https://tinypng.com/static/images/george-account-page.webp",
    },
    {
        title: "iloveimg",
        desc: "一个在线的图片处理工具网站，可以用于压缩、调整大小、裁剪、旋转、添加水印等操作",
        link: "https://www.iloveimg.com/",
        icon: "https://www.iloveimg.com/img/favicons-img/favicon-16x16.png",
    },
    {
        title: "Squoosh",
        desc: "一个由 Google 开发的开源图片压缩工具，可以用于压缩 JPEG、WebP 和 PNG 格式的图片",
        link: "https://squoosh.app/",
        icon: "https://squoosh.app/c/favicon-c9cf50ef.ico",
    },
    {
        title: "Sprite Generator",
        desc: "一个在线的图片精灵生成工具，可以将多个图片合并成一个精灵图",
        link: "https://www.toptal.com/developers/css/sprite-generator",
        icon: "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png",
    },
    {
        title: "PIX FIX",
        desc: "一个在线的图片修复工具，可以修复老照片、破损图片等",
        link: "https://zh.pixfix.com/",
        icon: "https://d1r4k4kkp2obq0.cloudfront.net/p/assets/images/pix-fix-logo_5c1a1fb511a02582851d6978a26e4173.svg",
    },
    {
        title: "Remove BG",
        desc: "一个在线的图片背景移除工具，可以快速移除图片背景",
        link: "https://www.remove.bg/zh",
        icon: "https://www.remove.bg/favicon.ico",
    },
    {
        title: "Magic Eraser",
        desc: "使用 AI 技术对图片进行处理的工具",
        link: "https://www.magiceraser.io/",
        icon: "https://meta.magicstudio.com/assets/ie-logo-mobile.svg"
    },
    {
        title: "YayText",
        desc: "快速生成自带字体的文字",
        link: "https://yaytext.com/",
        icon: YayText,
    },
    {
        title: "Color Hunt",
        desc: "一个提供色彩搭配灵感的设计网站",
        link: "https://colorhunt.co/",
        icon: "https://colorhunt.co/img/colorhunt-favicon.svg",
    },
    {
        title: "ColorSpace",
        desc: "一个在线的渐变色工具网站，可以生成各种颜色搭配方案",
        link: "https://mycolor.space/",
        icon: "https://mycolor.space/img/color-space-logo.png",
    },
    {
        title: "Glassmorphism",
        desc: "快速生成玻璃质感效果的 CSS 代码",
        link: "https://hype4.academy/tools/glassmorphism-generator",
        icon: "https://hype4.academy/_next/static/media/pix3.fb29b890.png",
    },
    {
        title: "Claymorphism",
        desc: "快速生成牛奶气泡效果的 CSS 代码",
        link: "https://hype4.academy/tools/claymorphism-generator",
        icon: "https://hype4.academy/_next/static/media/logo.b6977cf7.svg",
    },
    {
        title: "Neumorphism",
        desc: "快速生成新拟态效果的 CSS 代码",
        link: "https://hype4.academy/tools/neumorphism-generator",
        icon: "https://hype4.academy/_next/static/media/logo.b6977cf7.svg",
    },
]

export const ReactST: ItemsType[] = [
    {
        title: "React",
        desc: 'React 官方文档',
        link: 'https://react.dev/',
        icon: 'https://react.dev/favicon-32x32.png'
    },
    {
        title: "React Router",
        desc: 'React 路由库',
        link: 'https://reactrouter.com/en/main',
        icon: 'https://reactrouter.com/favicon-light.png',
    },
    {
        title: "Redux",
        desc: 'React 状态管理库',
        link: 'https://redux.js.org/',
        icon: 'https://redux.js.org/img/redux.svg',
    },
    {
        title: 'ahooks',
        desc: 'React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN',
        icon: 'https://ahooks.js.org/simple-logo.svg',
    },
    {
        title: "UmiJS",
        desc: 'React 应用框架',
        link: 'https://umijs.org/',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png',
    },
    {
        title: "DumiJS",
        desc: 'React 组件文档生成框架',
        link: 'https://d.umijs.org/',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    },
    {
        title: 'Next.js',
        desc: 'React 服务端渲染框架',
        link: 'https://nextjs.org/',
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
    },
    {
        title: "Ant Design",
        desc: 'React UI 组件库',
        link: 'https://ant.design/',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
    {
        title: "Ant Design Mobile",
        desc: 'React 移动端 UI 组件库',
        link: 'https://mobile.ant.design/',
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
    },
    {
        title: "Ant Design Pro",
        desc: 'React 中后台框架',
        link: 'https://pro.ant.design/',
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
    }
]

export const VueST: ItemsType[] = [
    {
        title: 'Vue',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org/',
        icon: 'https://cn.vuejs.org/logo.svg',
    },
    {
        title: 'Vue2',
        desc: 'Vue 的第二个主要版本',
        link: 'https://cn.vuejs.org/',
        icon: 'https://cn.vuejs.org/logo.svg',
    },
    {
        title: 'Vue Router',
        desc: 'Vue 官方路由管理器',
        link: 'https://router.vuejs.org/',
        icon: 'https://cn.vuejs.org/logo.svg',
    },
    {
        title: 'Vuex',
        desc: 'Vue 状态管理库',
        link: 'https://vuex.vuejs.org/',
        icon: 'https://cn.vuejs.org/logo.svg',
    },
    {
        title: 'Pinia',
        desc: '轻量级 Vue 状态管理',
        link: 'https://pinia.vuejs.org/',
        icon: 'https://pinia.vuejs.org/logo.svg'
    },
    {
        title: 'VueHook Plus',
        desc: 'Vue Hook 工具库',
        link: 'https://inhiblabcore.github.io/docs/hooks/index.html',
        icon: 'https://inhiblabcore.github.io/docs/hooks/logo.svg',
    },
    {
        title: 'Nuxt.js',
        desc: 'Vue 通用应用框架',
        link: 'https://nuxtjs.org/',
        icon: 'https://nuxt.com/icon.png',
    },
    {
        title: 'Element UI',
        desc: 'Vue 2.0 UI 组件库',
        link: 'https://element.eleme.io/',
        icon: 'https://element.eleme.io/favicon.ico',
    },
    {
        title: 'Element Plus',
        desc: 'Vue 3.0 UI 组件库',
        link: 'https://element-plus.org/',
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
    },
    {
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现',
        link: 'https://www.antdv.com/',
        icon: 'https://next.antdv.com/assets/logo.1ef800a8.svg'
    }
]

export const CSS: ItemsType[] = [
    {
        title: 'Sass',
        desc: 'Sass 是一种成熟、稳定且功能强大的 CSS 预处理器',
        link: 'https://sass-lang.com/',
        icon: 'https://sass-lang.com/assets/img/logos/logo.svg',
    },
    {
        title: "Less",
        desc: 'Less 是一种流行的 CSS 预处理器',
        link: 'https://lesscss.org/',
        icon: 'https://lesscss.org/public/img/less_logo.png',
    },
    {
        title: 'Tailwind CSS',
        desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架',
        link: 'https://tailwindcss.com/',
        icon: 'https://tailwindcss.com/favicons/favicon-32x32.png?v=3'
    },
    {
        title: 'Bootstrap',
        desc: 'Bootstrap 是世界上最流行的前端框架之一',
        link: 'https://getbootstrap.com/',
        icon: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
    },
    {
        title: "UnoCSS",
        desc: 'UnoCSS 是一个即时按需生成的原子 CSS 引擎',
        link: 'https://unocss.dev/',
        icon: 'https://unocss.dev/logo.svg',
    }
]

/** 跨平台框架 */
export const CrossPlatform: ItemsType[] = [
    {
        title: "Taro",
        desc: "跨端解决方案，支持React/Vue/Nerv开发小程序/H5/RN。",
        link: "https://taro.zone/",
        icon: "https://docs.taro.zone/img/taro-logo_180.png",
    },
    {
        title: "uni-app",
        desc: "Vue.js框架，一套代码多端发布。",
        link: "https://uniapp.dcloud.io/",
        icon: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788",
    },
    {
        title: "React Native",
        desc: "使用JS和React编写原生移动应用。",
        link: "https://reactnative.dev/docs/getting-started",
        icon: "https://reactnative.dev/img/header_logo.svg",
    },
    {
        title: "Electron",
        desc: "Web技术构建跨平台桌面应用。",
        link: "https://www.electronjs.org/zh/",
        icon: "https://www.electronjs.org/zh/assets/img/logo.svg",
    },
    {
        title: "Tauri",
        desc: "Rust和前端技术构建轻量级桌面应用。",
        link: "https://tauri.app/zh-cn/",
        icon: "https://tauri.app/favicon.svg",
    },
    {
        title: "Flutter",
        desc: "Google UI工具包，单代码库多平台应用。",
        link: "https://flutter.cn/",
        icon: "https://docs.flutter.cn/assets/images/cn/flutter-320px.png",
    },
    {
        title: "Ionic",
        desc: "开源前端框架，支持Angular/React/Vue。",
        link: "https://ionic.io",
        icon: "https://ionic.io/android-icon-192x192.png",
    },
    {
        title: "Quasar",
        desc: "Vue.js框架，构建高性能跨平台应用。",
        link: "https://quasar.dev",
        icon: "https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg",
    },
];


/** 打包编译工具 */
export const buildTools: ItemsType[] = [
    {
        title: "Webpack",
        desc: "模块打包工具，合并 JavaScript 模块",
        link: "https://webpack.js.org/",
        icon: "https://webpack.js.org/icon_192x192.png",
    },
    {
        title: "Vite",
        desc: "快速的前端构建工具，利用 ES 模块",
        link: "https://vitejs.dev/",
        icon: "https://vitejs.dev/logo.svg",
    },
    {
        title: "Rsbuild",
        desc: "基于 Rspack 的构建工具，预设配置",
        link: "https://rsbuild.dev/zh/index",
        icon: "https://assets.rspack.dev/rsbuild/rsbuild-logo.svg",
    },
    {
        title: "Parcel",
        desc: "零配置的 Web 应用打包工具",
        link: "https://parceljs.org/",
        icon: "https://parceljs.org/avatar.66e613b2.avif",
    },
    {
        title: "Rollup",
        desc: "JavaScript 模块打包工具",
        link: "https://rollupjs.org/",
        icon: "https://rollupjs.org/rollup-logo.svg",
    },
    {
        title: "Rspack",
        desc: "Rust 编写的高性能打包工具",
        link: "https://rspack.dev/zh/index",
        icon: "https://assets.rspack.dev/rspack/rspack-logo.svg",
    },
    {
        title: "Turbo",
        desc: "Rust 编写的增量打包和构建系统",
        link: "https://turbo.build/",
        icon: "https://turbo.build/images/product-icons/repo-light-32x32.png",
    },
    {
        title: "Babel",
        desc: "JavaScript 编译器，转换 ES6+ 代码",
        link: "https://babeljs.io/",
        icon: "https://babeljs.io/img/babel.svg",
    },
    {
        title: "esbuild",
        desc: "高性能的 JavaScript 打包工具",
        link: "https://esbuild.github.io/",
        icon: "https://esbuild.github.io/favicon.svg",
    },
    {
        title: "SWC",
        desc: "基于 Rust 的 Web 平台",
        link: "https://swc.rs/",
        icon: "https://swc.rs/logo.png",
    },
    {
        title: "PostCSS",
        desc: "CSS 处理工具，转换和优化 CSS",
        link: "https://postcss.org/",
        icon: "https://postcss.org/assets/postcss-CsElRNOW.svg",
    },
];

