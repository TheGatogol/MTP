import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import dashboardPage from '../../pages/dashboard/dashboard';
import btraderPurchaseAndSellPage from '../../pages/btrader/btraderPurchaseAndSellPage';
import editAlias from '../../pages/operatives/editAlias';

const DASHBOARD = dashboardPage.getId();
const BTRADER_PURCHASE_AND_SELL = btraderPurchaseAndSellPage.getId();
const EDIT_ALIAS = editAlias.getId();

class Btrader extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'btrader/btraderPage', parentNavigation: 'dashboard'});
    }
    async go_impl({page, action} = {}) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboardPage.accessBtrader();
                break;
            case BTRADER_PURCHASE_AND_SELL:
                await btraderPurchaseAndSellPage.returnTo(page, action);
                break;
            case EDIT_ALIAS:
                await editAlias.acceptReturn();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Btrader();
