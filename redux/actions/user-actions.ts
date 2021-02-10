import {
  getUsers, postUser, putUser, deleteUser,
} from '../../pages/api/hello';

const fetchUsers = () => (dispatch) => {
  getUsers()
    .then((data) => {
      dispatch({ type: 'GET_USERS', payload: data });
    });
};
const createUser = (userObj) => (dispatch) => {
  console.log(userObj);
  postUser(userObj)
    .then((data) => {
      console.log('THIS IS DATA', userObj);
      dispatch({ type: 'POST_USER', payload: data });
    });
};

const chooseUser = (userObj) => ({ type: 'CHOOSE_USER', payload: userObj });

const updateUser = (aid, userObj) => (dispatch) => {
  console.log(userObj);
  putUser(aid, userObj)
    .then((data) => {
      dispatch({ type: 'UPDATE_USER', payload: { data, aid } });
    });
};

const removeUser = (aid) => (dispatch) => {
  deleteUser(aid)
    .then((data) => dispatch({ type: 'DELETE_USER', payload: { data, aid } }));
};

export {
  fetchUsers, createUser, chooseUser, updateUser, removeUser,
};
