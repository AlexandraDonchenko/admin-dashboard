/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import UserCard from '../../components/partials/cards/UserCard';
import { showDialog } from '../../redux/actions/dialogstatus-actions';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import SearchBar from '../../components/partials/searchBar/searchBar';
import Dialog from '../../components/partials/dialogs/Dialog';
import { User } from '../../redux/types';
import {
  createUser, chooseUser, updateUser,
} from '../../redux/actions/user-actions';
import { activateBlur, deactivateBlur } from '../../redux/actions/dialogblur-actions';

interface Props { }

const Users: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);
  const users = useSelector((state) => state.userReducer.users.sort((a, b) => ((a.firstName > b.firstName) ? 1 : -1)));
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>(users);
  const [input, setInput] = useState<string>('');
  const cancelDialog = (event) => {
    event.preventDefault();
    dispatch(showDialog('RESET'));
    dispatch(deactivateBlur());
    setFirstName('');
    setLastName('');
    setEmail('');
    setGroupName(null);
    setUsersToDisplay(users.sort());
  };
  const pickedUser = useSelector((state) => state.choosenCardReducer.picked);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroupName] = useState<Number| null>();
  const [isActive, setIsActiove] = useState<Boolean>(false);
  useEffect(() => {
    setUsersToDisplay(users);
    dispatch(chooseUser(pickedUser));
  }, [users, pickedUser]);
  const updateInput = (inputName) => {
    const filtered = users.filter((user) => {
      const fullName = `${user.firstname}${user.lastname}`;
      return fullName.toLowerCase().includes(inputName.toLowerCase());
    });
    setInput(inputName);
    setUsersToDisplay(filtered);
  };

  const showCreateUserDialog = () => {
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG_CREATE'));
  };

  const showUpdateUserDialog = (event, user) => {
    dispatch(chooseUser(user));
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG_UPDATE'));
  };

  // FUNCTION TO UPDATE INPUT FIELDS
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLasttName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleGroup = (event) => {
    setGroupName(Number(event.target.value));
  };
  const handleActive = (event) => {
    setIsActiove(event.target.value === 'active');
  };

  const handleCreateSubmit = (event, id) => {
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
    setGroupName(null);
    setUsersToDisplay(users);
    cancelDialog(event);
  };

  const handleUpdateSubmit = (event, aid) => {
    event.preventDefault();
    const userObj = {
      firstName: firstName === '' ? pickedUser.firstName : firstName,
      lastName: lastName === '' ? pickedUser.lastName : lastName,
      email: email === '' ? pickedUser.email : email,
      group: group === null ? pickedUser.group : group,
    };

    dispatch(updateUser(pickedUser.aid, userObj));
    setFirstName('');
    setLastName('');
    setEmail('');
    setGroupName(null);
    setUsersToDisplay(users);
    cancelDialog(event);
  };

  return (
    <>
      <Dialog active={dialogStatus.users_create === 'active'}>
        <TemplateForm buttonText="Add User" onSubmitAction={(event) => handleCreateSubmit(event, 'its working!')}>
          <TemplateInput labelText="Firstname" type="text" onChangeAction={handleFirstName} value={firstName} placeholder={firstName} />
          <TemplateInput labelText="Lastname" type="text" onChangeAction={handleLasttName} value={lastName} placeholder={lastName} />
          <TemplateInput labelText="Email" type="text" onChangeAction={handleEmail} value={email} />
          <TemplateInput labelText="Group" type="dropdown" dropdownOptions={[{ value: 'Teacher Assistant', id: 21 }, { value: 'Teacher', id: 22 }, { value: 'Student', id: 23 }]} onChangeAction={handleGroup} value={group} />
        </TemplateForm>
      </Dialog>
      <Dialog active={dialogStatus.users_update === 'active'}>
        <TemplateForm buttonText="Update User" onSubmitAction={(event) => handleUpdateSubmit(event, 'itworks')}>
          <TemplateInput labelText="Firstname" type="text" onChangeAction={handleFirstName} value={firstName} placeholder={pickedUser.firstName} />
          <TemplateInput labelText="Lastname" type="text" onChangeAction={handleLasttName} value={lastName} placeholder={pickedUser.lastName} />
          <TemplateInput labelText="Email" type="text" onChangeAction={handleEmail} value={email} placeholder={pickedUser.email} />
          <TemplateInput labelText="Group" type="dropdown" dropdownOptions={[{ value: 'Teacher Assistant', id: 21 }, { value: 'Teacher', gid: 22 }, { value: 'Student', id: 23 }]} onChangeAction={handleGroup} value={group} />
          <TemplateInput labelText="Status" type="radio" radioOptions={['active', 'inactive']} value={isActive} onChangeAction={handleActive} />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <SearchBar updateInput={updateInput} input={input} addButtonAction={showCreateUserDialog} />
        <CardWrapper>
          {usersToDisplay.map((user) => <UserCard user={user} key={user.aid} options={{ update: showUpdateUserDialog }} />)}
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Users;
