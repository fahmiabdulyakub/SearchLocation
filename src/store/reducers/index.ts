import {combineReducers} from 'redux';
import user from './userReducer';
import place from './placeReducer';

const appReducer = combineReducers({
  user,
  place,
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
