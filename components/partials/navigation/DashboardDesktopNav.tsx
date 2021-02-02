import Link from 'next/Link';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  clickedOnDoors,
  clickedOnGroups,
  clickedOnIssues,
  clickedOnLogs,
  clickedOnOverview,
  clickedOnUsers,
} from '../../../redux/actions/clicked-actions';
import styles from '../../../styles/DashboardDesktopNav.module.scss';

interface Props { }

const DashboardDesktopNav: React.FunctionComponent<Props> = () => {
  const clicked = useSelector((state) => state.clickedReducer.clicked);
  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <div id={styles.logoPlaceHolder}><div className={styles.text}>sesame</div></div>
      <div className={styles.navlink}  aria-hidden="true">
        <Link href="/dashboard/Overview">
          <button id={clicked === 'OVERVIEW' ? styles.clicked : null} onClick={() => dispatch(clickedOnOverview())} type="button">Overview</button>
        </Link>
      </div>
      <div className={styles.navlink}  aria-hidden="true">
        <Link href="/dashboard/Users">
          <button id={clicked === 'USERS' ? styles.clicked : null} onClick={() => dispatch(clickedOnUsers())} type="button">Users</button>
        </Link>
      </div>
      <div className={styles.navlink} aria-hidden="true">
        <Link href="/dashboard/Doors">
          <button id={clicked === 'DOORS' ? styles.clicked : null} onClick={() => dispatch(clickedOnDoors())} type="button">Doors</button>
        </Link>
      </div>
      <div className={styles.navlink} aria-hidden="true">
        <Link href="/dashboard/Groups">
          <button id={clicked === 'GROUPS' ? styles.clicked : null} onClick={() => dispatch(clickedOnGroups())} type="button">Groups</button>
        </Link>
      </div>
      <div className={styles.navlink} aria-hidden="true">
        <Link href="/dashboard/Issues">
          <button id={clicked === 'ISSUES' ? styles.clicked : null} onClick={() => dispatch(clickedOnIssues())} type="button">Issues</button>
        </Link>
      </div>
      <div className={styles.navlink} aria-hidden="true">
        <Link href="/dashboard/Logs">
          <button  id={clicked === 'LOGS' ? styles.clicked : null} onClick={() => dispatch(clickedOnLogs())} type="button">Logs</button>
        </Link>
      </div>

    </div>
  );
};

export default DashboardDesktopNav;
