import { loginReducer } from './reducer';
import thunk from 'redux-thunk';

import { createStore, combineReducers, applyMiddleware }  from 'redux';
const cr = combineReducers({
  loginState : loginReducer
});
export const makeStore = () => createStore(cr,applyMiddleware(thunk));