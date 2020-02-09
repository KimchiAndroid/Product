import React, { Component } from 'react';
import SiteIcon from './utils/SiteIcon';
import '../style/SearchBar.scss';
import Search from '../static/search.png';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    state = {
        keyword: '',
    };

    inputKeyword = e => {
        this.setState({
            keyword: e.target.value,
        });
    };
    handleKeyPress(e) {
        if (e.charCode === 13) {
            window.location = `/search/?keyword=${e.target.value}`;
        }
    }
    render() {
        return (
            <>
                <Link to={'/'}>
                    <SiteIcon site_code="" />
                </Link>
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-bar-input"
                        placeholder="원하시는 상품을 입력하세요."
                        onChange={this.inputKeyword}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.keyword}
                    />
                    <Link to={`/search/?keyword=${this.state.keyword}`}>
                        <img src={Search} alt="" className="search-icon" />
                    </Link>
                </div>
            </>
        );
    }
}

export default SearchBar;
