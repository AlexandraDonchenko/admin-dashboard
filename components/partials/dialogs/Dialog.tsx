import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../styles/Dialog.module.scss';

interface Props { }

const Dialog: React.FunctionComponent<Props> = ({ children, active }) => {
  const pickedUser = useSelector((state) => state.choosenUserReducer.user);

  return (
    <div id={styles.dialog} className={active === true ? styles.active : ''}>
      {children}
    </div>
  );
};

export default Dialog;
