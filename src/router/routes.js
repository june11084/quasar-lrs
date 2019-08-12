const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'score',
        component: () => import('pages/score.vue')
      },
      {
        path: 'data',
        component: () => import('pages/data.vue')
      },
      {
        path: 'logs',
        component: () => import('pages/logs.vue')
      },
      {
        path: 'defaults',
        component: () => import('pages/defaults.vue')
      },
      {
        path: 'models',
        component: () => import('pages/models.vue')
      },
      {
        path: 'maggie',
        component: () => import('pages/maggie.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
