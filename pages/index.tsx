/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import { createStore } from 'redux';
import React from 'react';
import {Provider} from 'react-redux';
import App from './_app';
import styles from '../styles/Home.module.css';
import themeReducer from './../redux/reducers/index';
import Login from './Login'
import DashboardLayout from './../components/partials/layouts/DashboardLayout'
 
interface Props {
}

const Home: React.FunctionComponent<Props> = (props) => {
  const store = createStore(themeReducer);
  console.log(store)
  return <Provider store={store}><Login /></Provider>;
};

export default Home;
