import { getUsers, postUser } from '../../pages/api/hello';

const fetchUsers = () => (dispatch) => {
  getUsers()
    .then((data) => {
      console.log(data);
      dispatch({ type: 'GET_USERS', payload: data });
    });
};
const createUser = (userObj) => (dispatch) => {
  console.log(userObj);

  postUser(userObj)
    .then((data) => dispatch({ type: 'POST_USER', payload: data }));
};
export { fetchUsers, createUser };
