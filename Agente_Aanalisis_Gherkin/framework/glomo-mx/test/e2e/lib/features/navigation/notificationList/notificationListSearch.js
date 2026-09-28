import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError} from '@csqe/radish';

// Pages
import notificationsList from '../../pages/notificationsCenter/notificationsList';

// Page Objects IDs
const NOTIFICATIONSLIST = notificationsList.getId();

class NotificationListSearch extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'notificationsCenter/notificationListSearch', parentNavigation: 'notificationList/notificationList'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NOTIFICATIONSLIST:
                await notificationsList.showSearchList();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NotificationListSearch();
