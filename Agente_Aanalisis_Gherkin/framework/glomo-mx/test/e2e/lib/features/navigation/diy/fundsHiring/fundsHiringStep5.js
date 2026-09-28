import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep4Page from '../../../pages/diy/fundsHiring/fundsHiringStep4';

// Page Objects IDs
const FUNDS_HIRING_STEP4 = fundsHiringStep4Page.getId();

class FundsHiringStep5 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep5', parentNavigation: 'diy/fundsHiring/fundsHiringStep4'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP4:
                await fundsHiringStep4Page.selectFirstFund();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep5();
