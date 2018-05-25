import * as types from "./actionTypes";
import axios from "axios";
import { history } from '../_healpers/history';
import { withAlert } from "react-alert";

const URL = "http://localhost:56099/api"
export function RegisterSuccess(msg){
    return{
        type : types.REGISTER_SUCCESS,
        payload : msg
    }
}
export function LoginSuccess(msg){
    return{
        type : types.LOGIN_SUCCESS,
        payload : msg
    }
}
export function LogoutSuccess(msg){
    return{
        type : types.LOGOUT_SUCCESS,
        payload : msg
    }
}
export function Register( Email, Password, ConfirmPassword){
    debugger;
    return function(dispatch, getState){
        return axios
        .post(`${URL}/Account/Register` , {  Email, Password, ConfirmPassword })
        .then(
            res => {
                debugger;
                localStorage.setItem('Message', JSON.stringify(res.data.Message))
                dispatch(RegisterSuccess(res));
            }
        )
    }
}
export function login(Username, Password) {
    debugger;
    return function(dispatch, getState){
        return axios
        .post(`${URL}/Account/Login` , {  Username, Password })
        .then(
            res => {
                localStorage.setItem('userName', JSON.stringify(res.data.userName));
                localStorage.setItem('user', JSON.stringify(res.data));
                console.log(res);
                dispatch(LoginSuccess(res));
               
                history.push('/Employee');
            }
        )
        .catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.status));
            console.log(error)
        });
    }
}

