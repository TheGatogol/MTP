import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import loanPage from '../../pages/loan/loanPage';

// Page Objects IDs
const loan = loanPage.getId();

class LoanSustainability extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'sustainableRateJustification/sustainableRateJustification', parentNavigation: 'loan/loan'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case loan:
                await loanPage.accessSustainabilityLoan();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new LoanSustainability();
