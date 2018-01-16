<template>
  <section id="app" class="container is-fluid">
    <router-view></router-view>
    <dio-tip></dio-tip>
    <loading></loading>
  </section>
</template>

<script>
import loading from "./components/common/loading";
import dioTip from "./components/common/tip";
export default {
  name: "app",
  components: {
    loading,
    dioTip
  },
  mounted: function() {
    // console.log(1)
    // console.log(this.$router);
    // this.$router.push({ path: '/store', query: { _t: (new Date).getTime() } });
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  // background: #101535;
  background: url("./assets/img/bg_01.png") repeat;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cccccc;
  height: 100%;

  // background-size: 100% 100%;
}

.container {
  background: transparent;
}
</style>
