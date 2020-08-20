<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in pages"
        :key="index"
        :to="item.path"
        :placeholder="true"
      >
        <span class="badge" v-if="item.badge > 0 ? true : false">{{ item.badge }}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.iconActive : item.iconInactive"
        />
        <span class="title">{{ item.title }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // 导航条数据
      pages: [
        {
          name: "Index", // 页面名称
          title: "首页", // 页面标题
          parentPage: "Index", // 页面的tabbar选项
          path: "/h5/index", // 页面路径
          // badge: "3", // tabbar提示的小数字
          iconActive: "https://img.yzcdn.cn/vant/user-active.png", // 选中时的图标
          iconInactive: "https://img.yzcdn.cn/vant/user-inactive.png" // 未选中时的图标
        },
        {
          name: "About",
          title: "关于",
          parentPage: "About",
          path: "/h5/about",
          badge: "3",
          iconActive: "https://img.yzcdn.cn/vant/user-active.png",
          iconInactive: "https://img.yzcdn.cn/vant/user-inactive.png"
        },
        {
          name: "Mine",
          title: "我的",
          parentPage: "Mine",
          path: "/h5/mine",
          badge: "30",
          iconActive: "https://img.yzcdn.cn/vant/user-active.png",
          iconInactive: "https://img.yzcdn.cn/vant/user-inactive.png"
        }
      ],
      active: 0 // 默认选择的 tabbar
    };
  },
  mounted() {
    this.tabbarActive(this.$store.state.active.title);
  },
  watch: {
    //监听路由变化
    $route(to) {
      this.tabbarActive(to.meta.parentPage);
      // console.log(to);
    }
  },
  methods: {
    // 判断选择哪一个 tabbar
    tabbarActive(parentPage) {
      const index = this.pages.map(item => item.parentPage).indexOf(parentPage);
      if (index != -1) {
        this.active = index;
      }
    }
  },
  components: {}
};
</script>
<style lang="scss" scope>
.home {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  .van-tabbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    .van-tabbar-item {
      width: 100%;
      padding: 6px 0;
      text-align: center;
      border: 1px solid #ccc;
      position: relative;
      // 导航栏图标
      img {
        width: 30px;
        height: auto;
      }
      .van-tabbar-item__text {
        .badge {
          text-align: center;
          width: 16px;
          font-size: 8px;
          color: white;
          position: absolute;
          top: -4px;
          left: 54%;
          z-index: 0;
        }
        .badge::after {
          width: 16px;
          height: 16px;
          content: "";
          display: block;
          border-radius: 50%;
          background-color: red;
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: -1;
        }
        .title {
          color: black;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
