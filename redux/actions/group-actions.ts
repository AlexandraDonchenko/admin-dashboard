import { getGroups, postGroup, putGroup } from '../../pages/api/hello';

const fetchGroups = () => (dispatch) => {
  getGroups()
    .then((data) => {
      dispatch({ type: 'GET_GROUPS', payload: data });
    });
};
const createGroup = (groupObj) => (dispatch) => {
  postGroup(groupObj)
    .then((data) => {
      dispatch({ type: 'POST_GROUP', payload: data });
    });
};
const updateGroup = (groupObj) => (dispatch) => {
  putGroup(groupObj)
    .then((data) => {
      dispatch({ type: 'UPDATE_GROUP', payload: data });
    });
};
export { fetchGroups, createGroup, updateGroup };
