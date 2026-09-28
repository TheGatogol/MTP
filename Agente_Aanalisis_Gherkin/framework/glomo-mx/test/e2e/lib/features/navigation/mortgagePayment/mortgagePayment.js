import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class MortgagePayment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loan/loanPage', parentNavigation: 'dashboard'});
    }

    async go_impl({account} = {}) {
        let isFuturaFlag;
        switch (currentPage.getId()) {
            case DASHBOARD:
                isFuturaFlag = await dashboardPage.isFutura();
                if (isFuturaFlag) {
                    await dashboardPage.selectLoansByLastDigits(account);
                } else {
                    await dashboardPage.selectByLastDigits(account);
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MortgagePayment();
