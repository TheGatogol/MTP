import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import checksDepositsCheckAggregator from '../../pages/checksDeposits/checksDepositsCheckAggregator';

// Page Objects IDs
const CHECKS_DEPOSITS_CHECK_AGGREGATOR = checksDepositsCheckAggregator.getId();

class ChecksDepositsDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksDeposits/checksDepositsPhotos', parentNavigation: 'checksDeposits/checksDepositsCheckAggregator'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_DEPOSITS_CHECK_AGGREGATOR:
                await checksDepositsCheckAggregator.goToChecksDepositsPhotos();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksDepositsDetail();
