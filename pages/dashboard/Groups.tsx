import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StringDecoder } from 'string_decoder';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import GroupCard from '../../components/partials/cards/GroupCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import { Group } from '../../redux/types';
import SearchBar from '../../components/partials/searchBar/searchBar';
import { activateBlur, deactivateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';
import {
  createGroup, chooseGroup, updateGroup,
} from '../../redux/actions/group-actions';
import { clickedOnGroups } from '../../redux/actions/clicked-actions';

interface Props { }

const Groups: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const dialogStatus = useSelector((state) => state.dialogStatusReducer);
  const groups = useSelector((store) => store.groupReducer.groups);
  const dbDoors = useSelector((store) => store.doorReducer.doors);
  console.log(dbDoors);

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
  const cancelDialog = (event) => {
    event.preventDefault();
    dispatch(showDialog('RESET'));
    dispatch(deactivateBlur());
  };

  // INITIALIZE STATE FOR INPUT FIELDS
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [accessFromHour, setAccessFromHour] = useState(0);
  const [accessToHour, setAccessToHour] = useState(0);
  const [doors, setDoors] = useState([]);

  // INITIALIZE STATE FOR REFRESH
  const [refresh, setRefresh] = useState<String>('');

  // FUNCTION TO UPDATE INPUT FIELDS
  const handleGroupName = (event) => {
    console.log(event.target.value);
    setGroupName(event.target.value);
  };
  const handleDescription = (event) => { setDescription(event.target.value); };
  const handleAccessFromHour = (event) => { setAccessFromHour(event.target.value); };
  const handleAccessToHour = (event) => { setAccessToHour(event.target.value); };
  const handleDoors = (event) => {
    console.log('DOOOOOOOORS', event.target.value);
    setDoors([...doors, event.target.value]);
    console.log('DOOOOOOOORS after', doors);
  };
  const pickedGroup = useSelector((state) => state.choosenCardReducer.picked);
  const showCreateGroupDialog = () => {
    dispatch(activateBlur());
    dispatch(showDialog('GROUPS_DIALOG_CREATE'));
  };

  const showUpdateGroupDialog = (event, group) => {
    dispatch(activateBlur());
    dispatch(showDialog('GROUPS_DIALOG_UPDATE'));
    dispatch(chooseGroup(group));
  };

  const handleCreateSubmit = (event, id) => {
    event.preventDefault();
    console.log('this is group Name', groupName);
    console.log('this is description', description);
    console.log('this is access', accessFromHour);
    console.log('this is doors', doors);
    dispatch(createGroup({
      groupName,
      description,
      accessFromHour,
      accessToHour,
      doors,
    }));
    setGroupName('');
    setDescription('');
    setAccessFromHour(0);
    setAccessToHour(0);
    setDoors([]);
    setRefresh('Refresh');
    cancelDialog(event);
  };

  const handleUpdateSubmit = (event, aid) => {
    event.preventDefault();
    dispatch(updateGroup(pickedGroup.gid, {
      groupName,
      description,
      accessFromHour,
      accessToHour,
      doors,
    }));
    setGroupName('');
    setDescription('');
    setAccessFromHour(0);
    setAccessToHour(0);
    setDoors([]);
    setRefresh('Refresh');
  };

  return (
    <>
      <Dialog active={dialogStatus.groups_create === 'active'}>
        <TemplateForm buttonText="Create Group" onSubmitAction={(event) => handleCreateSubmit(event, 'its working')}>
          <TemplateInput labelText="Name of Group" type="text" onChangeAction={handleGroupName} value={groupName} />
          <TemplateInput labelText="Description" type="text" onChangeAction={handleDescription} value={description} />
          <TemplateInput labelText="Access from" type="dropdown" onChangeAction={handleAccessFromHour} value={accessFromHour} dropdownOptions={[{ display: '00:00', value: 0 }, { display: '01:00', value: 1 }, { display: '02:00', value: 2 }, { display: '03:00', value: 3 }, { display: '04:00', value: 4 }, { display: '05:00', value: 5 }, { display: '06:00', value: 6 }, { display: '07:00', value: 7 }, { display: '08:00', value: 8 }, { display: '09:00', value: 9 }, { display: '10:00', value: 10 }, { display: '11:00', value: 11 }, { display: '12:00', value: 12 }, { display: '13:00', value: 13 }, { display: '14:00', value: 14 }, { display: '15:00', value: 15 }, { display: '16:00', value: 16 }, { display: '17:00', value: 17 }, { display: '18:00', value: 18 }, { display: '19:00', value: 19 }, { display: '20:00', value: 20 }, { display: '21:00', value: 21 }, { display: '22:00', value: 22 }, { display: '23:00', value: 23 }, { display: '24:00', value: 24 }]} />
          <TemplateInput labelText="Access to" type="dropdown" onChangeAction={handleAccessToHour} value={accessToHour} dropdownOptions={[{ display: '00:00', value: 0 }, { display: '01:00', value: 1 }, { display: '02:00', value: 2 }, { display: '03:00', value: 3 }, { display: '04:00', value: 4 }, { display: '05:00', value: 5 }, { display: '06:00', value: 6 }, { display: '07:00', value: 7 }, { display: '08:00', value: 8 }, { display: '09:00', value: 9 }, { display: '10:00', value: 10 }, { display: '11:00', value: 11 }, { display: '12:00', value: 12 }, { display: '13:00', value: 13 }, { display: '14:00', value: 14 }, { display: '15:00', value: 15 }, { display: '16:00', value: 16 }, { display: '17:00', value: 17 }, { display: '18:00', value: 18 }, { display: '19:00', value: 19 }, { display: '20:00', value: 20 }, { display: '21:00', value: 21 }, { display: '22:00', value: 22 }, { display: '23:00', value: 23 }, { display: '24:00', value: 24 }]} />
          <TemplateInput labelText="Allowed doors" type="checkbox" onChangeAction={handleDoors} value={doors} checkboxOptions={dbDoors} />
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.groups_update === 'active'}>
        <TemplateForm buttonText="Update Group">
          <TemplateInput labelText="Name of Group" type="text" />
          <TemplateInput labelText="Description" type="text" />
          <TemplateInput labelText="Access from" type="dropdown" onChangeAction={handleAccessFromHour} dropdownOptions={[{ display: '00:00', value: 0 }, { display: '01:00', value: 1 }, { display: '02:00', value: 2 }, { display: '03:00', value: 3 }, { display: '04:00', value: 4 }, { display: '05:00', value: 5 }, { display: '06:00', value: 6 }, { display: '07:00', value: 7 }, { display: '08:00', value: 8 }, { display: '09:00', value: 9 }, { display: '10:00', value: 10 }, { display: '11:00', value: 11 }, { display: '12:00', value: 12 }, { display: '13:00', value: 13 }, { display: '14:00', value: 14 }, { display: '15:00', value: 15 }, { display: '16:00', value: 16 }, { display: '17:00', value: 17 }, { display: '18:00', value: 18 }, { display: '19:00', value: 19 }, { display: '20:00', value: 20 }, { display: '21:00', value: 21 }, { display: '22:00', value: 22 }, { display: '23:00', value: 23 }, { display: '24:00', value: 24 }]} />
          <TemplateInput labelText="Access to" type="dropdown" onChangeAction={handleAccessToHour} dropdownOptions={[{ display: '00:00', value: 0 }, { display: '01:00', value: 1 }, { display: '02:00', value: 2 }, { display: '03:00', value: 3 }, { display: '04:00', value: 4 }, { display: '05:00', value: 5 }, { display: '06:00', value: 6 }, { display: '07:00', value: 7 }, { display: '08:00', value: 8 }, { display: '09:00', value: 9 }, { display: '10:00', value: 10 }, { display: '11:00', value: 11 }, { display: '12:00', value: 12 }, { display: '13:00', value: 13 }, { display: '14:00', value: 14 }, { display: '15:00', value: 15 }, { display: '16:00', value: 16 }, { display: '17:00', value: 17 }, { display: '18:00', value: 18 }, { display: '19:00', value: 19 }, { display: '20:00', value: 20 }, { display: '21:00', value: 21 }, { display: '22:00', value: 22 }, { display: '23:00', value: 23 }, { display: '24:00', value: 24 }]} />
          {' '}

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
