import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionType } from './constants';
import { INITIAL_STATE } from './AppStore';
import { setOpenedCards, setGameOver, resetGame, closeImage } from './thunks';

const mockStore = configureMockStore([thunk]);

describe('thunk async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ INITIAL_STATE });
  });

  it('should dispatch actions of UPDATE_OPENED_CARDS', () => {
    const action = [{ type: actionType.UPDATE_OPENED_CARDS, payload: ['a'] }];
    store.dispatch(setOpenedCards(['a'])).then(() => {
      expect(store.getActions()).toEqual(action);
    });
  });

  it('should dispatch actions of GAME_OVER', () => {
    const action = [{ type: actionType.GAME_OVER, payload: true }];
    store.dispatch(setGameOver(true)).then(() => {
      expect(store.getActions()).toEqual(action);
    });
  });

  it('should dispatch actions of RESET_STATE', () => {
    const action = [{ type: actionType.RESET_STATE, payload: null }];
    store.dispatch(resetGame(null)).then(() => {
      expect(store.getActions()).toEqual(action);
    });
  });

  it('should dispatch actions of CLOSE_IMAGE_WITH_INDEX', () => {
    const action = [{ type: actionType.CLOSE_IMAGE_WITH_INDEX, payload: 1 }];
    store.dispatch(closeImage(1)).then(() => {
      expect(store.getActions()).toEqual(action);
    });
  });
});
