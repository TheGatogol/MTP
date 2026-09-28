import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsWithdrawalStep1Page from '../../../pages/diy/fundsWithdrawal/fundsWithdrawalStep1';

// Page Objects IDs
const FUND_WITHDRAWAL_STEP1 = fundsWithdrawalStep1Page.getId();

class FundsWithdrawalStep2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsWithdrawal/fundsWithdrawalStep2', parentNavigation: 'diy/fundsWithdrawal/fundsWithdrawalStep1'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_WITHDRAWAL_STEP1:
                await fundsWithdrawalStep1Page.confirmAccountSelection();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsWithdrawalStep2();
