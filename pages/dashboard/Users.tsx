/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import UserCard from '../../components/partials/cards/UserCard';
import { User } from '../../redux/types';
import SearchBar from '../../components/partials/searchBar/searchBar';

interface Props { }

const Users: React.FunctionComponent<Props> = () => {
  const users = useSelector((state) => state.userReducer.users);
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>(users);
  const [input, setInput] = useState<string>('');
  const updateInput = (inputName) => {
    console.log(input);
    const filtered = users.filter((user) => {
      const fullName = `${user.firstname}${user.lastname}`;
      return fullName.toLowerCase().includes(inputName.toLowerCase());
    });
    setInput(inputName);
    setUsersToDisplay(filtered);
  };
  return (
    <DashboardLayout>

      <SearchBar updateInput={updateInput} input={input} />
      <CardWrapper>
        {usersToDisplay.map((user) => <UserCard firstname={user.firstname} lastname={user.lastname} email={user.email} group={user.group} />)}
      </CardWrapper>
    </DashboardLayout>
  );
};

export default Users;
