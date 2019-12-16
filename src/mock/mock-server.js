// 引入Mock
import Mock from 'mockjs'
// 引入data数据
import data from './data.json'
//data第一个是我定义的属性名，后面data是上面data数据
Mock.mock('/topic/people',{code:0,data:data.info})