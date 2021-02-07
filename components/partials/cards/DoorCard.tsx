import React from 'react';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import doorStyles from '../../../styles/UserCard.module.scss';

interface Props {
  doorName: string;
}

const UserCard: React.FunctionComponent<Props> = ({
  doorName,
}) => (
  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={doorStyles.doorName}>{doorName}</p>
    </div>

  </div>
);

export default UserCard;
