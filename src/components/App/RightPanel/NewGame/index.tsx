import './NewGame.css';

import React from 'react';

import { connect } from 'react-redux';

import addNamesToReduxState from '../../../../actions/addNamesToReduxState';
import startGame from '../../../../actions/startGame';
import { ReduxState } from '../../../../types';

class NewGame extends React.Component <Props, State>{

  constructor(props:Props){
    super(props);
    this.state = {
      selected: this.props.selected,
    }
  }

  renderPlayerNameForm = (side: 'X'|'O') =>{
    
    const CSS_enlarged = (side === this.state.selected)? "large" : "small";

    return(
      <div className = "label">
        <div className = "symbol-container">
          <button className = {CSS_enlarged}>{side}</button>
          <input type = "text" className = "name-textbox" onChange = {this.handleTextInputChange} onFocus = {() => {this.setState({selected: side})}}/>
        </div>
      </div>
    );
  }

  handleTextInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    (this.state.selected === 'X')? 
      this.setState({playerX: event.currentTarget.value}):
      this.setState({playerO: event.currentTarget.value});
  }


  addCurrentNames = () => {
    this.props.addNamesToReduxState(this.state.playerX, this.state.playerO);
    this.props.startGame();
  }

  render(){
    
    return(
      <div className="centered new-game-wrapper">
        <h1>New Game</h1>
        <p>Enter your names ...</p>

        <div className="form-container">
          {this.renderPlayerNameForm("X")}
          {this.renderPlayerNameForm("O")}
  
          <button className="start-button" onClick = {this.addCurrentNames}>Start Game</button>
        </div>
      </div>
  
    );
  }

  
};


const mapStateToProps = (state: ReduxState) =>{
  return (
    {
      rightScreenPanel: state.rightPanelScreen,
    }
  ) 
}


export default connect(mapStateToProps, {startGame, addNamesToReduxState})(NewGame);

interface State{
  selected?: string | null,
  playerX?: string | null,
  playerO?: string | null,
}

interface Props{
  startGame: Function,
  addNamesToReduxState: Function,
  selected?: string | null,
}

