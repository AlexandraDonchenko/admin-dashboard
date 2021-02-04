import React from 'react';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import logStyles from '../../../styles/LogCard.module.scss';

interface Props {
  firstname:string,
  lastname: string,
  doorName:string,
  createdOn:string

}

const LogCard: React.FunctionComponent<Props> = ({
  firstname,
  lastname,
  doorName,
  createdOn,
}) => (
  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={logStyles.firstname}>{firstname}</p>
      <p className={logStyles.lastname}>{lastname}</p>
      <p className={logStyles.doorName}>{doorName}</p>
      <p className={logStyles.createdOn}>{createdOn}</p>
    </div>
  </div>
);

export default LogCard;
