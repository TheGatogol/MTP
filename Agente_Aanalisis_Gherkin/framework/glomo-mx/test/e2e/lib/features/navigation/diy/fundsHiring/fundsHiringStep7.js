import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import fundsHiringStep6Page from '../../../pages/diy/fundsHiring/fundsHiringStep6';

// Page Objects IDs
const FUNDS_HIRING_STEP6 = fundsHiringStep6Page.getId();

class FundsHiringStep7 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep7', parentNavigation: 'diy/fundsHiring/fundsHiringStep6'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_STEP6:
                await fundsHiringStep6Page.acceptEmailStep();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep7();
