import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './views/About.vue'
import Exercises from './views/Exercises.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: Exercises
    }
  ]
})
