import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//Pages
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

// Page Objects IDs
const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class DeferredSignaturePurchaseInstruction extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'deferredSignature/deferredSignaturePurchaseInstruction', parentNavigation: 'notificationsCenter/notificationsCenter'});
    }

    async go_impl(notification) {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.selectExtraAction(notification);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DeferredSignaturePurchaseInstruction();
