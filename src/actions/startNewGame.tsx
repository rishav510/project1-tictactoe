import { Action } from '../types';

const startNewGame = (action: Action) => {
  return {
    type: 'START_NEW_GAME',
  }
}
export default startNewGame;
