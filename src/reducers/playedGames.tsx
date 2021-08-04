import { Action } from '../types';

const playedGames = (playedGamesList: PlayedGame[] = [], action: Action) => {
  switch(action.type){
    case 'SAVE_GAME': 
    const gameList = [...playedGamesList.slice(),action.payload];
    return gameList;

    default: 
    return playedGamesList;
  }
}
export default playedGames;


interface PlayedGame{
  playerX: string,
  playerO: string,
  winner: string,
  endDate: Date,
}
