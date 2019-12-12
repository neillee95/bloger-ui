import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openDrawer: true,
    preference: {}
  },
  mutations: {
    toggleDrawer(state) {
      state.openDrawer = !state.openDrawer;
    },
    openDrawer(state) {
      state.openDrawer = true;
    },
    closeDrawer(state) {
      state.openDrawer = false;
    },
    setPreference(state, preference) {
      state.preference = preference;
    }
  }
})
