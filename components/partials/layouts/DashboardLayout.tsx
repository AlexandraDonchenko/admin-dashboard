import React, { Children, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../../styles/DashboardLayout.module.scss';
import DashboardDesktopNav from '../navigation/DashboardDesktopNav';
import fetchUsers from '../../../redux/actions/user-actions';
import userReducer from '../../../redux/reducers/user-list-reducer';

interface Props {
  children: any
}

const DashboardLayout: React.FunctionComponent<Props> = ({ children }) => {
  const logged = useSelector((state) => state.loginReducer.logged);
  const users = useSelector((state) => state.userReducer.users);
  const router = useRouter();
  const dispatch = useDispatch();
  const href = '/Login';
  useEffect(() => {
    if (!logged) {
      router.push(href);
    }
    dispatch(fetchUsers());
  }, []);
  if (logged) {
    console.log(users);
    return (
      <div className={styles.wrapper}>
        <DashboardDesktopNav />
        <div className="dashboard-content">{children}</div>
      </div>
    );
  }
  return null;
};

export default DashboardLayout;
