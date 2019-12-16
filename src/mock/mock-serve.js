// 引入Mock 
import Mock from "mockjs"
// 引入data 
import data from './data.json'
// 接口地址 ： '/titles'
Mock.mock('/titles', { code: 0, data: data.titles })