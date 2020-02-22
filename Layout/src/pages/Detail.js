import React, { Component } from 'react';
import queryString from 'query-string';
import ProductContents from '../components/ProductContents';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

import { HOST_URL } from '../common/constant';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            site_code: '000',
            image: [],
            title: '',
            price: '0',
            origin_url: '',
            detail: '',
            date: '',
            tags: {
                location: '',
                delivery: '',
            },
        };
    }
    async componentDidMount() {
        const query = queryString.parse(this.props.location.search);
        const { site_code, id } = query;
        const productDetailUrl = `http://${HOST_URL}/product/detail?site_code=${site_code}&id=${id}`;
        const res = await axios.get(productDetailUrl);
        this.setState({ ...res.data });
    }
    render() {
        return (
            <div className="App">
                <Header container="search-bar-container">
                    <SearchBar isSearch={true} />
                </Header>
                <ProductContents data={this.state} />
            </div>
        );
    }
}

export default Detail;
