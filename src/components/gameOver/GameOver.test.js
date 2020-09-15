import React from 'react';
import { useDispatch } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import GameOver from './GameOver';
import Toast from '../toast/Toast';
import { getGameOver } from '../../store/selectors';
import { Button } from '../common/Common.Styles';

configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));
jest.mock('../../store/selectors');

describe('GameOver Component', () => {
  describe('Toast render', () => {
    it('should render Toast when gameOver is true ', () => {
      getGameOver.mockReturnValue(true);
      const gameOverWrapper = shallow(<GameOver />);
      const toast = gameOverWrapper.find(Toast);
      expect(toast.exists()).toBe(true);
    });

    it('should render Toast when gameOver is true ', () => {
      getGameOver.mockReturnValue(false);
      const gameOverWrapper = shallow(<GameOver />);
      const toast = gameOverWrapper.find(Toast);
      expect(toast.exists()).toBe(false);
    });
  });

  describe('Button render', () => {
    it('should render Button when gameOver is TRUE ', () => {
      getGameOver.mockReturnValue(true);
      const gameOverWrapper = shallow(<GameOver />);
      const button = gameOverWrapper.find(Button);
      expect(button.exists()).toBe(true);
    });

    it('should NOT render Button when gameOver is FALSE ', () => {
      getGameOver.mockReturnValue(false);
      const gameOverWrapper = shallow(<GameOver />);
      const button = gameOverWrapper.find(Button);
      expect(button.exists()).toBe(false);
    });

    it.skip('should render Button when gameOver is true ', () => {
      const mockedDispatch = jest.fn();
      useDispatch.mockReturnValue(mockedDispatch);
      getGameOver.mockReturnValue(true);
      const gameOverWrapper = shallow(<GameOver />);
      const button = gameOverWrapper.find(Button);
      button.simulate('click');
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
