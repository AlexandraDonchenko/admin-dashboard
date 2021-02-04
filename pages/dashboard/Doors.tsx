import React from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import DoorCard from '../../components/partials/cards/DoorCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';

interface Props { }

const Doors: React.FunctionComponent<Props> = () => {
  const doors = useSelector((state) => state.doorReducer.doors);
  return (
    <DashboardLayout>
      <CardWrapper>
        {doors.map((door) => <DoorCard doorName={door.name} />)}
      </CardWrapper>
    </DashboardLayout>
  );
};

export default Doors;
