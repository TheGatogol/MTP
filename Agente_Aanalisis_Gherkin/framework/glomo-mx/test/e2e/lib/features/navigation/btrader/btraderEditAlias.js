import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import btraderPage from '../../pages/btrader/btraderPage';

const BTRADER = btraderPage.getId();

class BtraderEditAlias extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/editAlias', parentNavigation: 'btrader/btrader'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BTRADER:
                await btraderPage.accessEditAliasBtrader();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BtraderEditAlias();
