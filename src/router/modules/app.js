import Layout from "@/views/Layout";
import Index from '@/views/Index';

const appRoute = {
  path: '/',
  name: 'layout',
  component: Layout,
  redirect: 'index',
  children: [
    {
      path: '',
      name: 'index',
      component: Index
    },
    {
      path: 'tags',
      name: 'tags',
      component: () => import('@/views/Tags')
    },
    {
      path: 'tag/:name(.+)',
      name: 'tag',
      component: () => import('@/views/Tag')
    },
    {
      path: 'archives',
      name: 'archives',
      component: () => import('@/views/Archives')
    },
    {
      path: 'aboutme',
      name: 'abountme',
      component: () => import('@/views/AboutMe')
    },
    {
      path: 'a/:id(\\S+)',
      name: 'article',
      component: () => import('@/views/Article')
    }
  ]
};

export default appRoute;
