import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import Log from '../../redux/types';
import LogCard from '../../components/partials/cards/LogCard';
import SearchBar from '../../components/partials/searchBar/searchBar';

interface Props { }

const Logs: React.FunctionComponent<Props> = () => {
  const logs = useSelector((store) => store.logsReducer.logs);
  const users = useSelector((store) => store.userReducer.users);
  const doors = useSelector((store) => store.doorReducer.doors);

  const [filteredLogs, setFilteredLogs] = useState<Log[]>(logs);
  const [input, setInput] = useState<string>('');

  const filterLogs = (inputName) => {
    const filtered = logs.filter((log) => {
      const search = `${users.find(({ id }) => id === log.enteredBy).firstname}${users.find(({ id }) => id === log.enteredBy).lastname}${doors.find(({ id }) => id === log.enteredDoor).name}`;
      return search.toLowerCase().includes(inputName.toLowerCase());
    });
    setFilteredLogs(filtered);
    setInput(inputName);
  };

  return (
    <DashboardLayout>
      <SearchBar updateInput={filterLogs} input={input}> </SearchBar>
      <CardWrapper>
        {filteredLogs.map((log) => (
          <LogCard
            key={log._id}
            firstname={users.find(({ id }) => id === log.enteredBy).firstname}
            lastname={users.find(({ id }) => id === log.enteredBy).lastname}
            doorName={doors.find(({ id }) => id === log.enteredDoor).name}
            createdOn={moment(log.date).format('MMM Do YY')}
          />
        ))}
      </CardWrapper>
    </DashboardLayout>
  );
};

export default Logs;
