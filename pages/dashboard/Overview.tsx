import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import LogCard from '../../components/partials/cards/LogCard';
import InfoCard from '../../components/partials/cards/InfoCard';
import Styles from '../../styles/Overview.module.scss';

interface Props { }

const Overview: React.FunctionComponent<Props> = () => {
  const users = useSelector((store) => store.userReducer.users);
  const logs = useSelector((store) => store.logsReducer.logs);
  console.log(logs, 'This is logs');
  const doors = useSelector((store) => store.doorReducer.doors);
  // const logsForPage = logs.map((log) => {
  //   return {
  //     firstname: users.find((user) )
  //   }
  // })
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
              doorName={doors.find(({ did }) => did === log.enteredDoor).name}
              createdOn={moment(log.date).format('MMM Do YY')}
            />
          ))}

        </CardWrapper>
      </div>
    </DashboardLayout>
  );
};
export default Overview;
