import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import axios from 'axios';

import { HOST_URL } from '../common/constant';

import debounce from 'lodash/debounce';
import '../style/SiteProductList.scss';

class SiteProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            siteCode: '',
            productItems: [],
            page: 0,
            loading: false,
        };
        window.addEventListener('scroll', debounce(this.handleRequestScroll, 1000));
    }
    handleRequestScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.6) {
            this.onMoreItem(this.state.siteCode);
        }
    };
    requestSearch = (siteCode, keyword, page) => {
        this.setState({
            siteCode: siteCode,
            loading: true,
        });
        axios
            .get(
                `http://${HOST_URL}/product/search?title=${keyword}&site_code=${siteCode}&page=${page}`,
            )
            .then(data => {
                const prevState = this.state;
                this.setState({
                    ...prevState,
                    productItems: [...(prevState.productItems || []), ...(data.data || [])],
                    loading: false,
                    page,
                });
            });
    };
    componentWillMount() {
        const { keyword, siteCode } = this.props;
        this.setState({ keyword });
        this.requestSearch(siteCode, keyword, 1);
    }
    onMoreItem = siteCode => {
        const { keyword, page } = this.state;
        this.requestSearch(siteCode, keyword, page + 1);
    };
    render() {
        const { productItems } = this.state;
        return (
            <div className="site-product-list">
                <div className="product-list-container">
                    {productItems.map((item, index) => {
                        const { thumbnail, title, price, site_code, id } = item;
                        return (
                            <ProductListItem
                                key={index}
                                site_code={site_code}
                                thumbnail={thumbnail}
                                title={title}
                                price={price}
                                id={id}
                            ></ProductListItem>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default SiteProductList;
