import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import dashboard from '../../../pages/dashboard/dashboard';

const DASHBOARD = dashboard.getId();

class CreditCardHolderNbo extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'creditCardApplication/creditCardHolder/creditCardHolderOld', parentNavigation: 'dashboard'});
    }

    async go_impl(offerId) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.enterOffer(offerId);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CreditCardHolderNbo();
