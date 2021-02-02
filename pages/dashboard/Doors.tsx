import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';

interface Props { }

const Doors: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <div className="foo">I am your lord doors</div>
  </DashboardLayout>
);

export default Doors;
