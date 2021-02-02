/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import { createStore } from 'redux';
import React from 'react';
import {Provider} from 'react-redux';
import App from './_app';
import styles from '../styles/Home.module.scss';
import themeReducer from './../redux/reducers/index';
import Login from './Login'
import DefaultLayout from './../components/partials/layouts/DefaultLayout';
 
interface Props {
}

const Home: React.FunctionComponent<Props> = (props) => {
  return (
		<div>
			<DefaultLayout>
				<div id={styles.wrapper}>
					<img id={styles.spinner}  src='/media/graphics/spinner.png' />
					<div id={styles.teaser}>
						<h2 id={styles.teaser}>Easy <span class={styles.highlight}>access management</span> for your organisation or household</h2>
					</div>
				</div>
			</DefaultLayout>
		</div>
	) 
};

export default Home;
