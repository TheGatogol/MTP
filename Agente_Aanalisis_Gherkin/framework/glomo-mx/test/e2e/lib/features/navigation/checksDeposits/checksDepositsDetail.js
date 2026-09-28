import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
const checksDepositsList = require('../../pages/checksDeposits/checksDepositsList').default;

// Page Objects IDs
const CHECKS_DEPOSITS_LIST= checksDepositsList.getId();

class ChecksDepositsDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksDeposits/checksDepositsDetail', parentNavigation: 'checksDeposits/checksDepositsList'});
    }

    async go_impl({status}) {
        switch (currentPage.getId()) {
            case CHECKS_DEPOSITS_LIST:
                await checksDepositsList.goToChecksDepositDetail(status);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksDepositsDetail();
