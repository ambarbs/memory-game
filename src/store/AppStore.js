import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actionType } from './constants';
import { getInitialLayout } from './utils';

export const INITIAL_STATE = {
  gameMatrix: getInitialLayout(),
  openedCards: [],
  closeImageWithIndex: null,
  gameOver: false,
  gameKey: 1,
  gameDifficulty: 1,
  iconStyle: 0,
  matrixDimension: { row: 2, col: 5 },
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  const {
    SET_GAME_MATRIX,
    UPDATE_OPENED_CARDS,
    CLOSE_IMAGE_WITH_INDEX,
    RESET_STATE,
    GAME_OVER,
    SET_GAME_DIFFICULTY,
    SET_ICON_STYLE,
    SET_MATRIX_DIMENSION,
  } = actionType;

  switch (action.type) {
    default:
      break;
    case SET_GAME_MATRIX:
      state = {
        ...state,
        gameMatrix: action.payload,
      };
      break;
    case UPDATE_OPENED_CARDS:
      state = {
        ...state,
        openedCards: action.payload,
      };
      break;
    case CLOSE_IMAGE_WITH_INDEX:
      state = {
        ...state,
        closeImageWithIndex: action.payload,
      };
      break;
    case GAME_OVER:
      state = {
        ...state,
        gameOver: action.payload,
      };
      break;
    case SET_GAME_DIFFICULTY:
      state = {
        ...state,
        gameDifficulty: action.payload,
      };
      break;
    case SET_ICON_STYLE:
      state = {
        ...state,
        iconStyle: action.payload,
      };
      break;
    case SET_MATRIX_DIMENSION:
      state = {
        ...state,
        matrixDimension: action.payload,
      };
      break;
    case RESET_STATE:
      state = {
        ...INITIAL_STATE,
        gameKey: ++INITIAL_STATE.gameKey,
        gameMatrix: getInitialLayout(
          action.payload.row,
          action.payload.col,
          action.payload.iconStyle || INITIAL_STATE.iconStyle
        ),
        matrixDimension: { row: action.payload.row, col: action.payload.col },
        gameDifficulty: action.payload.gameDifficulty,
        iconStyle: action.payload.iconStyle || INITIAL_STATE.iconStyle,
      };
      break;
  }
  return state;
};

const middlewares = [
  // createLogger(),
  thunk,
];

export const store = createStore(
  combineReducers({ gameReducer }),
  {},
  composeWithDevTools(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )
);
