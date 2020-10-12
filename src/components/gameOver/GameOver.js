import React from 'react';
import Toast from '../toast/Toast';
import { Button } from '../common/Common.Styles';
import { resetGame } from '../../store/thunks';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGameDifficulty,
  getGameOver,
  getIconStyle,
  getMatrixDimension,
} from '../../store/selectors';

const GameOver = () => {
  const gameOver = useSelector(getGameOver);
  const matrixDimension = useSelector(getMatrixDimension);
  const iconStyle = useSelector(getIconStyle);
  const gameDifficulty = useSelector(getGameDifficulty);
  const dispatch = useDispatch();
  return (
    <>
      {gameOver && (
        <>
          <Toast>You won!</Toast>
          <Button
            onClick={() => {
              dispatch(
                resetGame({
                  row: matrixDimension.row,
                  col: matrixDimension.col,
                  gameDifficulty,
                  iconStyle,
                })
              );
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
