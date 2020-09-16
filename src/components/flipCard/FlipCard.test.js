import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Toast from '../toast/Toast';
import { getGameOver } from '../../store/selectors';
import { Button } from '../common/Common.Styles';
import FlipCard from "./FlipCard";
import {FlipCardBack, FLipCardContainer, FlipCardFront, FLipCardWrapper} from "./FlipCard.Styles";
import {instanceOf} from "prop-types";

configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch,
}));
jest.mock('../../store/selectors');

describe('FlipCard Component', () => {
  describe('FLipCardWrapper render', () => {

    it('should render FLipCardWrapper ', () => {
      const flipCard = shallow(<FlipCard />);
      const flipCardWrapper = flipCard.find(FLipCardWrapper);
      expect(flipCardWrapper.exists()).toBe(true);
    });

    it('should render FLipCardContainer with its props', () => {
      const flipCard = shallow(<FlipCard />);
      const flipCardContainer = flipCard.find(FLipCardWrapper).find(FLipCardContainer);
      expect(flipCardContainer.exists()).toBe(true);
      expect(flipCardContainer.prop('flip')).toBe(false);
    });
    it('should render FlipCardFront with its children', () => {
      const flipCard = shallow(<FlipCard />);
      const flipCardFront = flipCard
        .find(FLipCardWrapper)
        .find(FLipCardContainer)
        .find(FlipCardFront);
      expect(flipCardFront.shallow().props().children.props.children).toBe('Front');
    });
    it('should render FlipCardBack with its children', () => {
      const flipCard = shallow(<FlipCard />);
      const flipCardBack = flipCard
        .find(FLipCardWrapper)
        .find(FLipCardContainer)
        .find(FlipCardBack);
      expect(flipCardBack.shallow().props().children.props.children).toBe('Back');
    });
  });
});
