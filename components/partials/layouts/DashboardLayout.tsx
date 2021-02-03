import { Children, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styles from '../../../styles/DashboardLayout.module.scss';
import DashboardDesktopNav from '../navigation/DashboardDesktopNav';

interface Props {
  children: any
}

const DashboardLayout: React.FunctionComponent<Props> = ({ children }) => {
  const logged = useSelector((state) => state.loginReducer.logged);
  const router = useRouter();
  const href = '/Login';
  useEffect(() => {
    if (!logged) {
      router.push(href);
    }
  }, []);
  if (logged) {
    return (
      <div className={styles.wrapper}>
        <DashboardDesktopNav />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
  return null;
};

export default DashboardLayout;
