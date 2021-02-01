/* eslint-disable no-use-before-define */
import type { AppProps } from 'next/app';
import React from 'react';
import { createStore } from 'redux';
import themeReducer from '../redux/reducers/';
import {Provider} from 'react-redux';
import Home from './index';

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(themeReducer);
  return <Provider store={store}><Component{...pageProps}/></Provider>
}

export default MyApp;
