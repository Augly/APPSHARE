/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 16:12:06
 * @LastEditors: zero
 * @LastEditTime: 2020-03-17 16:12:16
 */
import { createStore } from "redux";
import rootReducer from './reducers';

let store = createStore(rootReducer);

export default store;
