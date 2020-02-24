import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'   //状态管理
import store, {Persistor} from './store/store'
import {PersistGate} from 'redux-persist/lib/integration/react'; //state持久化组件
import instance from './utils/axios'
import './index.scss'
import 'element-theme-default';
import './utils/resize'

React.axios = instance;//挂载自定义请求实例

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
