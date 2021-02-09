import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import userStyles from '../../../styles/UserCard.module.scss';

import { createUser, chooseUser } from '../../../redux/actions/user-actions';

interface Props {
  firstname:string;
  lastname:string;
  email:string;
  group:string;
}

const UserCard: React.FunctionComponent<Props> = ({
  user,
  options,
}) => (

  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="/media/icons/cardOptions/avatar.svg" alt="" />
      <p className={userStyles.firstname}>{user.firstName}</p>
      <p className={userStyles.lastname}>{user.lastName}</p>
      <a href="mailto:hello@world.com}" className={userStyles.email}>{user.email}</a>
      {/* <p className={userStyles.group}>{user.group.groupName}</p> */}
    </div>
    <div className={defaultStyles.actionsWrapper}>
      {user.isActive
        ? <img className={defaultStyles.action} src="/media/icons/cardOptions/active.svg" />
        : <img className={defaultStyles.action} src="/media/icons/cardOptions/inactive.svg" />}
      <img className={defaultStyles.action} src="/media/icons/cardOptions/edit.svg" onClick={(event) => options.update(event, user)} />
    </div>
  </div>
);
export default UserCard;
