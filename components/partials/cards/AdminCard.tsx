import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import userStyles from '../../../styles/UserCard.module.scss';

import { createUser, chooseUser } from '../../../redux/actions/user-actions';

interface Props {
  firstname: string;
  lastname: string;
  email: string;
  group: string;
}

const UserCard: React.FunctionComponent<Props> = ({
  user,
  options,
}) => (

  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={userStyles.firstname}>{user.firstName}</p>
      <p className={userStyles.lastname}>{user.lastName}</p>

    </div>
    <div className={defaultStyles.actionsWrapper}>
      {user.isAcitve
        ? <img className={defaultStyles.action} src="/media/icons/cardOptions/active.svg" />
        : <img className={defaultStyles.action} src="/media/icons/cardOptions/inactive.svg" />}
      <img className={defaultStyles.action} src="/media/icons/cardOptions/edit.svg" onClick={(event) => options.update(event, user)} />
    </div>
  </div>
);
export default UserCard;
