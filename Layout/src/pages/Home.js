import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header container="main-search-bar-container">
                    <SearchBar />
                </Header>
            </div>
        );
    }
}

export default Home;