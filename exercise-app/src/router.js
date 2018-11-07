import Vue from 'vue'
import Router from 'vue-router'
import Exercises from './views/Exercises.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises
    }
  ]
})
