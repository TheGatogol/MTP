import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';
import suspectedTransactionsManagement from '../../pages/suspectedTransactionsManagement/suspectedTransactionsManagement';
// Page Objects IDs
const DASHBOARD = dashboard.getId();
const SUSPECTED_TRANSACTIONS = suspectedTransactionsManagement.getId();

class NotificationsCenter extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'notificationsCenter/notificationsCenter', parentNavigation: 'dashboard'});
    }

    async go_impl( {type} = {} ) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessFooterNTL();
                break;
            case SUSPECTED_TRANSACTIONS:
                await suspectedTransactionsManagement.closeNotification(type);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NotificationsCenter();
