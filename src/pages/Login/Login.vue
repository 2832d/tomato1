<template>
  <div class="login-outer">
    <div class="login-root">
      <div class="login-logo">
        <img src="./images/04.png" alt />
      </div>
      <div class="login-center">
        <!--二维码界面-->
        <div class="login-lin">
          <img class="login-Img" src="./images/02.png" alt />
          <div class="login-witer"></div>
        </div>
        <div class="conter-header">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">免密码登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
        <div class="center-content">
          <!--免密码界面-->
          <ul v-if="loginWay" :class="{on:loginWay}">
            <li class="li-1">
              <div>中国+86</div>
              <div class="li-1-icon">|</div>
              <input
                class="li-1-icon2"
                placeholder="手机号"
                v-validate="'required|changePhone'"
                v-model="phone"
                name="phone"
              />
              <span class="tishi" style="color:red">{{ errors.first('phone') }}</span>
            </li>
            <li class="li-2">
              <input class="li-2-icon" type="text" v-model="code" placeholder="输入6位短信验证码" />
              <div
                class="li-2-icon2"
                @click="isTrue"
              >{{computedTime>0?`已发送(${computedTime}s)`:'获取短信验证码'}}</div>
            </li>
            <li class="li-3">接收语音验证码</li>
            <li class="li-4" @click="login">注册/登录</li>
          </ul>
          <!--密码界面-->
          <ul v-if="!loginWay" :class="{on:loginWay}">
            <li class="li-1">
              <input
                class="li-1-icon2"
                placeholder="账号"
                v-validate="'required'"
                v-model="name"
                name="name"
              />
              <span class="tishi" style="color:red">{{ errors.first('name') }}</span>
            </li>
            <li class="li-2">
              <input class="li-2-icon" v-model="pwd" type="password" placeholder="密码" />
            </li>
            <li class="li-3">忘记密码?</li>
            <li class="li-4" @click="login">注册/登录</li>
          </ul>
          <div class="center-footer">
            <div class="footer-top">
              <div class="footer-top-one">未注册手机验证后自动登录</div>
              <div>注册即代表同意《知乎协议》《隐私保护指引》</div>
            </div>
            <div class="footer-bottom">注册机构号</div>
          </div>
        </div>
      </div>
      <div class="login-icon">
        <div class="icon-sj">社交帐号</div>

        <div class="icon-wx">微信</div>

        <div class="icon-qq">QQ</div>

        <div class="icon-wb">微博</div>
      </div>
      <div class="login-footer">
        <div class="login-footer-con">下载知乎App</div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入接口
