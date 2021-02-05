import { Reducer } from 'react';
import { Users, Action } from '../types';

let originalState: Users = { users: [] };

const userReducer: Reducer<Users, Action> = (state = originalState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      originalState = { users: action.payload };
      console.log('this is original state', originalState);
      return originalState;
    case 'POST_USER': originalState = { users: [...state.users, action.payload] };
      return originalState;
    default: return state;
  }
};
export default userReducer;
