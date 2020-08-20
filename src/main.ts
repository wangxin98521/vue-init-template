import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./vant";
import "@/assets/CSS/globalVariableStyle.scss";
import "@/assets/CSS/clearDefaultStyle.scss";

Vue.config.productionTip = false;
// 第一次进入页面时 获取路径来判断选择哪一个 tabbar
router.beforeEach((to, from, next) => {
  store.commit("setTabbar", { title: to.meta.parentPage });
  // console.log(to);
  next();
});
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