import { reqSendCode, reqSmsLogin, reqPwdLogin } from "../../api";
import { Toast, MessageBox } from "mint-ui";
export default {
  data() {
    return {
      phone: "", // 免密码手机号
      code: "",
      computedTime: 0, // 倒计时的默认值
      loginWay: true, //默认是免密码登录
      name: "", //用户名
      pwd: "", //密码
      isBoolean: true
    };
  },

  /* computed: {
    isRightPhone() {
      // 手机号码
      return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
        this.phone
      );
    },
  }, */
  methods: {
    isRightPhone() {
      // 手机号码
      return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
        this.phone
      );
    },
    isTrue() {
      if (this.isBoolean) {
        console.log(this.isRightPhone())
        if (this.isRightPhone()) {
          console.log(this.isRightPhone())
          this.sendCode();
        }
      }
    },

    // 发送验证码
    async sendCode() {
      this.computedTime = 60;
      this.timeId = setInterval(() => {
        this.computedTime--;
        this.isBoolean = false;
        if (this.computedTime <= 0) {
          // 还原为默认值
          this.computedTime = 0;
          // 清理定时器
          clearInterval(this.timeId);
          this.isBoolean = true;
        }
      }, 1000);

      // 调用接口发送验证码----成功或者失败
      const result = await reqSendCode(this.phone);
      if (result.code === 0) {
        // 成功
        Toast("发送成功");
      } else {
        // 失败
        MessageBox.alert("发送失败", "提示");
        this.computedTime = 0;
      }
    },
    async login() {
      // this.$validator.validateAll(); 表单整体校验
      const { loginWay, phone, code, name, pwd, captcha } = this;
      console.log(pwd);
      console.log(this);
      let names;
      // 判断
      if (loginWay) {
        // 手机号码登录
        names = ["phone", "code"];
      } else {
        // 用户名/密码
        names = ["name", "pwd"];
      }
      // 表单的验证
      const success = await this.$validator.validateAll(names);
      // 判断表单验证是否通过
      if (success) {
        let result;
        // 判断是哪种方式进行登录
        if (loginWay) {
          // 调用手机登录的接口
          console.log(phone, code);
          result = await reqSmsLogin(phone, code);

          console.log(result);
          this.code = ""; // 清掉验证码
        } else {
          console.log("222");
          // 调用用户名/密码的接口
          result = await reqPwdLogin({ name, pwd, captcha });
          console.log(result.code);
        }

        // 判断调用接口之后的返回的结果的状态码----code:0
        if (result.code === 0) {
          console.log("登陆成功");
          // 登录成功
          const user = result.data;
          // 保存当前的用户信息
          this.$store.dispatch("saveUser", user);

          // 跳转界面
          this.$router.replace("/lin"); // 我的  界面
        } else {
          Toast("登录失败");
        }
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login-outer
  background-color #87CEFA
  .login-root
    width 100%
    height 754.6px
    background-size 100%
    background-image url('./images/01.png')
    display flex
    flex-direction column
    align-items center
    .login-logo
      margin-top 30px
      margin-bottom 20px
      img
        width 128px
        height 81px
    .login-center
      position relative
      width 400px
      height 375px
      background-color #fff
      margin-bottom 25px
      .login-lin
        .login-witer
          position absolute
          right 0
          top 0
          width 0
          height 0
          border 26px solid transparent
          border-bottom-color #fff
          border-left-color #fff
        .login-Img
          position absolute
          right 0
          top 0
          width 52px
          height 52px
      .conter-header
        width 352px
        height 60px
        padding-left 24px
        line-height 60px
        a
          padding-bottom 18px
          margin-right 25px
          &.on
            border-bottom 3px solid #0000FF
            font-weight 700
            color #000
      .center-content
        .li-1
          padding-top 30px
          display flex
          width 356px
          padding-bottom 20px
          margin-left 20px
          margin-right 20px
          border-bottom 1px solid rgba(0, 0, 0, 0.07)
          .li-1-icon
            padding-left 10px
            padding-right 10px
          .li-1-icon2
            border 0
            outline none
            width 111px
        .li-2
          padding-top 30px
          padding-bottom 20px
          margin-left 20px
          margin-right 20px
          width 356px
          display flex
          border-bottom 1px solid rgba(0, 0, 0, 0.07)
          .li-2-icon
            border 0
            outline none
          .li-2-icon2
            padding-left 22px
        .li-3
          padding-top 30px
          padding-left 24px
          padding-bottom 20px
          margin-left 235px
          margin-right 20px
          color rgba(0, 0, 0, 0.3)
          width 117px
        .li-4
          width 356px
          margin-left 20px
          margin-bottom 18px
          text-align center
          height 36px
          line-height 36px
          background-color #0084FF
          color #fff
      .center-footer
        width 376px
        height 57px
        display flex
        padding-left 24px
        background-color #F6F6F6
        .footer-top
          padding-top 10px
          font-size 13px
          color #C8A080
          .footer-top-one
            margin-bottom 8px
        .footer-bottom
          font-size 13px
          padding-top 20px
          padding-left 10px
    .login-icon
      width 400px
      height 60px
      background-color #fff
      margin-bottom 25px
      display flex
      line-height 60px
      .icon-sj
        width 90px
        height 60px
        font-size 15px
        margin-left 24px
        margin-right 50px
      .icon-wx
        width 32px
        height 60px
        margin-right 20px
        background url('./images/weixin.jpg') 0 17px no-repeat
        background-size 35px
        padding-left 34px
        font-size 14px
      .icon-qq
        width 28px
        height 60px
        margin-right 20px
        background url('./images/qq.jpg') 0 18px no-repeat
        background-size 26px
        padding-left 25px
        font-size 14px
      .icon-wb
        width 50px
        height 60px
        margin-right 20px
        background url('./images/weibo.jpg') -20px 11px no-repeat
        background-size 63px
        padding-left 25px
    .login-footer
      width 400px
      height 42px
      background-color #fff
      text-align center
      line-height 42px
      color #0000ff
    .login-footer-con
      background url('./images/zhi.png') 125px 13px no-repeat
      background-size 18px
</style>