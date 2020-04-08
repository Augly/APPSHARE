/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-26 10:26:00
 * @LastEditors: your name
 * @LastEditTime: 2020-04-08 17:34:07
 */
import axios from "axios";
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
// 创建 axios 实例
const service = axios.create({
  baseURL: "/api", // api base_url
  timeout: 100000 // 请求超时时间
});
const err = error => {
  Toast.hide()
  if (error.message.includes("timeout")) {
    Toast.fail('请求超时,请稍后重试!',2);
  }
  if (error.response) {
    const data = error.response.data;
    if (error.response.status === 404) {
      Toast.fail('接口不存在', 2);
    }
    if (error.response.status === 403) {
      Toast.fail('权限不够', 2);
    }

    if (error.response.status === 500) {
      Toast.fail('服务器错误', 2);
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      Toast.fail('请登录', 2);
    }
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(config => {
  Toast.loading('数据加载中', 10000)
  return config;
}, err);

// response interceptor
service.interceptors.response.use(response => {
  Toast.hide()
  if (response.data.code === 10000) {
    Toast.fail(response.data.message, 2);
    return false;
  } else if (response.data.code === 500) {
    return false;
  } else {
    return response.data;
  }
}, err);


export {  service as axios };
