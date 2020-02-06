import React, { Component } from 'react';
import cx from 'classnames';
import { debounce } from 'lodash';
import ReactList from 'react-list';

import ProductListItem from './ProductListItem';
import Loader from 'react-spinners/SyncLoader';
import SiteTitle from './utils/SiteTitle';

import ArrowPrev from '../static/arrow-prev.png';
import ArrowNext from '../static/arrow-next.png';
import '../style/ProductList.scss';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.itemsRef = React.createRef();
        this.moreItem = debounce(
            this.props.onMoreItem ||
                (() => {
                    console.log('need onMoreItem prop');
                }),
            1000,
        );
        this.state = { ...this.props };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.productItems !== prevProps.productItems) {
            this.setState({ productItems: this.props.productItems });
        }
    }
    componentWillReceiveProps(nextProps, nextCurrent) {
        // console.log(nextProps, nextCurrent);
    }
    render() {
        const { productItems, loading } = this.props;
        const { siteName, siteCode } = this.props;
        const renderItem = (index, key) => {
            const productItem = productItems[index];
            // console.log('item', productItem);
            return <ProductListItem key={key} {...productItem} />;
        };
        const scrollHandler = event => {
            const { target } = event;
            const { scrollLeft, scrollWidth, clientWidth } = target;
            const bound = (scrollWidth - clientWidth) * 0.8;
            console.log(scrollLeft, scrollWidth - clientWidth, bound);
            if (scrollLeft > bound) {
                // 90% scroll 됐을 때 ajax action
                this.moreItem();
            }
        };
        const actionPrev = event => {
            const target = this.itemsRef.current;
            target.scrollLeft -= target.clientWidth;
        };
        const actionNext = event => {
            const target = this.itemsRef.current;
            target.scrollLeft += target.clientWidth;
        };
        return (
            <div className="product-site">
                <div className={cx('spinner', { loading })}>
                    <Loader color="#fff" />
                </div>
                <h1 className="product-sitename">
                    <SiteTitle site_code={siteCode} title={siteName} />
                </h1>
                <div className="product-list">
                    <div className="product-list-prev" onClick={actionPrev}>
                        <img src={ArrowPrev} alt="prev" />
                    </div>
                    <div
                        className="product-list-items"
                        onScroll={scrollHandler}
                        ref={this.itemsRef}
                    >
                        {productItems.length === 0 ? (
                            <div className="no-item">No items</div>
                        ) : (
                            <ReactList
                                axis="x"
                                itemRenderer={renderItem}
                                length={productItems.length}
                                type="uniform"
                            />
                        )}
                    </div>
                    <div className="product-list-next" onClick={actionNext}>
                        <img src={ArrowNext} alt="next" />
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductList;
