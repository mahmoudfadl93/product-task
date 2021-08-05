import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducre";
import thunk from "redux-thunk";

const middleware = [thunk];

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initState = { cart: { items: cartItems } };

const store = createStore(
  allReducers,
  initState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
