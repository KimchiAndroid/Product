import React, { Component } from "react";
import cx from 'classname'
class BoardListItem extends Component {
    render() {
        const { boardName, boardNo } =  this.props;
        const { clicked } = this.props;
        const selected = clicked === boardNo ? true : false
        return (
            <div className={cx("board-list-item", {selected})}>
                <a href={`#${boardNo}`} onClick = {() => this.props.linkOnClicked(boardNo) }>
                    {boardName}
                </a>
            </div>
        );
    }
}
export default BoardListItem;
