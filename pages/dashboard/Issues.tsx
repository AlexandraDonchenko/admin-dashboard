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
import SearchBar from '../../components/partials/searchBar/searchBar';

interface Props { }

const Issues: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);
  const issues = useSelector((state) => )

  const solveIssue = () => {
    dispatch(activateBlur());
    dispatch(showDialog('ISSUES_DIALOG_UPDATE'));
  };

  return (
    <>
      <Dialog active={dialogStatus.issues_update === 'active'}>
        <TemplateForm buttonText="Solve" addButtonAction="addIssue">
          <TemplateInput labelText="" type="question" question="Are you sure?" />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <SearchBar />
        <CardWrapper>
          <IssueCard type="Camera" createdOn="3 hours ago" reportedBy="Leonardo Vittorio" options={{ solve: solveIssue }} />
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Issues;

{ /* <TemplateInput labelText="Name of Group" type="text" />
<TemplateInput labelText="Description" type="text" />
<TemplateInput labelText="Access from" type="dropdown" dropdownOptions={[{ value: '00:00' }, { value: '01:00' }, { value: '02:00' }, { value: '03:00' }, { value: '04:00' }, { value: '05:00' }, { value: '06:00' }, { value: '07:00' }, { value: '08:00' }, { value: '10:00' }, { value: '11:00' }, { value: '12:00' }, { value: '13:00' }, { value: '14:00' }, { value: '15:00' }, { value: '16:00' }, { value: '17:00' }, { value: '18:00' }, { value: '19:00' }, { value: '20:00' }, { value: '21:00' }, { value: '22:00' }, { value: '23:00' }, { value: '24:00' }]} />
<TemplateInput labelText="Access to" type="dropdown" dropdownOptions={[{ value: '00:00' }, { value: '01:00' }, { value: '02:00' }, { value: '03:00' }, { value: '04:00' }, { value: '05:00' }, { value: '06:00' }, { value: '07:00' }, { value: '08:00' }, { value: '10:00' }, { value: '11:00' }, { value: '12:00' }, { value: '13:00' }, { value: '14:00' }, { value: '15:00' }, { value: '16:00' }, { value: '17:00' }, { value: '18:00' }, { value: '19:00' }, { value: '20:00' }, { value: '21:00' }, { value: '22:00' }, { value: '23:00' }, { value: '24:00' }]} />
<TemplateInput labelText="Allowed doors" type="radio" radioOptions={['Main Entry', 'Cafeteria', 'Leo\'s Office', 'Berta\'s Office']} /> */ }
