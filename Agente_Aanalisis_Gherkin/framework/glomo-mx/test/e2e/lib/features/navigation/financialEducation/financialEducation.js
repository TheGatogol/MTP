import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import dashboardPage from '../../pages/dashboard/dashboard';
const DASHBOARD = dashboardPage.getId();

class FinancialEducation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'financialEducation/financialEducation', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessFinancialEducation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FinancialEducation();
