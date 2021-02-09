import React from 'react';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import groupStyles from '../../../styles/GroupCard.module.scss';
import { Group } from '../../../redux/types';

interface Props {
  groupName: string,
  group: Group,
  options: any
}

const GroupCard: React.FunctionComponent<Props> = ({
  groupName,
  group,
  options,
}) => (
  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={groupStyles.groupName}>{groupName}</p>
    </div>
    <div className={defaultStyles.actionsWrapper}>
      <img className={defaultStyles.action} onClick={(event) => options.update(event, group)} src="/media/icons/cardOptions/edit.svg" alt="" />
    </div>
  </div>
);

export default GroupCard;
