import React, { Component } from "react";
import { connect } from "react-redux";
import "./FilterBar.css";
import {
  filterProducts,
  sortProducts,
} from "./../../state/action/products.action";

export class FilterBar extends Component {
  render() {
    return (
      <div className="row align-items-center">
        <div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-4">
          <label className="label-with-dropdown">
            Order by
            <select
              className="form-select"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label className="label-with-dropdown">
            Category
            <select
              className="form-select"
              value={this.props.category}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  category: state.products.category,
  sort: state.products.sort,
});

const mapDispatchToProps = {
  filterProducts,
  sortProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
