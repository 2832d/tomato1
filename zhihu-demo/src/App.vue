<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!--路由视图,显示路由组件-->
    <!--底部功能组件-->
    <Find_1 />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Find_1 from './components/Find_1/Find_1.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // Find_1
    Find_1
  }
}
</script>

<style>
html {
  height: 100%;
  background-color: 16185078;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
