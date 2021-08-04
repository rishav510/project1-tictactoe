import './RightPanel.css';

import React from 'react';

import { connect } from 'react-redux';

import Game from './Game';
import NewGame from './NewGame';

const RightPanel = (props:Props) => {
  return (
    <div className = "right-panel">
      {(props.gameScreen)? <Game/>: <NewGame/>}

      <p>{props.names}</p>
    </div>
  );
};

const mapStateToProps = (state:ReduxState) => {
  return ({
    gameScreen: state.rightPanelScreen,
  });
}



export default connect(mapStateToProps)(RightPanel);

interface Props{
  selected?: string,
  gameScreen?: boolean,
  names?: string[],
}

interface ReduxState{
  currentNames: CurrentNames,
  rightPanelScreen: boolean,
}

interface CurrentNames{
  playerX: string,
  playerO: string,
}
