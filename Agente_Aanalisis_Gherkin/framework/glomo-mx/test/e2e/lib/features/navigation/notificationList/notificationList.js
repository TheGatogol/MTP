import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();

class NotificationList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'notificationsCenter/notificationsList', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessFooterNTL();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NotificationList();
