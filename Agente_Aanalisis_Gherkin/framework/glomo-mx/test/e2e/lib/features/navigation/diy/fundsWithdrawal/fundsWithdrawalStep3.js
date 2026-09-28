import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsWithdrawalStep2Page from '../../../pages/diy/fundsWithdrawal/fundsWithdrawalStep2';

// Page Objects IDs
const FUND_WITHDRAWAL_STEP2 = fundsWithdrawalStep2Page.getId();

class FundsWithdrawalStep3 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsWithdrawal/fundsWithdrawalStep3', parentNavigation: 'diy/fundsWithdrawal/fundsWithdrawalStep2'});
    }

    async go_impl(operation) {
        switch (currentPage.getId()) {
            case FUND_WITHDRAWAL_STEP2:
                await fundsWithdrawalStep2Page.selectOperation(operation);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsWithdrawalStep3();
