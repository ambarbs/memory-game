import { actionType } from './constants';

export const setOpenedCards = (openedCards) => {
  return async (dispatch) => {
    return await dispatch({ type: actionType.UPDATE_OPENED_CARDS, payload: [...openedCards] });
  };
};

export const closeImage = (imageId) => {
  return async (dispatch) => {
    return await dispatch({ type: actionType.CLOSE_IMAGE_WITH_INDEX, payload: imageId });
  };
};

export const resetGame = ({ row, col, gameDifficulty, iconStyle }) => {
  return async (dispatch) => {
    return await dispatch({
      type: actionType.RESET_STATE,
      payload: { row, col, gameDifficulty, iconStyle },
    });
  };
};

export const setGameOver = (isGameOver) => {
  return async (dispatch) => {
    setTimeout(async () => {
      return await dispatch({ type: actionType.GAME_OVER, payload: isGameOver });
    }, 1000);
  };
};

export const setGameDifficulty = (gameDifficulty) => {
  return async (dispatch) => {
    return await dispatch({ type: actionType.SET_GAME_DIFFICULTY, payload: gameDifficulty });
  };
};

export const setIconStyle = (iconStyle) => {
  return async (dispatch) => {
    return await dispatch({ type: actionType.SET_ICON_STYLE, payload: iconStyle });
  };
};

export const setMatrixDimension = (matrixDimension) => {
  return async (dispatch) => {
    return await dispatch({ type: actionType.SET_MATRIX_DIMENSION, payload: matrixDimension });
  };
};

export const setGameMatrix = (gameMatrix) => {
  return async (dispatch) => {
    return await dispatch({ type: actionType.SET_GAME_MATRIX, payload: gameMatrix });
  };
};
