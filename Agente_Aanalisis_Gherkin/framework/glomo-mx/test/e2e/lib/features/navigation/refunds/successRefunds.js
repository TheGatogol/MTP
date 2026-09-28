import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages

// Pages
import refundsDetails from '../../pages/refunds/refundsDetail';
// Page Objects IDs
const REFUNDS = refundsDetails.getId();

class RefundsDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'refunds/successRefunds'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case REFUNDS:
                await currentPage.setOtp();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new RefundsDetail();
