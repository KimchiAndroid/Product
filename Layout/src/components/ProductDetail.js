import React, { Component } from 'react';
import ProductContents from './ProductContents';
class ProductDetail extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="product-detail-container">
                <ProductContents data={data} />
            </div>
        );
    }
}

export default ProductDetail;
