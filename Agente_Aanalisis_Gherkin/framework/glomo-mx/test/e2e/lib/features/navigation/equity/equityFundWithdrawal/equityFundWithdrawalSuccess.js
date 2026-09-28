import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import equityFundWithdrawal from '../../../pages/equity/equityFundWithdrawal/equityFundWithdrawal';

// Page Objects IDs
const EQUITY_FUND_WITHDRAWAL_PAGE = equityFundWithdrawal.getId();

class EquityFundWithdrawalSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityFundWithdrawal/equityFundWithdrawalSuccess'});
    }

    async go_impl({otp} = {}) {
        switch (currentPage.getId()) {
            case EQUITY_FUND_WITHDRAWAL_PAGE:
                await equityFundWithdrawal.confirmToken(otp);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EquityFundWithdrawalSuccess();
