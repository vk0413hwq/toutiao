// 引入axios依赖
import axios from 'axios'

// 配置公告的url
axios.defaults.baseURL ="http://tt.linweiqin.com/api/tt"


// 然后再配置一个请求的拦截器
axios.interceptors.request.use(function(config){
    return config
}),function(error){
    return Promise.reject(error)
}

// 这是响应的拦截器,我只需要返回data数据
axios.interceptors.response.use(function(response){
    return response.data;
}),function(error){
    return Promise.reject(error)
}


export default axios