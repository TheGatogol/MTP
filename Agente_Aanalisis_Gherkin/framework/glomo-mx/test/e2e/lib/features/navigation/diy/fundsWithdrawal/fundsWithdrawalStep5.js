import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsWithdrawalStep4Page from '../../../pages/diy/fundsWithdrawal/fundsWithdrawalStep4';

// Page Objects IDs
const FUND_WITHDRAWAL_STEP4 = fundsWithdrawalStep4Page.getId();

class FundsWithdrawalStep5 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsWithdrawal/fundsWithdrawalStep5', parentNavigation: 'diy/fundsWithdrawal/fundsWithdrawalStep4'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_WITHDRAWAL_STEP4:
                await fundsWithdrawalStep4Page.acceptSummary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsWithdrawalStep5();
