import React from 'react';
import { AppWrapper } from './App.styles';
import { getSettingStep } from '../../store/selectors';
import { useSelector } from 'react-redux';
import Game from '../game/Game';

const App = () => {
  const settingStep = useSelector(getSettingStep);

  return (
    <AppWrapper>
      <Game settingStep={settingStep} />
    </AppWrapper>
  );
};

export default App;
