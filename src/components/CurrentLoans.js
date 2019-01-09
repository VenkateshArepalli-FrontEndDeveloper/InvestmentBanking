import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loan from './Loan';


/**
 * renderLoanCardItems - render each loan card and return array of elements.
 * @param {array} list - Loan cards.
 */
const renderLoanCardItems = (list, handleInvestNow) => list.map((loanInfo, index) => <Loan key={index} loanInfo={loanInfo} handleInvestNow={handleInvestNow} />); 

/**
 * CurrentLoans component - get the current loans list and render the loan component.
*/
 
class CurrentLoans extends Component {

    /**
     * constructor
     * @param {object} props
     */
  constructor(props) {
    super(props);
    this.state = {
      loansList: []
    }
  }
  
  /**
     * componentWillReceiveProps
     * @param {object} nextProps
     */
  componentWillReceiveProps(nextProps) {
    if(nextProps.loansList) {
      this.setState({
        loansList: nextProps.loansList
      });
    }
  }


  /**
     * render
     * @return {ReactElement} markup
     */
    render() {
      const {handleInvestNow} = this.props;
      const {loansList} = this.state;    
      if (loansList) {
        return (<div className="card-grid">{renderLoanCardItems(loansList, handleInvestNow)}</div>);
      }
    return null;
  }
};

CurrentLoans.propTypes = {
  loansList: PropTypes.array 
};

export default CurrentLoans;
