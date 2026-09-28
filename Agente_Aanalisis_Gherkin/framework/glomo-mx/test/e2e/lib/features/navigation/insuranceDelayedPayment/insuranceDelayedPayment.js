import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Pages
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

// Page Objects IDs
const NOTIFICATIONS_CENTER = notificationsCenter.getId();

class InsuranceDelayedPayment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'insuranceDelayedPayment/insuranceDelayedPayment', parentNavigation: 'notificationsCenter/notificationsCenter'});
    }

    async go_impl(notification = '') {
        switch (currentPage.getId()) {
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.selectPaymentInsurance(notification);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InsuranceDelayedPayment();
