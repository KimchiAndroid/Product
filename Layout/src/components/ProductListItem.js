import React, { Component } from "react";
import productDefaultImage from "../static/product-default.png";
import { Link } from "react-router-dom";

class ProductListItem extends Component {
  render() {
    const { productImage, productName, productPrice, productID } = this.props;
    return (
      <Link to={`/product/?id=${productID}`}>
        <div className="product-list-item">
          <div className="product-image">
            <img src={productImage || productDefaultImage} alt="" />
          </div>
          <div className="product-name">{productName}</div>
          <div className="product-price">{productPrice}원</div>
        </div>
      </Link>
    );
  }
}

export default ProductListItem;
