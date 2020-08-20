<template>
  <div id="app">
    <transition :name="animate">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="view"></router-view>
      </keep-alive>
    </transition>
    <transition :name="animate">
      <router-view v-if="!$route.meta.keepAlive" class="view"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      animate: ""
    };
  }
};
</script>
<style lang="scss" scope>
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
}
</style>
