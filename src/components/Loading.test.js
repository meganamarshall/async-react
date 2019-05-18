import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('loading component', () => {
  it('renders the loading message', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
