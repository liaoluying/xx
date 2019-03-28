//入口文件
import Vue from 'vue'

//导入路由模块,安装路由
import VueRouter from 'vue-router'
//导入自己的路由模块
import router from './router/router.js'

Vue.use(VueRouter)

//注册VUEX
import Vuex from 'vuex'
Vue.use(Vuex)

//注册element-ui
import ElementUI from 'element-ui';
Vue.use(ElementUI,{size:'small',zIndex:3000});
import 'element-ui/lib/theme-chalk/index.css';
import './style/element-variables.scss'

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

import axios from 'axios'
Vue.prototype.$http = axios

import app from './App.vue';

var vm = new Vue({
    el: '#app',
    render:(h)=>h(app),
    router
})

// router.beforeEach((to, from, next) => {
//     //登录成功后保存用户信息
//     //存在时间为会话生命周期，页面关闭即失效
//     const user = sessionStorage.getItem('ms_username');
//     if(to.path == '/login'){
//         if(user) {
//             next({path:'/'})
//         }else{
//             next()
//         }
//     }else{
//         //如果访问非登录界面，且用户信息不存在，跳转到登录
//         if(!user){
//             next({path:'/login'})
//         }else{
//             next()
//         }
//     }
// })