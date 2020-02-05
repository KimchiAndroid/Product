import React, { Component } from "react";
import cx from "classnames"

class BoardListItem extends Component {
    render() {
        const { boardName, boardNo } = this.props;
        const { site_code } = this.props;
        const selected = site_code === boardNo ? true : false
        return (
            <div className={cx("board-list-item", { selected })}>
                <a href={`/products/?site_code=${boardNo}`}>
                    {boardName}
                </a>
            </div>
        );
    }
}
export default BoardListItem;
