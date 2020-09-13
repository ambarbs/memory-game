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
