import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

//Page
import dashboard from '../../pages/dashboard/dashboard';

//Page Object IDs
const DASHBOARD = dashboard.getId();

class SmartServicingCreditCardPayment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardPayment/cardCreditCardPayment', parentNavigation: 'dashboard'});
    }

    async go_impl({typeInterest} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.accessSmartServicingOption(typeInterest, false);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new SmartServicingCreditCardPayment();
