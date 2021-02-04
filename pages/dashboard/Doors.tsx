import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import DoorCard from '../../components/partials/cards/DoorCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import Door from '../../redux/types';
import SearchBar from '../../components/partials/searchBar/searchBar';

interface Props { }

const Doors: React.FunctionComponent<Props> = () => {
  const doors = useSelector((state) => state.doorReducer.doors);
  const [filteredDoors, setFilteredDoors] = useState<Door[]>(doors);
  const [input, setInput] = useState<string>('');
  const updateDoors = (inputName) => {
    console.log(filteredDoors);
    const filtered = doors.filter((door) => {
      const { name } = door;
      return name.toLowerCase().includes(inputName.toLowerCase());
    });
    setInput(inputName);
    setFilteredDoors(filtered);
  };
  return (
    <DashboardLayout>
      <SearchBar updateInput={updateDoors} input={input} />
      <CardWrapper>
        {filteredDoors.map((door) => <DoorCard doorName={door.name} />)}
      </CardWrapper>
    </DashboardLayout>
  );
};

export default Doors;
