import {UPDATE_USER_DATA} from 'constants/index';
import initialstate from 'store/initialState';
import {UserDataType} from 'types/UserDataType';

type Action = {
  type: string;
  payload: UserDataType;
};

export default function userReducer(state = initialstate.user, action: Action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
