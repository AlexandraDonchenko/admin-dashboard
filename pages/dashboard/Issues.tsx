import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import IssueCard from '../../components/partials/cards/IssueCard';
import { activateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';

interface Props { }

const Issues: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);

  const addIssue = () => {
    dispatch(activateBlur());
    dispatch(showDialog('ISSUES_DIALOG'));
  };

  return (
    <>
      <Dialog active={dialogStatus.issues === 'active'}>
        <TemplateForm buttonText="Add Issue">
          <TemplateInput labelText="Type" type="dropdown" dropdownOptions={['Door', 'Camera', 'App']} />
          <TemplateInput labelText="Door" type="dropdown" dropdownOptions={['Leo\'s Office', 'Main Entry']} />
          <TemplateInput labelText="Reported by" type="dropdown" dropdownOptions={['Leo', 'Berta', 'Vic']} />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>

        <CardWrapper>
          <IssueCard type="Camera" createdOn="3 hours ago" reportedBy="Leonardo Vittorio" />
          <IssueCard type="Door" createdOn="2 days ago" reportedBy="Berta Cummelas" />
          <IssueCard type="Camera" createdOn="25 Jan 2021" reportedBy="Leonardo Vittorio" />
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Issues;
