import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "@/store";

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

router.beforeEach((to, from, next) => {
  store.commit('closeDrawer');
  if (to.path.startsWith('/admin')) {
    //TODO Whether has permission to access the uri.
  }
  next();
});

export default router
