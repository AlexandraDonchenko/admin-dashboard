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

  const addUser = () => {
    dispatch(activateBlur());
    dispatch(showDialog('USERS_DIALOG'));
  };

  return (

    <>
      <Dialog active={dialogStatus.users === 'active'}>
        <TemplateForm buttonText="Add User">
          <TemplateInput labelText="Firstname" type="text" />
          <TemplateInput labelText="Lastname" type="text" />
          <TemplateInput labelText="Email" type="text" />
          <TemplateInput labelText="Group" type="dropdown" dropdownOptions={['Student', 'Teacher', 'Teacher Assistant']} />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>

        <SearchBar updateInput={updateInput} input={input} addButtonAction={addUser} />
        <CardWrapper>
          {usersToDisplay.map((user) => <UserCard firstname={user.firstname} lastname={user.lastname} email={user.email} group={user.group} />)}
        </CardWrapper>
      </DashboardLayout>
    </>

  );
};

export default Users;
