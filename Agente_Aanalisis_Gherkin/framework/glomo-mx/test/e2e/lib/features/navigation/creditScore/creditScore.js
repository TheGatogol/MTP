import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import dashboardDetailPage from '../../pages/pfm/dashboard/dashboardDetail';

// Page Objects IDs
const DASHBOARD_DETAIL = dashboardDetailPage.getId();

class CreditScore extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditScore/creditScore', parentNavigation: 'pfm/dashboard/dashboardDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD_DETAIL:
                await dashboardDetailPage.creditStatus();
                break;
            default:
                throw new NotPathNavigationError();

        }
    }
}

export default new CreditScore();
