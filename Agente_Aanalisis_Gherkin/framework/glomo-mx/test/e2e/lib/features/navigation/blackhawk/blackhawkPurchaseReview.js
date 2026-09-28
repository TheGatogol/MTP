import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import blackhawkPurchase from '../../pages/blackhawk/blackhawkPurchase';

// Page Objects IDs
const BLACKHAWK_PURCHASE = blackhawkPurchase.getId();

class BlackhawkPurchaseReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'blackhawk/blackhawkPurchaseReview', parentNavigation: 'blackhawk/blackhawkPurchase'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BLACKHAWK_PURCHASE:
                await currentPage.finishCardPurchase();
                await currentPage.fillOtp('11111111');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BlackhawkPurchaseReview();
