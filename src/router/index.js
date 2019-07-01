import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import AddEmployees from '../components/AddEmployees.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'addEmployees',
      component: AddEmployees
    },
    {
      path: '/index',
      name: 'home',
      component: Home
    }
  ]
})

export default router
