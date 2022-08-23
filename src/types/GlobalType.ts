import {PredictionsType} from './PlaceType';
import {UserDataType} from './UserDataType';

export interface GlobalType {
  user: {
    userData: UserDataType;
  };
  place: {
    predictions: PredictionsType[];
  };
}
