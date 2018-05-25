import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import * as auth_Action from '../actions/auth_Actions';
import { history } from '../_healpers/history';

import { bindActionCreators } from 'redux';
import { login } from "../actions/auth_Actions";
class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.handelLogout = this.handelLogout.bind(this);

  }
  handelLogout(e) {
    debugger;
    localStorage.removeItem('user');
    localStorage.removeItem('userName');
    localStorage.removeItem('error');
    sessionStorage.removeItem('userData');
    history.push('/login');
  }
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3" >
        <a className="navbar-brand">crud-react-redux</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item active">
              <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/employee">Employee</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-link" onClick={this.handelLogout} >Logout</button>
            </li>
          </ul>

        </div>
      </nav>
    );
  }
}
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    DATA: state.auth
  };
}


export default connect(mapStateToProps)(Header);
