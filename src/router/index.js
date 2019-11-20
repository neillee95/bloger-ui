import Vue from 'vue';
import VueRouter from 'vue-router';

import {adminRoute, appRoute} from "./modules";

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin/login',
    name: 'login',
    component: () => import('@/views/admin/Login')
  },
  appRoute,
  adminRoute
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
