import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class DomiciliationNoticeDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'domiciliation/domiciliationNoticeDetail', parentNavigation: 'notificationsCenter/notificationsCenter'});
    }

    async go_impl(notification) {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.selectNotification(notification);
                await notificationsCenter.confirmOrRejected();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new DomiciliationNoticeDetail();
