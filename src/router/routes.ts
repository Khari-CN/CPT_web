import type { RouteRecordRaw } from 'vue-router'

export const constantRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/about/about-us',
    children: [
      {
        path: 'about-us',
        name: 'aboutUs',
        component: () => import('@/views/about/aboutUs/index.vue'),
      },
      {
        path: 'advantage',
        name: 'advantage',
        component: () => import('@/views/about/advantage/index.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/about/contact/index.vue'),
      },
      {
        path: 'law',
        name: 'law',
        component: () => import('@/views/about/law/index.vue'),
      },
    ],
  },
  {
    path: '/activity',
    name: 'activity',
    redirect: '/activity/proxy',
    children: [
      {
        path: 'proxy',
        name: 'proxy',
        component: () => import('@/views/activity/proxy/index.vue'),
      },
    ],
  },
  {
    path: '/product',
    name: 'product',
    redirect: '/product/forex',
    children: [
      {
        path: 'forex',
        name: 'forex',
        component: () => import('@/views/product/forex/index.vue'),
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/product/index/index.vue'),
      },
      {
        path: 'commodity',
        name: 'commodity',
        component: () => import('@/views/product/commodity/index.vue'),
      },
      {
        path: 'agreement',
        name: 'agreement',
        component: () => import('@/views/product/agreement/index.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: 'account',
    redirect: '/account/real',
    children: [
      {
        path: 'real',
        name: 'real',
        component: () => import('@/views/account/real/index.vue'),
      },
      {
        path: 'simulation',
        name: 'simulation',
        component: () => import('@/views/account/simulation/index.vue'),
      },
      {
        path: 'type',
        name: 'type',
        component: () => import('@/views/account/type/index.vue'),
      },
      {
        path: 'vip',
        name: 'vip',
        component: () => import('@/views/account/vip/index.vue'),
      },
      {
        path: 'deposit-withdraw',
        name: 'depositWithdraw',
        component: () => import('@/views/account/depositWithdraw/index.vue'),
      },
      {
        path: 'security',
        name: 'security',
        component: () => import('@/views/account/security/index.vue'),
      },
    ],
  },
  {
    path: '/platform',
    name: 'platform',
    redirect: '/platform/phone',
    children: [
      {
        path: 'phone',
        name: 'phone',
        component: () => import('@/views/platform/phone/index.vue'),
      }
    ],
  }
]

export const policyPageRoute: RouteRecordRaw =   {
  path: '/policy',
  name: 'policy',
  children: [
    {
      path: 'risk',
      name: 'risk',
      component: () => import('@/views/policy/risk/index.vue')
    },
    {
      path: 'privacy',
      name: 'privacy',
      component: () => import('@/views/policy/privacy/index.vue')
    },
    {
      path: 'order',
      name: 'order',
      component: () => import('@/views/policy/order/index.vue')
    },
    {
      path: 'service',
      name: 'service',
      component: () => import('@/views/policy/service/index.vue')
    },
    {
      path: 'cookies',
      name: 'cookies',
      component: () => import('@/views/policy/cookies/index.vue')
    }
  ],
}

export const noFountRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'not-found',
  component: () => import('@/views/404/index.vue'),
}
