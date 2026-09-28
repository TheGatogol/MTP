import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import cashZonePaymentsMpos from '../../pages/cashZone/cashZonePaymentsMpos';

const CASH_ZONE = cashZonePaymentsMpos.getId();

class MposPurchase extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'mposPurchase/mposPurchase', parentNavigation: 'cashZonePaymentsMpos/cashZonePaymentsMpos'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CASH_ZONE:
                await cashZonePaymentsMpos.accessesMposCard();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new MposPurchase();
