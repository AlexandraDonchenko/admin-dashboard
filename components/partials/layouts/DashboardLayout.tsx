import { Children } from "react";
import styles from './../../../styles/DashboardLayout.module.scss';
import DashboardDesktopNav from './../navigation/DashboardDesktopNav';

interface Props {
	children: any
}

const DashboardLayout: React.FunctionComponent<Props> = ({children}) => {
	return <div className={styles.wrapper}><DashboardDesktopNav></DashboardDesktopNav><div className="dashboard-content">{children}</div></div>;
};

export default DashboardLayout;