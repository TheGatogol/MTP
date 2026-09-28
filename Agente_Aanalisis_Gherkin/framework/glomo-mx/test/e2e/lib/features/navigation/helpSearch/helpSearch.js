import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class HelpSearch extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'helpSearch/helpSearch', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.openHelpSearch();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new HelpSearch();
