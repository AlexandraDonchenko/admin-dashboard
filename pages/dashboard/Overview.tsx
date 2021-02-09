import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import LogCard from '../../components/partials/cards/LogCard';
import InfoCard from '../../components/partials/cards/InfoCard';
import Styles from '../../styles/Overview.module.scss';

import { fetchUsers } from '../../redux/actions/user-actions';
import { fetchGroups } from '../../redux/actions/group-actions';
import { fetchDoors } from '../../redux/actions/door-actions';
import fetchLogs from '../../redux/actions/log-actions';
import { fetchIssues } from '../../redux/actions/issue-actions';

interface Props { }

const Overview: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.userReducer.users);
  const logs = useSelector((store) => store.logsReducer.logs);
  const doors = useSelector((store) => store.doorReducer.doors);
  const issues = useSelector((store) => store.issueReducer.issues);
  const filteredIssues = issues.filter((issue) => (issue.active ? issue : null));

  useEffect(() => {
    dispatch(fetchDoors());
    dispatch(fetchGroups());
    dispatch(fetchUsers());
    dispatch(fetchLogs());
    dispatch(fetchIssues());
  }, []);

  return (
    <>
      { users && users.length && doors && doors.length && logs && logs.length && (
        <DashboardLayout>

          <div>
            <div className={Styles.cardBox}>
              <InfoCard number={users.length} text="active users" />
              <InfoCard number={0} text="open invitations" />
              <InfoCard number={logs.length} text="daily openings" />
              <InfoCard number={filteredIssues.length} text="open issues" />
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
      )}
    </>
  );
};

export default Overview;
