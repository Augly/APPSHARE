/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 10:54:28
 * @LastEditors: your name
 * @LastEditTime: 2020-04-02 16:18:24
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './asstes/reset.less';
import './asstes/border.less';
import './index.css';
import  App  from './App.js';
import 'lib-flexible';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

