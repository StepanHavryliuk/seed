import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home/index'
const Detail=()=>import('./page/Development/Child/Detail')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      component: () => import('./page/Development/index.vue'),

    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./page/About/index.vue'),

    },

    
  ]
})
