import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('character component', () => {
  it('renders the character', () => {
    const character = {
      name: 'rick',
      status: 'alive',
      species: 'human',
      image: 'telkjse.jpg'
    };

    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
