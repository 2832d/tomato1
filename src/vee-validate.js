
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
 
Vue.use(VeeValidate);



 VeeValidate.Validator.localize('zh_CN',  {
  messages: zh_CN.messages,
  attributes:{
    phone:'手机号',
    code: '短信验证码',
    name: '用户名',
    pwd: '密码',
}
 });


VeeValidate.Validator.extend('changePhone', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) => {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(value)
  }
});

 