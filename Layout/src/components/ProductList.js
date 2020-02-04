import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import cx from 'classnames';
import Loader from 'react-spinners/GridLoader';
//https://www.davidhu.io/react-spinners/
import ArrowPrev from '../static/arrow-prev.png'
import ArrowNext from '../static/arrow-next.png'
import '../style/ProductList.scss';
import ReactList from 'react-list';
//https://www.npmjs.com/package/react-list
import { debounce, throttle } from 'lodash';
import axios from 'axios';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.itemsRef = React.createRef();
        this.state = {
            productItems: this.props.productItems,
            loading: false,
        };
    }
    render() {
        const {
            // actionPrev, actionNext,
            productItems,
        } = this.state;
        const { siteName, siteID } = this.props.siteInfo;
        const renderItem = (index, key) => {
            const productItem = productItems[index];
            return <ProductListItem key={key} {...productItem} />;
        };
        const moreItem = debounce(() => {
            // console.log('check')
            this.setState({
                productItems: [...this.state.productItems, ...this.props.productItems],
            });
            this.setState({ loading: true });
            axios
                .get(':3002/search/sitecode/keyword/page')
                .then(data => {})
                .finally(() => {
                    this.setState({ loading: false });
                });

            console.log(productItems.length);
        }, 1000);
        const scrollHandler = event => {
            const { target } = event;
            const { scrollLeft, scrollWidth, clientWidth } = target;
            const bound = (scrollWidth - clientWidth) * 0.8;
            console.log(scrollLeft, scrollWidth - clientWidth, bound);
            if (scrollLeft > bound) {
                // 90% scroll 됐을 때 ajax action
                moreItem();
                // console.log('action')
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
                <div className={cx('spinner', { loading: this.state.loading })}>
                    <Loader color="white" />
                </div>
                <h1 className="product-sitename">{siteName}</h1>
                <div className="product-list">
                    <div className="product-list-prev" onClick={actionPrev}>
                        <img src={ArrowPrev} />
                    </div>
                    <div
                        className="product-list-items"
                        onScroll={scrollHandler}
                        ref={this.itemsRef}
                    >
                        <ReactList
                            axis="x"
                            itemRenderer={renderItem}
                            length={productItems.length}
                            type="uniform"
                        />
                    </div>
                    <div className="product-list-next" onClick={actionNext}>
                        <img src={ArrowNext} />
                        </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
