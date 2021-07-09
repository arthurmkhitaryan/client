import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from './userReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { NODE_ENV } from '../../config/env';
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer
})

const middlewares = [];
if(NODE_ENV === 'development'){
    middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(thunk, ...middlewares));