import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import UserCard from '../../components/partials/cards/UserCard';

interface Props { }

const Users: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <CardWrapper>
      <UserCard firstname="Leonardo" lastname="Vittorio" email="leo@vittorio@gmail.com" group="Teacher" />
      <UserCard firstname="Leonardo" lastname="Vittorio" email="leo@vittorio@gmail.com" group="Teacher" />
      <UserCard firstname="Leonardo" lastname="Vittorio" email="leo@vittorio@gmail.com" group="Teacher" />
    </CardWrapper>
  </DashboardLayout>
);

export default Users;
