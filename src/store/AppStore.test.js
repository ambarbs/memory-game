import { gameReducer, INITIAL_STATE } from './AppStore';
import { actionType } from './constants';
import { getInitialLayout } from './utils';

describe('Game reducer', () => {
  it('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle UPDATE_OPENED_CARDS', () => {
    const mockedPayload = [1, 3];
    const initialState = INITIAL_STATE;
    const action = {
      type: actionType.UPDATE_OPENED_CARDS,
      payload: mockedPayload,
    };
    expect(gameReducer(initialState, action)).toEqual({
      ...initialState,
      openedCards: mockedPayload,
    });
  });

  it('should handle CLOSE_IMAGE_WITH_INDEX', () => {
    const mockedPayload = 4;
    const initialState = INITIAL_STATE;
    const action = {
      type: actionType.CLOSE_IMAGE_WITH_INDEX,
      payload: mockedPayload,
    };
    expect(gameReducer(initialState, action)).toEqual({
      ...initialState,
      closeImageWithIndex: mockedPayload,
    });
  });

  it('should handle GAME_OVER', () => {
    const mockedPayload = true;
    const initialState = INITIAL_STATE;
    const action = {
      type: actionType.GAME_OVER,
      payload: mockedPayload,
    };
    expect(gameReducer(initialState, action)).toEqual({
      ...initialState,
      gameOver: mockedPayload,
    });
  });

  it('should handle GAME_OVER', () => {
    const mockedPayload = true;
    const initialState = INITIAL_STATE;
    const action = {
      type: actionType.GAME_OVER,
      payload: mockedPayload,
    };
    expect(gameReducer(initialState, action)).toEqual({
      ...initialState,
      gameOver: mockedPayload,
    });
  });
});
