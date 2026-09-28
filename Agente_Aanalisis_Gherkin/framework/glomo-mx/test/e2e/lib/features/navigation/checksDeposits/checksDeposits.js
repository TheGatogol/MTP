import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import checksDepositsList from '../../pages/checksDeposits/checksDepositsList';

// Page Objects IDs
const CHECKS_DEPOSITS_LIST= checksDepositsList.getId();

class ChecksDepositsDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksDeposits/checksDeposits', parentNavigation: 'checksDeposits/checksDepositsList'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_DEPOSITS_LIST:
                await checksDepositsList.goToChecksDepositsAdd();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksDepositsDetail();
