import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.css";
const Card = ({ product, handleClick, details }) => {
  const trimWord = (value) => {
    if (!details) {
      let string = value;
      let length = 50;
      let trimmedString = string.substring(0, length);
      return trimmedString;
    }
    return value;
  };

  return (
    <>
      <div className="product">
        <div className="image-box">
          <img alt="ss" src={product.image} />
        </div>
        <div className="text-box">
          <Link to={`/products-details/${product.id}`}>
            <h2 className="item">{product.title}</h2>
          </Link>

          <h3 className="price">{product.price}</h3>
          <p className="description">{trimWord(product.description)}</p>
          <button
            onClick={handleClick}
            type="button"
            name="item-1-button"
            id="item-1-button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  details: PropTypes.bool.isRequired,
};

export default Card;
