import loadable from '@loadable/component' //懒加载组件
import index from '../views/index/index'
const routes = [
    {
        path: '/',
        exact: true,
        // component: index,
        component: loadable(() => import('../utils/devPages')),
        requiresAuth: false,
    },
    {
        path: '/login_a',//管理员登录
        component: loadable(() => import('../views/login_a/login')),
        requiresAuth: false,
    },
    {
        path: '/login',//学生老师登录
        component: loadable(() => import('../views/login/login')),
        requiresAuth: false,
    },
    {
        path: '/regist',//注册
        component: loadable(() => import('../views/regist/regist')),
        requiresAuth: false,
    },
    {
        path: '/index',
        component: index,
        requiresAuth: false,
    },
    {
        path: '/information',
        component: loadable(() => import('../views/information/information')),
        requiresAuth: false,
    },
    {
        path: '/check',
        component: loadable(() => import('../views/check/check')),
        requiresAuth: false,
    },
    {
        path: '/question',
        component: loadable(() => import('../views/question/question')),
        requiresAuth: false,
    },
    {
        path: '/news',
        component: loadable(() => import('../views/news/news')),
        requiresAuth: false,
    },
    {
        path: '/details/:id',
        component: loadable(() => import('../views/news/pages/details/details')),
        requiresAuth: false,
    },
    {
        path: '/process',
        component: loadable(() => import('../views/process/process')),
        requiresAuth: false,
    },
    {
        path: '/consult',
        component: loadable(() => import('../views/consult/consult')),
        requiresAuth: false,
    },
    {
        path: '/applyCenter',
        component: loadable(() => import('../views/information/pages/applyCenter/applyCenter')),
        requiresAuth: false,
    },
    {
        path: '/infoConfirm',
        component: loadable(() => import('../views/information/pages/infoConfirm/infoConfirm')),
        requiresAuth: false,
    },
    {
        path: '/pay',
        component: loadable(() => import('../views/information/pages/pay/pay')),
        requiresAuth: false,
    },
    {
        path: '/admin',
        component: loadable(() => import('../views/admin/index/index')),
        title:'管理员端',
        requiresAuth: true, //需要登陆后才能跳转的页面
        routes:[
            {
                path: '/admin',
                exact:true,
                key:'a_children_index',
                component:loadable(() => import('../views/admin/pages/homePage/homePage')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/homePage',
                exact:true,
                key:'a_children_index',
                component:loadable(() => import('../views/admin/pages/homePage/homePage')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/userCenter',
                component:loadable(() => import('../views/admin/pages/userCenter/userCenter')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/roleManage',
                component:loadable(() => import('../views/admin/pages/roleManage/roleManage')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/userManage',
                component:loadable(() => import('../views/admin/pages/userManage/userManage')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/orgManage',
                component:loadable(() => import('../views/admin/pages/orgManage/orgManage')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/information',
                component:loadable(() => import('../views/admin/pages/information/information')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/type',
                component:loadable(() => import('../views/admin/pages/type/type')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/newsManage',
                component:loadable(() => import('../views/admin/pages/newsManage/newsManage')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/editNews',
                component:loadable(() => import('../views/admin/pages/editNews/editNews')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/editNotes',
                component:loadable(() => import('../views/admin/pages/editNotes/editNotes')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/addNotes',
                component:loadable(() => import('../views/admin/pages/addNotes/addNotes')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/noticeManage',
                component:loadable(() => import('../views/admin/pages/noticeManage/noticeManage')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/infoCheck',
                component:loadable(() => import('../views/admin/pages/infoCheck/infoCheck')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/certificateCheck',
                component:loadable(() => import('../views/admin/pages/certificateCheck/certificateCheck')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/addOrg',
                component:loadable(() => import('../views/admin/pages/addOrg/addOrg')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/editOrg',
                component:loadable(() => import('../views/admin/pages/editOrg/editOrg')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/applyerInfo',
                component:loadable(() => import('../views/admin/pages/applyerInfo/applyerInfo')) ,
                requiresAuth: true,
            },
            {
                path: '/admin/addNews',
                component:loadable(() => import('../views/admin/pages/addNews/addNews')) ,
                requiresAuth: true,
            },
        ]
    },
    {
        path: '/student/testing',
        component:loadable(() => import('../views/student/testing/testing')) ,
        requiresAuth: true,
    },
    {
        path: '/student/result',
        component:loadable(() => import('../views/student/result/result')) ,
        requiresAuth: true,
    },
    {
        path: '/student',
        component: loadable(() => import('../views/student/index/index')),
        title: '学生端',
        requiresAuth: true, //需要登陆后才能跳转的页面
        routes: [
            {
                path: '/student',
                exact:true,
                key:'s_children_index',
                component:loadable(() => import('../views/student/pages/info/info')) ,
                requiresAuth: true,
            },
            {
                path: '/student/myCertificate',
                component:loadable(() => import('../views/student/pages/myCertificate/myCertificate')) ,
                requiresAuth: true,
            },
            {
                path: '/student/allTest',
                component:loadable(() => import('../views/student/pages/allTest/allTest')) ,
                requiresAuth: true,
            },
            {
                path: '/student/allDeclare',
                component:loadable(() => import('../views/student/pages/allDeclare/allDeclare')) ,
                requiresAuth: true,
            },
            {
                path: '/student/info',
                component:loadable(() => import('../views/student/pages/info/info')) ,
                requiresAuth: true,
            },
            {
                path: '/student/safe',
                component:loadable(() => import('../views/student/pages/safe/safe')) ,
                requiresAuth: true,
            },
            {
                path: '/student/idCheck',
                component:loadable(() => import('../views/student/pages/idCheck/idCheck')) ,
                requiresAuth: true,
            },
        ]
    },
    {
        path: '/teacher',
        component: loadable(() => import('../views/teacher/index/index')),
        title: '老师端',
        requiresAuth: true, //需要登陆后才能跳转的页面
        routes: [
            {
                path: '/teacher',
                exact:true,
                key:'t_children_index',
                // exact:true,
                component:loadable(() => import('../views/teacher/pages/info/info')) ,
                requiresAuth: true,
            },
            {
                path: '/teacher/info',
                component:loadable(() => import('../views/teacher/pages/info/info')) ,
                requiresAuth: true,
            },
            {
                path: '/teacher/idCheck',
                component:loadable(() => import('../views/teacher/pages/idCheck/idCheck')) ,
                requiresAuth: true,
            },
            {
                path: '/teacher/safe',
                component:loadable(() => import('../views/teacher/pages/safe/safe')) ,
                requiresAuth: true,
            },
            {
                path: '/teacher/resourceManage',
                component:loadable(() => import('../views/teacher/pages/resourceManage/resourceManage')) ,
                requiresAuth: true,
            },
            {
                path: '/teacher/paperManage',
                component:loadable(() => import('../views/teacher/pages/paperManage/paperManage')) ,
                requiresAuth: true,
            },
        ]
    }
];
export default routes
