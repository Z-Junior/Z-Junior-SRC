import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Class from '@/components/Class'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    }
  ]
})
