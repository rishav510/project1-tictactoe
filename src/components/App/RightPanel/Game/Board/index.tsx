import './Board.css';

import React from 'react';

import Square from './Square';

class Board extends React.Component<Props>{




  renderSquare = (position: number) => {
    const highlighted = () =>{
      for(let i = 0; i < 3; i++)
        if(position === this.props.winnerSquares[i])
          return true;
      return false;
    }
    return <Square highlighted = {highlighted()} value = {this.props.boardStatus[position]} onClick = {() => {this.props.handleTurn(position)}}/>;
  }
  render(){
    const boardPosition = (this.props.gameOver)?"up":""
    return(
      <div className={`board-container ${boardPosition}`}>
        <div className="board">

          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>

          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>

          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
      
    )
  }
}

export default Board;

type Props = any;

