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
      items: [{ text: "svg 深入浅出", link: "/frontEnd/html/svg" }],
    },
    {
      text: "CSS 技术宝典",
      collapsed: false,
      items: [
        { text: "css 邪门左道", link: "/frontEnd/css/evil" },
        { text: "container 容器查询", link: "/frontEnd/css/container" },
        { text: "masonry 瀑布流布局", link: "/frontEnd/css/masonry" },
        { text: "counter 计数器", link: "/frontEnd/css/counter" },
        { text: "clip-path 裁剪路径", link: "/frontEnd/css/clip-path" },
      ],
    },
    {
      text: "Sass 艺术指南",
      collapsed: false,
      items: [{ text: "Sass：一篇精通", link: "/frontEnd/sass/base" }],
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
        { text: "TypeScript：一篇精通", link: "/frontEnd/typescript/base" },
        { text: "装饰器", link: "/frontEnd/typescript/decorator" },
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
};

export default sidebar;
