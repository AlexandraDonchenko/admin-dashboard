import Link from 'next/Link';
import React from 'react';
import styles from './../../../styles/DashboardDesktopNav.module.scss';
interface Props {

}

const DashboardDesktopNav: React.FunctionComponent<Props> = (props) => {
	return (<div className={styles.navbar}>
		<Link href='/dashboard/Overview'>
			<a>Overview</a>
		</Link>
    <Link href='/dashboard/Users'><a>Users</a></Link>   
    <Link href='/dashboard/Doors'>
      <a>Doors</a>
      </Link>
      <Link href='/dashboard/Groups'>
      <a>Groups</a>
      </Link>
      <Link href='/dashboard/Issues'>
      <a>Issues</a>
      </Link>
      <Link href='/dashboard/Logs'>
      <a>Logs</a>
      </Link>
                
	</div>)
};

export default DashboardDesktopNav;