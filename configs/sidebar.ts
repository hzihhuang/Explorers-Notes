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
      text: "HTML 修炼手册",
      collapsed: false,
      items: [
        { text: "属性篇", link: "/frontEnd/html/attribute" },
        {text: '标签篇', link: '/frontEnd/html/tag'},
        { text: "SVG篇", link: "/frontEnd/html/svg" },
      ],
    },
    {
      text: "CSS 技术宝典",
      collapsed: false,
      items: [
        { text: "css 邪门左道", link: "/frontEnd/css/evil" },
        { text: "container 容器查询", link: "/frontEnd/css/container" },
        { text: "masonry 瀑布流布局", link: "/frontEnd/css/masonry" },
        { text: "counter 计数器", link: "/frontEnd/css/counter" },
      ],
    },
    {
      text: "Sass 艺术指南",
      collapsed: false,
      items: [
        { text: "Sass：一篇精通", link: "/frontEnd/sass/base" },
        { text: "Mixin 艺术", link: "/frontEnd/sass/mixin" },
      ],
    },
    {
      text: "JavaScript 编程秘籍",
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
      text: "TypeScript 进阶宝典",
      collapsed: false,
      items: [
        { text: "一篇精通", link: "/frontEnd/typescript/base" },
        { text: "装饰器", link: "/frontEnd/typescript/decorator" },
        { text: "工具类型", link: "/frontEnd/typescript/utility" },
      ],
    },
    {
      text: "Web 性能优化攻略",
      collapsed: false,
      items: [
        { text: "前端优化", link: "/frontEnd/web/frontEnd" },
        { text: "前端框架性能优化", link: "/frontEnd/web/frontEndFrame" },
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
