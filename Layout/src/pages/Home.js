import React, { Component } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SiteProductList from '../components/SiteProductList';
import ProductsContainer from '../components/ProductsContainer';
import WordCloud from '../static/wordcloud.png';

class Home extends Component {
    render() {
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
                            <img
                                src={WordCloud}
                                alt=""
                                style={{ marginTop: '160px', marginBottom: '60px' }}
                            />
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
}

export default Home;