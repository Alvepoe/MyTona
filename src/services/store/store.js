import {createStore, combineReducers} from 'redux';
import userReducer from '../reducers/userReducer'
import paginationReducer from '../reducers/paginationReducer'

const store = createStore(combineReducers({user: userReducer, pagination: paginationReducer}));

export default store;