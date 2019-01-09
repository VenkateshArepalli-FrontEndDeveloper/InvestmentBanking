
/**
 * Helper - define constants and common methods.
 */
export const CURRENT_LOANS_PATH = './mock/current-loans.json';

const validateAmount = (amount) => (isNaN(amount)) ? amount.toString().replace(/,/g, "") : amount;

export const formatAmount = (amount) => {
    return Number(validateAmount(amount)).toLocaleString('it-IT', {style: 'currency', currency: 'EUR'}); 
}

export const calculateAvailableInvestment = (loans) => {
    if (loans) {
        return loans.reduce((total, loan) => {
            const availableAmount = loan.available;
            let amount = availableAmount.replace ? Number.parseInt(validateAmount(availableAmount)) : availableAmount;
            return total + amount;
          }, 0);
    }
    return 0;    
}

export const getUpdatedLoansList = (currentLoansList, selectedInvestmentLoan) => {    
    const {id, investAmount } = selectedInvestmentLoan;
    const loanIndex = currentLoansList.findIndex((loan) => loan.id == id);
    let loans = currentLoansList;
    let available = loans[loanIndex].available;
    loans[loanIndex].available = validateAmount(available) -  Number(validateAmount(investAmount));
    loans[loanIndex].invested = true;
    return loans;    
}


