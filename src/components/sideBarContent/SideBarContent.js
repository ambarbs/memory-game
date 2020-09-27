import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetGame,
  setGameDifficulty,
  setGameMatrix,
  setMatrixDimension,
} from '../../store/thunks';
import { SideBarContentWrapper } from './SideBarContent.styles';
import { getInitialLayout } from '../../store/utils';
import SelectButtonGroup from '../selectButtonGroup/SelectButtonGroup';
import { getGameDifficulty } from '../../store/selectors';

const getMatrixDimension = (gameDifficulty) => {
  switch (gameDifficulty) {
    case 0:
      return { row: 2, col: 3 };
    default:
    case 1:
      return { row: 2, col: 5 };
    case 2:
      return { row: 3, col: 6 };
  }
};

const SideBarContent = () => {
  const dispatch = useDispatch();
  const gameDifficulty = useSelector(getGameDifficulty);
  const onSelect = (gameDifficulty) => {
    const matrixDimension = getMatrixDimension(parseInt(gameDifficulty, 10));
    dispatch(setMatrixDimension(matrixDimension));
    dispatch(setGameDifficulty(gameDifficulty));
    dispatch(setGameMatrix(getInitialLayout(matrixDimension.row, matrixDimension.col)));
    dispatch(resetGame({ row: matrixDimension.row, col: matrixDimension.col, gameDifficulty }));
  };
  return (
    <SideBarContentWrapper>
      <SelectButtonGroup
        labels={['Easy', 'Medium', 'Hard']}
        onSelect={onSelect}
        selectedIndex={gameDifficulty}
        title="Difficulty"
      />
    </SideBarContentWrapper>
  );
};

export default SideBarContent;
