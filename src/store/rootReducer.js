import { combineReducers } from "redux";
import { reducer as auth } from './auth';
import { reducer as cart } from './cart';
import { reducer as order } from './order';

export default combineReducers({
  auth,
  cart,
  order,
})
