const finishGame = (winner : string | null, date: Date) => {
  return {
    type: 'FINISH_GAME',
    payload: {
      winner, 
      date, 
    }
  }
}

export default finishGame;

