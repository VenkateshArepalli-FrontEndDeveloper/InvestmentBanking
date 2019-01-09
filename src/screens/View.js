import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header, CurrentLoans, Footer} from '../components';
import getServiceData from '../service/APIHelper';
import {CURRENT_LOANS_PATH, getUpdatedLoansList} from '../helpers/helper';


/* View - Main view of the application and Enclosed by three components and initial api call to fetch the data.
*  - Header
*  - CurrentLoans
*  - Footer
*/
class View extends Component {

     /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            currentLoansList: []        
        }
        this.init();
        this.handleInvestNow = this.handleInvestNow.bind(this);
      }

    /**
     * initialize service call to fetch the existing loans list.
     */ 
    async init() { 
       const getCurrentLoansList = await getServiceData(CURRENT_LOANS_PATH); 
       this.setState({
           currentLoansList: getCurrentLoansList.loans
        })  
    }

    /**
     * handleInvestNow - callBack function from child to parent.
     * @param {object} selectedInvestmentLoan - contains Id and investment amount.
     */
    handleInvestNow(selectedInvestmentLoan) {
      const {currentLoansList} = this.state;
      const getList = getUpdatedLoansList(currentLoansList, selectedInvestmentLoan);
      this.setState({
        currentLoansList: getList
      });   
    }
    
   /**
     * render
     * @return {ReactElement} markup
     */
    render() {
        const {currentLoansList} = this.state; 
        return(
            <div className="mainContainer">
               <Header />
               <CurrentLoans loansList={currentLoansList} handleInvestNow={this.handleInvestNow}/>
               <Footer loansList={currentLoansList}  />
             </div>
        );
    }
};


export default View;
