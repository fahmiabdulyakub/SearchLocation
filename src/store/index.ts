import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

export default createStore(appReducer, compose(applyMiddleware(thunk)));
