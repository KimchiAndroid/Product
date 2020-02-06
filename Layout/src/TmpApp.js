import React, { Component } from 'react';
import ProductDetail from "./components/ProductDetail"
import SiteProductList from "./components/SiteProductList"
import SearchBar from "./components/SearchBar"
import ProductsContainer from "./components/ProductsContainer"

import Header from "./components/Header"
import WordCloud from "./static/wordcloud.png"
import SiteTitle from "./components/utils/SiteTitle"

import { SectionsContainer, Section } from "react-fullpage"
import BoardList from "./components/BoardList"
import ProductList from "./components/ProductList"
import queryString from "query-string"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// const Home = () => {
//     return (
//         <div className="App">
//             <Header container="main-search-bar-container">
//                 <SearchBar />
//                 <img src={WordCloud} alt="" style={{ marginTop: "160px", marginBottom: "60px" }} />
//             </Header>
//             <ProductsContainer id="recentProducts">
//                 <h1>최근에 등록한 매물</h1>
//                 <SiteProductList site_code={site_code} main_flag={true}></SiteProductList>
//             </ProductsContainer>
//         </div >
//     );
// }

const Products = ({ location, match }) => {
    const { list_flag } = match.params
    const query = queryString.parse(location.search)
    const { id, keyword, site_code } = query
    const childComponent = getChildComponent(list_flag, id, keyword, site_code)
    return (
        <div className="App" >
            <Header container="search-bar-container">
                <SearchBar />
            </Header>
            <BoardList site_code={site_code}></BoardList>
            {childComponent}
        </div >
    )
}
const getChildComponent = (list_flag, id, keyword, site_code) => {
    console.log(site_code)
    switch (list_flag) {
        case "products":
            return products(site_code)
        case "product":
            return productDetail(id)
        case "search":
            return productList(keyword)
        default:
            return ""
    }
}

const products = (site_code) => {
    return (
        <ProductsContainer>
            <SiteTitle site_code={site_code}></SiteTitle>
            <SiteProductList site_code={site_code} main_flag={false}></SiteProductList>
        </ProductsContainer >);
}

const productDetail = (productID) => {
    return (
        <ProductDetail productID={productID} />
    )
}

const productList = (keyword) => {
    // return <ProductList keyword={keyword} />
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
        <ProductsContainer>
            <ProductList siteInfo={siteInfo} productItems={productItems} />
            <ProductList siteInfo={siteInfo} productItems={productItems} />
            <ProductList siteInfo={siteInfo} productItems={productItems} />
            <ProductList siteInfo={siteInfo} productItems={productItems} />
            <ProductList siteInfo={siteInfo} productItems={productItems} />
        </ProductsContainer>
    )

}

class TmpApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/:list_flag" component={Products} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}
const Home = () => {
    const options = {
        activeClasses: 'active',
        sectionClassName: 'section',
        anchors: ['', ''],
        scrollBar: false,
        navigation: false,
    };
    return (
        <SectionsContainer {...options}>
            <div className="App">
                <Section>
                    <Header container="main-search-bar-container">
                        <SearchBar />
                        <img src={WordCloud} alt="" style={{ marginTop: "160px", marginBottom: "60px" }} />
                    </Header>
                </Section>
                <Section>
                    <ProductsContainer main_flag={true}>
                        <h1>최근에 등록한 매물</h1>
                        <SiteProductList main_flag={true}></SiteProductList>
                    </ProductsContainer>
                </Section>
            </div>
        </SectionsContainer>
    );
}

/* eslint-disable import/no-extraneous-dependencies */
// import React, { Component } from "react";
// import ReactFullpage from "@fullpage/react-fullpage";


// const anchors = ["firstPage", "secondPage", "thirdPage"];

// class TmpApp extends Component {
//     render() {
//         return (
//             <ReactFullpage
//                 anchors={anchors}
//                 navigation
//                 navigationTooltips={anchors}
//                 licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
//                 sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
//                 onLeave={(origin, destination, direction) => {
//                     console.log("onLeave event", { origin, destination, direction });
//                 }}
//                 render={({ state, fullpageApi }) => {
//                     console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

//                     return (
//                         <div>
//                             <div className="section">
//                                 <h3>"Slide down!"</h3>
//                             </div>
//                             <div className="section">
//                                 <h3>"Slide down!"</h3>
//                             </div>
//                             <div className="section">
//                                 <h3>"Slide down!"</h3>
//                             </div>
//                         </div>
//                     );
//                 }}
//             />
//         )
//     }
// }




export default TmpApp;
