import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocCarLoanAccountSelection from '../../pages/ocCarLoan/ocCarLoanAccountSelection';

// Page Objects IDs
const ACCOUNT_SELECTION = ocCarLoanAccountSelection.getId();

class OcCarLoanAccountListSelection extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoan/ocCarLoanAccountListSelection', parentNavigation: 'ocCarLoan/ocCarLoanAccountSelection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_SELECTION:
                await ocCarLoanAccountSelection.viewMoreAccounts();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanAccountListSelection();
