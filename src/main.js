import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(MavonEditor);

import VueInsProgressBar from 'vue-ins-progress-bar';
const options = {
  position: 'fixed',
  show: true,
  height: '2px'
};
Vue.use(VueInsProgressBar, options);

import '@/styles/index.scss';

import './router/guard';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
