import Vue from 'vue'
import Router from 'vue-router'
import page from '@/components/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: page
    }
  ]
})

