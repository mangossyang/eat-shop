// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Person from '../pages/Person/Person'
import Login from '../pages/Login/Login'


Vue.use(VueRouter)

export default new VueRouter({
    // 所有路由
    routes:[
        {
            path: '/',
            redirect: '/home' 
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/home',
            component: Home,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/person',
            component: Person,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        }
    ]
})