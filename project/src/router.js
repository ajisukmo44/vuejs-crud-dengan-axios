import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Invitation from './views/invitation.vue'
import Cetak from './views/cetak.vue'
<<<<<<< HEAD
import Daftar from './views/daftar.vue'
import Login from './views/Login.vue'
import Profil from './views/profil.vue'
=======

>>>>>>> 8802634de4a74f57a917a28e4d3df24c550a058c

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
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
<<<<<<< HEAD
    {
      path: '/daftar',
      name: 'daftar',
      component: Daftar
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/profil',
      name: 'profil',
      component: Profil
    },
   
=======
>>>>>>> 8802634de4a74f57a917a28e4d3df24c550a058c
  ]
})
