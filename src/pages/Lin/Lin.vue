<template>
  <div @click="$router.push('/login')">
    临时
  </div>
</template>
<script>
export default {
    mounted() {
    // 自动登录的操作
    this.$store.dispatch('autoLogin')
  }, 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>