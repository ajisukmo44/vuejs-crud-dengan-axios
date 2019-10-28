import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Invitation from './views/invitation.vue'
import Cetak from './views/cetak.vue'


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
      path: '/about',
      name: 'about',
      component: About 
    },
    {
      path: '/invitation',
      name: 'invitation',
      component: Invitation
    },
    {
      path: '/cetak',
      name: 'cetak',
      component: Cetak
    },
  ]
})
