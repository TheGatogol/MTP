import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import depositPage from '../../pages/depositConfiguration/deposit';

// Page Objects IDs
const DEPOSIT = depositPage.getId();

class DepositDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'depositConfiguration/depositDetail', parentNavigation: 'depositConfiguration/deposit'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case DEPOSIT:
                await depositPage.selectDeposit();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DepositDetail();
