import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./../components/card/card";
import { fetchProducts } from "./../state/action/products.action";
import { addToCart } from "./../state/action/cart.action";
import FilterBar from "./../components/filter-bar/FilterBar";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const productItems = this.props.products.map((product) => (
      <Card
      details={false}
        key={product.id}
        product={product}
        handleClick={(e) => this.props.addToCart(this.props.cartItems, product)}
      />
    ));

    return (
      <>
        <div className="filter-bar">
          <FilterBar />
        </div>
        <div className="row"> {productItems}</div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
