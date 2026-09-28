import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//Pages
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class DeferredSignatureCoowners extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'deferredSignatureCoowners/deferredSignatureCoowners.js', parentNavigation: 'notificationsCenter/notificationsCenter' });
    }

    async go_impl(notification) {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.selectNotificationCoowners(notification);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DeferredSignatureCoowners();
