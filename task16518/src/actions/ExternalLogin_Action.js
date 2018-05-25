import * as types from "./actionTypes";
import axios from "axios";
import { history } from '../_healpers/history';
import { withAlert } from "react-alert";

const URL = "http://localhost:56099/api"


export function AddExternalLoginSuccess(msg){
    return{
        type : types.REGISTER_SUCCESS,
        payload : msg
    }
}

export function addExternalLogin(Token){
    debugger;
    if(JSON.stringify(sessionStorage.getItem('userData'))!=null){
        history.push('/employee');
    }
    // return function(dispatch, getState){
    //     return axios
    //     .post(`${URL}/Account/RegisterExternal`,Token)
    //     .then(
    //         res => {
    //             debugger;
    //             localStorage.setItem('Message', JSON.stringify(res.data.Message))
    //             dispatch(AddExternalLoginSuccess(res));
    //             history.push('/login')
    //         }
    //     ).catch(error => {
    //         localStorage.setItem('error', JSON.stringify(error.response.status));
    //         console.log(error)
    //     });
    // }
}