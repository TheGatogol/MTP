import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import checksDeposits from '../../pages/checksDeposits/checksDeposits';

// Page Objects IDs
const CHECKS_DEPOSITS = checksDeposits.getId();

class ChecksDepositsDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksDeposits/checksDepositsCheckAggregator', parentNavigation: 'checksDeposits/checksDeposits'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_DEPOSITS:
                await checksDeposits.goToCheckAggregator();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksDepositsDetail();
