import React from 'react';
import queryString from 'query-string';
import ProductDetail from '../components/ProductDetail'

const Detail = ({ location }) => {
    const query = queryString.parse(location);
    const { site_code, id } = query;

    return <ProductDetail site_code={site_code} productID={id} />;
};
export default Detail;
