export interface Action{
  type: string,
  payload: any,
}
export interface CurrentPlayerNames{
  playerX? : string,
  playerO? : string,
}

export interface ReduxState{ //from new game
  currentNames: CurrentNames,
  rightPanelScreen: boolean,
  playerX: string | null,
  playerO: string | null,
}

export interface CurrentNames{
  playerX: string,
  playerO: string,
}

export type Turn = "X" | "O";
