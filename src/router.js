import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

const routes =  [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/button',
        name: 'button',
        component:resolve => require(['./views/Button.vue'],resolve)
    },
    {
        path: '/grid',
        name: 'grid',
        component:resolve => require(['./views/Grid.vue'],resolve)
    },
    {
        path: '/date',
        name: 'date',
        component:resolve => require(['./views/Date.vue'],resolve)
    },
    {
        path: '/icon',
        name: 'icon',
        component:resolve => require(['./views/Icon.vue'],resolve)
    },
    {
        path: '/dialog',
        name: 'dialog',
        component:resolve => require(['./views/Dialog.vue'],resolve)
    },
    {
        path: '/upload',
        name: 'upload',
        component:resolve => require(['./views/Upload.vue'],resolve)
    },
    {
        path: '/pagination',
        name: 'pagination',
        component:resolve => require(['./views/Pagination.vue'],resolve)
    },
];
var router=new Router({
    routes:routes
});

export default router
