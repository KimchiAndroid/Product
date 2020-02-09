import React from 'react';
import ProductsContainer from '../components/ProductsContainer';
import SiteTitle from '../components/utils/SiteTitle';
import SiteProductList from '../components/SiteProductList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BoardList from '../components/BoardList';
import queryString from 'query-string'

const Products = ({ location }) => {
    const query = queryString.parse(location.search);
    const { site_code, keyword } = query;
    console.log(query)
    return (
        <div className="App">
            <Header container="search-bar-container">
                <SearchBar isSearch={true} />
            </Header>
            <BoardList site_code={site_code} keyword={keyword}></BoardList>

            <ProductsContainer>
                <SiteTitle site_code={site_code}></SiteTitle>
                <SiteProductList siteCode={site_code} keyword={keyword}></SiteProductList>
            </ProductsContainer>
        </div>
    );
};
export default Products;
