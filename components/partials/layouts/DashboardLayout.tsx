import React, { Children, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../../styles/DashboardLayout.module.scss';
import DashboardDesktopNav from '../navigation/DashboardDesktopNav';

import fetchUsers from '../../../redux/actions/user-actions';
import fetchGroups from '../../../redux/actions/group-actions';
import fetchDoors from '../../../redux/actions/door-actions';
import fetchLogs from '../../../redux/actions/log-actions';

interface Props {
  children: any
}

const DashboardLayout: React.FunctionComponent<Props> = ({ children }) => {
  const logged = useSelector((state) => state.loginReducer.logged);

  const users = useSelector((state) => state.userReducer.users);
  const groups = useSelector((state) => state.groupReducer.groups);
  const doors = useSelector((state) => state.doorReducer.doors);
  const logs = useSelector((state) => state.logsReducer.logs);
  const router = useRouter();
  const dispatch = useDispatch();

  const href = '/Login';
  useEffect(() => {
    if (!logged) {
      router.push(href);
    }

    dispatch(fetchDoors());
    dispatch(fetchGroups());
    dispatch(fetchUsers());

    dispatch(fetchLogs());
  }, []);
  if (logged) {
    console.log(logs);
    return (
      <div id={styles.pageWrapper}>
        <div id={styles.dashboard}>
          <DashboardDesktopNav />

          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default DashboardLayout;
