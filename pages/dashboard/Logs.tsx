import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';

interface Props { }

const Logs: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <div className="foo">I am your lord logs</div>
  </DashboardLayout>
);

export default Logs;
