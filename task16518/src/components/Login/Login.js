import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAlert } from "react-alert";
import {SpinLoader } from "react-css-loaders";
import '../Login/login.css'
import * as auth_Action from '../../actions/auth_Actions';
import ExternalLogin from './ExternalLogin';
import * as ExternalLogin_Action from '../../actions/ExternalLogin_Action'
class login extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
     //   this.props.dispatch(userActions.logout());
        this.state = {
            Username: '',
            Password: '',
            submitted: false,
            loading: true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger;
        setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
        const { dispatch } = this.props;
        if(JSON.parse(localStorage.getItem('token'))!=null){
            dispatch(ExternalLogin_Action.addExternalLogin(JSON.parse(localStorage.getItem('token'))));

        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        debugger;
        e.preventDefault();
        this.setState({ submitted: true });
        const { Username, Password } = this.state;
        const { dispatch } = this.props;
        // if(!JSON.parse(localStorage.getItem('token'))==null){
        //     dispatch(ExternalLogin_Action.addExternalLogin(JSON.parse(localStorage.getItem('token'))));

        // }
        if (Username && Password) {
            dispatch(auth_Action.login(Username, Password));
        }
         if(JSON.parse(localStorage.getItem('error'))==400){
            alert('Invalid Email or Password');
            localStorage.removeItem('error');
     }
    }
    render() {

const{loading}=this.state;
if(loading){
    return(
        <div class="Loader">
            <SpinLoader  
            color="#4B4E53" />
        </div>
    )
}
        return (
            <div class="container">
    <div class="row">
        <div class="col-md-12">
            <h2 class="text-center text-white mb-4"> Login Form</h2>
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card rounded-0">
                        <div class="card-header">
                            <h3 class="mb-0">Login</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" onSubmit={this.handleSubmit} role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                <div class="form-group">
                                    <label for="uname1">Username</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="Username" value={this.state.Username} onChange={this.handleChange} id="uname1" required=""/>
                                    <div class="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" name="Password" value={this.state.Password} onChange={this.handleChange} id="pwd1" required="" autocomplete="new-password"/>
                                    <div class="invalid-feedback">Enter your password too!</div>
                                </div>
                                <div>
                                    <label class="custom-control custom-checkbox">
                                      <input type="checkbox" class="custom-control-input"/>
                                      <span class="custom-control-indicator"></span>
                                      <span class="custom-control-description small text-dark">Remember me on this computer</span>
                                    </label>
                                </div>
                                <ExternalLogin  /><br />

                                <button type="submit" class="btn btn-success mx-auto" id="btnLogin">Login</button>
                               <br />
                                <Link  className="btn btn-link" to="/register" >not a member? Join Now!</Link>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    </div>
    <div className="Footer">
                </div>
</div>

        );
    }
}

function mapStateToProps(state,ownProps){
    debugger;
  
    if(localStorage.getItem('user')!=null){
        debugger;
    alert("Login Successful");
    }
    else{
        alert("Logut Successful");
    }
    return {
       
    DATA  :state.auth
};
}


export default connect(mapStateToProps )(login);