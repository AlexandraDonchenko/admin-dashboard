import React from 'react';
import styles from '../../../styles/CardWrapper.module.scss';

interface Props {
}

const cardWrapper: React.FunctionComponent<Props> = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default cardWrapper;
