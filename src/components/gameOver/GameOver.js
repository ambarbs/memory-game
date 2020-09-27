import React from 'react';
import Toast from '../toast/Toast';
import { Button } from '../common/Common.Styles';
import { resetGame, setOpenedCards } from '../../store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { getGameOver, getMatrixDimension } from '../../store/selectors';

const GameOver = () => {
  const gameOver = useSelector(getGameOver);
  const matrixDimension = useSelector(getMatrixDimension);
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
              dispatch(resetGame({ row: matrixDimension.row, col: matrixDimension.col }));
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
