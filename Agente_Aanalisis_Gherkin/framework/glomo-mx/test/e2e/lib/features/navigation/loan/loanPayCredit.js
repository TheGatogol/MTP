import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import loanPage from '../../pages/loan/loanPage';
import loansPaymentPledge from '../../pages/loansPaymentPledge/loansPaymentPledge';

// Page Objects IDs
const LOAN_PAY = loanPage.getId();
const LOANS_PAYMENT_PLEDGE = loansPaymentPledge.getId();

class LoanPayCredit extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'loan/loanPayment', parentNavigation: 'loan/loan' });
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case LOAN_PAY:
                await loanPage.accessPayCreditLoan();
                break;
            case LOANS_PAYMENT_PLEDGE:
                await loansPaymentPledge.openPaymentOption();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LoanPayCredit();
