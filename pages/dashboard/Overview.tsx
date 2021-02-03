import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import LogCard from '../../components/partials/cards/LogCard';

interface Props { }

const Overview: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <CardWrapper>
      <LogCard firstname="Berta" lastname="Cumellas" doorName={'Leo\'s Office'} createdOn="3 hours ago" />
      <LogCard firstname="Leo" lastname="Vittorio" doorName={'Leo\'s Office'} createdOn="3 hours ago" />
      <LogCard firstname="Alba" lastname="Garcia Mollá" doorName={'Leo\'s Office'} createdOn="3 hours ago" />
      <LogCard firstname="Francesco" lastname="Fagnani" doorName={'Leo\'s Office'} createdOn="3 hours ago" />
      <LogCard firstname="Matthieu" lastname="Bonnardot" doorName={'Leo\'s Office'} createdOn="3 hours ago" />
    </CardWrapper>
  </DashboardLayout>
);

export default Overview;
