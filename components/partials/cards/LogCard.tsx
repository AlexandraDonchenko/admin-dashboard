import React from 'react';
import defaultStyles from '../../../styles/CardWrapper.module.scss';
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
      <img className={defaultStyles.image} src="src=/media/icons/cardOptions/issue.svg" alt="avatar" />
      <p className={logStyles.firstname}>{`${firstname} ${lastname}`}</p>
      <p className={logStyles.doorName}>{doorName}</p>
      <p className={logStyles.createdOn}>{createdOn}</p>
    </div>
  </div>
);

export default LogCard;
