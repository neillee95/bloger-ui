import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../views/Layout";
import Index from '../views/Index';

import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin/login',
    name: 'login',
    component: () => import('../views/admin/Login')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Layout'),
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/Dashboard')
      },
      {
        path: 'article/create',
        name: 'createArticle',
        component: () => import('../views/admin/EditArticle')
      },
      {
        path: 'article/:id(\\S+)/edit',
        name: 'editArticle',
        component: () => import('../views/admin/EditArticle')
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('../views/admin/Articles')
      },
      {
        path: 'system',
        name: 'system',
        component: () => import('../views/admin/System')
      },
      {
        path: 'comments',
        name: 'comments',
        component: () => import('../views/admin/Comments')
      },
      {
        path: 'aboutme',
        name: 'aboutme',
        component: () => import('../views/admin/AboutMe')
      },
      {
        path: 'drafts',
        name: 'drafts',
        component: () => import('../views/admin/Drafts')
      },
      {
        path: 'article/:id(\\S+)/preview',
        name: 'articlePreview',
        component: () => import('../views/admin/ArticlePreview')
      }
    ]
  },
  {
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
        component: () => import('../views/Tags')
      },
      {
        path: 'tag/:name(\\S+)',
        name: 'tag',
        component: () => import('../views/Tag')
      },
      {
        path: 'archives',
        name: 'archives',
        component: () => import('../views/Archives')
      },
      {
        path: 'archive/:name(\\S+)',
        name: 'archive',
        component: () => import('../views/Archive')
      },
      {
        path: 'aboutme',
        name: 'abountme',
        component: () => import('../views/AboutMe')
      },
      {
        path: 'a/:id(\\S+)',
        name: 'article',
        component: () => import('../views/Article')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  store.commit('closeDrawer');
  if (to.path.startsWith('/admin')) {
    //TODO Whether has permission to access the uri.
  }
  next();
});

export default router
