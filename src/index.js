import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'antd/dist/antd.css';
import './assets/scss/style.scss';
import store from "./redux/store";
import {HISTORY} from './helpers/HistoryHelper';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
      <Router history={HISTORY}>
          <App/>
      </Router>
  </Provider>, document.getElementById('root'));
