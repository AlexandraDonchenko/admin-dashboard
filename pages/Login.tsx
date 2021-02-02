/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logins } from '../redux/actions/login-actions';

interface Props { }

const Login: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const href = './dashboard/Overview';

  function login(e) {
    e.preventDefault();
    dispatch(logins());
    router.push(href);
  }

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input name="email" type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" type=" text" />
        <input type="submit" onSubmit={login} />
      </form>
    </div>
  );
};

export default Login;
