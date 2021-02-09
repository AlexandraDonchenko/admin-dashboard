import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import DashboardLayout from '../../components/partials/layouts/DashboardLayout';
import CardWrapper from '../../components/partials/cards/cardWrapper';
import LogCard from '../../components/partials/cards/LogCard';
import InfoCard from '../../components/partials/cards/InfoCard';
import styles from '../../styles/Overview.module.scss';
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

  console.log('users', logs);

  const data = {
    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.2,
        backgroundColor: '#ffffff',
        borderColor: '#B00E23',
        borderCapStyle: 'butt',
        borderDash: [],
        animation: true,
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#B00E23',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#B00E23',
        pointHoverBorderColor: '#B00E23',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
        scaleLabel: {
          fontColor: '#B00E23',
          labelString: 'hello world',
        },
      },
    ],
  };

  return (
    <>
      { users && users.length && doors && doors.length && logs && logs.length && (
        <DashboardLayout>

          <div>
            <div className={styles.cardBox}>
              <InfoCard number={users.length} text="active users" />
              <InfoCard number={0} text="open invitations" />
              <InfoCard number={logs.length} text="daily openings" />
              <InfoCard number={filteredIssues.length} text="open issues" />
              {' '}
            </div>
            <CardWrapper>
              <div className={styles.chartWrapper}>
                <Line data={data} />
              </div>
            </CardWrapper>

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
