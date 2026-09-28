import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import nCreditLineIncrease from '../../pages/nCreditLineIncrease/nCreditLineIncrease';
import dashboard from '../../pages/dashboard/dashboard';
// Page Objects IDs
const N_CREDIT_LINE_INCREASE = nCreditLineIncrease.getId();
const DASHBOARD = dashboard.getId();
class Increment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'increment/increment', parentNavigation: 'nCreditLineIncrease/nCreditLineIncrease'});
    }

    async go_impl({ option ='NBA' } = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessOfferDashboard({ option });
                break;
            case N_CREDIT_LINE_INCREASE:
                await nCreditLineIncrease.sendPushNotification();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Increment();
