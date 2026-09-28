import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import mortgagePaymentPage from '../../pages/mortgagePayment/mortgagePaymentPage';

// Page Objects IDs
const MORTGAGE_PAGE = mortgagePaymentPage.getId();

class MortgageCredit extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loan/loanPage', parentNavigation: 'mortgagePayment/mortgagePaymentAccess'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case MORTGAGE_PAGE:
                await mortgagePaymentPage.goBackAtDetail();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new MortgageCredit();
