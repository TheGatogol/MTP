import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import loanPage from '../../pages/loan/loanPage';

// Page Objects IDs
const loan = loanPage.getId();

class LoanMoreInfo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loan/loanMoreInfoPage', parentNavigation: 'loan/loan'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case loan:
                await loanPage.accessMoreInfoLoan();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new LoanMoreInfo();
