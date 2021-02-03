import { getDoors } from '../../pages/api/hello';

const fetchDoors = () => (dispatch) => {
  getDoors()
    .then((data) => dispatch({ type: 'GET_DOORS', payload: data }));
};
export default fetchDoors;
