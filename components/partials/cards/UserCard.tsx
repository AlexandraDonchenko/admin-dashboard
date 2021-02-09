import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import userStyles from '../../../styles/UserCard.module.scss';
import { User } from '../../../redux/types';

interface Props {
  user: User
}

const UserCard: React.FunctionComponent<Props> = ({
  user,
}) => (

  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={userStyles.firstname}>{user.firstName}</p>
      <p className={userStyles.lastname}>{user.lastName}</p>
      <a href="mailto:hello@world.com}" className={userStyles.email}>{user.email}</a>
      {/* <p className={userStyles.group}>{user.group.groupName}</p> */}
    </div>
    <div className={defaultStyles.actionsWrapper}>
      {user.isActive
        ? <img className={defaultStyles.action} src="/media/icons/cardOptions/active.svg" alt="" />
        : <img className={defaultStyles.action} src="/media/icons/cardOptions/inactive.svg" alt="" />}
      <img className={defaultStyles.action} src="/media/icons/cardOptions/edit.svg" onClick={(event) => options.update(event, user)} alt="" />
    </div>
  </div>
);
export default UserCard;
