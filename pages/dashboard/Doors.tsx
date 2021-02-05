import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import DoorCard from '../../components/partials/cards/DoorCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import Door from '../../redux/types';
import SearchBar from '../../components/partials/searchBar/searchBar';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';
import { activateBlur } from '../../redux/actions/dialogblur-actions';

interface Props { }

const Doors: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const dialogblur = useSelector((state) => state.dialogblurReducer);
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);

  // const doors = useSelector((state) => state.doorReducer.doors);
  const doors = [
    {
      did: 12,
      doorName: 'Main Entry',
      endPoint: '/mainEntry',
      doorUrl: null,
    },
    {
      did: 13,
      doorName: "Leo's Office",
      endPoint: '/LeosOffice',
      doorUrl: null,
    },
    {
      did: 14,
      doorName: "Bertas's Office",
      endPoint: '/BertasOffice',
      doorUrl: null,
    },
    {
      did: 15,
      doorName: 'Supply loset',
      endPoint: '/SupplyCloser',
      doorUrl: null,
    },
  ];
  const [filteredDoors, setFilteredDoors] = useState<Door[]>(doors);
  const [input, setInput] = useState<string>('');
  const updateDoors = (inputName) => {
    const filtered = doors.filter((door) => {
      const { name } = door;
      return name.toLowerCase().includes(inputName.toLowerCase());
    });
    setInput(inputName);
    setFilteredDoors(filtered);
  };

  const addDoor = () => {
    dispatch(activateBlur());
    dispatch(showDialog('DOORS_DIALOG'));
  };

  return (
    <>
      <Dialog active={dialogStatus.doors === 'active'}>
        <TemplateForm buttonText="Add Door">
          <TemplateInput labelText="Name of Door" type="text" />
          <TemplateInput labelText="Endpoint" type="text" />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <button onClick={addDoor}>Add Door</button>
        <SearchBar updateInput={updateDoors} input={input} />
        <CardWrapper>
          {filteredDoors.map((door) => <DoorCard doorName={door.doorName} />)}
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Doors;
