/* eslint-disable no-use-before-define */
import type { AppProps } from 'next/app';
import React from 'react';
import Home from './index';

function MyApp({ Component, pageProps }: AppProps) {
  return <div><Home> This is home</Home></div>;
}

export default MyApp;
