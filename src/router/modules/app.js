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
      path: 'tag/:name(\\S+)',
      name: 'tag',
      component: () => import('@/views/Tag')
    },
    {
      path: 'archives',
      name: 'archives',
      component: () => import('@/views/Archives')
    },
    {
      path: 'archive/:name(\\S+)',
      name: 'archive',
      component: () => import('@/views/Archive')
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
