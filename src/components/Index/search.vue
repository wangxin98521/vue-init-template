<template>
  <div class="search">
    <div>
      <input type="text" placeholder="请输入关键字" v-model="searchVal" />
      <button class="btn" @click="search">搜索</button>
    </div>
    <div class="searchContent">
      <div v-for="(item, index) in searchVals" :key="index">
        <span @click="getVal($event)" ref="msg">{{ item.val }}</span>
        <i @click="clearVal($event)">X</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 数据
    return {
      searchVal: "",
      searchVals: [{ val: "小猪" }, { val: "小猪1" }]
    };
  },
  // 子组件接收父组件值
  props: {},
  // 组件注册
  components: {},
  // 数据监听
  watch: {},
  // 计算属性
  computed: {},
  // 自定义方法
  methods: {
    search: function() {
      console.log(this.searchVal);
      this.searchVals.unshift({ val: this.searchVal });
    },
    getVal(e) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      // const that = this;
      // this.searchVal = this.searchVal + "sss";
      // const clearValContent = e.currentTarget.previousElementSibling.innerHTML; // 待删除的内容
      console.log(e.target.innerHTML);
      this.searchVal = this.searchVal + e.target.innerHTML;
    },
    clearVal(e) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      // this.searchVal = this.searchVal + "sss";
      const clearValContent = e.currentTarget.previousElementSibling.innerHTML; // 待删除的内容
      // console.log(clearValContent);
      this.searchVals.filter(function(item, index) {
        if (item.val == clearValContent) {
          that.searchVals.splice(index, 1);
          return;
        }
      });
    }
  }

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
