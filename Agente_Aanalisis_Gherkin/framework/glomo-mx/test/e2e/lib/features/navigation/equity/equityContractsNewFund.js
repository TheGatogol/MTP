import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import equityPage from '../../pages/equity/equityPage';

// Page Objects IDs
const EQUITY = equityPage.getId();

class EquityContractsNewFund extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityContractsNewFund', parentNavigation: 'equity/equity'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case EQUITY:
                await equityPage.accessNewFundEquity();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EquityContractsNewFund();
