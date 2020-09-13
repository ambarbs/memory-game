import React from 'react';
import { AppWrapper } from './App.styles';
import FlipCard from '../flipCard/FlipCard';
import { ImageCardWrapper } from '../common/ImageCard.Styles';
import CardList from '../cardList/CardList';

function App() {
  return (
    <AppWrapper>
      <CardList />
    </AppWrapper>
  );
}

export default App;
