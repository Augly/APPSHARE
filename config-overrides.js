/*
 * @Author: zero
 * @Date: 2020-04-02 16:00:01
 * @LastEditors: your name
 * @LastEditTime: 2020-04-02 16:37:44
 * @Description: file content
 */
const { override, fixBabelImports,addWebpackAlias,addLessLoader,addPostcssPlugins  } = require('customize-cra');
const path = require("path")
 module.exports = override(
     fixBabelImports('import', {
       libraryName: 'antd-mobile',
       style: true,
     }),
     addLessLoader(),
     addPostcssPlugins([require('postcss-pxtorem')({ rootValue: 37.5, propList: ['*'], minPixelValue: 2, selectorBlackList: ['am-'] })]),
     addWebpackAlias({
      '@': path.join(__dirname, "src")
    }),
   );