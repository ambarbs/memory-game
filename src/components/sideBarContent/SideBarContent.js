import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dcLogo from '../../images/dc/dc.jpg';
import avengersLogo from '../../images/avengers/avengers.jpg';
import tintinLogo from '../../images/tintin/tintinLogo.jpg';
import batmanLogo from '../../images/batman/batmanLogo.png';
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
import {
  getGameDifficulty,
  getGameMatrix,
  getIconStyle,
  getSettingStep,
} from '../../store/selectors';
import { ImageCardWrapper } from '../cardList/CardList.Styles';
import { getMatrixDimension } from './utils';

const SideBarContent = () => {
  const dispatch = useDispatch();
  const gameDifficulty = useSelector(getGameDifficulty);
  const iconStyle = useSelector(getIconStyle);
  const gameMatrix = useSelector(getGameMatrix);
  const settingStep = useSelector(getSettingStep);

  const onSelect = (gameDifficulty) => {
    const matrixDimension = getMatrixDimension(parseInt(gameDifficulty, 10));
    dispatch(setMatrixDimension(matrixDimension));
    dispatch(setGameDifficulty(gameDifficulty));
    dispatch(setGameMatrix(getInitialLayout(matrixDimension.row, matrixDimension.col, iconStyle)));
    dispatch(
      resetGame({
        row: matrixDimension.row,
        col: matrixDimension.col,
        gameDifficulty,
        settingStep,
        iconStyle,
      })
    );
  };

  const onStyleSelect = (iconStyle) => {
    dispatch(setIconStyle(iconStyle));
    dispatch(setGameMatrix(replaceImagesInLayout({ gameMatrix, iconStyle })));
  };

  const imageButtons = [
    <ImageCardWrapper key={'dcLogo'} src={dcLogo} />,
    <ImageCardWrapper key={'avengersLogo'} src={avengersLogo} />,
    <ImageCardWrapper key={'tintinLogo'} src={tintinLogo} />,
    <ImageCardWrapper key={'batmanLogo'} src={batmanLogo} />,
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
        height="2.5rem"
        width="3.5rem"
      />
      <SelectButtonGroup
        title="Style"
        wrapperType="grid"
        rows={3}
        cols={2}
        height="4.5rem"
        width="6.5rem"
        contents={imageButtons}
        onSelect={onStyleSelect}
        selectedIndex={iconStyle}
        type="icon"
      />
    </SideBarContentWrapper>
  );
};

export default SideBarContent;
