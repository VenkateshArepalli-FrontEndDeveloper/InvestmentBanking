import React from 'react'
import {shallow} from 'enzyme'
import {Footer} from '../../components';

describe('<Footer />', () => {
    const total = 445;
    
  it('renders without exception', () => {
    const props = {
        loansList: []
      };
    const footerWrapper = shallow(<Footer {...props} />); 
    expect(footerWrapper).toBeTruthy();
    expect(footerWrapper).not.toEqual(null);    
  }) 
})