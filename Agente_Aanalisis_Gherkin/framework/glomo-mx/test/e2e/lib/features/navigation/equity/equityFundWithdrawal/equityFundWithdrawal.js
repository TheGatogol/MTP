import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import equityFundDetailPage from '../../../pages/equity/equityFundDetailPage';

// Page Objects IDs
const EQUITY_FUND_DETAIL = equityFundDetailPage.getId();

class EquityFundWithdrawal extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityFundWithdrawal/equityFundWithdrawal', parentNavigation: 'equity/equityFundDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case EQUITY_FUND_DETAIL:
                await equityFundDetailPage.accessEquityFundWithdrawal();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EquityFundWithdrawal();
