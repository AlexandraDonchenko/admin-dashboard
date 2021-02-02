import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';

interface Props { }

const Groups: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <div className="foo">I am your lord groups</div>
  </DashboardLayout>
);

export default Groups;
