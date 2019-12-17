<template>
  <div>
    <zh-header />
    <el-container class="zh-main">
      <div style="padding-top:20px;width:100%;">
        <!-- Main content -->
        <router-view></router-view>
      </div>
      
    </el-container>
  </div>
</template>

<script>
import zhHeader from "./_zh-header";

export default {
  data() {
    return {};
  },
  components: {
    "zh-header": zhHeader,
   
  }
};
</script>

<style>
.zh-main {
  width: 1000px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
