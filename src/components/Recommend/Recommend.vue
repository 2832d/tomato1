<template>

  <ul class="title-v">
    <li class="v-titl"
        v-for="(title,index) in titles"
        :key="index">
      <span class="v-title1">
        <h2>{{title.h2}}</h2><br>
      </span>
      <span class="v-main">
        <span>{{title.top1}}</span><br><br>
        <span>{{title.top2}}</span><br>

      </span>

      <el-button type="primary"
                 icon="el-icon-caret-top">{{title.el-icon-caret-top}}赞同 </el-button>
      <el-button type="primary"
                 icon="el-icon-caret-bottom"></el-button>
      <el-button icon="el-icon-s-comment">{{title.el-icon-s-comment}}条评论</el-button>
      <el-button icon="el-icon-s-promotion">分享</el-button>
      <el-button icon="el-icon-star-on">收藏</el-button>
      <el-button icon="el-icon-mouse">感谢</el-button>
    </li>
  </ul>

</template>
<script>
import { Button, Icon } from 'element-ui'
import { reqTitles } from '../../api'
import { mapState } from 'vuex'
export default {
  name: 'Recommend',
  computed: {
    ...mapState({
      titles: state => state.titles.titles
    })
  },
  async mounted () {
    this.$store.dispatch('getTitles')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.title-v
  .v-titl
    width 654px
    height 159px
    background #ffffff
    padding 20px
    border 1px solid #ccc
    .v-title1
      color #1a1a1a
      font-size 18px
    .v-main
      span
        font-size 15px
        margin 0 0 21px
        color #1A1A1A
    .bottom-v
      color #FFF
      margin 0px -20px -10px
      padding 10px 20px
      display flex
      flex-direction row
</style>