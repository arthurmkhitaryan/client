import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { NODE_ENV } from '../../config/env';

const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer
})

const middlewares = [];
if(NODE_ENV === 'development'){
    middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(thunk, ...middlewares));