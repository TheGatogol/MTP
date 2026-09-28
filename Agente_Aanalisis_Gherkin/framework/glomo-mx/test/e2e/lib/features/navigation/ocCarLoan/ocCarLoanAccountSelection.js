import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocCarLoanTracking from '../../pages/ocCarLoan/ocCarLoanTracking';
import ocCarLoanAccountListSelection from '../../pages/ocCarLoan/ocCarLoanAccountListSelection';

// Page Objects IDs
const CAR_LOAN_TRACK = ocCarLoanTracking.getId();
const ACCOUNTS_LIST = ocCarLoanAccountListSelection.getId();

class OcCarLoanAccountSelection extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoan/ocCarLoanAccountSelection', parentNavigation: 'ocCarLoan/ocCarLoanTracking'});
    }

    async go_impl(section = 'account selection') {
        switch (currentPage.getId()) {
            case CAR_LOAN_TRACK:
                await ocCarLoanTracking.goToSection(section);
                break;
            case ACCOUNTS_LIST:
                await ocCarLoanAccountListSelection.goBack();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanAccountSelection();
