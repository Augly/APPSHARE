/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2020-03-17 10:54:28
 * @LastEditors: your name
 * @LastEditTime: 2020-04-02 16:40:11
 */
import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import routers from "./router/router.js"

function App() {
  return (
    <Router>
        {
          routers.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component} />
            )
          })
        }
    </Router>
  );
}

export default App;
