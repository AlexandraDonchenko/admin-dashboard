/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import TemplateInput from '../components/partials/inputFields/TemplateInput';

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
            <tbody>
              <TemplateInput labelText="Text" type="text" />
              <TemplateInput labelText="Password" type="password" />
              <TemplateInput labelText="Group" type="dropdown" dropdownOptions={['hello', 'World', 'Mars']} />
              <TemplateInput labelText="Status" type="radio" radioOptions={['this', 'is', 'very', 'nice']} />
              <TemplateInput labelText="Status" type="submit" radioOptions={['this', 'is', 'very', 'nice']} />

            </tbody>
          </table>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default Login;
