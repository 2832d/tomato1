<template>
  <ul class="san-yi">
    <li class="san-guanzhu" v-for="(item,index) in cases" :key="index">
      <img class="img" :src="item.img" alt />
      <div class="san-neibu">
        <h2>{{item.title}}</h2>
        <p @click="a(item)">{{item.isShow?'取消关注':'关注'}}</p>
        <span>{{item.content}}</span>
      </div>
    </li>

    <!-- <div class="san-guanzhu">
      <img src="./images/shengdanjie-lingdang.png" alt />
      <div class="san-neibu">
        <h2>圣诞快乐</h2>
        <p>关注</p>
        <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
      </div>
    </div>

    <div class="san-guanzhu">
      <img src="./images/shengdanjie-qiqiu.png" alt />
      <div class="san-neibu">
        <h2>新闻资讯</h2>
        <p>关注</p>
        <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
      </div>
    </div>
    <div class="san-guanzhu">
      <img src="./images/shengdanjie-milu.png" alt />
      <div class="san-neibu">
        <h2>早睡早起</h2>
        <p>关注</p>
        <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
      </div>
    </div>

    <div class="san-guanzhu">
      <img src="./images/shengdanjie-tangguo.png" alt />
      <div class="san-neibu">
        <h2>平安果子</h2>
        <p>关注</p>
        <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
      </div>
    </div>

    <div class="san-guanzhu">
      <img src="./images/shengdanjie-xingxing.png" alt />
      <div class="san-neibu">
        <h2>平安果子</h2>
        <p>关注</p>
        <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
      </div>
    </div> -->
  </ul>
</template>
<script>
/* 引入接口 */
import {reqData} from "../../api"
export default {
  data(){
    return{
      cases:[]
    }
  },
  //mock
  name:"People",
  async mounted(){
    const result=await reqData();
    this.cases=result.data.data;
    console.log(this.cases);
  },
  //点击关注
  methods:{
    a(item) {
      item.isShow = !item.isShow
    }
  }
  
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.san-yi
    overflow hidden
    width 800px
    margin-left 350px
    /* width 800px */
    /* height 160px */
    /* margin-left 350px */
    /* padding 10px */
    /* border-bottom 1px solid #ccc */
    /* display flex */
    .san-guanzhu
        width 380px
        height 100px
        border-bottom 1px solid #ccc
        display flex
        // position relative
        // float left
        .img 
          width 60px 
          background-color red
        .san-neibu
          display inline
          padding-top 10px
          h2
            font-size  20px
            /* font-weight 700 */
            padding-left 10px
            float left
            color #259
          h2:hover
              text-decoration:underline;
              color #259

            p
              width 80px
              height 30px
              color #259
              // position absolute
              // right 0
              // top 20px
              justify-content flex-end
              // padding-left 284px
              // color #259
            p:hover
                text-decoration:underline;
                color #259
            // span 
            //     display block
            //     padding-top 15px
            //     padding-left 10px
            //     line-height 20px
            //     font-size 12px
</style>