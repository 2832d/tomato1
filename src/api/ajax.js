//引入axios
import axios from 'axios'
//引入qs
import qs from 'qs'

//添加请求拦截器
axios.interceptors.request.use((config)=>{
  const{method,data} = config
  if(method.toUpperCase() === "POST"&& data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})
export default axios