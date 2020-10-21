import React from 'react';
import SelectButtonGroup from '../selectButtonGroup/SelectButtonGroup';
import { GameSettingsWrapper } from './GameSettings.styles';
import { ImageCardWrapper } from '../cardList/CardList.Styles';
import dcLogo from '../../images/dc/dc.jpg';
import avengersLogo from '../../images/avengers/avengers.jpg';
import tintinLogo from '../../images/tintin/tintinLogo.jpg';
import batmanLogo from '../../images/batman/batmanLogo.png';
import {
  getGameDifficulty,
  getGameMatrix,
  getIconStyle,
  getSettingStep,
} from '../../store/selectors';
import {
  resetGame,
  setGameDifficulty,
  setGameMatrix,
  setIconStyle,
  setMatrixDimension,
  setSettingStep,
} from '../../store/thunks';
import { getInitialLayout, replaceImagesInLayout } from '../../store/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getMatrixDimension } from '../sideBarContent/utils';
import { Button } from '../common';

const GameSettings = () => {
  const gameDifficulty = useSelector(getGameDifficulty);
  const iconStyle = useSelector(getIconStyle);
  const dispatch = useDispatch();
  const gameMatrix = useSelector(getGameMatrix);
  const settingStep = useSelector(getSettingStep);

  const onSelect = (gameDifficulty) => {
    const matrixDimension = getMatrixDimension(parseInt(gameDifficulty, 10));
    dispatch(setMatrixDimension(matrixDimension));
    dispatch(setGameDifficulty(gameDifficulty));
    dispatch(setGameMatrix(getInitialLayout(matrixDimension.row, matrixDimension.col, iconStyle)));
    if (settingStep < 0) dispatch(setSettingStep(0));
    dispatch(
      resetGame({ row: matrixDimension.row, col: matrixDimension.col, gameDifficulty, iconStyle })
    );
  };

  const onStyleSelect = (iconStyle) => {
    getMatrixDimension(parseInt(gameDifficulty, 10));
    dispatch(setIconStyle(iconStyle));
    if (settingStep < 1) dispatch(setSettingStep(1));
    dispatch(setGameMatrix(replaceImagesInLayout({ gameMatrix, iconStyle })));
  };

  const onStart = () => {
    const matrixDimension = getMatrixDimension(parseInt(gameDifficulty, 10));
    dispatch(
      resetGame({
        gameDifficulty,
        iconStyle,
        row: matrixDimension.row,
        col: matrixDimension.col,
      })
    );
    if (settingStep < 2) dispatch(setSettingStep(2));
  };
  const imageButtons = [
    <ImageCardWrapper key={'dcLogo'} src={dcLogo} />,
    <ImageCardWrapper key={'avengersLogo'} src={avengersLogo} />,
    <ImageCardWrapper key={'tintinLogo'} src={tintinLogo} />,
    <ImageCardWrapper key={'batmanLogo'} src={batmanLogo} />,
  ].map((image) => <>{image}</>);
  return (
    <GameSettingsWrapper>
      <SelectButtonGroup
        title="Difficulty"
        wrapperType="flex"
        contents={['Easy', 'Medium', 'Hard']}
        onSelect={onSelect}
        selectedIndex={gameDifficulty}
        type="text"
        height="4rem"
        width="4rem"
      />
      <SelectButtonGroup
        title="Style"
        wrapperType="grid"
        rows={3}
        cols={2}
        height="5rem"
        width="8rem"
        contents={imageButtons}
        onSelect={onStyleSelect}
        selectedIndex={iconStyle}
        type="icon"
        fontSize="0.5rem"
      />
      <Button onClick={onStart} label="Start" disabled={settingStep < 1} />
    </GameSettingsWrapper>
  );
};

export default GameSettings;
