import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import GroupCard from '../../components/partials/cards/GroupCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import Group from '../../redux/types';
import SearchBar from '../../components/partials/searchBar/searchBar';

interface Props { }

const Groups: React.FunctionComponent<Props> = () => {
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
  return (
    <DashboardLayout>
      <SearchBar updateInput={filterGroups} input={input} />
      <CardWrapper>
        {filteredGroups.map((group) => <GroupCard groupName={group.groupName} />)}
      </CardWrapper>
    </DashboardLayout>
  );
};
export default Groups;
