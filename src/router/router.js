import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../components/register.vue'

//import Home from '../views/HHHome.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/homepage',
        },
        {
            path: '/',
            component: resolve => require(['../views/HHHome.vue'], resolve),
            children: [
                {
                    path: 'homepage',
                    component: resolve => require(['../components/homepage.vue'], resolve),
                    meta: {title: '系统首页'}
                },
                {
                    path: 'assetlist',
                    component: resolve => require(['../components/assetlist.vue'], resolve),
                    meta: {title: '资产列表'}
                },
                {
                    path: 'assetsspotlight',
                    component: resolve => require(['../components/assetsspotlight.vue'], resolve),
                    meta: {title: '资产透视'}
                },
                {
                    path: 'risk',
                    component: resolve => require(['../components/risk.vue'], resolve),
                    meta: {title: '风险管理'}
                },
                {
                    path: 'task',
                    component: resolve => require(['../components/task.vue'], resolve),
                    meta: {title: '任务管理'}
                },
                {
                    path: 'report',
                    component: resolve => require(['../components/report.vue'], resolve),
                    meta: {title: '报告管理'}
                },
                {
                    path: 'userinfo',
                    component: resolve => require(['../components/userinfo.vue'], resolve),
                    meta: {title: '用户信息'}
                },
                {
                    path: 'settings',
                    component: resolve => require(['../components/settings.vue'], resolve),
                    meta: {title: '通用设置'}
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../views/Login.vue'], resolve)
        },
        {
            path: '/register',
            component: Register,
            name:'register'
        },
        // {   
        //     path: '/home',
        //     component: Home,
        //     redirect: '/home/page1',
        //     //注意，二级导航的path里面参数开头不能带/，否则会以根目录进行匹配
        //     children: [{
        //         path: 'page1',
        //         name: 'page1',
        //         component: Page1
        //     },{
        //         path: 'page2',
        //         name: 'page2',
        //         component: Page2
        //     }]
        // }
    ]
})


export default router