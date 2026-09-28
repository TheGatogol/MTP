import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
const checksDepositsList = require('../../pages/checksDeposits/checksDepositsList').default;

// Page Objects IDs
const CHECKS_DEPOSITS_LIST = checksDepositsList.getId();

class ChecksDepositsList extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'checksDeposits/checksDepositsListSearcher', parentNavigation: 'checksDeposits/checksDepositsList'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CHECKS_DEPOSITS_LIST:
                await checksDepositsList.applyFilter();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ChecksDepositsList();
