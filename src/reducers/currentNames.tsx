import { Action } from '../types';

const currentNames = (currentPlayerNames: CurrentPlayerNames = {playerX: null, playerO: null}, action : Action) => {
  switch(action.type)
  {
    case "ADD_NAMES": return {
      playerX: action.payload.playerX,
      playerO: action.payload.playerO,
    }
    case "START_NEW_GAME": return {
      playerX: null,
      playerO: null,
    }
  }
  return currentPlayerNames;
};

export default currentNames;

type Name = string | null;
interface CurrentPlayerNames{
  playerX?: Name,
  playerO?: Name,
}
