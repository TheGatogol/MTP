import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import loanPage from '../../pages/loan/loanPage';

const LOAN_PAGE = loanPage.getId();

class MortgagePaymentAccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mortgagePayment/mortgagePaymentPage', parentNavigation: 'mortgagePayment'});
    }

    async go_impl(option) {
        switch (currentPage.getId()) {
            case LOAN_PAGE:
                await loanPage.accessPayCreditLoan(option);
                break;
            default:
                throw new NotPathNavigationError();
        }

    }
}
export default new MortgagePaymentAccess();
