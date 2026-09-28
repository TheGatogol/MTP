import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../../abstract-glomo-navigation';

// Pages
import fundsWithdrawalStep1 from '../../../pages/diy/fundsWithdrawal/fundsWithdrawalStep1';
// Page Objects IDs
const FUND_WITHDRAWAL_SUCCESS = fundsWithdrawalStep1.getId();

class FundsWithdrawalSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsWithdrawal/fundsWithdrawalReview', parentNavigation: 'diy/fundsWithdrawal/fundsWithdrawalStep1'});
    }

    async go_impl({otp} = {}) {
        switch (currentPage.getId()) {
            case FUND_WITHDRAWAL_SUCCESS:
                await fundsWithdrawalStep1.confirmSale(otp);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsWithdrawalSuccess();
