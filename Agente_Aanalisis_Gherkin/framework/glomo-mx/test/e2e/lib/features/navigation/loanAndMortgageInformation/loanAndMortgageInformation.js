import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import dashboardPage from '../../pages/dashboard/dashboard';
import notificationsCenter from '../../pages/notificationsCenter/notificationsCenter';

const DASHBOARD = dashboardPage.getId();
const NOTIFICATION_CENTER = notificationsCenter.getId();

class LoanAndMortgageInformation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loanAndMortgageInformation/loanAndMortgageInformation', parentNavigation: 'dashboard'});
    }

    async go_impl({access, notificationId} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                if (access === 'nbo') {
                    await dashboardPage.accessLoanAndMortgageTrackingNboOffer();
                    break;
                }
                await dashboardPage.opportunitiesCarouselAccess(access);
                break;
            case NOTIFICATION_CENTER:
                if (notificationId) {
                    await notificationsCenter.notificationSelect(notificationId);
                }
                await notificationsCenter.detailNotification();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new LoanAndMortgageInformation();
