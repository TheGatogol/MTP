import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class Deposit extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositConfiguration/deposit', parentNavigation: 'dashboard'});
    }

    async go_impl(account) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.selectByLastDigits(account);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Deposit();
