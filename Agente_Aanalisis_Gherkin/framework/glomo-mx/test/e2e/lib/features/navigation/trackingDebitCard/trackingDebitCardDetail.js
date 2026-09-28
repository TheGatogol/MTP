import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import trackingDebitCardPage from '../../pages/trackingDebitCard/trackingDebitCard';

// Page Objects IDs
const TRACKING = trackingDebitCardPage.getId();

class TrackingDebitCard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'trackingDebitCard/trackingDetailDebitCard', parentNavigation: 'trackingDebitCard/trackingDebitCard'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case TRACKING:
                await trackingDebitCardPage.accessDeliveryDetailLink();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new TrackingDebitCard();
