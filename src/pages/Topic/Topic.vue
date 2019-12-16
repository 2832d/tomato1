<template>
<section>
    <div class="bigbig-boss">
        <div class="big-boss"> 

            <div class="er-header">
                <img  class="topicImg"  src="./images/icon-test.png" alt="">
                <h2>话题广场</h2>
                <p class="er-xiahuaxian">已关注6个话题</p>
            </div>
 
            <div class="er-er">
                <ul>
                    <li>
                        <!-- :class="{ on: $route.path === '/home' }"   选中该标签添加样式 -->
                        <a class="" href="javascript:;"
                            :class="{ on: $route.path === '/topic/people'}"
                             @click="goto('/topic/people')"
                        >人间不值得</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            :class="{ on: $route.path === '/topic/people2'}"
                             @click="goto('/topic/people2')"
                        >长大没那么美好</a>
                    </li>
                    <li>
                        <a href="javascript:;"
                            :class="{ on: $route.path === '/topic/people3'}"
                             @click="goto('/topic/people3')"
                        >张皓宸</a>
                    </li>
                    <li>
                        <a href="#经济学">经济美丽学</a>
                    </li>
                    <li>
                        <a href="#经济学">web前端</a>
                    </li>
                    <li>
                        <a href="#经济学">数据库</a>
                    </li>
                    <li>
                        <a href="#经济学">java</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">经济学</a>
                    </li>
                    <li>
                        <a href="#经济学">你要相信</a>
                    </li>
                    <li>
                        <a href="#经济学">这不是真的经济学</a>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
            <!-- <div class="san-yi">
                <div class="san-guanzhu">
                    <img src="./images/shengdanjie-huahuan.png" alt="">
                        <div class="san-neibu">
                            <h2>生活方式</h2>
                            <p>关注</p>
                            <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
                        </div>
                </div>

                <div class="san-guanzhu">
                    <img src="./images/shengdanjie-lingdang.png" alt="">
                        <div class="san-neibu">
                            <h2>圣诞快乐</h2>
                            <p>关注</p>
                            <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
                        </div>
                </div>

                <div class="san-guanzhu">
                    <img src="./images/shengdanjie-qiqiu.png" alt="">
                        <div class="san-neibu">
                            <h2>新闻资讯</h2>
                            <p>关注</p>
                            <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
                        </div>
                </div>
                <div class="san-guanzhu">
                    <img src="./images/shengdanjie-milu.png" alt="">
                        <div class="san-neibu">
                            <h2>早睡早起</h2>
                            <p>关注</p>
                            <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
                        </div>
                </div>

                <div class="san-guanzhu">
                    <img src="./images/shengdanjie-tangguo.png" alt="">
                        <div class="san-neibu">
                            <h2>平安果子</h2>
                            <p>关注</p>
                            <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
                        </div>
                </div>

                <div class="san-guanzhu">
                    <img src="./images/shengdanjie-xingxing.png" alt="">
                        <div class="san-neibu">
                            <h2>平安果子</h2>
                            <p>关注</p>
                            <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
                        </div>
                </div>
            </div> -->


    <!-- 
            <div class="san-er">
                <div class="san-right">
                    <img src="./images/shengdanjie-xingxing.png" alt="">
                        <div class="san-right2">
                            <h2>平安果子</h2>
                            <p>关注</p>
                            <span>美食，顾名思义就是美味的食物，贵的有山珍海味，便宜的有街边小吃</span>
                        </div>
                </div>
            </div> -->

        </div>

        <div class="right-remen">
            <h2>热门话题</h2>
            <div class="right-jieqi">
                <img src="./images/shengdanjie-tangguo.png" alt="">
                <h2>节气</h2>
                <p>5939人关注</p>
            </div>

            <div class="right-jieqi">
                <img src="./images/shengdanjie-xuehua.png" alt="">
                <h2>节气</h2>
                <p>5939人关注</p>
            </div>

            <div class="right-jieqi">
                <img src="./images/shengdanjie-xingxing.png" alt="">
                <h2>节气</h2>
                <p>5939人关注</p>
            </div>

            <div class="right-food">
                刚毕业3年的本科生，没有系统接触过深度学习、机器学习等AI相关的只是，用业余时间学习，是否值得？
            </div>

            <div class="right-footer">
                <ul class="right-footer1">
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                </ul>

                 <ul class="right-footer2">
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                    <li>刘看山></li>
                    
                </ul>
            </div>
        </div>         
    </div>

