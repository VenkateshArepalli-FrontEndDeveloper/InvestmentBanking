import React from 'react'
import {shallow} from 'enzyme'
import {Header} from '../../components';

describe('<Header />', () => {

    it('renders Header component without exception', () => {
     const headerWrapper = shallow(<Header />);
     expect(headerWrapper).toBeTruthy();
     expect(headerWrapper).not.toEqual(null);     
  }) 
})