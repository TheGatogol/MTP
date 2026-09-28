import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import dashboardPage from '../../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class DashboardDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pfm/dashboard/dashboardDetail', parentNavigation: 'dashboard'});
    }

    async go_impl({accessFrom = 'footer'} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessPFMDashboard(accessFrom);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DashboardDetail();
