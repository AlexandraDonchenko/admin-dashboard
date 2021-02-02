import { Children, useEffect, useState } from "react";
import styles from './../../../styles/DashboardLayout.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import DashboardDesktopNav from './../navigation/DashboardDesktopNav';
import { useRouter } from 'next/router'



interface Props {
	children: any
}

const DashboardLayout: React.FunctionComponent<Props> = ({children}) => {
  const logged = useSelector((state) => state.loginReducer.logged)
  const router = useRouter();
  const href ='/Login';
	useEffect(() => {
		if (!logged) {
			router.push(href)
		}
	  }, [])
	if(logged) {
		return <div className={styles.wrapper}><DashboardDesktopNav ></DashboardDesktopNav><div className="dashboard-content">{children}</div></div>;
	}
	else return null;

};

export default DashboardLayout;