import { combineReducers } from 'redux';
import loginReducer from './is-logged-reducer';
import themeReducer from './theme-reducer';
import clickedReducer from './clicked-reducer';
import userReducer from './user-list-reducer';

export default combineReducers({
  loginReducer, themeReducer, clickedReducer, userReducer,
});
