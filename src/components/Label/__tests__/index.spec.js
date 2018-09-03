import React from 'react';
import { shallow } from 'enzyme';

import Label from '../';


describe('Label', () => {
  it('should render correctly', () => {
    const tree = shallow(<Label text="foo" />);

   expect(tree).toMatchSnapshot();
  });
});
