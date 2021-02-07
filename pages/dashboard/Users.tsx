/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import UserCard from '../../components/partials/cards/UserCard';
import { User } from '../../redux/types';

import SearchBar from '../../components/partials/searchBar/searchBar';
import { activateBlur, deactivateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';
import {
  createUser, chooseUser, updateUser, removeUser,
} from '../../redux/actions/user-actions';

interface Props { }

const Users: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const dialogStatus = useSelector((state) => state.dialogStatusReducer);
  const users = useSelector((state) => state.userReducer.users);
  const [refresh, setRefresh] = useState<String>('');

  const [usersToDisplay, setUsersToDisplay] = useState<User[]>(users);
  const [input, setInput] = useState<string>('');
  console.log(refresh);
  const cancelDialog = (event) => {
    event.preventDefault();
    dispatch(showDialog('RESET'));
    dispatch(deactivateBlur());
  };
  useEffect(() => {
    setUsersToDisplay(users);
  }, [refresh]);
  const updateInput = (inputName) => {
    const filtered = users.filter((user) => {
      const fullName = `${user.firstname}${user.lastname}`;
      return fullName.toLowerCase().includes(inputName.toLowerCase());
    });
    setInput(inputName);
    setUsersToDisplay(filtered);
  };

  const showAddUserDialog = () => {
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG_CREATE'));
  };

  const showUpdateUserDialog = (event, user) => {
    dispatch(activateBlur());
    dispatch(updateUser(user.aid, {
      firstName,
      lastName,
      email,
    }));

    dispatch(showDialog('USERS_DIALOG_UPDATE'));

    dispatch(chooseUser(user));
  };

  const showDeactivateUserDialog = (event, user) => {
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG_DEACTIVATE'));
    dispatch(chooseUser(user));
  };

  // INITIALIZE STATE FOR INPUT FIELDS
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroupName] = useState<Number>();

  // FUNCTION TO UPDATE INPUT FIELDS
  const handleFirstName = (event) => { setFirstName(event.target.value); };
  const handleLasttName = (event) => { setLastName(event.target.value); };
  const handleEmail = (event) => { setEmail(event.target.value); };

  const handleGroup = (event) => {
    setGroupName(Number(event.target.value));
  };

  const pickedUser = useSelector((state) => state.choosenUserReducer.user);

  const handleAddSubmit = (event, id) => {
    event.preventDefault();
    dispatch(createUser({
      firstName,
      lastName,
      email,
      group,
    }));
    setFirstName('');
    setLastName('');
    setEmail('');
    setGroupName('');
    cancelDialog(event);
  };

  const handleDeleteSubmit = (event) => {
    event.preventDefault();
    dispatch(removeUser(pickedUser.aid));
    setFirstName('');
    setLastName('');
    setEmail('');
    setGroupName('');
    cancelDialog(event);
  };

  const handleUpdateSubmit = (event, aid) => {
    event.preventDefault();

    dispatch(updateUser(pickedUser.aid, {
      firstName,
      lastName,
      email,
      group,
    }));
    setFirstName('');
    setLastName('');
    setEmail('');
    setGroupName('');
    cancelDialog(event);
    setRefresh('Refresh');
  };

  return (

    <>
      <Dialog active={dialogStatus.users_create === 'active'}>
        <TemplateForm buttonText="Add User" onSubmitAction={(event) => handleAddSubmit(event, 'its working!')}>
          <TemplateInput labelText="Firstname" type="text" onChangeAction={handleFirstName} value={firstName} />
          <TemplateInput labelText="Lastname" type="text" onChangeAction={handleLasttName} value={lastName} />
          <TemplateInput labelText="Email" type="text" onChangeAction={handleEmail} value={email} />
          <TemplateInput labelText="Group" type="dropdown" dropdownOptions={[{ groupName: 'Teacher Assistant', gid: 21 }, { groupName: 'Teacher', gid: 22 }, { groupName: 'Student', gid: 23 }]} onChangeAction={handleGroup} value={group} />
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.users_update === 'active'}>
        <TemplateForm buttonText="Update User" onSubmitAction={(event) => handleUpdateSubmit(event)}>
          <TemplateInput labelText="Firstname" type="text" onChangeAction={handleFirstName} value={firstName} />
          <TemplateInput labelText="Lastname" type="text" onChangeAction={handleLasttName} value={lastName} />
          <TemplateInput labelText="Email" type="text" onChangeAction={handleEmail} value={email} />
          <TemplateInput labelText="Group" type="dropdown" dropdownOptions={[{ groupName: 'Teacher Assistant', gid: 21 }, { groupName: 'Teacher', gid: 22 }, { groupName: 'Student', gid: 23 }]} onChangeAction={handleGroup} value={group} />
          <TemplateInput labelText="Status" type="radio" radioOptions={['active', 'inactive']} />
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.users_delete === 'active'}>
        <TemplateForm buttonText="Delete User" onSubmitAction={(event) => handleDeleteSubmit(event)} />
      </Dialog>

      <DashboardLayout>
        <SearchBar updateInput={updateInput} input={input} addButtonAction={showAddUserDialog} />
        <CardWrapper>
          {/* {usersToDisplay.map((user) => <UserCard aid={user.aid} firstname={user.firstName} lastname={user.lastName} email={user.email} group={user.group} options={{ update: showUpdateUserDialog, delete: showDeleteUserDialog, deactivate: showDeactivateUserDialog }} />)} */}
          {usersToDisplay.map((user) => <UserCard user={user} key={user.aid} options={{ update: showUpdateUserDialog, deactivate: showDeactivateUserDialog }} />)}
        </CardWrapper>
      </DashboardLayout>
    </>

  );
};
export default Users;
