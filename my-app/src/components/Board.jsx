import React, {Component} from "react";
import "./Board.css";

class Board extends  Component {
    render (){
        const {direction} = this.props;
        return (<div className = "my-board">Табло:{direction}</div>);
    }
}

export default Board;