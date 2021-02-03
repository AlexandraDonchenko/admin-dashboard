import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import DoorCard from '../../components/partials/cards/DoorCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';

interface Props { }

const Doors: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <CardWrapper>
      <DoorCard doorName="Leo's Office" />
      <DoorCard doorName="Main Entry" />
      <DoorCard doorName="Cafeteria" />
    </CardWrapper>
  </DashboardLayout>
);

export default Doors;
