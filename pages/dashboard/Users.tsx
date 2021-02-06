/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import UserCard from '../../components/partials/cards/UserCard';
import { User } from '../../redux/types';

import SearchBar from '../../components/partials/searchBar/searchBar';
import { activateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';
import { createUser } from '../../redux/actions/user-actions';

interface Props { }

const Users: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const dialogStatus = useSelector((state) => state.dialogStatusReducer);
  const users = useSelector((state) => state.userReducer.users);

  const [usersToDisplay, setUsersToDisplay] = useState<User[]>(users);
  const [input, setInput] = useState<string>('');

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
    dispatch(showDialog('USERS_DIALOG_ADD'));
  };
  const showUpdateUserDialog = (aid) => {
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG_UPDATE'));
  };
  const showDeleteUserDialog = (aid) => {
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG_DELETE'));
  };
  const showDeactivateUserDialog = (aid) => {
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG_DEACTIVATE'));
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroupName] = useState<Number>();

  const handleFirstName = (event) => { setFirstName(event.target.value); };
  const handleLasttName = (event) => { setLastName(event.target.value); };
  const handleEmail = (event) => { setEmail(event.target.value); };
  const handleGroup = (event) => {
    console.log(event.target.value);
    setGroupName(Number(event.target.value));
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    console.log(test);

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
  };

  return (

    <>
      <Dialog active={dialogStatus.users_add === 'active'}>
        <TemplateForm buttonText="Add User" onSubmitAction={(event) => handleSubmit(event, 'its working!')}>
          <TemplateInput labelText="Firstname" type="text" onChangeAction={handleFirstName} value={firstName} />
          <TemplateInput labelText="Lastname" type="text" onChangeAction={handleLasttName} value={lastName} />
          <TemplateInput labelText="Email" type="text" onChangeAction={handleEmail} value={email} />
          <TemplateInput labelText="Group" type="dropdown" dropdownOptions={[{ groupName: 'Teacher Assistant', gid: 21 }, { groupName: 'Teacher', gid: 22 }, { groupName: 'Student', gid: 23 }]} onChangeAction={handleGroup} value={group} />
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.users_update === 'active'}>
        <TemplateForm buttonText="Update User" onSubmitAction={(event) => handleSubmit(event, aid)}>
          <TemplateInput labelText="Firstname" type="text" onChangeAction={handleFirstName} value={firstName} />
          <TemplateInput labelText="Lastname" type="text" onChangeAction={handleLasttName} value={lastName} />
          <TemplateInput labelText="Email" type="text" onChangeAction={handleEmail} value={email} />
          <TemplateInput labelText="Group" type="dropdown" dropdownOptions={[{ groupName: 'Teacher Assistant', gid: 21 }, { groupName: 'Teacher', gid: 22 }, { groupName: 'Student', gid: 23 }]} onChangeAction={handleGroup} value={group} />
          <TemplateInput labelText="Status" type="radio" radioOptions={['active', 'inactive']} />
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.users_delete === 'active'}>
        <TemplateForm buttonText="Delete User" onSubmitAction={handleSubmit}>
          Are you sure you want to delete this user?
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.users_deactivate === 'active'}>
        <TemplateForm buttonText="Deactivete User" onSubmitAction={handleSubmit}>
          Are you sure you want to deactivete this user?
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <SearchBar updateInput={updateInput} input={input} addButtonAction={showAddUserDialog} />
        <CardWrapper>
          {usersToDisplay.map((user) => <UserCard aid={user.aid} firstname={user.firstName} lastname={user.lastName} email={user.email} group={user.group} options={{ update: showUpdateUserDialog, delete: showDeleteUserDialog, deactivate: showDeactivateUserDialog }} />)}
        </CardWrapper>
      </DashboardLayout>
    </>

  );
};

export default Users;
