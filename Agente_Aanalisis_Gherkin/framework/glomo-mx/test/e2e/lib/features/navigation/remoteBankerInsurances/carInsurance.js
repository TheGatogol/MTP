import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//Pages
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

// Page Objects IDs
const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class CarInsurance extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'remoteBankerInsurances/carInsurance', parentNavigation: 'notificationsCenter/notificationsCenter'});
    }

    async go_impl({notificationId}) {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.selectExtraAction(notificationId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CarInsurance();
