import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import equityPage from '../../pages/equity/equityPage';

// Page Objects IDs
const equity = equityPage.getId();

class EquityEditAlias extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/editAlias'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case equity:
                await equityPage.accessEditAliasEquity();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EquityEditAlias();
