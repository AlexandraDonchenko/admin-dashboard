import React from 'react';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import IssueCard from '../../components/partials/cards/IssueCard';

interface Props { }

const Issues: React.FunctionComponent<Props> = () => (
  <DashboardLayout>
    <CardWrapper>
      <IssueCard type="Camera" createdOn="3 hours ago" reportedBy="Leonardo Vittorio" />
      <IssueCard type="Door" createdOn="2 days ago" reportedBy="Berta Cummelas" />
      <IssueCard type="Camera" createdOn="25 Jan 2021" reportedBy="Leonardo Vittorio" />
    </CardWrapper>
  </DashboardLayout>
);

export default Issues;
