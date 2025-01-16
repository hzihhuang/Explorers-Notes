type NavItem =
  | NavItemWithLink
  | NavItemWithChildren
  | NavItemWithLinkAndChildren;
type NavItemWithLink = {
  text: string;
  link: string;
  tag?: string;
  activeMatch?: string;
  position?: "left" | "right";
};
interface NavItemWithChildren {
  text?: string;
  tag?: string;
  items: NavItemWithLink[];
  position?: "left" | "right";
}
interface NavItemWithLinkAndChildren {
  text: string;
  link: string;
  items: NavItemWithLink[];
  tag?: string;
  activeMatch?: string;
  position?: "left" | "right";
}

type NavType =
  | NavItem[]
  | {
      [key: string]: NavItem[];
    };

const nav: NavType = [
  {
    text: "网海指南针",
    link: "/links",
  },
  {
    text: "前端探索集",
    items: [
      {
        text: "HTML 探索指南",
        link: "/frontEnd/html/tag",
        activeMatch: "/frontEnd/html",
      },
      {
        text: "CSS 魔法手册",
        link: "/frontEnd/css/evil",
        activeMatch: "/frontEnd/css",
      },
      {
        text: "Sass 技艺探秘",
        link: "/frontEnd/sass/base",
        activeMatch: "/frontEnd/sass",
      },
      {
        text: "JavaScript 深入探险",
        link: "/frontEnd/javascript/IndexedDB",
        activeMatch: "/frontEnd/javascript",
      },
      {
        text: "TypeScript 高阶探索",
        link: "/frontEnd/typescript/base",
        activeMatch: "/frontEnd/typescript",
      },
      {
        text: "Vue 编程探索",
        link: "/frontEnd/vue",
        activeMatch: "/frontEnd/vue",
      },
      {
        text: "React 技术之旅",
        link: "/frontEnd/react",
        activeMatch: "/frontEnd/react",
      },
      {
        text: "Web 性能提升秘笈",
        link: "/frontEnd/web/frontEnd",
        activeMatch: "/frontEnd/web",
      },
    ],
  },
  {
    text: "后端探险记",
    items: [
      {
        text: "Node.js 开发宝典",
        link: "/backEnd/node/performance",
        activeMatch: "/backEnd/node",
      },
      {
        text: "框架匠心独运",
        link: "/backEnd/framework/express",
        activeMatch: "/backEnd/framework",
      },
      {
        text: "数据库精通之路",
        link: "/backEnd/database/mysql",
        activeMatch: "/backEnd/database",
      },
    ],
  },
  {
    text: "全栈探究录",
    items: [
      {
        text: "项目实战营",
        link: "/template",
      },
      {
        text: "前后端分离架构精解",
        link: "/template",
      },
      {
        text: "跨平台开发秘境",
        link: "/fullStack/crossPlatform/electron",
        activeMatch: "/fullStack/crossPlatform",
      },
      {
        text: "服务端渲染与同构应用揭秘",
        link: "/template",
      },
    ],
  },
  {
    text: "关于我",
    link: "/about",
  },
];

export default nav;
