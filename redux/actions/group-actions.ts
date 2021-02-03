import { getGroups } from '../../pages/api/hello';

const fetchGroups = () => (dispatch) => {
  getGroups()
    .then((data) => {
      dispatch({ type: 'GET_GROUPS', payload: data });
    });
};
export default fetchGroups;
