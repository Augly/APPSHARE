/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-26 10:42:23
 * @LastEditors: zero
 * @LastEditTime: 2020-03-26 11:29:19
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  // proxy第一个参数为要代理的路由
  // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
  app.use(proxy('/api', {
    target: 'http://39.107.78.120:8083/okcloud/',
    ws: false,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    },
  }))
}