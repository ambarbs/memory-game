import React from 'react';
import { AppWrapper } from './App.styles';
import CardList from '../cardList/CardList';
import GameOver from '../gameOver/GameOver';
import { SideBar } from '../sideBar/SideBar';

const App = () => {
  return (
    <AppWrapper>
      <SideBar />
      <CardList />
      <GameOver />
    </AppWrapper>
  );
};

export default App;
