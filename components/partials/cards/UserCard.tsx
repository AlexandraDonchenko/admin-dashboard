import React from 'react';
import defaultStyles from '../../../styles/cardWrapper.module.scss';
import userStyles from '../../../styles/UserCard.module.scss';

interface Props {
  firstname:string;
  lastname:string;
  email:string;
  group:string;
}

const UserCard: React.FunctionComponent<Props> = ({
  firstname,
  lastname,
  email,
  group,
}) => (
  <div className={defaultStyles.cardWrapper}>
    <div className={defaultStyles.infoWrapper}>
      <img className={defaultStyles.image} src="https://avatars.githubusercontent.com/u/12762609?s=400&u=0bef9502b9abf3237338056e4e325344dca451ad&v=4" alt="" />
      <p className={userStyles.firstname}>{firstname}</p>
      <p className={userStyles.lastname}>{lastname}</p>
      <a href={`mailto:${{ email }}`} className={userStyles.email}>{email}</a>
      {/* <p className={userStyles.group}>{group}</p> */}
    </div>
    <div className={defaultStyles.actionsWrapper}>
      <img className={defaultStyles.action} src="/media/icons/cardOptions/deactivate.svg" />
      <img className={defaultStyles.action} src="/media/icons/cardOptions/edit.svg" />
      <img className={defaultStyles.action} src="/media/icons/cardOptions/delete.svg" />
    </div>
  </div>
);

export default UserCard;
