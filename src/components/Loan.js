import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import {formatAmount} from '../helpers/helper';
import InvestModal from './InvestModal';


/* 
* Loan - show the information about loan details and also displayed the invest amount popup.
*/
class Loan extends Component {
    
     /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loanInfo: this.getLoanDetails(props.loanInfo)
        }

        this.openModalPopup = this.openModalPopup.bind(this);
        this.closeModalPopup = this.closeModalPopup.bind(this);
        this.handleInvestNow = this.handleInvestNow.bind(this);
      }
     
     /**
     * getLoanDetails
     * @param {object} loan - loan details 
     * @return {object} - { id, title, tranche, amount, ltv, annualisedReturn, termRemaining, available, invested}
     */
      getLoanDetails(loan) {
         let { id="0", title, tranche, amount="0",ltv="0",annualised_return: annualisedReturn="0", term_remaining: termRemaining="0", available="0", invested=false} = loan;

        return {
            id,
            title,
            tranche,
            amount,
            ltv,
            annualisedReturn,
            termRemaining,
            available,
            invested
        }
      }
      
    /**
     * componentWillReceiveProps
     * @param {object} nextProps
     */
      componentWillReceiveProps(nextProps) {         
        if (nextProps.loanInfo) {
           this.setState({loanInfo: this.getLoanDetails(nextProps.loanInfo)});
        }        
      }
     
    /**
     * openModalPopup - show InvestModal Popup.
    */
      openModalPopup() {
          this.setState({showModal: true});
      }
     
    /**
     * closeModalPopup - hide InvestModal Popup.
    */
      closeModalPopup() {
        this.setState({showModal: false});
      }
      
    /**
     * handleInvestNow - New Investment details for selected loan.
     * @param {object} selectedInvestmentLoan - contains id, investment amount.
     */
      handleInvestNow(selectedInvestmentLoan) {
        this.closeModalPopup();
        this.props.handleInvestNow(selectedInvestmentLoan);
      }
    
    /**
     * render
     * @return {ReactElement} markup
     */
    render() {        
        const {showModal, loanInfo} = this.state;
        return (
            <div className="card-wrap">          
            <div className="loan">
                <h2>{loanInfo.title}</h2>
                <p>Tranche: {loanInfo.tranche}</p>
                <p>Amount: {formatAmount(loanInfo.amount)}</p>
                <p>Annualised Return: {loanInfo.annualisedReturn}</p>
                <p>Loan to value: {loanInfo.ltv}</p>
                { loanInfo.invested ? <p className="investment-badge">Invested</p> : null }        
                <button onClick={this.openModalPopup}>Invest in Loan</button>
                <Modal open={showModal} onClose={this.closeModalPopup} little>
                <InvestModal
                    id={loanInfo.id}
                    title={loanInfo.title}
                    amountAvailable={loanInfo.available}
                    remainingTime={loanInfo.termRemaining}
                    handleInvestNow={(selectedInvestmentLoan) => this.handleInvestNow(selectedInvestmentLoan)}
                />
                </Modal>         
            </div>             
        </div>
        )
    }
}
    

Loan.propTypes = {
    loanInfo: PropTypes.object    
};

export default Loan;