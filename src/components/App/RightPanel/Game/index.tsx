import './Game.css';

import React from 'react';

import { connect } from 'react-redux';

import finishGame from '../../../../actions/finishGame';
import saveGame from '../../../../actions/saveGame';
import {
  ReduxState,
  Turn,
} from '../../../../types';
import Board from './Board';
import WinDialog from './WinDialog';

class Game extends React.Component <Props, State> {
  constructor (props: Props){
    super(props);
    this.state = {
      turn: 'X',
      boardStatus: Array(9).fill(null),
      winnerSquares: Array(3).fill(null),
      gameOver: false,
    }
  }

  changeTurn = () => {
    (this.state.turn === 'X')?this.setState({turn: 'O'}): this.setState({turn: 'X'}) ;
  }

  handleTurn = (position: number) => {
    const boardStatus = this.state.boardStatus.slice();
    
    if(boardStatus[position] || !this.state.winnerSquares.every((element)=> {return element === null;}))
      return;
    boardStatus[position] = this.state.turn;
    this.setState({boardStatus});
    let winnerName;
    let endDate;
    const winner = findWinner(boardStatus);

    if(winner){
      this.setState({winnerSquares: winner});
      winnerName = this.findWinnerName(this.state.turn);
      endDate = new Date();
      this.props.finishGame(winnerName, endDate);
      this.props.saveGame(this.props.playerX, this.props.playerO,winnerName, endDate);
      this.setState({gameOver: true});
    }
    
    else if(boardFilled(boardStatus)){
      endDate = new Date();
      this.setState({gameOver: true});
      this.props.saveGame(this.props.playerX, this.props.playerO, null, endDate)
    }
    this.changeTurn();
  }

  findWinnerName = (turn: Turn) => {
    return (turn === 'X') ? this.props.playerX: this.props.playerO;
  }
  renderPlayerName = (playerName: string|null, side: 'X' | 'O') => {
    return(
      <div className="name-container">
        <div className="name">{playerName}</div>
        <div className={`side ${(this.state.turn === side)?'turn':'no-turn'}`}>{side}</div>
      </div>
    )
  }

  render(){
    return(
      <div className="wrapper">
        <div className="flex-container">
          {this.renderPlayerName(this.props.playerX, 'X')}
          <div className="versus">
            VS
          </div>
          {this.renderPlayerName(this.props.playerO, 'O')}
        </div>
        <div className="horizontal-layout">
          <Board
            symbol={this.state.turn}
            handleTurn={this.handleTurn}
            boardStatus={this.state.boardStatus}
            winnerSquares={this.state.winnerSquares}
            gameOver={this.state.gameOver}
          />
          <WinDialog gameOver={this.state.gameOver} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  
  
  return(
    {
      playerX: state.currentNames.playerX,
      playerO: state.currentNames.playerO,
    }
  )
  
}

const findWinner = (boardStatus: Array<string>): Array<number> | null => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  for(let i = 0 ; i < lines.length; i++){
    const[a,b,c]  = lines[i];
    if(boardStatus[a] && boardStatus[a] === boardStatus[b] && boardStatus[a] === boardStatus[c]){
      return lines[i];
    }
    
  }
  return null;
}

const boardFilled = (boardStatus: Array<string>): boolean => {
  for(let i = 0; i < 9; i++)
  {
    if(!boardStatus[i])
      return false;
  }
  return true;
}
export default connect(mapStateToProps, {finishGame, saveGame})(Game);

interface Props{
  playerX: string | null,
  playerO: string | null,
  finishGame: Function,
  saveGame: Function,
}

interface State{
  turn: Turn,
  boardStatus: Array<string>,
  winnerSquares: Array<number>
  gameOver: boolean,
}


