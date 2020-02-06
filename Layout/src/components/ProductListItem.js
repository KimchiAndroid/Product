import React, { Component } from 'react';
import productDefaultImage from '../static/product-default.png';
import { Link } from 'react-router-dom';

class ProductListItem extends Component {
    render() {
        const { thumbnail, title, price, site_code, id } = this.props;
        return (
            <Link to={`/detail/?site_code=${site_code}&id=${id}`}>
                <div className="product-list-item">
                    <div className="product-image">
                        <img src={thumbnail || productDefaultImage} alt="" />
                    </div>
                    <div className="product-name">{title}</div>
                    <div className="product-price">{price}원</div>
                </div>
            </Link>
        );
    }
}

export default ProductListItem;
