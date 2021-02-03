import { getUsers } from '../../pages/api/hello';

const fetchUsers = () => (dispatch) => {
  getUsers()
    .then((data) => {
      dispatch({ type: 'GET_USERS', payload: data });
    });
};

export default fetchUsers;
