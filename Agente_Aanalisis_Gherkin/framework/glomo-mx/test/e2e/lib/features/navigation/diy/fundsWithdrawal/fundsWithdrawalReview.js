import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsWithdrawalStep5Page from '../../../pages/diy/fundsWithdrawal/fundsWithdrawalStep5';

// Page Objects IDs
const FUND_WITHDRAWAL_STEP5 = fundsWithdrawalStep5Page.getId();

class FundsWithdrawalReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsWithdrawal/fundsWithdrawalReview', parentNavigation: 'diy/fundsWithdrawal/fundsWithdrawalStep5'});
    }

    async go_impl({otp} = {}) {
        switch (currentPage.getId()) {
            case FUND_WITHDRAWAL_STEP5:
                await fundsWithdrawalStep5Page.confirmWithdrawal(otp);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsWithdrawalReview();
