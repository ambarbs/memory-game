import React from 'react';
import { AppWrapper } from './App.styles';
import CardList from '../cardList/CardList';
import GameOver from '../gameOver/GameOver';

const App = () => {
  return (
    <AppWrapper>
      <CardList />
      <GameOver />
    </AppWrapper>
  );
};

export default App;
