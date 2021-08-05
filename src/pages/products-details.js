import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./../components/card/card";
import { useParams } from "react-router-dom";
import { addToCart } from "./../state/action/cart.action";
export const ProductsDetails = () => {
  const products = useSelector((state) => state.products.filteredItems);
  const cartItems = useSelector((state) => state.cart.items);
  let { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();

  return (
    <>
      <Card
        handleClick={(e) => dispatch(addToCart(cartItems, product))}
        product={product}
        details={true}
      />
    </>
  );
};

export default ProductsDetails;
