import React from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import ReactDOM from 'react-dom';
import Router from './router'
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';
const store = configureStore();

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider store={store}>
            <Router />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
);

registerServiceWorker();
