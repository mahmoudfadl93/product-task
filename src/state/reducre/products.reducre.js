import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_GATEGORY,
  ORDER_PRODUCTS_BY_PRICE,
} from "./../type-actions.js";

const initState = { items: [], filteredItems: [], category: "", sort: "" };

const productReducers = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_GATEGORY:
      return {
        ...state,
        filteredItems: action.payload.items,
        category: action.payload.category,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
};

export default productReducers;
