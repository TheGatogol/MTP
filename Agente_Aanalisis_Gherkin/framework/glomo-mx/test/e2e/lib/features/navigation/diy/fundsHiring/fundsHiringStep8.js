import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep7Page from '../../../pages/diy/fundsHiring/fundsHiringStep7';

// Page Objects IDs
const FUNDS_HIRING_STEP7 = fundsHiringStep7Page.getId();

class FundsHiringStep8 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep8', parentNavigation: 'diy/fundsHiring/fundsHiringStep7'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP7:
                await fundsHiringStep7Page.acceptTermsAndConditions();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep8();
