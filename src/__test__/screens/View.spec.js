
import React from 'react';
import { shallow } from 'enzyme';
import View from '../../screens/View';
import {Header, CurrentLoans, Footer} from '../../components';

jest.mock('../../mock/current-loans.json', ()=>({
  loans: 'loans'
}), { virtual: true })


describe('View', () => {
  it('should render View component correctly', () => {
    const viewWrapper = shallow(<View />);
    expect(viewWrapper).toBeTruthy();
    expect(viewWrapper).not.toEqual(null);
  });

 
  it('should render Stateless Header component correctly', () => {
    const headerWrapper = shallow(<Header />);
    expect(headerWrapper).toBeTruthy();
    expect(headerWrapper).not.toEqual(null);    
  });  
});

describe('CurrentLoans', () => {
  const props = {
    handleInvestNow: jest.fn(),
    loansList: []
  };

  it('should render CurrentLoans component correctly', () => {
    const currentLoans = shallow(<CurrentLoans {...props} />);    
  }); 

  
  it('should render Footer component correctly', () => {
    const props = {
      loansList: []
    };
    const footerWrapper = shallow(<Footer {...props} />);
    expect(footerWrapper).toBeTruthy();
    expect(footerWrapper).not.toEqual(null);    
  }); 
});