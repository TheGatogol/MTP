import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class UserTransactionAmountDetailNotification extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'mtuLimits/userTransactionAmountDetailNotification', parentNavigation: 'notificationsCenter/notificationsCenter' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.mtuConfirmOrReject();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new UserTransactionAmountDetailNotification();
