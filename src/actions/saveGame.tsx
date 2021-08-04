
const saveGame = (playerX: string | null, playerO: string | null, winner: string | null, endDate: Date) => {
  return {
    type: 'SAVE_GAME',
    payload: {
      playerX,
      playerO,
      winner,
      endDate,
    }
  }
}
export default saveGame;
