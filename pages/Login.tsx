/* eslint-disable no-use-before-define */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../redux/actions/theme-actions';
import {login} from '../redux/actions/login-actions'

interface Props {

}

const Login: React.FunctionComponent <Props> = (props) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const logged = useSelector((state) => state.loginReducer.logged).toString()
  console.log(logged)
  const dispatch = useDispatch();

  return (
    <div>
      {logged}
      <button type="submit" onClick={() => dispatch(changeToDark())}>What </button>

      <button type="submit" onClick={() => dispatch(login())}>login </button>
      {theme}
    </div>
  );
};

export default Login;
