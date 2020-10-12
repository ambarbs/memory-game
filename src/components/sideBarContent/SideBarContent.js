import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dcLogo from '../../images/dc/dc.jpg';
import avengersLogo from '../../images/avengers/avengers.jpg';
import {
  resetGame,
  setGameDifficulty,
  setGameMatrix,
  setIconStyle,
  setMatrixDimension,
} from '../../store/thunks';
import { SideBarContentWrapper } from './SideBarContent.styles';
import { getInitialLayout, replaceImagesInLayout } from '../../store/utils';
import SelectButtonGroup from '../selectButtonGroup/SelectButtonGroup';
import { getGameDifficulty, getGameMatrix, getIconStyle } from '../../store/selectors';
import { ImageCardWrapper } from '../cardList/CardList.Styles';

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
  const iconStyle = useSelector(getIconStyle);
  const gameMatrix = useSelector(getGameMatrix);
  const onSelect = (gameDifficulty) => {
    const matrixDimension = getMatrixDimension(parseInt(gameDifficulty, 10));
    dispatch(setMatrixDimension(matrixDimension));
    dispatch(setGameDifficulty(gameDifficulty));
    dispatch(setGameMatrix(getInitialLayout(matrixDimension.row, matrixDimension.col)));
    dispatch(
      resetGame({ row: matrixDimension.row, col: matrixDimension.col, gameDifficulty, iconStyle })
    );
  };

  const onStyleSelect = (iconStyle) => {
    const matrixDimension = getMatrixDimension(parseInt(gameDifficulty, 10));
    dispatch(setIconStyle(iconStyle));
    dispatch(
      setGameMatrix(
        replaceImagesInLayout(gameMatrix, matrixDimension.row, matrixDimension.col, iconStyle)
      )
    );
  };

  const imageButtons = [
    <ImageCardWrapper key={'dcLogo'} src={dcLogo} />,
    <ImageCardWrapper key={'avengersLogo'} src={avengersLogo} />,
  ].map((image) => <>{image}</>);
  return (
    <SideBarContentWrapper>
      <SelectButtonGroup
        title="Difficulty"
        wrapperType="flex"
        contents={['Easy', 'Medium', 'Hard']}
        onSelect={onSelect}
        selectedIndex={gameDifficulty}
        type="text"
      />
      <SelectButtonGroup
        title="Style"
        wrapperType="grid"
        rows={3}
        cols={2}
        height="3rem"
        width="3rem"
        contents={imageButtons}
        onSelect={onStyleSelect}
        selectedIndex={iconStyle}
        type="icon"
      />
    </SideBarContentWrapper>
  );
};

export default SideBarContent;
