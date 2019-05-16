import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('quote component', () => {
  it('renders the quote', () => {
    const quote = {
      character: 'Megan',
      quote: 'Hi',
      image: 'imagepath.png'
    };
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
