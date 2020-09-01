<!--
 * @Author: 苏年璟
 * @Date: 2020-08-31 11:25:12
 * @LastEditTime: 2020-09-01 09:47:57
 * 导航栏 <返回，分享> 不在一级页面展示；显示控制在router+vuex中
-->
<template>
  <div class="box" v-if="!this.$store.state.isBack">
    <div class="navigationBar">
      <div class="navigationBar_left">
        <van-icon @click="bark" name="arrow-left" />
      </div>
      <div class="navigationBar_right">
        <van-icon @click="share" name="share" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 数据
    return {};
  },
  // 子组件接收父组件值
  props: [],
  // 组件注册
  components: {},
  // 数据监听
  watch: {},
  // 计算属性
  computed: {},
  // 自定义方法
  methods: {
    bark() {
      this.$router.back();
    },
    share() {
      console.log(window.location.href);
    }
  }

  // 实例初始化后
  // beforeCreate() {},
  // 实例创建完成
  // created() {},
  // 挂载之前
  // beforeMount() {},
  // 挂载完成 ---> 可以执行自定义方法
  // mounted () {},
  // 数据更新前
  // beforeUpdate() {},
  // 数据更新完成
  // updated() {},
  // 组件销毁前
  // beforeDestroy() {},
  // 组件销毁后
  // destroyed() {},
};
</script>
<style lang="scss" scoped>
.box {
  height: 4vh;
}
.navigationBar {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 4vh;
  position: fixed;
  top: 0;
  // border: 1px solid red;
  background-color: rgba(204, 204, 204, 0.295);
  display: flex;
  justify-content: space-between;
  .van-icon {
    width: 4vh;
    height: 4vh;
    border-radius: 50%;
    text-align: center;
    line-height: 4vh;
    font-size: 2vh;
    font-weight: bold;
  }
  .navigationBar_left {
    .van-icon {
      font-size: 3vh;
      background-color: rgba(147, 151, 151, 0.219);
    }
  }
}
</style>
