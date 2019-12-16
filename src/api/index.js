//  引入ajax
import ajax from './ajax.js'
// 获取头部标题 接口
export const reqTitles = () => ajax('/titles')