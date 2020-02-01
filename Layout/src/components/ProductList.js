import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import { css } from '@emotion/core';
import Loader from 'react-spinners/MoonLoader';
//https://www.davidhu.io/react-spinners/
import '../style/ProductList.scss';
import ReactList from 'react-list';
//https://www.npmjs.com/package/react-list
import { debounce } from 'lodash';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
  }
    render() {
        const { 
          // actionPrev, actionNext, 
          productItems } = this.props;
        const { siteName, siteID } = this.props.siteInfo;
        const renderItem = (index, key) => {
            const productItem = productItems[index];
            return <ProductListItem key={key} {...productItem} />;
        };
        const scrollHandler = event => {
            const { target } = event;
            const { scrollLeft, scrollWidth, clientWidth } = target;
            console.log(scrollLeft, scrollWidth - clientWidth);
            if (scrollLeft > scrollWidth - clientWidth - 2000) {
                debounce(() => {
                    console.log('추가');
                }, 1000);
            }
        };
        const actionPrev = (event) => {
          const target = this.ref.current;
          target.scrollLeft -= target.clientWidth;
        }
        const actionNext = (event) => {
          const target = this.ref.current;
          target.scrollLeft += target.clientWidth;
          
        }
        return (
            <div className="product-site">
                <h1 className="product-sitename">{siteName}</h1>
                <div className="product-list">
                    <div className="product-list-prev" onClick={actionPrev}></div>
                    <div className="product-list-items" onScroll={scrollHandler} ref={this.ref}>
                        <ReactList
                            axis="x"
                            itemRenderer={renderItem}
                            length={productItems.length}
                            type="uniform"
                        />
                    </div>
                    <div className="product-list-next" onClick={actionNext}></div>
                </div>
            </div>
        );
    }
}

export default ProductList;
