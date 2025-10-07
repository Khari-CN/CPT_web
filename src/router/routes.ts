import type { RouteRecordRaw } from 'vue-router'

export const homeRoute: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
}

export const menuRoute: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'about',
    redirect: '/about/about-us',
    meta: { title: '关于我们' },
    children: [
      {
        path: 'about-us',
        name: 'aboutUs',
        meta: { title: '认识我们' },
        component: () => import('@/views/about/aboutUs/index.vue'),
      },
      {
        path: 'advantage',
        name: 'advantage',
        meta: { title: '品牌优势' },
        component: () => import('@/views/about/advantage/index.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        meta: { title: '联系方式' },
        component: () => import('@/views/about/contact/index.vue'),
      },
      {
        path: 'law',
        name: 'law',
        meta: { title: '法律保障' },
        component: () => import('@/views/about/law/index.vue'),
      },
    ],
  },
  {
    path: '/activity',
    name: 'activity',
    redirect: '/activity/proxy',
    meta: { title: '优惠活动' },
    children: [
      {
        path: 'proxy',
        name: 'proxy',
        meta: { title: '代理合作' },
        component: () => import('@/views/activity/proxy/index.vue'),
      },
    ],
  },
  {
    path: '/product',
    name: 'product',
    redirect: '/product/forex',
    meta: { title: '交易产品' },
    children: [
      {
        path: 'forex',
        name: 'forex',
        meta: { title: '外汇' },
        component: () => import('@/views/product/forex/index.vue'),
      },
      {
        path: 'index',
        name: 'index',
        meta: { title: '指数' },
        component: () => import('@/views/product/index/index.vue'),
      },
      {
        path: 'commodity',
        name: 'commodity',
        meta: { title: '大宗商品' },
        component: () => import('@/views/product/commodity/index.vue'),
      },
      {
        path: 'agreement',
        name: 'agreement',
        meta: { title: '合约细则' },
        component: () => import('@/views/product/agreement/index.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: 'account',
    redirect: '/account/real',
    meta: { title: '交易账户' },
    children: [
      {
        path: 'real',
        name: 'real',
        meta: { title: '真实账户' },
        component: () => import('@/views/account/real/index.vue'),
      },
      {
        path: 'simulation',
        name: 'simulation',
        meta: { title: '模拟账户' },
        component: () => import('@/views/account/simulation/index.vue'),
      },
      {
        path: 'type',
        name: 'type',
        meta: { title: '账户类型' },
        component: () => import('@/views/account/type/index.vue'),
      },
      {
        path: 'vip',
        name: 'vip',
        meta: { title: '尊贵账户' },
        component: () => import('@/views/account/vip/index.vue'),
      },
      {
        path: 'deposit-withdraw',
        name: 'depositWithdraw',
        meta: { title: '入金出金' },
        component: () => import('@/views/account/depositWithdraw/index.vue'),
      },
      {
        path: 'security',
        name: 'security',
        meta: { title: '账户安全' },
        component: () => import('@/views/account/security/index.vue'),
      },
    ],
  },
  {
    path: '/platform',
    name: 'platform',
    redirect: '/platform/phone',
    meta: { title: '平台下载' },
    children: [
      {
        path: 'phone',
        name: 'phone',
        meta: { title: '手机交易程式' },
        component: () => import('@/views/platform/phone/index.vue'),
      },
    ],
  },
]

export const policyPageRoute: RouteRecordRaw = {
  path: '/policy',
  name: 'policy',
  children: [
    {
      path: 'risk',
      name: 'risk',
      component: () => import('@/views/policy/risk/index.vue'),
    },
    {
      path: 'privacy',
      name: 'privacy',
      component: () => import('@/views/policy/privacy/index.vue'),
    },
    {
      path: 'order',
      name: 'order',
      component: () => import('@/views/policy/order/index.vue'),
    },
    {
      path: 'service',
      name: 'service',
      component: () => import('@/views/policy/service/index.vue'),
    },
    {
      path: 'cookies',
      name: 'cookies',
      component: () => import('@/views/policy/cookies/index.vue'),
    },
  ],
}

export const noFountRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'not-found',
  component: () => import('@/views/404/index.vue'),
}

export const constantRoute: RouteRecordRaw[] = [
  homeRoute,
  ...menuRoute,
  policyPageRoute,
  noFountRoute,
]