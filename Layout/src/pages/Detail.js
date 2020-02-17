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
            res: {
                "site_code": "000",
                "image": ["img"],
                "title": "아이폰 팝니다 @@@",
                "price": "900000",
                "origin_url": "https://naver.com",
                "detail": "아이폰 뭐시기뭐시기 중고 S급 팝니다<br>직거래<br>광진구 가능\n",
                "date": "2020-01-01",
                "tags": [
                    {
                        "location": "경상북도 구미시 원평2동",
                        "delivery": "무료배송"
                    }
                ]
            },
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
                    <SearchBar isSearch={true} />
                </Header>
                <ProductContents data={res} />;
            </div>
        );
    }
}

export default Detail;
