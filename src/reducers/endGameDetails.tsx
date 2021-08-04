import { Action } from '../types';

const endGameDetails = (gameDetails: GameDetails = {winner: null, gameEndDate: null}, action : Action) => {
  if (action.type === 'FINISH_GAME')
  {
    return (
      {
        winner : action.payload.winner,
        gameEndDate : action.payload.date,
      }
    );
  }
  else if(action.type === 'START_NEW_GAME')
  {
    return {
      winner: null,
      gameEndDate: null,
    }
  }
  return gameDetails;
}

export default endGameDetails;

interface GameDetails{
  winner: string | null,
  gameEndDate: Date | null,
}
