/* eslint-disable no-use-before-define */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeToDark, changeToLight } from '../redux/actions/actions';

interface Props {

}

const Login: React.FunctionComponent <Props> = (props) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submit" onClick={() => dispatch(changeToDark())}>What </button>
      {theme}
    </div>
  );
};

export default Login;
