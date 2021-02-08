import { getIssues } from '../../pages/api/hello';

const fetchIssues = () => (dispatch) => {
  getIssues()
    .then((data) => dispatch({ type: 'GET_ISSUES', payload: data }));
};
export default fetchIssues;
