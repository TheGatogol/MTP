import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import flexibleFinancingDashboard from '../../pages/flexibleFinancing/paymentDashboard';

const FLEXIBLE_FINANCING_DASHBOARD = flexibleFinancingDashboard.getId();

class MonthlyStatementEnquiry extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'flexibleFinancing/monthlyStatementEnquiry', parentNavigation: 'flexibleFinancing/paymentDashboard'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case FLEXIBLE_FINANCING_DASHBOARD:
                await flexibleFinancingDashboard.accessOperative('monthlyStatementEnquiry');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MonthlyStatementEnquiry();
