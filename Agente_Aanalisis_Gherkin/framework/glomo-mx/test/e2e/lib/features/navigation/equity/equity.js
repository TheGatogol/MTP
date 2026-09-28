import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class Equity extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityPage', parentNavigation: 'dashboard'});
    }
    async go_impl({account} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                if (account) {
                    await dashboardPage.waitUntilProductsLoaded({timeout: config.wait.L});
                    await dashboardPage.selectByDataId(account);
                } else {
                    await dashboardPage.accessEquity();
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Equity();
