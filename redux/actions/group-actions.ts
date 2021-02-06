import { getGroups, postGroup } from '../../pages/api/hello';

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
export { fetchGroups, createGroup };
