const addNamesToReduxState = (playerX: string, playerO: string) => {
  console.log(playerO, playerX);
  return {
    type: 'ADD_NAMES',
    payload: {
      playerX,
      playerO,
    }
  }
}

export default addNamesToReduxState;
