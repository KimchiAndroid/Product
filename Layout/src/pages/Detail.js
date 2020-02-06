import React, { Component } from 'react';
import queryString from 'query-string';
import ProductDetail from '../components/ProductDetail';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BoardList from '../components/BoardList';
import axios from 'axios';
import { HOST_URL } from '../common/constant';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: '',
        };
    }
    async componentDidMount() {
        const query = queryString.parse(this.props.location.search);
        const { site_code, id } = query;

        const productDetailUrl = `http://${HOST_URL}/product/detail?site_code=${site_code}&id=${id}`;
        const res = await axios.get(productDetailUrl);
        this.setState({ res: res.data });
    }
    render() {
        const { res } = this.state;
        return (
            <div className="App">
                <Header container="search-bar-container">
                    <SearchBar />
                </Header>
                <ProductDetail data={res} />;
            </div>
        );
    }
}

export default Detail;
