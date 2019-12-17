<template>
   <div class="item">
        <a>在地球毁灭之前的那一天，你最想做什么？</a>
        <div class="answer_question">
          <div class="solve_question">
            <button class="write_answer">
              <svg
                class="Zi Zi--Edit"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"
                />
              </svg>写回答
            </button>
            <button type="button" class="fllow"><svg class="Zi Zi--Plus" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z" fill-rule="evenodd"></path></svg>关注问题</button>
            <button type="button" class="later_answer"><svg class="Zi Zi--Later" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M5.591 10.714C6.373 7.434 9.257 5 12.696 5c4.04 0 7.314 3.358 7.314 7.5 0 4.142-3.274 7.5-7.314 7.5-2.483 0-4.755-1.28-6.1-3.363a.816.816 0 0 1 .22-1.114.772.772 0 0 1 1.086.227c1.058 1.638 2.842 2.643 4.794 2.643 3.174 0 5.747-2.638 5.747-5.893s-2.573-5.893-5.747-5.893c-2.713 0-4.988 1.93-5.59 4.523l1.145.315a.418.418 0 0 1 .102.762l-2.36 1.397a.418.418 0 0 1-.577-.154l-1.362-2.42a.418.418 0 0 1 .475-.608l1.062.292zm7.987 1.376l2.794 1.654a.784.784 0 0 1 .283 1.059l-.015.027a.781.781 0 0 1-1.08.29l-3.112-1.844a.784.784 0 0 1-.145-.092.784.784 0 0 1-.292-.757V8.784a.784.784 0 1 1 1.567 0v3.306z"></path></svg>稍后答</button>
          </div>
          <span class="answer_info">12 个回答 · 636 个浏览</span>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .main_column .question_lists{
    padding: 0 20px;
    background-color: #fff;
    height: 800px;
}
.main_column .question_lists .item {
    padding: 17px 0 22px;
    border-bottom: 1px solid #f6f6f6; 
}
.main_column .question_lists .item a {
    margin-right: 26px;
    margin-bottom: 0;
    color: #1a1a1a;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 8px;
    font-weight: 600;
}

.main_column .question_lists .item .answer_question .solve_question .write_answer {
    width: 94px;
    height:30px;
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid #0084ff;
    border-radius: 3px;
    color: #0084ff;
}
.main_column .question_lists .item .solve_question .write_answer .pen {

  width: 20px;
  height: 20px;
  color: #0084ff;
  margin-top:100px
  
}

.main_column .question_lists .item .solve_question .write_answer .write {
  width: 64px;
  height: 27px;
}

.main_column .question_lists .item .answer_question {
    align-items: center;
    display: flex;
    margin-top: 17px;
    justify-content: space-between;
    color: #8590a6;
}

.main_column .question_waiting .question_waiting_type div{
    margin: 0 10px;
    box-shadow: 0 6px 10px 0 rgba(0,132,255,.06);
    background: rgba(133,144,166,.12);
}
</style>