import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import pfmDashboardDetail from '../../../pages/pfm/dashboard/dashboardDetail';
import dashboardFutura from '../../../pages/dashboard/dashboard';

// Page Objects IDs
const PFM_DASHBOARD = pfmDashboardDetail.getId();
const DASHBOARD_FUTURA = dashboardFutura.getId();

class Aggregation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'pfm/categorization/categorization', parentNavigation: 'pfm/dashboard/dashboardDetail'});
    }

    async go_impl({accessFrom} = {}) {
        console.log(`Accessing to ${currentPage.getId()} from ${accessFrom}`);
        switch (currentPage.getId()) {
            case PFM_DASHBOARD:
                await pfmDashboardDetail.getAccessFrom(accessFrom);
                break;
            case DASHBOARD_FUTURA:
                await dashboardFutura.goCategorizationFromWidget(accessFrom);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new Aggregation();
