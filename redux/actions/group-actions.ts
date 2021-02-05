import { getGroups, postGroup } from '../../pages/api/hello';

const fetchGroups = () => (dispatch) => {
  getGroups()
    .then((data) => {
      dispatch({ type: 'GET_GROUPS', payload: data });
    });
};
// const postGroups = () => {
//   postGroups()
//     .then((data) => {
//       dispatch({ type: 'POST_GROUP', payload: data });
//     });
// };
export default fetchGroups;
