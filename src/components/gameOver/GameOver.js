import React from 'react';
import Toast from '../toast/Toast';
import { Button } from '../common/Common.Styles';
import { resetGame, setOpenedCards } from '../../store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { getGameOver } from '../../store/selectors';

const GameOver = () => {
  const gameOver = useSelector(getGameOver);
  const dispatch = useDispatch();
  return (
    <>
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
    </>
  );
};

export default GameOver;
