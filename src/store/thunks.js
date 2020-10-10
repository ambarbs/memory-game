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

export const resetGame = ({ row, col, gameDifficulty, iconStyle }) => {
  return async (dispatch) => {
    return dispatch({
      type: actionType.RESET_STATE,
      payload: { row, col, gameDifficulty, iconStyle },
    });
  };
};

export const setGameOver = (isGameOver) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.GAME_OVER, payload: isGameOver });
  };
};

export const setGameDifficulty = (gameDifficulty) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.SET_GAME_DIFFICULTY, payload: gameDifficulty });
  };
};

export const setIconStyle = (iconStyle) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.SET_ICON_STYLE, payload: iconStyle });
  };
};

export const setMatrixDimension = (matrixDimension) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.SET_MATRIX_DIMENSION, payload: matrixDimension });
  };
};

export const setGameMatrix = (gameMatrix) => {
  return async (dispatch) => {
    return dispatch({ type: actionType.SET_GAME_MATRIX, payload: gameMatrix });
  };
};
