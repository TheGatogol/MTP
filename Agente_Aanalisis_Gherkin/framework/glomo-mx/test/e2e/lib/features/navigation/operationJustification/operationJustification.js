import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

// Page Objects IDs
const NOTIFICATION_CENTER = notificationsCenter.getId();

class OperationJustification extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operationJustification/operationJustification', parentNavigation: 'notificationsCenter/notificationsCenter'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case NOTIFICATION_CENTER:
                await notificationsCenter.accessOperationJustification();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OperationJustification();
