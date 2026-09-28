import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import equityFundDetailPage from '../../../pages/equity/equityFundDetailPage';

// Page Objects IDs
const EQUITY_FUND_DETAIL = equityFundDetailPage.getId();

class EquityFundContributions extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityFundContributions/equityFundContributions', parentNavigation: 'equity/equityFundDetail'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case EQUITY_FUND_DETAIL:
                await equityFundDetailPage.accessEquityFundContributions();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EquityFundContributions();
