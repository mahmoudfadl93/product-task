import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "./../../state/action/cart.action";
import "./cart.css";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            Cart is empty <hr />
          </div>
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="shopping-cart">
                <div className="cart-product">
                  <div className="product-header">
                    <div className="product-image">
                      <img alt="ss" src={item.image} />
                    </div>
                    <div className="product-price">{item.price}</div>
                    <div className="product-quantity">
                      {/* <Form.Control type="number"  /> */}
                      {item.count}
                    </div>
                    <div className="product-removal">
                      <button
                        className="remove-product"
                        onClick={(e) =>
                          this.props.removeFromCart(this.props.cartItems, item)
                        }
                      >
                        Remove
                      </button>
                    </div>
                    <div className="product-line-price">
                      {/* {item.count}X{util.formatCurrency(item.price)} */}
                    </div>
                  </div>
                  <div className="product-footer">
                    <div className="product-details">
                      <div className="product-title"> {item.title}</div>
                      <p className="product-description">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* <div className="totals">
                    <div className="totals-item">
                      <label>Subtotal</label>
                      <div className="totals-value" id="cart-subtotal">
                        71.97
                      </div>
                    </div>
                    <div className="totals-item">
                      <label>Tax (5%)</label>
                      <div className="totals-value" id="cart-tax">
                        3.60
                      </div>
                    </div>
                    <div className="totals-item">
                      <label>Shipping</label>
                      <div className="totals-value" id="cart-shipping">
                        15.00
                      </div>
                    </div>
                    <div className="totals-item totals-item-total">
                      <label>Grand Total</label>
                      <div className="totals-value" id="cart-total">
                        90.57
                      </div>
                    </div>
                  </div> */}

                <button className="checkout">Checkout</button>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
