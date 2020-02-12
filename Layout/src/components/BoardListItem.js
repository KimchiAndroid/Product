import React, { Component } from 'react';
import cx from 'classnames';
import SiteTitle from './utils/SiteTitle';
import { Link } from 'react-router-dom';

class BoardListItem extends Component {
    render() {
        const { boardNo, keyword } = this.props;
        const { site_code } = this.props;
        const selected = site_code === boardNo ? true : false;
        return (
            <div className={cx('board-list-item', { selected })}>
                <a href={`/products/?keyword=${keyword}&site_code=${boardNo}`}>
                    <SiteTitle site_code={boardNo} />
                </a>
            </div>
        );
    }
}

export default BoardListItem;
