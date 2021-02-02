/* eslint-disable no-use-before-define */
import type { AppProps } from 'next/app';
import React from 'react';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

import rootReducer from '../redux/reducers/index';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  );
}

export default MyApp;
