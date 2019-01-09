import React from 'react'
import {shallow} from 'enzyme'
import Loan from '../../components/Loan';
import InvestModal from '../../components/InvestModal';
import {formatAmount} from '../../helpers/helper';

describe('<Loan />', () => {
    const defaultProps = {
        loanInfo: {
            id:"0",
            title: '',
            tranche: '',
            amount:"0",
            ltv:"0",
            annualisedReturn: "0",
            termRemaining: "0",
            available:"0",
            invested:false
        }
      }

  it('renders without exception', () => {     
      const loanWrapper = shallow(<Loan {...defaultProps} />);
      expect(loanWrapper).toBeTruthy();
      expect(loanWrapper).not.toEqual(null);     
  });

  it('should render Statefull InvestModal component correctly', () => {
    const props = {
        id:"0",
        title: '',
        amountAvailable: 0,
        remainingTime: 0,
        handleInvestNow: jest.fn()
    }
    
    const investModalWrapper = shallow(<InvestModal {...props} />);
    expect(investModalWrapper).toBeTruthy();
    expect(investModalWrapper).not.toEqual(null); 
  });  
});


