import { Children, useState } from "react";
import styles from './../../../styles/DashboardLayout.module.scss';
import DashboardDesktopNav from './../navigation/DashboardDesktopNav';

interface Props {
	children: any
}

const DashboardLayout: React.FunctionComponent<Props> = ({children}) => {
	const [clicked, setClicked] = useState<String>('');
	const getClicked = (value) => {
		setClicked(value)
	}
	return <div className={styles.wrapper}><DashboardDesktopNav getClicked = {getClicked} clicked = {clicked}></DashboardDesktopNav><div className="dashboard-content">{children}</div></div>;
};

export default DashboardLayout;