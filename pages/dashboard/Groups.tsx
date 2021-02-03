import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import GroupCard from '../../components/partials/cards/GroupCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';

interface Props { }

const Groups: React.FunctionComponent<Props> = ({ groupName }) => (
  <DashboardLayout>
    <CardWrapper>
      <GroupCard groupName="Teacher" />
      <GroupCard groupName="Teacher Assistant" />
      <GroupCard groupName="Student" />
      <GroupCard groupName="Service Personal" />
    </CardWrapper>
  </DashboardLayout>
);

export default Groups;
