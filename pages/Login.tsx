/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch } from 'react-redux';


import { useRouter } from 'next/router';
import { logins } from '../redux/actions/login-actions';
import DefaultLayout from '../components/partials/layouts/DefaultLayout';
import styles from '../styles/Login.module.scss';


interface Props { }

const Login: React.FunctionComponent <Props> = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const href = './dashboard/Overview';

  function login(event) {
    event.preventDefault();
    console.log(event);
    dispatch(logins());
    router.push(href);
  }


  return (
    <DefaultLayout>
      <div id={styles.wrapper}>
        <form id={styles.form} onSubmit={login}>
          <table>
            <tr>
              <td><label>Email</label></td>
              <td>
                <input type="text" />
                <span />
              </td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td>
                <input type="password" />
                <span />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" onSubmit={login} />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Login;
