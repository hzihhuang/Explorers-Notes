type NavItem = NavItemWithLink | NavItemWithChildren | NavItemWithLinkAndChildren;
type NavItemWithLink = {
	text: string;
	link: string;
	tag?: string;
	activeMatch?: string;
	position?: 'left' | 'right';
};
interface NavItemWithChildren {
	text?: string;
	tag?: string;
	items: NavItemWithLink[];
	position?: 'left' | 'right';
}
interface NavItemWithLinkAndChildren {
	text: string;
	link: string;
	items: NavItemWithLink[];
	tag?: string;
	activeMatch?: string;
	position?: 'left' | 'right';
}

type NavType = NavItem[] | {
	[key: string]: NavItem[];
};

const nav: NavType = [
	{
		text: '网海指南针',
		link: '/links',
	},
	{
		text: '前端探索集',
		items: [
			{
				text: 'HTML 修炼手册',
				link: '/frontEnd/html/svg'
			},
			{
				text: 'CSS 技巧宝典',
				link: "/frontEnd/css/evil",
			},
			{
				text: "Sass 艺术指南",
				link: '/frontEnd/sass/base'
			},
			{
				text: 'JavaScript 编程秘籍',
				link: '/frontEnd/javascript/IndexedDB',
			},
			{
				text: 'TypeScript 进阶宝典',
				link: '/frontEnd/typescript/base',
			},
			{
				text: 'Web 性能优化攻略',
				link: '/demo'
			},
		],
	},
	{
		text: "后端探险记",
		items: [
			{
				text: "Node.js 开发宝典",
				link: "/demo",
				// items: [
				//     {
				//         text: '性能优化秘籍',
				//         link: '/demo'
				//     },
				//     {
				//         text: 'RESTful API 构建指南',
				//         link: '/demo'
				//     }
				// ]
			},
			{
				text: "框架匠心独运",
				link: "/demo",
				// items: [
				//     {
				//         text: "Express.js 高效开发",
				//         link: '/demo'
				//     },
				//     {
				//         text: "NestJS 高级应用",
				//         link: '/demo'
				//     },
				// ]
			},
			{
				text: '数据库精通之路',
				link: "/demo",
				// items: [
				//     {
				//         text: 'MySQL 精粹',
				//         link: '/demo'
				//     },
				//     {
				//         text: 'MongoDB 深入浅出',
				//         link: '/demo'
				//     }
				// ]
			},
		]
	},
	{
		text: '全栈探究录',
		items: [
			{
				text: '项目实战营',
				link: '/demo'
			},
			{
				text: '前后端分离架构精解',
				link: '/demo'
			},
			{
				text: '跨平台开发秘境',
				link: "/demo",
				// items: [
				//     {
				//         text: 'Electron 桌面应用探秘',
				//         link: '/demo'
				//     },
				//     {
				//         text: 'Flutter 移动开发攻略',
				//         link: '/demo'
				//     }
				// ]
			},
			{
				text: '服务端渲染与同构应用揭秘',
				link: '/demo'
			}
		]
	},
	{
		text: '关于我',
		link: '/about'
	}
]

export default nav;