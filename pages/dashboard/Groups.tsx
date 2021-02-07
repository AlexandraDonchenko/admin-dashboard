import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import GroupCard from '../../components/partials/cards/GroupCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import Group from '../../redux/types';
import SearchBar from '../../components/partials/searchBar/searchBar';
import { activateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';
import {
  createUser, chooseUser, updateUser, removeUser,
} from '../../redux/actions/user-actions';

interface Props { }

const Groups: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const dialogStatus = useSelector((state) => state.dialogStatusReducer);
  const groups = useSelector((store) => store.groupReducer.groups);

  const [filteredGroups, setFilteredGroups] = useState<Group[]>(groups);
  const [input, setInput] = useState<string>('');

  const filterGroups = (inputName) => {
    const filtered = groups.filter((group) => {
      const { name } = group;
      return name.toLowerCase().includes(inputName.toLowerCase());
    });
    setFilteredGroups(filtered);
    setInput(inputName);
  };

  // INITIALIZE STATE FOR INPUT FIELDS
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [accessFromHour, setAccessFromHour] = useState('');
  const [accessToHour, setAccessToHour] = useState('');

  // INITIALIZE STATE FOR REFRESH
  const [refresh, setRefresh] = useState<String>('');

  // FUNCTION TO UPDATE INPUT FIELDS
  const handleGroupName = (event) => { setGroupName(event.target.value); };
  const handleDescription = (event) => { setDescription(event.target.value); };
  const handleAccessFromHour = (event) => { setAccesFromHour(event.target.value); };
  const handleAccessToHour = (event) => { setAccesToHour(event.target.value); };

  const handleGroup = (event) => {
    setGroupName(Number(event.target.value));
  };

  const showCreateGroupDialog = () => {
    dispatch(activateBlur());
    dispatch(showDialog('GROUPS_DIALOG_CREATE'));
  };

  const showUpdateGroupDialog = (event, user) => {
    dispatch(activateBlur());
    // dispatch(updateUser(user.aid, {
    //   firstName,
    //   lastName,
    //   email,
    // }));
    dispatch(showDialog('GROUPS_DIALOG_UPDATE'));
  };

  const handleCreateSubmit = (event, id) => {
    event.preventDefault();
    dispatch(createUser({
      firstName,
      lastName,
      email,
      group,
    }));
    setGroupName('');
    setDescription('');
    setAccessFromHour('');
    setAccessToHour(event);
    setRefresh('Refresh');
  };

  const handleUpdateSubmit = (event, aid) => {
    event.preventDefault();
    // dispatch(updateUser(pickedUser.aid, {
    //   firstName,
    //   lastName,
    //   email,
    //   group,
    // }));
    setGroupName('');
    setDescription('');
    setAccessFromHour('');
    setAccessToHour(event);
    setRefresh('Refresh');
  };

  // const handleGroupName = (event) => { setGroupName(event.target.value); };
  // const handleDescription = (event) => { setDescription(event.target.value); };
  // const handleAccessFromHour = (event) => { setAccesFromHour(event.target.value); };
  // const handleAccessToHour = (event) => { setAccesToHour(event.target.value); };

  return (
    <>
      <Dialog active={dialogStatus.groups_create === 'active'}>
        <TemplateForm buttonText="Create Group">
          <TemplateInput labelText="Name of Group" type="text" />
          <TemplateInput labelText="Description" type="text" />
          <TemplateInput labelText="Access from" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Access to" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Allowed doors" type="radio" radioOptions={['Main Entry', 'Cafeteria', 'Leo\'s Office', 'Berta\'s Office']} />
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.groups_update === 'active'}>
        <TemplateForm buttonText="Update Group">
          <TemplateInput labelText="Name of Group" type="text" />
          <TemplateInput labelText="Description" type="text" />
          <TemplateInput labelText="Access from" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Access to" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Allowed doors" type="radio" radioOptions={['Main Entry', 'Cafeteria', 'Leo\'s Office', 'Berta\'s Office']} />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <SearchBar updateInput={filterGroups} input={input} addButtonAction={showCreateGroupDialog} />
        <CardWrapper>
          {filteredGroups.map((group) => <GroupCard groupName={group.groupName} options={{ update: showUpdateGroupDialog }} />)}
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Groups;
