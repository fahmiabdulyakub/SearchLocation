import {UPDATE_PLACE_DATA} from 'constants/index';
import initialstate from 'store/initialState';
import {PredictionsType} from 'types/PlaceType';

type Action = {
  type: string;
  payload: PredictionsType[];
};

export default function userReducer(
  state = initialstate.place,
  action: Action,
) {
  switch (action.type) {
    case UPDATE_PLACE_DATA:
      return {
        ...state,
        predictions: action.payload,
      };
    default:
      return state;
  }
}
