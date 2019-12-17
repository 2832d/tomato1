<template>
  <div>
    <div class="question_lists">
      <Answer/>
      <div class="item">
        <a>彩虹六号只玩喷子能成为大神吗？</a>
        <div class="answer_question">
          <div class="solve_question">
            <button class="write_answer">
              <img src="" alt="">
             写回答
            </button>
          </div>
          <span class="answer_info">2 个回答 · 6,396 个浏览</span>
        </div>
      </div>
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
          </div>
          <span class="answer_info">12 个回答 · 636 个浏览</span>
        </div>
      </div>
      <div class="item">
        <a>如何看待南大碎尸案破了？</a>
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
          </div>
          <span class="answer_info">3 个回答 · 69 个浏览</span>
        </div>
      </div>
      <div class="item">
        <a>国足踢的那么烂，球员有明面或私下被打过吗？</a>
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
              </svg>"写回答"
            </button>
          </div>
          <span class="answer_info">3 个回答 · 69 个浏览</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Answer from '../conponents/Answer/Answer'
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Answer
  }
};
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

.main_column .question_lists .item .solve_question .write_answer {
    width: 94px;
    height:30px;
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid #0084ff;
    border-radius: 3px;
    color: #0084ff;
}
.main_column .question_lists .item .solve_question .write_answer span {

  width: 20px;
  height: 28px;
  line-height: 28px;
  display: inline-flex; 
  align-items: center;
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