import './PlayedGames.css';

import React from 'react';

import { connect } from 'react-redux';

import { CurrentPlayerNames } from '../../../types';

class PlayedGames extends React.Component <Props>{
  render(){
    return (
      <div className = "played-games">
        <h1>Played Games</h1>
        {this.renderList()}
      </div>
    )
    
  }

  renderList = () => {

      const list = this.props.playedGames?.map((game: PlayedGame) => { //optional chaining
        return this.renderCard(game);
      }) || [];
      return list;
  }

  renderResult = (game: PlayedGame) => {
    if(game.winner !== null)
      return (
        <div className = "winner">
          Winner: <span>{game.winner}</span>
        </div>
      )
    else
      return (
        <div className = "tie">
          Tie
        </div>
      )
  }
  renderCard = (game: PlayedGame) => {
    const date = game.endDate;
    return (
      <div className = "card-container">
        <div className= "flex-container-playedgames">
          <div className = "left-column">
            <div className = "players">
              <span className = "player">{game.playerX}</span>  vs <span className = "player">{game.playerO}</span>
            </div>
            {this.renderResult(game)}
          </div>
        
          <div className = "right-column">
            <div className = "date">
              <span>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}, {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</span>
            </div>
          </div>
        </div> 
      </div>
    )
  }
};


const mapStateToProps =(state: ReduxState) =>{
  return {
    playedGames: state.playedGames,
  }
}

export default connect (mapStateToProps)(PlayedGames);

interface ReduxState {
  endGameDetails: EndGameDetails,
  currentNames: CurrentPlayerNames,
  playedGames: PlayedGame[],
}

interface EndGameDetails{
  winner: string |null,
  gameEndDate: Date,
}


interface PlayedGame {
  playerX: string | null,
  playerO: string | null,
  winner: string | null,
  endDate: Date,
}


interface Props{
  playedGames? : PlayedGame[],
}
