import { combineReducers } from 'redux';

import currentNames from './currentNames';
import endGameDetails from './endGameDetails';
import playedGames from './playedGames';
import rightPanelScreen from './rightPanelScreen';

const reducers = combineReducers({
  currentNames: currentNames,
  rightPanelScreen: rightPanelScreen,
  endGameDetails: endGameDetails,
  playedGames: playedGames
  
});

export default reducers;
