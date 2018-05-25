import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.Auth,action){
   
    switch (action.type) {
        case types.REGISTER_SUCCESS:
            return action.payload;
        case types.LOGIN_SUCCESS:
            return action.payload;
            case types.LOGOUT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}