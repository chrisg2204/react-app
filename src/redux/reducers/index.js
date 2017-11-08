import { combineReducers } from 'redux';
// Reducers
import LoginReducer from './LoginReducers';
import MainReducer from './MainReducers';

export default combineReducers({
    loginReducer : LoginReducer,
    mainReducer : MainReducer
});