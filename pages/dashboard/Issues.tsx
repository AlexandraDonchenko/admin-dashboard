import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';

interface Props { }

const Issues: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <div className="foo">I am your lord Issues</div>
  </DashboardLayout>
);

export default Issues;
