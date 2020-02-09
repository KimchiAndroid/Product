import React, { Component } from 'react';
import axios from 'axios';
import ProductsContainer from '../components/ProductsContainer';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BoardList from '../components/BoardList';

import { HOST_URL } from '../common/constant';
import queryString from 'query-string';

class Search extends Component {
    constructor(props) {
        super(props);
        this.siteInfos = [
            { siteCode: '000', siteName: '11번가' },
            { siteCode: '001', siteName: '번개장터' },
            { siteCode: '002', siteName: '중고나라' },
            { siteCode: '003', siteName: '당근마켓' },
            { siteCode: '004', siteName: '셀잇' },
            { siteCode: '005', siteName: '헬로마켓' },
        ];
        // initializing state
        this.state = this.siteInfos.reduce((acc, siteInfo, index) => {
            const { siteCode } = siteInfo;
            return { ...acc, [siteCode]: { loading: false, page: 0, productItems: [] } };
        }, {});
    }
    requestSearch = (siteCode, keyword, page) => {
        this.setState({ [siteCode]: { ...this.state[siteCode], loading: true } });
        axios
            .get(`http://${HOST_URL}/product/search?title=${keyword}&site=${siteCode}&page=${page}`)
            .then(data => {
                const prevState = this.state[siteCode];
                this.setState({
                    [siteCode]: {
                        ...prevState,
                        productItems: [...(prevState.productItems || []), ...(data.data[0] || [])],
                        loading: false,
                        page,
                    },
                });
            });
    };
    componentWillMount() {
        const query = queryString.parse(this.props.location.search);
        const { keyword } = query;
        this.setState({ keyword });
        this.siteInfos.forEach(siteInfo => {
            const { siteCode } = siteInfo;
            this.requestSearch(siteCode, keyword, 1);
        });
    }
    onMoreItem = siteCode => {
        const { keyword } = this.state;
        const { page } = this.state[siteCode];
        this.requestSearch(siteCode, keyword, page + 1);
    };

    xxxClicked = () => {
        document.getElementById('');
    };

    render() {
        const { siteCode, keyword } = this.state;
        return (
            <div className="App">
                <Header container="search-bar-container">
                    <SearchBar isSearch={true} keyword={keyword} />
                </Header>
                <BoardList site_code={siteCode} keyword={keyword}></BoardList>
                <ProductsContainer>
                    {this.siteInfos.map(siteInfo => {
                        const { siteName, siteCode } = siteInfo;
                        const productItems = this.state[siteCode].productItems || [];
                        const loading = this.state[siteCode].loading;

                        return (
                            <ProductList
                                siteName={siteName}
                                siteCode={siteCode}
                                productItems={productItems}
                                loading={loading}
                                onMoreItem={() => this.onMoreItem(siteCode)}
                                key={siteCode}
                            />
                        );
                    })}
                </ProductsContainer>
            </div>
        );
    }
}
export default Search;
