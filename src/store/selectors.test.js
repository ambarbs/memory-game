import {
  getCLoseImageWithIndex,
  getGameKey,
  getGameMatrix,
  getGameOver,
  getOpenCards,
} from './selectors';

describe('Selectors', () => {
  let state;
  beforeAll(() => {
    state = {
      gameReducer: {
        gameOver: true,
        gameMatrix: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        gameKey: 6,
        openedCards: [2, 5],
        closeImageWithIndex: 4,
      },
    };
  });

  it('should gameOver from gameReducer', () => {
    expect(getGameOver(state)).toBe(state.gameReducer.gameOver);
  });

  it('should gameOver from gameReducer', () => {
    expect(getGameMatrix(state)).toBe(state.gameReducer.gameMatrix);
  });

  it('should gameOver from gameReducer', () => {
    expect(getGameKey(state)).toBe(state.gameReducer.gameKey);
  });

  it('should gameOver from gameReducer', () => {
    expect(getOpenCards(state)).toBe(state.gameReducer.openedCards);
  });

  it('should gameOver from gameReducer', () => {
    expect(getCLoseImageWithIndex(state)).toBe(state.gameReducer.closeImageWithIndex);
  });
});
