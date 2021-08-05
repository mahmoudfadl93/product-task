import { combineReducers } from "redux";
import productReducers from "./products.reducre";
import cartReducers from "./cart.reducre";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
});
