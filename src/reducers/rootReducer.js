import { combineReducers } from "redux";
import products from "./productReducer";
import form from './formReducer'
import navigation from './navigationReducer'
export default combineReducers({
  products, form,navigation
});
