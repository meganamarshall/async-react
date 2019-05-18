import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('quotes component', () => {
  it('renders the quotes', () => {
    const quotes = [{
      character: 'Megan',
      quote: 'Hi',
      image: 'imagepath.png'
    },
    {
      character: 'Bob',
      quote: 'Bye',
      image: 'byepic.jpg'
    }];
    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
