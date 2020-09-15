import React from 'react';
import { useDispatch } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Toast from '../toast/Toast';
import { getGameMatrix, getGameKey } from '../../store/selectors';
import { Button, Grid } from '../common/Common.Styles';
import { images } from './Images';
import CardList from './CardList';
import FlipCard from '../flipCard/FlipCard';

configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../store/selectors');

describe('CardList Component', () => {
  describe('Grid render', () => {
    beforeEach(() => {
      getGameKey.mockReturnValue(1);
    });

    it('should render Grid without any issues ', () => {
      const mockedGameMatrix = [{ imageId: 2, image: images[0], index: 1 }];
      getGameMatrix.mockReturnValue(mockedGameMatrix);

      const cardListWrapper = shallow(<CardList />);
      const grid = cardListWrapper.find(Grid);
      expect(grid.exists()).toBe(true);
    });

    it('should render Grid and compose FlipCard from gameMatrix ', () => {
      const mockedGameMatrix = [{ imageId: 2, image: images[0], index: 1 }];
      getGameMatrix.mockReturnValue(mockedGameMatrix);

      const cardListWrapper = shallow(<CardList />);
      const grid = cardListWrapper.find(Grid);
      const flipCards = grid.shallow().find(FlipCard);
      expect(grid.exists()).toBe(true);
      expect(flipCards.exists()).toBe(true);
      expect(flipCards).toHaveLength(1);
    });

    it('should render Grid without  any flipcards when gameMatrix is not available', () => {
      const mockedGameMatrix = undefined;
      getGameMatrix.mockReturnValue(mockedGameMatrix);

      const cardListWrapper = shallow(<CardList />);
      const grid = cardListWrapper.find(Grid);
      const flipCards = grid.shallow().find(FlipCard);
      expect(grid.exists()).toBe(true);
      expect(flipCards.exists()).toBe(false);
      expect(flipCards).toHaveLength(0);
    });
  });
});
