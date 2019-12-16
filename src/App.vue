<template>
  <div>
    <!-- 路由组件 -->
    <router-view></router-view>
  </div>
</template>
<script>
//引入Topic
import Topic from './pages/Topic/Topic'
export default {
  name:'App',
  //注册组件
  // components:{
  //   Topic
  // }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
