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

const AdminCard: React.FunctionComponent<Props> = ({
  admin,
  options,
}) => (

  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="/media/icons/cardOptions/avatar.svg" alt="" />
      <p className={userStyles.firstname}>{admin.firstName}</p>
      <p className={userStyles.lastname}>{admin.lastName}</p>
    </div>
    <div className={defaultStyles.actionsWrapper}>
      <img className={defaultStyles.action} src="/media/icons/cardOptions/edit.svg" onClick={(event) => options.update(event, admin)} />
    </div>
  </div>
);
export default AdminCard;
