import React, { Component } from 'react';
import cx from 'classnames';
import SiteTitle from './utils/SiteTitle';
import { Link } from 'react-router-dom';

class BoardListItem extends Component {
    render() {
        const { boardName, boardNo } = this.props;
        const { site_code, keyword } = this.props;
        const selected = site_code === boardNo ? true : false;
        // console.log(document.getElementById(boardNo).clientTop)
        return (
            <div className={cx('board-list-item', { selected })}>
                <a href={`/products/?site_code=${boardNo}&keyword=${keyword}`}>
                    <SiteTitle site_code={boardNo} />
                </a>
            </div>
        );
    }
}

export default BoardListItem;
