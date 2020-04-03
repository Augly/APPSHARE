/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-18 13:58:41
 * @LastEditors: zero
 * @LastEditTime: 2020-03-26 11:15:14
 */
import Loadable from 'react-loadable'
const loadable = (filename) => Loadable({
  loader: () => import(`@/view/${filename}/${filename}.js`),
  loading: () => ('')
});
const routers = [
  {
    path: "/",
    exact: true,
    component: loadable('index')
  }
]

export default routers