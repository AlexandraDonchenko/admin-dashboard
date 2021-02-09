import React from 'react';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import userStyles from '../../../styles/UserCard.module.scss';
import { Admin } from '../../../redux/types';

interface Props {
  admin: Admin
  options: any
}

const AdminCard: React.FunctionComponent<Props> = ({
  admin,
  options,
}) => (

  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={userStyles.firstname}>{admin.firstName}</p>
      <p className={userStyles.lastname}>{admin.lastName}</p>
    </div>
    <div className={defaultStyles.actionsWrapper}>
      <img className={defaultStyles.action} src="/media/icons/cardOptions/edit.svg" alt="" onClick={(event) => options.update(event, admin)} />
    </div>
  </div>
);
export default AdminCard;
