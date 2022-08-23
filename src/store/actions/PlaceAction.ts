import {UPDATE_PLACE_DATA} from 'constants/index';
import {Dispatch} from 'redux';
import axios from 'axios';
import Config from 'react-native-config';
import {RequestPlaceType} from 'types/PlaceType';

export const getPlaceList =
  (data: RequestPlaceType) => (dispatch: Dispatch) => {
    return new Promise(() => {
      axios
        .get(
          `${Config.PLACE_URL}autocomplete/json?input=${data.input}&types=${data.types}&location=${data.location}&radius=${data.radius}&key=${data.key}`,
        )
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
