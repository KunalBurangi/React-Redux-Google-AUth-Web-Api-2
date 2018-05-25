import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function employeeReducer(state = initialState.Employee,action){
   debugger;
    switch (action.type) {            
        case types.LIST_ALL_EMPLOYEES_SUCCESS:
            return action.payload;
        case types.EDIT_ONE_EMPLOYEE_SUCCESS:
            return [...state];
        case types.ADD_EMPLOYEE_SUCCESS:
            return [...state];
        case types.DELETE_ONE_EMPLOYEE_SUCCESS:
            return [...state];
        default:
            return state;
    }
}