import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import LogCard from '../../components/partials/cards/LogCard';

interface Props { }

const Logs: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <CardWrapper>
      <LogCard firstname="Berta" lastname="Cumellas" doorName={'Leo\'s Office'} createdOn="3 hours ago" />
    </CardWrapper>
  </DashboardLayout>
);

export default Logs;
