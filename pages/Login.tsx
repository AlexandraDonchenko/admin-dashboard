/* eslint-disable no-use-before-define */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import TemplateInput from '../components/partials/inputFields/TemplateInput';
import TemplateForm from '../components/partials/inputFields/TemplateForm';

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
        <TemplateForm onSubmitAction={login} buttonText="Sign In">
          <TemplateInput labelText="Email" type="text" />
          <TemplateInput labelText="Password" type="password" />
        </TemplateForm>
      </div>
    </DefaultLayout>
  );
};

export default Login;
