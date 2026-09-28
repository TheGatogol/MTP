import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

class SelectOperations extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operationals/operationals', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessToOperative({operative: 'operationsMore'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SelectOperations();
