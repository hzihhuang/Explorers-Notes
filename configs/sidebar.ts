interface SidebarGroup {
  text: string;
  link?: string;
  tag?: string;
  items: (SidebarItem | SidebarDivider | SidebarGroup | string)[];
  collapsible?: boolean;
  collapsed?: boolean;
  _fileKey?: string;
  overviewHeaders?: number[];
  context?: string;
}
type SidebarItem = {
  text: string;
  link: string;
  tag?: string;
  _fileKey?: string;
  overviewHeaders?: number[];
  context?: string;
};
type SidebarDivider = {
  dividerType: "dashed" | "solid";
};
type SidebarSectionHeader = {
  sectionHeaderText: string;
  tag?: string;
};

interface Sidebar {
  [path: string]: (
    | SidebarGroup
    | SidebarItem
    | SidebarDivider
    | SidebarSectionHeader
  )[];
}

const sidebar: Sidebar = {
  "/frontEnd/": [
    {
      text: "HTML 探索指南",
      collapsed: false,
      items: [
        {text: '标签篇', link: '/frontEnd/html/tag'},
        { text: "属性篇", link: "/frontEnd/html/attribute" },
        { text: "SVG篇", link: "/frontEnd/html/svg" },
      ],
    },
    {
      text: "CSS 魔法手册",
      collapsed: false,
      items: [
        { text: "技巧篇", link: "/frontEnd/css/evil" },
        { text: "容器查询", link: "/frontEnd/css/container" },
        { text: "瀑布流布局", link: "/frontEnd/css/masonry" },
        { text: "计数器", link: "/frontEnd/css/counter" },
      ],
    },
    {
      text: "Sass 技艺探秘",
      collapsed: false,
      items: [
        { text: "一篇精通", link: "/frontEnd/sass/base" },
        { text: "Mixin篇", link: "/frontEnd/sass/mixin" },
      ],
    },
    {
      text: "JavaScript 深入探险",
      collapsed: false,
      items: [
        { text: "IndexedDB 数据库", link: "/frontEnd/javascript/IndexedDB" },
        {
          text: "观察者 API",
          link: "/frontEnd/javascript/observer",
        },
      ],
    },
    {
      text: "TypeScript 高阶探索",
      collapsed: false,
      items: [
        { text: "一篇精通", link: "/frontEnd/typescript/base" },
        { text: "装饰器", link: "/frontEnd/typescript/decorator" },
        { text: "工具类型", link: "/frontEnd/typescript/utility" },
      ],
    },
    {
      text: 'Vue 编程探索',
      collapsed: false,
      items: [],
    },
    {
      text: 'React 技术之旅',
      collapsed: false,
      items: [],
    },
    {
      text: "Web 性能提升秘笈",
      collapsed: false,
      items: [
        { text: "前端优化", link: "/frontEnd/web/frontEnd" },
        { text: "框架优化", link: "/frontEnd/web/frontEndFrame" },
      ],
    },
  ],
  "/backEnd/": [
    {
      text: "Node.js 开发宝典",
      collapsed: false,
      items: [
        { text: "性能优化秘籍", link: "/backEnd/node/performance" },
        { text: "RESTful API 构建指南", link: "/backEnd/node/restful" },
      ],
    },
    {
      text: "框架匠心独运",
      collapsed: false,
      items: [
        { text: "Express.js 高效开发", link: "/backEnd/framework/express" },
        { text: "NestJS 高级应用", link: "/backEnd/framework/nestjs" },
      ],
    },
    {
      text: "数据库精通之路",
      collapsed: false,
      items: [
        { text: "MySQL 精粹", link: "/backEnd/database/mysql" },
        { text: "MongoDB 深入浅出", link: "/backEnd/database/mongodb" },
      ],
    },
  ],
  "/fullStack/": [
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
      items: [
        {
          text: "Electron 桌面应用探秘",
          link: "/fullStack/crossPlatform/electron",
        },
        {
          text: "Flutter 移动开发攻略",
          link: "/fullStack/crossPlatform/flutter",
        },
      ],
    },
    {
      text: "服务端渲染与同构应用揭秘",
      link: "/template",
    },
  ],
};

export default sidebar;
