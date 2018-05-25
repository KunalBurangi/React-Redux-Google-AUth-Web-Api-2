import * as types from "./actionTypes";
import axios from "axios";
// import employeeReducer from "../reducers/employeeReducer";

const URL = "http://localhost:56099/api"

export function ListAllEmployee(employee){
    debugger;
    return {
        type : types.LIST_ALL_EMPLOYEES_SUCCESS,
        payload : employee
    }
}

export function deleteOneEmpSuccess(msg){
    return{
        type : types.DELETE_ONE_EMPLOYEE_SUCCESS,
        payload : msg
    }
}

export function EditOneEmpSuccess(msg){
    return{
        type : types.EDIT_ONE_EMPLOYEE_SUCCESS,
        payload : msg
    }
}

export function AddOneEmpSuccess(msg){
    return{
        type : types.ADD_EMPLOYEE_SUCCESS,
        payload : msg
    }
}

export function fetchAllEmployee(){
    debugger;
    return function(dispatch){
        return axios
        .get('http://localhost:56099/api/employee')
        .then(
            res =>{
                dispatch(ListAllEmployee(res.data));
            }
        )
        .catch(err => {throw err;});
    }
}

export function deleteOneEmp(EmpId){
    return function(dispatch, getState){
        return axios
        .delete(`${URL}/Employee/${EmpId}`)
        .then(
            res =>{
                dispatch(deleteOneEmpSuccess(res));
            }
        )
    }
}

export function EditOneEmp(editdata){
    debugger;
    return function(dispatch, getState){
        return axios
        .put(`${URL}/Employee` , editdata)
        .then(
            res => {
                dispatch(EditOneEmpSuccess(res));
            }
        )
    }
}

export function AddOneEmp(AddData){
    debugger;
    return function(dispatch, getState){
        return axios
        .post(`${URL}/Employee` , AddData)
        .then(
            res => {
                dispatch(AddOneEmpSuccess(res));
            }
        )
    }
}
