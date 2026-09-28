import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import flexibleFinancingDashboard from '../../pages/flexibleFinancing/paymentDashboard';

const FLEXIBLE_FINANCING_DASHBOARD = flexibleFinancingDashboard.getId();

class FinanceDebitLineCancel extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'flexibleFinancing/financeDebitLineCancel', parentNavigation: 'flexibleFinancing/paymentDashboard'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case FLEXIBLE_FINANCING_DASHBOARD:
                await flexibleFinancingDashboard.accessOperative('cancelLine');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FinanceDebitLineCancel();
