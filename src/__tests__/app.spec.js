import React from 'react';
import { shallow } from 'enzyme';

import { PureCalculator } from '../app';

const getProps = value => ({
  input: '',
  result: '',
  mode: 'user',
  ...value,
});

describe('App', () => {
  it('should render correctly', () => {
    const tree = shallow(<PureCalculator {...getProps()} />);

    expect(tree).toMatchSnapshot();
  });

  it('should call props.switchMode() when user changes', () => {
    const mock = jest.fn();
    const tree = shallow(<PureCalculator {...getProps({ switchMode: mock })} />);

    tree.find('Toggler').simulate('click');

    expect(mock).toBeCalled();
  });
});
