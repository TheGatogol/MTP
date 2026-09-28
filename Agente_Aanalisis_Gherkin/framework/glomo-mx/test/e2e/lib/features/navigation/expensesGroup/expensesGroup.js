import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

class ExpensesGroup extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'expensesGroup/expensesGroup', parentNavigation: 'dashboard'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessExpensesGroup();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new ExpensesGroup();
