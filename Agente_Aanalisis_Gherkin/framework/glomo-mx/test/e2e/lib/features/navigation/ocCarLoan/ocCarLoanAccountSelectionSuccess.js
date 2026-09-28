import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocCarLoanAccountSelection from '../../pages/ocCarLoan/ocCarLoanAccountSelection';
import ocCarLoanAccountListSelection from '../../pages/ocCarLoan/ocCarLoanAccountListSelection';

// Page Objects IDs
const ACCOUNT_SELECT = ocCarLoanAccountSelection.getId();
const ACCOUNTS_LIST = ocCarLoanAccountListSelection.getId();

class OcCarLoanAccountSelectionSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoan/ocCarLoanAccountSelectionSuccess', parentNavigation: 'ocCarLoan/ocCarLoanAccountSelection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_SELECT:
                await ocCarLoanAccountSelection.selectAccount();
                break;
            case ACCOUNTS_LIST:
                await ocCarLoanAccountListSelection.selectAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanAccountSelectionSuccess();
