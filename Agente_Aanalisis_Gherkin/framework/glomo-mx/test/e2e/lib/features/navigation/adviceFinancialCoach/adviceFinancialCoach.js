import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardPage from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboardPage.getId();

class AdviceFinancialCoach extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'adviceFinancialCoach/adviceFinancialCoach', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessHomeCoachSection();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AdviceFinancialCoach();

