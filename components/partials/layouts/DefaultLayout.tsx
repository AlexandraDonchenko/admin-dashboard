import { Children } from "react";


interface Props {
}

const DefaultLayout: React.FunctionComponent<Props> = (props) => {
	return <div>{Children}</div>;
};

export default DefaultLayout;