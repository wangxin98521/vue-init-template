<!--
 * @Author: 苏年璟
 * @Date: 2020-08-12 16:09:53
 * @LastEditTime: 2020-08-31 14:43:19
-->
<template>
  <div class="about">
    <!-- <navigationBar></navigationBar> -->
    <h1>This is an about page</h1>
    <router-link to="/h5/home/test">
      <button class="button">点击跳转</button>
    </router-link>
  </div>
</template>
<script>
// import navigationBar from "@/components/public/navigationBar";
export default {
  data() {
    return {};
  },
  // 组件注册
  components: {
    // navigationBar
  }
};
</script>
<style lang="less" scoped></style>
