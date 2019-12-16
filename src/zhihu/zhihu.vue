<template>
  <div class="outer">
    <!-- 主界面 -->
    <div class="main-interface">
      <!-- 左侧的主要内容 -->
      <div class="mainTitle">
        <!-- 导航栏 -->
        <div class="nav-link">
          <div class="recommend-v">推荐</div>
          <div class="follow-v">关注</div>
          <div class="hot-v">热榜</div>
        </div>
        <Recommend />
      </div>
      <!-- 右侧的侧边栏内容 -->
      <aside>
        <div class="v-top">
          <div class="v-answer">
            <span class="el-icon-collection"></span>
            <span class="answer-bar">写回答</span>
          </div>
          <div class="v-article">
            <span class="el-icon-notebook-1"></span>
            <span class="article-bar">写文章</span>
          </div>
          <div class="v-ideal">
            <span class="el-icon-reading"></span>
            <span class="ideal-bar">写想法</span>
          </div>

        </div>
        <div class="v-center">
          <div class="live-v">
            <div class="el-icon-lollipop"></div>
            <div>Live</div>
          </div>
          <div class="bookstore-v">
            <div class="el-icon-wind-power"></div>
            <div>书店</div>
          </div>
          <div class="table-v">
            <div class="el-icon-wallet"></div>
            <div>圆桌</div>
          </div>
          <div class="specialColumn-v">
            <div class="el-icon-sugar"></div>
            <div>专栏</div>
          </div>
          <div class="consultation-v">
            <div class="el-icon-mobile-phone"></div>
            <div>付费咨询</div>
          </div>
          <div class="encyclopedias-v">
            <div class="el-icon-message"></div>
            <div>百科</div>
          </div>
        </div>
        <div class="v-footer">
          <div class="collection">
            <div class="el-icon-star-on"></div>
            <span class="v-coll">我的收藏</span>
            <div class="num1"><span>0</span></div>
          </div>
          <div class="question">
            <div class="el-icon-question"></div>
            <span class="v-ques">我关注的问题</span>
            <span class="num2">0</span>
          </div>
          <div class="invitation">
            <div class="el-icon-user-solid"></div>
            <span class="v-invi">我的邀请</span>
            <span class="num3">2</span>
          </div>
        </div>

      </aside>
    </div>
  </div>

</template>
<script>
import { Icon } from 'element-ui'
import Recommend from '../components/Recommend/Recommend.vue'
export default {
  name: 'zhihu',
  components: {
    Recommend
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../common/stylus/mixins.styl'
.outer
  width 100%
  height 100%
  margin 0 auto
  .main-interface
    width 1000px
    margin 10px 245px
    padding 0 16px
    clearFix()
    .mainTitle
      float left
      width 694px
      margin-right 10px
      .nav-link
        width 100%
        height 60px
        display flex
        flex-direction row
        border 1px solid #ccc
        .recommend-v
          width 32px
          height 58px
          font-size 16px
          text-align center
          margin 0 22px
          line-height 58px
        .follow-v
          width 32px
          height 58px
          font-size 16px
          text-align center
          margin 0 22px
          line-height 58px
        .hot-v
          width 32px
          height 58px
          font-size 16px
          text-align center
          margin 0 22px
          line-height 58px
    aside
      width 296px
      float right
      display flex
      flex-direction column
      .v-top
        display flex
        flex-direction row
        border 1px solid #cccccc
        .v-answer
          display flex
          flex-direction column
          width 48px
          height 50px
          margin 23px
          .el-icon-collection
            width 24px
            height 24px
            margin 0 0 6px
          .answer-bar
            color #444444
            font-size 16px
            height 21px
            text-align center
        .v-article
          display flex
          flex-direction column
          width 48px
          height 50px
          margin 23px
          .el-icon-notebook-1
            width 24px
            height 24px
            margin 0 0 6px
            .article-bar
              color #444444
              font-size 16px
              height 21px
        .v-ideal
          display flex
          flex-direction column
          width 48px
          height 50px
          margin 23px
          .el-icon-reading
            width 24px
            height 24px
            margin 0 0 6px
          .v-footer
            color #444444
            font-size 16px
            height 21px
      .v-center
        display flex
        flex-direction row
        justify-content space-around
        border 1px solid #ccc
        margin 20px 0 -5px
        padding 0 10px
        word-break normal
        .live-v
          width 92px
          height 55px
          display flex
          flex-direction column
        .bookstore-v
          width 92px
          height 55px
          display flex
          flex-direction column
        .table-v
          width 92px
          height 55px
          display flex
          flex-direction column
        .specialColumn-v
          width 92px
          height 55px
          display flex
          flex-direction column
        .consultation-v
          width 92px
          height 55px
          display flex
          flex-direction column
        .encyclopedias-v
          width 92px
          height 55px
          display flex
          flex-direction column
      .v-footer
        padding 30px 0
        border 1px solid #cccccc
        .collection
          height 40px
          padding 0 20px
          .v-coll
            color #8590A6
            font-size 14px
            margin 0 10px
            height 20px
            text-align center
            line-height 20px
          .num1
            width 27px
            height 28px
            float right
            color #8590a6
            padding 6px 10px
            background #f6f6f6
        .question
          height 40px
          padding 0 20px
          .v-ques
            color #8590A6
            font-size 14px
            margin 0 10px
            height 20px
            line-height 20px
          .num2
            width 27px
            height 28px
            float right
            color #8590a6
            padding 6px 10px
            background #f6f6f6
        .invitation
          height 40px
          padding 0 20px
          .v-invi
            color #8590A6
            font-size 14px
            margin 0 10px
            height 20px
            line-height 20px
          .num3
            width 27px
            height 28px
            float right
            color #8590a6
            padding 6px 10px
            background #f6f6f6
</style>
