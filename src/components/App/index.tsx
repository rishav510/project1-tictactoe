import './App.css';

import React from 'react';

import BottomPanel from './BottomPanel';
import PlayedGames from './PlayedGames';
import RightPanel from './RightPanel';

const App = () => {
  return (
    <div className = "grid-container">
      <PlayedGames/>
      <RightPanel/>
      <BottomPanel/>
      
    </div>
  );
};

export default App;
