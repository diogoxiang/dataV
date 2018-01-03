<template>
  <div id="app">
    <router-view></router-view>
    <dio-tip></dio-tip>
    <loading></loading>
  </div>
</template>

<script>
import loading from './components/common/loading'
import dioTip from './components/common/tip'
export default {
  name: 'app',
  components: {
    loading,
    dioTip
  },
  mounted: function () {
    // console.log(1)
    // console.log(this.$router);
    // this.$router.push({ path: '/store', query: { _t: (new Date).getTime() } });
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

body {
  background: #cf3131;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c99e67;
  height: 100%;
  background: url('./assets/img/bg.jpg');
  background-size: 100% 100%;
}

.container {
  background: transparent
}
</style>
