import React, {Component} from 'react';
import { connect } from 'react-redux';
 import GoogleLogin from 'react-google-login';
// import { GoogleLogin } from 'react-google-login-component';
import {PostData, addExternalLogin} from '../../actions/ExternalLogin_Action';
import {Redirect} from 'react-router-dom';
import * as ExternalLogin_Action from '../../actions/ExternalLogin_Action';
import '../Login/login.css'
import { history } from '../../_healpers/history';

class ExternalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this
      .signup
      .bind(this);
  }

  signup(res, type) {
    let postData;
    if (type === 'facebook' && res.email) {
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
      };
    }

    if (type === 'google' && res.w3.U3) {
        debugger;
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }

    if (postData) {
        debugger;
        sessionStorage.setItem("userData", JSON.stringify(postData));
        sessionStorage.setItem('userName', JSON.stringify(postData.name))
         const { dispatch } = this.props;
         dispatch(ExternalLogin_Action.addExternalLogin(postData));
        
      // addExternalLogin( postData.token).then((result) => {
      //   let responseJson = result;
      //   sessionStorage.setItem("userData", JSON.stringify(responseJson));
      //   this.setState({redirect: true});
      // });
    } else {}
  }

  render() {

    if (this.state.redirect || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'}/>)
    }

    const responseFacebook = (response) => {
      console.log("facebook console");
      console.log(response);
      this.signup(response, 'facebook');
    }

    const responseGoogle = (response) => {
        debugger;
      console.log("google console");
      console.log(response);
      this.signup(response, 'google');
    }

    return (

      <div>
            {/* <FacebookLogin
              appId="517280548623431"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}/>
            <br/><br/> */}

            <GoogleLogin
              clientId="590908519779-a8fa1co2unnbd07ncdfh4t4hb7iqaute.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}/>

      </div>
    );
  }





// constructor (props, context) {
//     super(props, context);
//     this.state={
//       googlesignin:false
//     };
//   }

//   responseGoogle (googleUser) {
//     debugger;
//     var id_token = googleUser.getAuthResponse().id_token;
//     var googleId = googleUser.getId();
//     //const { dispatch } = this.props;
//     console.log({ googleId });
//     console.log({ googleUser });
//     console.log({accessToken: id_token});
//     localStorage.setItem('user', JSON.stringify(id_token));
//     //anything else you want to do(save to localStorage)...
    
//     history.push('/employee');
//   }
 
//   render () {

//     return (
//       <div>
//         <GoogleLogin clientId="590908519779-a8fa1co2unnbd07ncdfh4t4hb7iqaute.apps.googleusercontent.com"
//                      className="btn btn-block btn-social btn-google fa fa-google"
//                      scope="profile"
//                      fetchBasicProfile={false}
//                      responseHandler={this.responseGoogle}
//                      buttonText="Login With Google"/>
                     
//       </div>
//     );
//   }
}

function mapStateToProps(state,ownProps){
    return {
       
    DATA  :state.auth
};
}


export default connect(mapStateToProps )(ExternalLogin);
