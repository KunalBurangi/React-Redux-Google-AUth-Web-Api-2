import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-social.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {fetchAllEmployee} from './actions/employeeActions';
import AlertTemplate from "react-alert-template-basic";
const options = {
    timeout: 5000,
    position: "bottom center"
  };
const store = configureStore();
store.dispatch(fetchAllEmployee());
ReactDOM.render(
<Provider store={store} template={AlertTemplate} {...options}>
    <BrowserRouter>
<App />
</BrowserRouter>
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
