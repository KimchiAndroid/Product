import React from 'react';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const siteInfo = { siteID: 'AA', siteName: '11번가' };
    const productItems = [
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
        {
            productImage: '',
            productName: '아이폰 팝니다',
            productPrice: '110000',
        },
    ];
    return (
        <Router>
            <ProductList siteInfo={siteInfo} productItems={productItems} />
        </Router>
    );
}

export default App;
