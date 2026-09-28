import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep2Page from '../../../pages/diy/fundsHiring/fundsHiringStep2';

// Page Objects IDs
const FUNDS_HIRING_STEP2 = fundsHiringStep2Page.getId();

class FundsHiringStep3 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep3', parentNavigation: 'diy/fundsHiring/fundsHiringStep2'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP2:
                await fundsHiringStep2Page.selectAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep3();
