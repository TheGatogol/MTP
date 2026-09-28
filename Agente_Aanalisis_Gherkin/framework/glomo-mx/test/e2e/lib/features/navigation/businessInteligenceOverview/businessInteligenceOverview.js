import { NotPathNavigationError } from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import dashboardPage from '../../pages/dashboard/dashboard';

const DASHBOARD = dashboardPage.getId();

class BusinessInteligenceOverview extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'businessInteligenceOverview/businessInteligenceTransactionList',
            parentNavigation: 'dashboard',
        });
    }
    async go_impl({ viewMode } = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessTransactionList({ viewMode });
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BusinessInteligenceOverview();
