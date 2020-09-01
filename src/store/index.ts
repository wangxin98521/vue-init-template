/*
 * @Author: 苏年璟
 * @Date: 2020-08-12 16:09:53
 * @LastEditTime: 2020-08-31 16:12:12
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: "home",
    isBack: true
  },
  mutations: {
    // 根据页面修改选中的tabbar
    setTabbar(state, title) {
      state.active = title;
    },
    // 根据页面是否展示 导航栏
    setNavigationBar(state, flag) {
      state.isBack = flag;
    }
  },
  actions: {},
  modules: {}
});
