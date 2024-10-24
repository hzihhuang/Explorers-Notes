import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.Config['nav'] = [
    {
        text: '前端探索集',
        items: [
            {
                text: 'HTML修炼手册',
                link: '/demo'
            },
            {
                text: 'CSS技巧宝典',
                link: '/demo'
            },
            {
                text: "Sass艺术指南",
                link: '/demo'
            },
            {
                text: 'JavaScript编程秘籍',
                link: '/demo',
            },
            {
                text: 'TypeScript进阶宝典',
                link: '/demo',
            },
            {
                text: 'Web性能优化攻略',
                link: '/demo'
            },
            {
                text: '前端利器与资源库',
                link: '/demo'
            }
        ],
    },
    {
        text: "后端探险地图",
        items: [
            {
                text: "Node.js 开发宝典",
                items: [
                    {
                        text: '性能优化秘籍',
                        link: '/demo'
                    },
                    {
                        text: 'RESTful API 构建指南',
                        link: '/demo'
                    }
                ]
            },
            {
                text: "框架匠心独运",
                items: [
                    {
                        text: "Express.js 高效开发",
                        link: '/demo'
                    },
                    {
                        text: "NestJS 高级应用",
                        link: '/demo'
                    },
                ]
            },
            {
                text: '数据库精通之路',
                items: [
                    {
                        text: 'MySQL 精粹',
                        link: '/demo'
                    },
                    {
                        text: 'MongoDB 深入浅出',
                        link: '/demo'
                    }
                ]
            },
        ]
    },
    {
        text: '全栈修炼之旅',
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
                items: [
                    {
                        text: 'Electron 桌面应用探秘',
                        link: '/demo'
                    },
                    {
                        text: 'Flutter 移动开发攻略',
                        link: '/demo'
                    }
                ]
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