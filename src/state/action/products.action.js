import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_GATEGORY,
  ORDER_PRODUCTS_BY_PRICE,
} from "./../type-actions.js";

export const fetchProducts = () => (dispatch) => {
  fetch("http://fakestoreapi.com/products ")
    .then((res) => res.json())
    .catch((err) =>
      console.log(
        "🚀 ~ file: products.action.js ~ line 14 ~ fetchProducts ~ err",
        err
      )
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_GATEGORY,
    payload: {
      category: category,
      items:
        category === ""
          ? products
          : products.filter((x) => {
              return x.category === category;
            }),
    },
  });
};

export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products,
    },
  });
};
