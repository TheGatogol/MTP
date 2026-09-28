import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep8Page from '../../../pages/diy/fundsHiring/fundsHiringStep8';

// Page Objects IDs
const FUNDS_HIRING_STEP8 = fundsHiringStep8Page.getId();

class FundsHiringStep9 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep9', parentNavigation: 'diy/fundsHiring/fundsHiringStep8'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP8:
                await fundsHiringStep8Page.acceptSummary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep9();
