import { combineReducers } from "redux";
import { reducer as categories } from "./categories";
import { reducer as cart } from './cart';
import { reducer as order } from './order';

export default combineReducers({
  categories,
  cart,
  order
})