</section>
    
</template>
<script>
import {reqData} from '../../api'
export default {
    name:'Topic',
    methods:{
        async goto(path){
            const result = await reqData()
            this.cases = result.data.data
            // console.log(this.cases)
            if(this.$route.path!==path){
                this.$router.replace(path)
            }
        }
    },
    data (){
        return{
            cases:{}
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scopde>
.bigbig-boss
    display flex
    .big-boss
        width 50%
        height 100%
        padding-top 50px
        /* border 1px solid #ccc; */
        
        .er-header
            width 800px
            border-bottom 1px solid #ccc
            display flex
            margin-left  350px
            
            .topicImg
                width 50px
                height 30px
            h2
                font-size 14px
                padding-left 10px
                margin-top 8px
            .er-xiahuaxian
                padding-left 570px
            .er-xiahuaxian:hover
                text-decoration:underline;
                color #259
        .er-er
            width 775px
            height 160px
            margin-left 350px
            padding 10px
            border-bottom 1px solid #ccc
            ul
                  
                
                a
                    float left
                    min-width 40px
                    height 30px
                    background-color white
                    margin 10px 10px
                    border-radius 30px
                    border 1px solid #259
                    font-size 12px
                    padding 0 6px
                    text-align center
                    line-height 30px
                    flex-wrap wrap
                    color #259
                    &.on
                       background #259 
                       color #ffffff 
                li:hover a
                    background #259 
                    color #ffffff
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
                // padding-top 0
                border-bottom 1px solid #ccc
                display flex
                float left
                img 
                    width 50px
                    height 50px
                    padding-top 10px
                    padding-left 10px
                .san-neibu
                    display inline
                    padding-top 10px
                    h2
                        font-size  20px
                        /* font-weight 700 */
                        padding-left 25px
                        float left
                        color #259
                    h2:hover
                        text-decoration:underline;
                        color #259
                    p
                        padding-left 255px
                        color #259
                    p:hover
                        text-decoration:underline;
                        color #259
                    span 
                        display block
                        padding-top 15px
                        padding-left 25px
                        line-height 20px
                        font-size 12px
        .san-er   
            .san-right  
                width 380px
                height 100px
                margin-left 70px
                img
                    width 60px
                    height 60px
                    padding-top 10px
                    float left
                .san-right2
                    display inline
                    h2
                        font-size 20px
                        float left
    .right-remen
        margin-left 300px
        padding-top 50px
    .right-jieqi
        width 280px
        padding-top 8px
        border-bottom 1px solid #ccc
        
        img
            width 50px
            height 50px
            float left 
        h2
            padding-top 15px
            padding-left 60px
            font-size 15px
            color #259
        h2:hover
            text-decoration:underline;
            color #259
        p
            font-size 10px
            padding-left 50px
            margin 10px
    .right-food
        width 280px
        height 90px
        padding-top 8px
        border-bottom 1px solid #ccc 
        font-size 10px
        line-height 25px
        color #259
    .right-food:hover
        text-decoration:underline;
        color #259
    .right-footer
        padding-top 15px
        min-width 280px
        
        .right-footer1
            display flex
            justify-content space-around
            li
                margin-right 1px
                font-size 10px
                color #A9A9A9
                
            li:hover
                text-decoration:underline;
                color #259
        .right-footer2
            padding-top 10px
            display flex
            justify-content space-around
            li
                margin-right 1px
                font-size 10px
                color #A9A9A9
                
            li:hover
                text-decoration:underline;
                color #259



            
        
            
        
            
                 

            
                


                    
                
                    
            

          
            
</style>