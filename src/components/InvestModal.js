import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {formatAmount, validateAmount} from '../helpers/helper';

/**
 * InvestModal component - which contains selected loan information.
 */
class InvestModal extends Component {
   /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
           investValue: 0,
           invalidInput: false,
           errorMessage: ''
        }        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInvestmentBtnClick = this.handleInvestmentBtnClick.bind(this);
      }
     
      /**
     * handleInputChange - input field for invest amount.
     * @param {object} event.
     */
      handleInputChange(event) {
       this.setState({investValue: event.target.value, invalidInput: false});
      }
      
     /**
     * handleInvestmentBtnClick - Button click handler for InvestNow
     */
      handleInvestmentBtnClick() {
        const {id, handleInvestNow} = this.props;        
        const {investValue} = this.state;           
        const validInput = investValue.toString().replace(/,/g, "");
        
        if (!isNaN(validInput) && Number(validInput) > 0) {
            handleInvestNow({id, investAmount: validInput})
        } else {
            if (Number(validInput) === 0) {
                this.setState({invalidInput: true, errorMessage: "Please enter value greater than 0"});
            } else {
                this.setState({invalidInput: true, errorMessage: "Please enter valid input"});
            }
            
        }       
      }

    /**
     * render
     * @return {ReactElement} markup
     */
    render() {
       const {title, amountAvailable, remainingTime} = this.props;
       const {invalidInput, errorMessage} = this.state;
       return (
        <div className="invest-modal">
            <p className="invest-modal-title">Invest in Loan</p>
            <p>{title}</p>
            <p className="invest-modal-alignment">Amount available: {formatAmount(amountAvailable)}</p>
            <p>Loan ends in: {moment.duration(Number.parseInt(remainingTime), 'seconds').humanize()}</p>            
            <div className="invest-modal-alignment">            
            <span>Investment amount (£)</span>
            <div className="invest-modal-footer">
                <input type="text" placeholder="0" pattern="[0-9.]+" onChange={this.handleInputChange} />
                <button className="invest-modal-footer-button" onClick={this.handleInvestmentBtnClick}>Invest Now</button>
            </div>
            { invalidInput ? <p className="invalid-input">{errorMessage}</p> : null }
            </div>      
        </div> 
       )
    }
}

InvestModal.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    amountAvailable: PropTypes.any,
    remainingTime: PropTypes.any,
    handleInvestNow: PropTypes.func
};

export default InvestModal;
