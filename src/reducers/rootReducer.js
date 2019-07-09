import { combineReducers } from "redux";
import products from "./productReducer";
import form from './formReducer'

export default combineReducers({
  products, form
});
