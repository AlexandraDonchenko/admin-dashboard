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
import { activateBlur, deactivateBlur } from '../../redux/actions/dialogblur-actions';

interface Props { }

const Doors: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const dialogblur = useSelector((state) => state.dialogblurReducer);
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);

  const doors = useSelector((state) => state.doorReducer.doors);
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
    dispatch(showDialog('GROUPS_DIALOG'));
  };

  return (
    <>
      <Dialog active={dialogStatus.groups === 'active'}>
        <TemplateForm buttonText="Add Door">
          <TemplateInput labelText="Name of Door" type="text" />
          <TemplateInput labelText="Endpoint" type="text" />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <button onClick={addDoor}>Add Door</button>
        <SearchBar updateInput={updateDoors} input={input} />
        <CardWrapper>
          {filteredDoors.map((door) => <DoorCard doorName={door.name} />)}
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Doors;
