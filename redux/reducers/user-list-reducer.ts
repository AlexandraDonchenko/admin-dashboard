import { Reducer } from 'react';
import { Users, Action } from '../types';

let originalState: Users = { users: [] };

const userReducer: Reducer<Users, Action> = (state = originalState, action) => {
  switch (action.type) {
    case 'GET-USERS':
      originalState = action.payload;
      return originalState;
    default: return originalState;
  }
};
export default userReducer;
