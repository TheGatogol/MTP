import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../../pages/dashboard/dashboard';

// Page Objects IDs
const DASHBOARD = dashboard.getId();
class RequestDebitCardStep1 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'requestDebitCard/requestDebitCardStep1', parentNavigation: 'dashboard'});
    }

    async go_impl() {
        let offer;
        switch (currentPage.getId()) {
            case DASHBOARD:
                offer = await dashboard.isFutura() ? 'TDD A DOMICILIO' : 'debit card request';
                await dashboard.enterOffer(offer);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new RequestDebitCardStep1();
