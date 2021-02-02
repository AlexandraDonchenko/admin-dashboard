/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import { createStore } from 'redux';
import React from 'react';
import {useSelector} from 'react-redux'
import App from './_app';
import styles from '../styles/Home.module.css';
import Login from './Login'
import DashboardLayout from './../components/partials/layouts/DashboardLayout'
import DefaultLayout from './../components/partials/layouts/DefaultLayout'
 
interface Props {
}

const Home: React.FunctionComponent<Props> = (props) => {

  return (
		<div>

		<h1>Home</h1>
		<Login />
		</div>
	) 
};

export default Home;
