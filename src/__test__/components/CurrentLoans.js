import React from 'react'
import {shallow} from 'enzyme'
import {CurrentLoans} from '../../components';

describe('<CurrentLoans />', () => {
    
  it('renders without exception', () => {
    const props = {
        loansList: []
      };
    const currentLoansWrapper = shallow(<CurrentLoans {...props} />); 
    expect(currentLoansWrapper).toBeTruthy();
    expect(currentLoansWrapper).not.toEqual(null);    
  }) 
})