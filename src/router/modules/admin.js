const adminRoute = {
  path: '/admin',
  name: 'admin',
  component: () => import('@/views/admin/Layout'),
  redirect: '/admin/dashboard',
  children: [
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/admin/Dashboard')
    },
    {
      path: 'article/create',
      name: 'createArticle',
      component: () => import('@/views/admin/EditArticle')
    },
    {
      path: 'article/:id(\\S+)/edit',
      name: 'editArticle',
      component: () => import('@/views/admin/EditArticle')
    },
    {
      path: 'articles',
      name: 'articles',
      component: () => import('@/views/admin/Articles')
    },
    {
      path: 'system',
      name: 'system',
      component: () => import('@/views/admin/System')
    },
    {
      path: 'comments',
      name: 'comments',
      component: () => import('@/views/admin/Comments')
    },
    {
      path: 'aboutme',
      name: 'aboutme',
      component: () => import('@/views/admin/AboutMe')
    },
    {
      path: 'drafts',
      name: 'drafts',
      component: () => import('@/views/admin/Drafts')
    },
    {
      path: 'article/:id(\\S+)/preview',
      name: 'articlePreview',
      component: () => import('@/views/admin/ArticlePreview')
    }
  ]
};

export default adminRoute;
