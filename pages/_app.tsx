/* eslint-disable no-use-before-define */
import type { AppProps } from 'next/app';
import React from 'react';
import Home from './index';
import Head from 'next/head';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from './_app';
import styles from '../styles/Home.module.css';
import rootReducer from './../redux/reducers/index';
import Login from './Login';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(rootReducer);
	return (
		<Provider store={store}>
		<Component {...pageProps} />
		</Provider>

	)
}

export default MyApp;
