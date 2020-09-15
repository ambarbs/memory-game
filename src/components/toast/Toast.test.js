import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Toast from './Toast';
import { ToastWrapper } from './Toast.Styles';

configure({ adapter: new Adapter() });
describe('Toast Component', () => {
  let wrapper, displayText;
  beforeEach(() => {
    displayText = 'display text';
    wrapper = shallow(<Toast>{displayText}</Toast>);
  });

  it('should render Toast with  without any issues ', () => {
    expect(wrapper.find(ToastWrapper).length).toEqual(1);
  });

  it('should render Toast correctly with children', () => {
    expect(wrapper.find(ToastWrapper).shallow().text()).toEqual(displayText);
  });
});
