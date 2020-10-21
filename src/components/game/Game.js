import PropTypes from 'prop-types';
import React from 'react';
import GameSettings from '../initGameSettings/GameSettings';
import { SideBar } from '../sideBar/SideBar';
import CardList from '../cardList/CardList';
import GameOver from '../gameOver/GameOver';

const Game = ({ settingStep }) =>
  settingStep < 2 ? (
    <GameSettings />
  ) : (
    <>
      <SideBar />
      <CardList />
      <GameOver />
    </>
  );

export default Game;

Game.propTypes = {
  settingStep: PropTypes.number,
};
