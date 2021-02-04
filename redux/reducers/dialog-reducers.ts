import { Reducer } from 'react';
import { DialogBlur, Action } from '../types';

let originalState: DialogBlur = { status: 'active' };

const dialogReducer: Reducer<DialogBlur, Action> = (state = originalState, action: Action) => {
  switch (action.type) {
    case 'ACTIVE': originalState = { status: 'active' };
      return originalState;
    case 'INACTIVE': originalState = { status: 'inavtive' };
      return originalState;
    default: return state;
  }
};

export default dialogReducer;
