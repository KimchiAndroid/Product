import React, { Component } from "react";
import BoardListItem from './BoardListItem';
import "./BoardList.scss";

    
class BoardList extends Component {
    state = {
        clicked: "",
    }
    linkOnClicked = (boardNo) => {
        this.setState({
            clicked: boardNo
        });
    };
    render () {
        const { boardList } = this.props;
        const boardListItems = boardList.map((board, index) => {
            const { boardName, boardNo } = board;
            return (
                <BoardListItem  
                    key = { index }
                    boardName = { boardName }
                    boardNo = { boardNo }
                    clicked = {this.state.clicked}
                    linkOnClicked = {this.linkOnClicked}
                ></BoardListItem>
            );
        });
        return (
            <div className="board-list">
                <div className="board-list-itmes">{ boardListItems }</div>
            </div>
        );
    } 
}
export default BoardList;
