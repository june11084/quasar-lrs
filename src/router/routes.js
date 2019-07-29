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
