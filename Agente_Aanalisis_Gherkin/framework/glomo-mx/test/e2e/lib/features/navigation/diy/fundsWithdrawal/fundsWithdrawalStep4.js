import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsWithdrawalStep3Page from '../../../pages/diy/fundsWithdrawal/fundsWithdrawalStep3';

// Page Objects IDs
const FUND_WITHDRAWAL_STEP3 = fundsWithdrawalStep3Page.getId();

class FundsWithdrawalStep4 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsWithdrawal/fundsWithdrawalStep4', parentNavigation: 'diy/fundsWithdrawal/fundsWithdrawalStep3'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUND_WITHDRAWAL_STEP3:
                await fundsWithdrawalStep3Page.confirmAmount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsWithdrawalStep4();
