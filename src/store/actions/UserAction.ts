import {UPDATE_USER_DATA} from 'constants/index';
import {Dispatch} from 'redux';
import axios from 'axios';
import Config from 'react-native-config';

export const getUserInfo = () => (dispatch: Dispatch) => {
  return new Promise(() => {
    axios
      .post(`${Config.GEOLOCATION_URL}geolocate?key=${Config.API_KEY}`)
      .then(result => {
        dispatch({
          type: UPDATE_USER_DATA,
          payload: result.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  });
};
