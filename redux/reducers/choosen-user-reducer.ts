import { Reducer } from 'react';
import { User, Action } from '../types';

let originalState: User | any = { user: {} };

const choosenUserReducer: Reducer<User, Action> = (state = originalState, action: Action) => {
  switch (action.type) {
    case 'CHOOSE_USER': originalState = { user: action.payload };
      console.log(originalState);

      return originalState;
    default: return state;
  }
};
export default choosenUserReducer;
