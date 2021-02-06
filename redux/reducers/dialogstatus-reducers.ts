import { Reducer } from 'react';
import { Action } from '../types';

let originalState: DialogStatus = {
  users_add: 'inactive',
  users_update: 'inactive',
  users_delete: 'inactive',
  users_deactivate: 'inative',
  groups: 'inactive',
  doors: 'inactive',
  logs: 'inactive',
  issues: 'inactive',
  settings: 'inactive',
};

const dialogStatusReducer: Reducer<DialogStatus> = (state = originalState, action: Action) => {
  switch (action.type) {
    case 'USERS_DIALOG_ADD':
      originalState = {
        users_add: 'active',
        users_update: 'inactive',
        groups: 'inactive',
        doors: 'inavctive',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'inactive',
      };
      return originalState;
    case 'USERS_DIALOG_UPDATE':
      originalState = {
        users_add: 'inactive',
        users_update: 'active',
        groups: 'inactive',
        doors: 'inavctive',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'inactive',
      };
      return originalState;
    case 'USERS_DIALOG_DELETE':
      originalState = {
        users_add: 'inactive',
        users_update: 'inactive',
        users_delete: 'active',
        groups: 'inactive',
        doors: 'inavctive',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'inactive',
      };
      return originalState;
    case 'USERS_DIALOG_DEACTIVATE':
      originalState = {
        users_add: 'inactive',
        users_update: 'inactive',
        users_delete: 'inactive',
        users_deactivate: 'active',
        groups: 'inactive',
        doors: 'inavctive',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'inactive',
      };
      return originalState;
    case 'GROUPS_DIALOG':
      originalState = {
        users: 'inactive',
        groups: 'active',
        doors: 'inactive',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'inactive',
      };
      return originalState;
    case 'DOORS_DIALOG':
      originalState = {
        users: 'inactive',
        groups: 'inactive',
        doors: 'active',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'inactive',
      };
      return originalState;
    case 'ISSUES_DIALOG':
      originalState = {
        users: 'inactive',
        groups: 'inactive',
        doors: 'inactive',
        logs: 'inactive',
        issues: 'active',
        settings: 'inactive',
      };
      return originalState;
    case 'SETTINGS_DIALOG':
      originalState = {
        users: 'inactive',
        groups: 'inactive',
        doors: 'inactive',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'active',
      };
      return originalState;
    case 'RESET':
      originalState = {
        users: 'inactive',
        groups: 'inactive',
        doors: 'inactive',
        logs: 'inactive',
        issues: 'inactive',
        settings: 'active',
      };
      return originalState;
    default:
      return originalState;
  }
};

export default dialogStatusReducer;
