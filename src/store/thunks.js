import { actionType } from './constants';

export const setOpenedCards = (openedCards) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.UPDATE_OPENED_CARDS, payload: [...openedCards] });
  };
};

export const closeImage = (imageId) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.CLOSE_IMAGE_WITH_INDEX, payload: imageId });
  };
};

export const resetGame = () => {
  return async (dispatch) => {
    return dispatch({ type: actionType.RESET_STATE, payload: null });
  };
};

export const setGameOver = (isGameOver) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.GAME_OVER, payload: isGameOver });
  };
};
