import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: "home"
  },
  mutations: {
    // 根据页面修改选中的tabbar
    setTabbar(state, title) {
      state.active = title;
    }
  },
  actions: {},
  modules: {}
});
