import './WinDialog.css';

import React from 'react';

import { connect } from 'react-redux';

import startNewGame from '../../../../../actions/startNewGame';

class WinDialog extends React.Component <Props>{

  renderResult = () => {
    if(this.props.winner === null){
      return (<p className="game-result center tie">Tie!</p>)
    }
    else
      return (<p className="game-result">Winner:<span className = "winner-name">{this.props.winner}</span></p>);
  }

  renderDialog = () => {
    return (
      <div className= "center-wrapper">
        <div className= "dialog-container">
          <div>
            {this.renderResult()}
          </div>
          <button className = "new-game-button" onClick = {() => this.props.startNewGame()}>New Game</button>
        </div>
      </div>
    )
  }

  render(){
    if(this.props.gameOver){
      return this.renderDialog();
    }
    return null;
  }
}  


 const mapStateToProps = (state:ReduxState) => {
   return {
    winner: state.endGameDetails.winner,
   }
 }



export default connect(mapStateToProps, {startNewGame})(WinDialog);


interface Props{
  startNewGame: Function,
  gameOver: boolean,
  winner: string | null,
}

interface ReduxState{
  endGameDetails: EndGameDetails
}
interface EndGameDetails{
  winner: string|null,
  gameEndDate: Date | null,
}
