import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import equityPage from '../../pages/equity/equityPage';

// Page Objects IDs
const EQUITY = equityPage.getId();

class EquityAssistance extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'equity/equityAssistancePage', parentNavigation: 'equity/equity'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case EQUITY:
                await equityPage.accessAssistanceEquity();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EquityAssistance();
