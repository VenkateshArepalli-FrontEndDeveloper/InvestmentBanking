import React from 'react';
import PropTypes from 'prop-types';
import {calculateAvailableInvestment, formatAmount} from '../helpers/helper';

/**
 * Footer component - which contains Available amount for investment.
 */
const Footer = ({loansList}) => {
   const total = calculateAvailableInvestment(loansList);
   return (
    <div>
        <h3 className="footer">Total amount available for investments: {formatAmount(total)}</h3>     
   </div>)
};

Footer.propTypes = {
    loansList: PropTypes.array 
  };
  
    
export default Footer;

