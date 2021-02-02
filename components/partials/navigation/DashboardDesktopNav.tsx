import Link from 'next/Link';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {clickedOnDoors, clickedOnGroups, clickedOnIssues, clickedOnLogs, clickedOnOverview, clickedOnUsers } from '../../../redux/actions/clicked-actions';
import styles from './../../../styles/DashboardDesktopNav.module.scss';
interface Props {
}

const DashboardDesktopNav: React.FunctionComponent<Props> = ( props) => {
  const clicked = useSelector((state) => state.clickedReducer.clicked)
  const dispatch = useDispatch();
  console.log(clicked)
  
  	return (<div className={styles.navbar}>
    <div id={styles.logoPlaceHolder}><div className={styles.text}>sesame</div></div>
    <div className={styles.navlink} id={clicked==='OVERVIEW'? styles.clicked: null}>
		<Link href='/dashboard/Overview'>
			<a onClick={() => dispatch(clickedOnOverview())}>Overview</a>
		</Link>
    </div>
    <div className={styles.navlink} id={clicked==='USERS'? styles.clicked: null}>
    <Link href='/dashboard/Users'>
      <a onClick={() => dispatch(clickedOnUsers())}>Users</a>
      </Link>
       </div>  
    <div className={styles.navlink} id={clicked==='DOORS'? styles.clicked: null}> 
    <Link href='/dashboard/Doors'>
      <a onClick={() => dispatch(clickedOnDoors())}>Doors</a>
      </Link>
      </div>
      <div className={styles.navlink} id={clicked==='GROUPS'? styles.clicked: null}>
      <Link href='/dashboard/Groups'>
      <a onClick={() => dispatch(clickedOnGroups())}>Groups</a>
      </Link>
      </div>
      <div className={styles.navlink} id={clicked==='ISSUES'? styles.clicked: null}>
      <Link href='/dashboard/Issues'>
      <a onClick={() => dispatch(clickedOnIssues())}>Issues</a>
      </Link>
      </div>
      <div className={styles.navlink} id={clicked==='LOGS'? styles.clicked: null}>
      <Link href='/dashboard/Logs'>
      <a onClick={() => dispatch(clickedOnLogs())}>Logs</a>
      </Link>
      </div>
                
	</div>)
};

export default DashboardDesktopNav;