import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import GroupCard from '../../components/partials/cards/GroupCard';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import Group from '../../redux/types';
import SearchBar from '../../components/partials/searchBar/searchBar';
import { activateBlur, deactivateBlur } from '../../redux/actions/dialogblur-actions';
import Dialog from '../../components/partials/dialogs/Dialog';
import TemplateForm from '../../components/partials/inputFields/TemplateForm';
import TemplateInput from '../../components/partials/inputFields/TemplateInput';
import { showDialog } from '../../redux/actions/dialogstatus-actions';

interface Props { }

const Groups: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const dialogblur = useSelector((state) => state.dialogblurReducer);
  const dialogStatus = useSelector((state) => state.dialogStatusReducer);

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

  const addGroup = () => {
    dispatch(activateBlur());
    dispatch(showDialog('GROUPS_DIALOG'));
  };

  return (
    <>
      <Dialog active={dialogStatus.groups === 'active'}>
        <TemplateForm buttonText="Add User">
          <TemplateInput labelText="Name of Group" type="text" />
          <TemplateInput labelText="Description" type="text" />
          <TemplateInput labelText="Access from" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Access to" type="dropdown" dropdownOptions={['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']} />
          <TemplateInput labelText="Allowed doors" type="radio" radioOptions={['Main Entry', 'Cafeteria', 'Leo\'s Office', 'Berta\'s Office']} />
        </TemplateForm>
      </Dialog>
      <DashboardLayout>
        <button onClick={addGroup}>Add Group</button>
        <SearchBar updateInput={filterGroups} input={input} />
        <CardWrapper>
          {filteredGroups.map((group) => <GroupCard groupName={group.groupName} />)}
        </CardWrapper>
      </DashboardLayout>
    </>
  );
};

export default Groups;
