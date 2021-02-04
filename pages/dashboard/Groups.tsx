import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import GroupCard from '../../components/partials/cards/GroupCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import { activateBlur, deactivateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';

interface Props { }

const Groups: React.FunctionComponent<Props> = ({ groupName }) => {
  const dispatch = useDispatch();
  const dialogblur = useSelector((state) => state.dialogblurReducer);
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);

  const addGroup = () => {
    console.log('add users');
    dispatch(activateBlur());
    dispatch(showDialog('GROUPS_DIALOG'));
    console.log('hello');
  };
  const cancelDialoger = () => { dispatch(deactivateBlur()); };

  console.log(dialogStatus);

  return (
    <>
      <Dialog active={dialogStatus.groups === 'active'}>
        <TemplateForm buttonText="Add User">
          <TemplateInput labelText="Hello" type="text" />
          <TemplateInput labelText="Hello" type="text" />
          <TemplateInput labelText="Hello" type="text" />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <button onClick={addGroup}>Add Group</button>

        <CardWrapper>
          <GroupCard groupName="Teacher" />
          <GroupCard groupName="Teacher Assistant" />
          <GroupCard groupName="Student" />
          <GroupCard groupName="Service Personal" />
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Groups;
