import { combineReducers } from 'redux';
import loginReducer from './is-logged-reducer';
import themeReducer from './theme-reducer';
import clickedReducer from './clicked-reducer';

export default combineReducers({ loginReducer, themeReducer, clickedReducer });
