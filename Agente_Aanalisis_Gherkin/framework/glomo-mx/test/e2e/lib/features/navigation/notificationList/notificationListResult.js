import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import notificationListSearch from '../../pages/notificationsCenter/notificationListSearch';

// Page Objects IDs
const NOTIFICATIONSRESULT = notificationListSearch.getId();

class NotificationsResult extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'notificationsCenter/notificationListResult', parentNavigation: 'notificationList/notificationListSearch'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NOTIFICATIONSRESULT:
                await notificationListSearch.showNotificationsResult();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new NotificationsResult();
