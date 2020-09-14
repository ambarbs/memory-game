import React from 'react';
import { AppWrapper } from './App.styles';
import CardList from '../cardList/CardList';
import Toast from '../toast/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../common/Common.Styles';
import { resetGame, setOpenedCards } from '../../store/thunks';

const App = () => {
  const gameOver = useSelector((state) => state.gameReducer.gameOver);
  const dispatch = useDispatch();
  return (
    <AppWrapper>
      <CardList />
      {gameOver && (
        <>
          <Toast>You won!</Toast>
          <Button
            onClick={() => {
              dispatch(resetGame());
              dispatch(setOpenedCards([]));
            }}
          >
            Restart
          </Button>
        </>
      )}
    </AppWrapper>
  );
};

export default App;
