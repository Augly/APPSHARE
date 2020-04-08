/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-26 10:42:23
 * @LastEditors: your name
 * @LastEditTime: 2020-04-08 16:08:15
 */
const proxy = require('http-proxy-middleware')
let env = 'dev'
const Object = {
  pro: 'http://www.fenghuoxia.com/api/',
  test: 'http://test.fenghuoxia.com/api/',
  dev: 'http://dev.fenghuoxia.com/api/'
}
module.exports = function (app) {
  // proxy第一个参数为要代理的路由
  // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
  app.use(proxy('/api', {
    target: Object[env],
    ws: false,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    },
  }))
}