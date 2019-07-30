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
        component: () => import('pages/Score.vue')
      },
      {
        path: 'data',
        component: () => import('pages/Data.vue')
      },
      {
        path: 'logs',
        component: () => import('pages/Logs.vue')
      },
      {
        path: 'defaults',
        component: () => import('pages/Defaults.vue')
      },
      {
        path: 'models',
        component: () => import('pages/Models.vue')
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
