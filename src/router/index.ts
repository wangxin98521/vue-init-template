/*
 * @Author: 苏年璟
 * @Date: 2020-08-12 16:09:53
 * @LastEditTime: 2020-09-01 09:05:25
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store/index";

const Login = () => import("@/views/Login/Login.vue"); // 登录
const Home = () => import("@/views/Home.vue"); // 带有tabbar的控制台
const Index = () => import("@/views/Index/Index.vue"); // 首页
const About = () => import("@/views/About.vue"); // 关于
const Mine = () => import("@/views/Mine/Mine.vue"); // 我的
const Test = () => import("@/views/test.vue"); // 测试

Vue.use(VueRouter);
/*
 * keepAlive 页面是否需要被缓存
 * parentPage 判断选择的tabbar
 * path 路径
 * name 页面名称
 * component 页面使用的组件
 *
 * 在 children 里面的页面 都带有 tabbar
 *
 */
const mode = "history"; // hash || history
const routes: Array<RouteConfig> = [
  { path: "/", redirect: "/h5" }, // 首页
  { path: "/login", name: "Login", component: Login }, // 登入
  {
    path: "/h5",
    name: "Home",
    component: Home,
    // 里面的页面都带有 tabbar
    children: [
      {
        path: "/",
        name: "Index",
        component: Index,
        meta: { keepAlive: true, parentPage: "Index" }
      },
      {
        path: "/h5/Index",
        name: "Index",
        component: Index,
        meta: { keepAlive: true, parentPage: "Index" }
      },
      {
        path: "/h5/About",
        name: "About",
        component: About,
        meta: { keepAlive: true, parentPage: "About" }
      },
      {
        path: "/h5/mine",
        name: "Mine",
        component: Mine,
        meta: { keepAlive: true, parentPage: "Mine" }
      },
      { path: "/h5/home/test", name: "Test", component: Test }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode
});

// 设置 title
const Title: any = {
  Index: "首页",
  About: "关于",
  Mine: "我的",
  Test: "测试"
};

router.beforeEach((to, from, next) => {
  // console.log(to.path);
  if (to.name) {
    document.title = Title[to.name]; // 给页面添加标题
  }
  if (
    to.path == "/h5" ||
    to.path == "/h5/index" ||
    to.path == "/h5/about" ||
    to.path == "/h5/mine"
  ) {
    store.commit("setNavigationBar", true);
  } else {
    store.commit("setNavigationBar", false);
  }
  next();
  // let token = localStorage.getItem("token");
  // if ((to.name == "Login" || to.name == "Register") && token) {
  //   next({
  //     path: "/h5/home"
  //   });
  // } else {
  //   next();
  // }
});
export default router;
