import { getUsers, postUser } from '../../pages/api/hello';

const fetchUsers = () => (dispatch) => {
  getUsers()
    .then((data) => {
      console.log(data);
      dispatch({ type: 'GET_USERS', payload: data });
    });
};
const createUser = (userObj) => (dispatch) => {
  postUser(userObj)
    .then((data) => dispatch({ type: 'POST_USER', payload: data }));
};
const chooseUser = (userObj) => {
  console.log('useraction', userObj);

  return ({ type: 'CHOOSE-USER', payload: userObj });
};
export { fetchUsers, createUser, chooseUser };
