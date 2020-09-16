import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
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

    it('should call dispatch 2 times when resetGame is clicked ', () => {
      getGameOver.mockReturnValue(true);
      const gameOverWrapper = mount(<GameOver />);
      const button = gameOverWrapper.find(Button);
      button.simulate('click');
      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });

    it('should render Button correctly with children', () => {
      const mockedText = 'Restart';
      getGameOver.mockReturnValue(true);
      const gameOverWrapper = shallow(<GameOver />);
      const button = gameOverWrapper.find(Button);
      expect(button.text()).toEqual(mockedText);
    });
  });
});
