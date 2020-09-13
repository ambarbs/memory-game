import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actionType } from './constants';
import { getInitialLayout } from './utils';

const gameReducer = (
  state = {
    gameMatrix: getInitialLayout(),
    openedCards: [],
    closeImageWithIndex: null,
  },
  action
) => {
  const { TOTAL, UPDATE_OPENED_CARDS, CLOSE_IMAGE_WITH_INDEX } = actionType;

  switch (action.type) {
    default:
      break;
    case TOTAL:
      state = {
        ...state,
        total: action.payload,
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
