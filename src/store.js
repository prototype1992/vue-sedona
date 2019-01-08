import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenForm: false,
  },
  getters: {
    getOpenForm(state) {
      return state.isOpenForm;
    },
  },
  mutations: {
    setOpenForm(state, payload) {
      state.isOpenForm = payload;
    },
  },
  actions: {
  },
});
