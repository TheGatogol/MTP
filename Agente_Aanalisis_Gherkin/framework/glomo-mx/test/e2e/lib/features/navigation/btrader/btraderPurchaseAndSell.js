import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

import btraderPage from '../../pages/btrader/btraderPage';

const BTRADER = btraderPage.getId();

class BtraderPurchaseAndSell extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'btrader/btraderPurchaseAndSellPage', parentNavigation: 'btrader/btrader'});
    }

    async go_impl(operative = '', issuer = '') {
        switch (currentPage.getId()) {
            case BTRADER:
                await btraderPage.selectOperative(operative, issuer);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BtraderPurchaseAndSell();
