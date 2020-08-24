<template>
  <div class="search">
    <div class="send">
      <input
        id="searchInput"
        type="text"
        placeholder="请输入关键字"
        v-model="searchVal"
      />
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
import { setLocalStorage, getLocalStorage } from "@/assets/TS/tools";
export default {
  data() {
    // 数据
    return {
      searchVal: "",
      searchVals: []
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
    // 获取本地存储中搜索历史记录并赋值给 searchVals
    getSearchVals() {
      if (
        getLocalStorage("searchVals") &&
        getLocalStorage("searchVals").length
      ) {
        this.searchVals = getLocalStorage("searchVals");
      }
    },
    // 点击搜索后，判断历史记录是否有相同的值，有则替换 无则添加
    search: function() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      // 通过过滤器选中元素并删除
      if (this.searchVals && !this.searchVals.length) {
        this.searchVals.filter(function(item, index) {
          if (item.val == that.searchVal) {
            that.searchVals.splice(index, 1);
            return;
          }
        });
      }
      console.log(this.searchVals);
      this.searchVals.unshift({ val: this.searchVal });
    },
    // 点击历史记录 添加到搜索输入框
    getVal(e) {
      // console.log(e.target.innerHTML);
      this.searchVal = this.searchVal + e.target.innerHTML;
      document.getElementById("searchInput").focus(); // input框获取焦点
    },
    // 清除选中的历史记录
    clearVal(e) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      const clearValContent = e.currentTarget.previousElementSibling.innerHTML; // 待删除的内容
      // console.log(clearValContent);
      // 通过过滤器选中元素并删除
      this.searchVals.filter(function(item, index) {
        if (item.val == clearValContent) {
          that.searchVals.splice(index, 1);
          return;
        }
      });
    }
  },

  // 实例初始化后
  // beforeCreate() {},
  // 实例创建完成
  created() {
    this.getSearchVals();
  },
  // 挂载之前
  // beforeMount() {},
  // 挂载完成 ---> 可以执行自定义方法
  // mounted() {},
  // 数据更新前
  // beforeUpdate() {},
  // 数据更新完成
  // updated() {},
  // 组件销毁前
  beforeDestroy() {
    setLocalStorage("searchVals", this.searchVals);
  }
  // 组件销毁后
  // destroyed() {}
};
</script>
<style lang="less" scoped>
.search {
  .send {
    input {
      padding: 0 10px;
    }
  }

  .searchContent {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    div {
      display: inline-block;
      font-size: 6px;
      font-weight: 700;
      color: rgb(139, 133, 133);
      margin-right: 20px;
      padding: 0 4px;
      border: 1px solid rgb(218, 214, 214);
      border-radius: 8px;
      span {
        margin-right: 10px;
        overflow: hidden;
        display: inline-block;
        max-width: 100px;
        max-height: 16px;
        text-overflow: ellipsis;
        display: -webkit-inline-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        border-right: 1px solid rgb(218, 214, 214);
      }
      span:active {
        background-color: aqua;
      }
    }
  }
}
</style>
