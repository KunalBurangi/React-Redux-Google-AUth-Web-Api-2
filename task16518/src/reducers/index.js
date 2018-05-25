import {combineReducers} from 'redux';
import authReducer from './authReducer'
import employeeReducer from './employeeReduser'
const rootReducer = combineReducers({
    auth: authReducer,
    user: authReducer,
    employeeR : employeeReducer
});
export default rootReducer;