import Vue from 'vue'
import Router from 'vue-router'
import ServerConfigOptions from '@/components/ServerConfigOptions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ServerConfigOptions',
      component: ServerConfigOptions
    }
  ]
})
