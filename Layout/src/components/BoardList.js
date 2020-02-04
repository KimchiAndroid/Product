import React, { Component } from "react";
import BoardListItem from './BoardListItem';
import "../style/BoardList.scss";


class BoardList extends Component {
    boardList = [
        {
            boardName: "11번가",
            boardNo: "000"
        },
        {
            boardName: "번개장터",
            boardNo: "001"
        },
        {
            boardName: "중고나라",
            boardNo: "002"
        },
        {
            boardName: "당근마켓",
            boardNo: "003"
        },
        {
            boardName: "셀잇",
            boardNo: "004"
        },
        {
            boardName: "헬로마켓",
            boardNo: "005"
        }
    ];
    render() {
        const boardListItems = this.boardList.map((board, index) => {
            const { boardName, boardNo } = board;
            return (
                <BoardListItem
                    key={index}
                    boardName={boardName}
                    boardNo={boardNo}
                    site_code={this.props.site_code}
                ></BoardListItem>
            );
        });
        return (
            <div className="board-list">
                <div className="board-list-itmes">{boardListItems}</div>
            </div>
        );
    }
}
export default BoardList;
