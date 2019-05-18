import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('characters component', () => {
  it('renders the characters', () => {
    const characters = [{
      name: 'rick',
      status: 'alive',
      species: 'human',
      image: 'telkjse.jpg'
    },
    {
      name: 'morty',
      status: 'alive',
      species: 'human',
      image: 'hsdkfl.jpg'
    }];

    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
