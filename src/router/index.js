import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/home.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/home/index.vue')
        },
        {
          path: '/groupInfo',
          name: 'groupInfo',
          component: () => import('../views/groupInfo/groupInfo.vue')
        },
        {
          path: '/business',
          name: 'business',
          component: () => import('../views/business/business.vue')
        },
        {
          path: '/newsCenter',
          name: 'newsCenter',
          component: () => import('../views/newsCenter/newsCenter.vue')
        },
        {
          path: '/joinUs',
          name: 'joinUs',
          component: () => import('../views/joinUs/joinUs.vue')
        },
        {
          path: '/enterpriseHonor',
          name: 'enterpriseHonor',
          component: () => import('../views/groupInfo/enterpriseHonor.vue')
        },
        {
          path: '/enterpriseDevelop',
          name: 'enterpriseDevelop',
          component: () => import('../views/groupInfo/enterpriseDevelop.vue')
        },
        {
          path: '/enterpriseCustomers',
          name: 'enterpriseCustomers',
          component: () => import('../views/groupInfo/enterpriseCustomers.vue')
        },
        {
          path: '/enterpriseCulture',
          name: 'enterpriseCulture',
          component: () => import('../views/groupInfo/enterpriseCulture.vue')
        },
        {
          path: '/contactUs',
          name: 'contactUs',
          component: () => import('../views/groupInfo/contactUs.vue')
        },
        {
          path: '',
          redirect: '/index'
        }
      ]
    }
  ]
})

export default router
