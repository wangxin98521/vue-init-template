<!--
 * @Author: 苏年璟
 * @Date: 2020-08-17 08:57:04
 * @LastEditTime: 2020-09-01 14:41:07
-->
<template>
  <div class="index">
    <h1>首页</h1>
    <div class="index-top">
      <search></search>
    </div>
  </div>
</template>

<script>
import search from "@/components/Index/search";
export default {
  data() {
    // 数据
    return {};
  },
  // 组件注册
  components: {
    search
  },
  // 数据监听
  watch: {},
  // 计算属性
  computed: {},
  // 自定义方法
  methods: {}

  // 实例初始化后
  // beforeCreate() {},
  // 实例创建完成
  // created() {},
  // 挂载之前
  // beforeMount() {},
  // 挂载完成 ---> 可以执行自定义方法
  // mounted() {},
  // 数据更新前
  // beforeUpdate() {},
  // 数据更新完成
  // updated() {},
  // 组件销毁前
  // beforeDestroy() {},
  // 组件销毁后
  // destroyed() {}
};
</script>
<style lang="less" scoped></style>
