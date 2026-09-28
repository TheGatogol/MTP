import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import cashZonePaymentsMpos from '../../pages/cashZone/cashZonePaymentsMpos';

const CASHZONE = cashZonePaymentsMpos.getId();
class TapOnPhone extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCashZone/ocCashZone', parentNavigation: 'cashZonePaymentsMpos/cashZonePaymentsMpos'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CASHZONE:
                await cashZonePaymentsMpos.accessesLearnMore();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TapOnPhone();
