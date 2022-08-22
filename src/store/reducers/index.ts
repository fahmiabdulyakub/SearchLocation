import {combineReducers} from 'redux';
import user from './userReducer';

const appReducer = combineReducers({
  user,
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
