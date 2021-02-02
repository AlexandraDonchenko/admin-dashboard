import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';

interface Props { }

const Users: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <div className="foo">I am your lord Users</div>
  </DashboardLayout>
);

export default Users;
