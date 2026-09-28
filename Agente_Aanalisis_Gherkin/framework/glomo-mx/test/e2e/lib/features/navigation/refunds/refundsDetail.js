import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages

// Pages
import refunds from '../../pages/refunds/refundsDetail';
// Page Objects IDs
const REFUNDS = refunds.getId();

class RefundsDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'refunds/refundsDetail', parentNavigation: 'refunds/refunds'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case REFUNDS:
                await currentPage.goToPayRefundsMoney();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new RefundsDetail();
