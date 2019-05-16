import React from 'react';
import { shallow } from 'enzyme';
import TopQuotes from './TopQuotes';

describe('TopQuotes component', () => {
  it('renders the topquotes', () => {
    const wrapper = shallow(<TopQuotes />);
    expect(wrapper).toMatchSnapshot();
  });
});
