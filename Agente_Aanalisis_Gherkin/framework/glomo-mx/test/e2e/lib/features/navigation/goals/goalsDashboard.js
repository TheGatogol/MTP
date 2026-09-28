import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class GoalsDashboard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'goals/goals', parentNavigation: 'dashboard'});
    }

    async go_impl({account} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                if (account)
                    await dashboardPage.selectByLastDigits(account);
                else
                    await dashboardPage.followMetaLink();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new GoalsDashboard();
