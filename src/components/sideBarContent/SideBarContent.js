import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DiAndroid } from 'react-icons/di';
import { Fa500Px } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { WiDayShowers } from 'react-icons/wi';
import { GiSkullSabertooth } from 'react-icons/gi';
import { SiAmazon } from 'react-icons/si';
import {
  resetGame,
  setGameDifficulty,
  setGameMatrix,
  setIconStyle,
  setMatrixDimension,
} from '../../store/thunks';
import { SideBarContentWrapper, SidebarImageWrapper } from './SideBarContent.styles';
import { getInitialLayout, replaceImagesInLayout } from '../../store/utils';
import SelectButtonGroup from '../selectButtonGroup/SelectButtonGroup';
import { getGameDifficulty, getGameMatrix, getIconStyle } from '../../store/selectors';

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
    SiAmazon,
    Fa500Px,
    VscAccount,
    WiDayShowers,
    GiSkullSabertooth,
    DiAndroid,
  ].map((ImageComponent, index) => (
    <SidebarImageWrapper key={index}>
      <ImageComponent />
    </SidebarImageWrapper>
  ));
  return (
    <SideBarContentWrapper>
      <SelectButtonGroup
        title="Difficulty"
        wrapperType="flex"
        contents={['Easy', 'Medium', 'Hard']}
        onSelect={onSelect}
        selectedIndex={gameDifficulty}
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
      />
    </SideBarContentWrapper>
  );
};

export default SideBarContent;
