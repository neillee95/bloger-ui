import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "../views/Layout";
import Index from '../views/Index';

import store from "../store";

Vue.use(VueRouter);

const routes = [
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
  next();
});

export default router
