import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';

interface Props { }

const Settings: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <div className="foo">I am your lord settings</div>
  </DashboardLayout>
);

export default Settings;
