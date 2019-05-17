import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('loading component', () => {
  it('renders the loading', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
