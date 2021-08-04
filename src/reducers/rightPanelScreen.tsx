import { Action } from '../types';

const rightPanelScreen = (gameScreen:boolean = false, action: Action) => {
  switch(action.type)
  {
    case 'START_GAME': return true; 
    case 'START_NEW_GAME': return false;
    default: return gameScreen;
  }
}
export default rightPanelScreen;
