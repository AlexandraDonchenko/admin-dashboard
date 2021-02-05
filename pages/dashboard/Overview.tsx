import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import LogCard from '../../components/partials/cards/LogCard';
import InfoCard from '../../components/partials/cards/InfoCard';
import Styles from '../../styles/Overview.module.scss';

interface Props { }

const Overview: React.FunctionComponent<Props> = () => {
  const [loaded, setLoaded] = useState(false);
  // const users = useSelector((store) => store.userReducer.users);
  const users = [
    {
      aid: '6ca19f71-7764-41bd-85ae-74cb494982d5',
      registrationKey: null,
      doorKey: null,
      firstName: 'Jerome',
      lastName: 'Haas',
      email: 'jerome.haas@gmail.com',
      isActive: false,
    },
    {
      aid: '247d9f91-8478-42f0-b338-06f480c7d1ab',
      registrationKey: null,
      doorKey: null,
      firstName: 'Peter',
      lastName: 'French',
      email: 'peterch@gmail.com',
      isActive: false,
    },
    {
      aid: 'f71c4481-1a6d-427b-be04-16f6df32c603',
      registrationKey: null,
      doorKey: null,
      firstName: 'Matthieu',
      lastName: 'Bonnardot',
      email: 'matthieu.bonnardot@gmail.com',
      isActive: false,
    },
    {
      aid: '392bd683-6a8d-44bc-ade6-5b81f2d25025',
      registrationKey: null,
      doorKey: null,
      firstName: 'Francesco ',
      lastName: 'Fagnani',
      email: 'francesco.fagnani@gmail.com',
      isActive: false,
    },
    {
      aid: '26d247e1-4297-48cb-b502-fb3337ce40eb',
      registrationKey: null,
      doorKey: null,
      firstName: 'Alba ',
      lastName: 'Garcia Mollá',
      email: 'alba.garcia.molla@gmail.com',
      isActive: false,
    },
    {
      aid: 'b0c313b5-8f72-41b9-85d5-b978608e04d6',
      registrationKey: null,
      doorKey: null,
      firstName: 'Leonardo',
      lastName: 'Di Vittorio',
      email: 'i.love.pineapple.pizza@gmail.com',
      isActive: false,
    },
    {
      aid: '28f1f728-a5c1-4c30-8579-3c7e37822a1a',
      registrationKey: null,
      doorKey: null,
      firstName: 'Sara',
      lastName: 'Samain',
      email: 'sara.samain@gmail.com',
      isActive: false,
    },
    {
      aid: 'c839dead-ef84-4d04-9143-f97b5c66a38e',
      registrationKey: null,
      doorKey: null,
      firstName: 'Berta',
      lastName: 'Cumellas',
      email: 'berta.cumellas@gmail.com',
      isActive: false,
    },
    {
      aid: '7005f029-7ff5-4eeb-a9cb-148938fe1ed5',
      registrationKey: null,
      doorKey: null,
      firstName: 'Jerome',
      lastName: 'Haas',
      email: 'peter.frengfsch@gmail.com',
      isActive: true,
    },
  ];
  const logs = useSelector((store) => store.logsReducer.logs);

  const doors = useSelector((store) => store.doorReducer.doors);

  return (
    <DashboardLayout>
      <div>
        <div className={Styles.cardBox}>
          <InfoCard number={users.length} text="active users" />
          <InfoCard number={0} text="open invitations" />
          <InfoCard number={logs.length} text="daily openings" />
          <InfoCard number={0} text="open issues" />
          {' '}
        </div>
        <CardWrapper>
          {logs.map((log) => (
            <LogCard

              key={log._id}
              firstname={users.find(({ aid }) => aid === log.enteredBy).firstName}
              lastname={users.find(({ aid }) => aid === log.enteredBy).lastName}
              doorName={doors.find(({ did }) => did === log.enteredDoor).doorName}
              createdOn={moment(log.date).format('MMM Do YY')}
            />
          ))}

        </CardWrapper>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
