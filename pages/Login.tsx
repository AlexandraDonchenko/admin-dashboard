/* eslint-disable no-use-before-define */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/Link';
import DashboardLayout from './../components/partials/layouts/DashboardLayout'
import { changeToDark, changeToLight } from '../redux/actions/theme-actions';
import {logins} from '../redux/actions/login-actions'
import Overview from './dashboard/Overview'
import { Router } from 'next/dist/client/router';
import { useRouter } from 'next/router'
import DefaultLayout from '../components/partials/layouts/DefaultLayout';

interface Props {

}

const Login: React.FunctionComponent <Props> = (props) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const logged = useSelector((state) => state.loginReducer.logged)
  const dispatch = useDispatch();
  const router = useRouter();
  const href ='./dashboard/Overview';
  function login(e) {
    e.preventDefault();
    console.log(e)
    dispatch(logins());
    router.push(href);
  }
    return (
      <div><form onSubmit={login}>
        <label>Email</label>
        <input type= "text"/> 
        <label>Password</label>
        <input type= "text"/> 
        <input type="submit" onSubmit={login}/>
      </form>
      </div>
    );

};

export default Login;