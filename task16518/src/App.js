import React, { Component } from 'react';
import logo from './logo.svg';
import { Router, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import './App.css';
import { PrivateRoute } from './PrivateRoute';
import { history } from '../src/_healpers/history';

import './components/Register/index.js'
import Register from './components/Register/Register.js';
import Home from './components/Home/homePage.js';
import Header from './common/Header';
import Employee from './components/Employee/index';
import AddEmp from './components/Employee/addEmp';
import EmpEdit from './components/Employee/edit';
class App extends Component {
    constructor(props) {
      super(props);
      const { dispatch } = this.props;
      history.listen((location, action) => {
      });
  }
  render() {
    return (
      <div className="container-fluid">
        
        <Router history={history}>
          <div>
            <PrivateRoute exact path='/' component={Home}></PrivateRoute>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <PrivateRoute exact path='/employee' component={Employee}></PrivateRoute>
            <PrivateRoute exact path='/addEmp' component={AddEmp}></PrivateRoute>
            <PrivateRoute exact path='/edit/:id' component={EmpEdit}></PrivateRoute>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
