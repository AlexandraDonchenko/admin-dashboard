import Link from 'next/Link';
import React, { useState } from 'react';
import styles from './../../../styles/DashboardDesktopNav.module.scss';
interface Props {
  getClicked: Function;
  clicked: String
}

const DashboardDesktopNav: React.FunctionComponent<Props> = ({getClicked, clicked}) => {

  	return (<div className={styles.navbar}>
    <div className={styles.navlink} id={clicked==='Overview'? styles.clicked: null}>
		<Link href='/dashboard/Overview'>
			<a onClick={() => getClicked('Overview')}>Overview</a>
		</Link>
    </div>
    <div className={styles.navlink} id={clicked==='Users'? styles.clicked: null}>
    <Link href='/dashboard/Users'><a onClick={() => getClicked('Users')}>Users</a></Link> </div>  
    <div className={styles.navlink} id={clicked==='Doors'? styles.clicked: null}> 
    <Link href='/dashboard/Doors'>
      <a onClick={() => getClicked('Doors')}>Doors</a>
      </Link>
      </div>
      <div className={styles.navlink} id={clicked==='Groups'? styles.clicked: null}>
      <Link href='/dashboard/Groups'>
      <a onClick={() => getClicked('Groups')}>Groups</a>
      </Link>
      </div>
      <div className={styles.navlink} id={clicked==='Issues'? styles.clicked: null}>
      <Link href='/dashboard/Issues'>
      <a onClick={() => getClicked('Issues')}>Issues</a>
      </Link>
      </div>
      <div className={styles.navlink} id={clicked==='Logs'? styles.clicked: null}>
      <Link href='/dashboard/Logs'>
      <a onClick={() => getClicked('Logs')}>Logs</a>
      </Link>
      </div>
                
	</div>)
};

export default DashboardDesktopNav;