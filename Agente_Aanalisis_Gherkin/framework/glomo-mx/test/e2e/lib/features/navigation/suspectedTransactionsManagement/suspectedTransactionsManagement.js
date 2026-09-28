import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

const NOTIFICATIONS = notificationsCenter.getId();

class SuspectedTransactionsManagement extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'suspectedTransactionsManagement/suspectedTransactionsManagement', parentNavigation: 'notificationsCenter/notificationsCenter'});
    }

    async go_impl({notification = {}, singleNavigation = false, deepLinkObject = {}, publicSettingsObject = {}} = {}) {
        switch (currentPage.getId()) {
            case NOTIFICATIONS:
                if(singleNavigation){
                    await notificationsCenter.confirmOrRejected(deepLinkObject, publicSettingsObject);
                } else {
                    await notificationsCenter.selectNotification(notification);
                    await notificationsCenter.confirmOrRejected(deepLinkObject, publicSettingsObject);
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new SuspectedTransactionsManagement();
