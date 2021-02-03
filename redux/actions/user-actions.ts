import getUsers from '../../pages/api/hello';

const fetchUsers = () => (dispatch) => {
  getUsers()
    .then((data) => dispatch({ type: 'GET-STUDENTS', payload: data }));
};

export default fetchUsers;
