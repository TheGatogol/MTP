import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep1Page from '../../../pages/diy/fundsHiring/fundsHiringStep1';

// Page Objects IDs
const FUNDS_HIRING_STEP1 = fundsHiringStep1Page.getId();

class FundsHiringStep2 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep2', parentNavigation: 'diy/fundsHiring/fundsHiringStep1'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP1:
                await fundsHiringStep1Page.startOffer();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep2();
