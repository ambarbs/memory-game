import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';

import App from './App';
import { AppWrapper } from './App.styles';
import CardList from '../cardList/CardList';
import GameOver from '../gameOver/GameOver';

const mockStore = configureStore();
const store = mockStore({
  gameReducer: { gameOver: true },
});

configure({ adapter: new Adapter() });
describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render App with redux store without any issues ', () => {
    expect(wrapper.containsMatchingElement(<App />)).toEqual(true);
  });

  it('should render correctly with default props and redux store', () => {
    const appWrapper = wrapper.find(App).shallow().find(AppWrapper);
    const cardList = appWrapper.shallow().find(CardList);
    const gameOver = appWrapper.shallow().find(GameOver);
    expect(cardList).toHaveLength(1);
    expect(gameOver).toHaveLength(1);
  });
});
