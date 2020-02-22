import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import main_image from "../static/main_image.png";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header container="main-search-bar-container">
                    <SearchBar />
                    <img src={main_image} alt="" className="main_image" />
                </Header>
            </div>
        );
    }
}

export default Home;