import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';

interface Props { }

const Overview: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <div className="foo">I am your lord overview</div>
  </DashboardLayout>
);

export default Overview;
