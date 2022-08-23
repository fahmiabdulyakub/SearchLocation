import {UPDATE_PLACE_DATA} from 'constants/index';
import {Dispatch} from 'redux';
import axios from 'axios';
import Config from 'react-native-config';
import {RequestPlaceType, RequestPlaceDetailsType} from 'types/PlaceType';

export const getPlaceList =
  (data: RequestPlaceType) => (dispatch: Dispatch) => {
    return new Promise(() => {
      axios
        .get(`${Config.PLACE_URL}autocomplete/json`, {params: data})
        .then(result => {
          dispatch({
            type: UPDATE_PLACE_DATA,
            payload: result.data.predictions,
          });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

export const getPlaceDetails = (data: RequestPlaceDetailsType) => {
  return new Promise(resolve => {
    axios
      .get(`${Config.PLACE_URL}details/json`, {params: data})
      .then(result => {
        resolve(result.data.result.geometry);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
