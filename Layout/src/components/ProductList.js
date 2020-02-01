import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { css } from "@emotion/core";
import Loader from "react-spinners/MoonLoader";
//https://www.davidhu.io/react-spinners/
import "../style/ProductList.scss";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class ProductList extends Component {
  render() {
    const { actionPrev, actionNext, productItems } = this.props;
    const { siteName, siteID } = this.props.siteInfo;
    return (
      <div className="product-site">
        <h1 className="product-sitename">{siteName}</h1>
        <div className="product-list">
          <div className="product-list-prev" onClick={actionPrev}></div>
          <div className="product-list-items">
            {productItems.map(productItem => {
              const { productImage, productName, productPrice } = productItem;
              return (
                <ProductListItem
                  productImage={productImage}
                  productName={productName}
                  productPrice={productPrice}
                />
              );
            })}
            <div className="product-list-spinning">
              <Loader loading={true} color={"#123abc"} />
            </div>
          </div>
          <div className="product-list-next" onClick={actionNext}></div>
        </div>
      </div>
    );
  }
}

export default ProductList;
