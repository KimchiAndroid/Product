import React, { Component } from 'react';
import ProductDetail from "./components/ProductDetail"
import SiteProductList from "./components/SiteProductList"
import SearchBar from "./components/SearchBar"
import ProductsContainer from "./components/ProductsContainer"

import Header from "./components/Header"
import WordCloud from "./static/wordcloud.png"
import SiteTitle from "./components/utils/SiteTitle"

import { SectionsContainer, Section } from "react-fullpage"
import queryString from "query-string"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const site_code = "000";

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
    const { id } = query
    const childComponent = getChildComponent(list_flag, id)
    console.log(id)
    return (
        <div className="App" >
            <Header container="search-bar-container">
                <SearchBar />
            </Header>
            {childComponent}
        </div >
    )
}
const getChildComponent = (list_flag, id) => {
    switch (list_flag) {
        case "products":
            return products(id)
        case "product":
            return productDetail(id)
        case "search":
            return ""
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

class TmpApp extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route path="/:list_flag/" component={Products} /> */}
                    <Route path="/:list_flag/:id" component={Products} />
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
                    <ProductsContainer id="recentProducts">
                        <h1>최근에 등록한 매물</h1>
                        <SiteProductList site_code={site_code} main_flag={true}></SiteProductList>
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
