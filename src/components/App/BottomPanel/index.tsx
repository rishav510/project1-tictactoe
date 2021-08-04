import './BottomPanel.css';

import React from 'react';

const BottomPanel = () => {
  return (
    <div className ="bottom-panel">
      <span className ="heading">Rules:</span>
      <p>1. The game is played on a grid that's 3 squares by 3 squares.</p>
      <p>2. Among the two players, one is a 'X', and the other is an 'O'.</p>
      <p>3. The first player to get three marks in a row (horizontally, vertically or diagonally) is the winner!</p>
    </div>
  );
};

export default BottomPanel;
