import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Register/reg.css'
import { bindActionCreators } from 'redux';
import { Context, Error, Hint, Rules, Form, Input } from 'react-form-validation';
import Utils from '../../../node_modules/util';
import * as auth_Action from '../../actions/auth_Actions';
import { Register } from '../../actions/auth_Actions';

class register extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
       
        this.state = {
            Email: '',
            Password: '',
            ConfirmPassword: '',
            submitted:false
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        debugger;
 console.log(e);
        e.preventDefault();
        this.setState({ submitted: true });
        const {  Email, Password, ConfirmPassword } = this.state;
        const { dispatch } = this.props;
        if (Email && Password && ConfirmPassword) {
            dispatch(auth_Action.Register( Email, Password, ConfirmPassword));
        }
    }
    render() {


        return (
            <div className="container">
                <div className=" divreg">
                <form onSubmit={this.handleSubmit} className="frm" >
                    <h2>Register Form</h2>
                    <div className={'form-group' + (this.state.submitted && !this.state.Email ? ' has-error' : '')}>
                      
                        <input className="form-control" type="Email" placeholder="Email" name="Email" value={this.state.Email} onChange={this.handleChange} required/>
                       {this.state.submitted && !this.state.Email &&
                                <div className="help-block labl zoom ">Email is required</div>
                            }
                    </div>
                
                    <div className={'form-group' + (this.state.submitted && !this.state.Password ? ' has-error' : '')}>
                        <input className="form-control" type="password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.handleChange}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter,
                         and at least 8 or more characters" required />
                        {this.state.submitted && !this.state.Password &&
                                <div className="help-block labl zoom">Password is required</div>
                            }
                    </div>

                    <div className={'form-group has-danger' + (this.state.submitted && !this.state.ConfirmPassword ? ' has-error' : '')}>
                    
                        <input className="form-control" type="password" placeholder="ConfirmPassword" name="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleChange} required/>

                                  {this.state.submitted &&!(this.state.ConfirmPassword==this.state.Password)&&
                                <div class="text-danger">Password Doesnot match</div>
                            }
                    </div>

                    <button type="submit" className="btn">Register</button>
                    <br/><br />
                    <Link type="submit" className="btn" to="/login" >Login</Link>
                </form>
            </div>
            
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return {
       
    DATA  :state.auth
};
}


export default connect(mapStateToProps )(register);
