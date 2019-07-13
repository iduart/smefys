import { combineReducers } from "redux";
import { reducer as categories } from "./categories";
import { reducer as cart } from './cart';

export default combineReducers({
  categories,
  cart
})
